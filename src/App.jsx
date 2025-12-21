import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously, signInWithCustomToken, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  collection, doc,
  getFirestore,
  increment,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc
} from 'firebase/firestore';
import {
  AlertTriangle,
  ArrowRight,
  Award,
  BarChart2,
  BookOpen, CheckCircle,
  Code,
  Crown,
  FileText,
  Flame,
  Lock,
  LogOut,
  MessageSquare,
  Network,
  Play,
  RefreshCw,
  Rocket,
  Search,
  Shield,
  Sparkles,
  Star,
  Target,
  Terminal,
  Trophy,
  X,
  Zap
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { COURSES_DATA } from './data/courses';
import { COLOR_THEMES, getTheme } from './data/theme';

// --- CONFIGURATION ---
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// --- AI STRATEGY CONFIGURATION ---
// Tentukan urutan prioritas AI. ['gemini', 'groq'] artinya coba Gemini dulu, kalau gagal baru Groq.
const AI_PRIORITY = ["gemini", "groq"];

// Variabel Model Gemini (Untuk mengatasi jika model utama limit/error)
const GEMINI_MODELS = [
  "gemini-3-flash", // Paling baru & cepat (Experimental)
  "gemini-2.5-flash",     // Stabil & Cepat
  "gemini-2.5-flash-lite"        // Lebih pintar tapi agak lambat
];

// Variabel Model Groq (Super cepat untuk fallback)
const GROQ_MODELS = [
  "moonshotai/kimi-k2-instruct-0905",             // Tier 1: Paling Cerdas (Reasoning & Logika Dewa)
  "openai/gpt-oss-120b",                          // Tier 2: Spesialis Coding & Math (Setara o4-mini)
  "meta-llama/llama-4-maverick-17b-128e-instruct", // Tier 3: All-Rounder Stabil (Generasi Llama 4)
  "llama-3.3-70b-versatile"
];

// --- FIREBASE SETUP ---
const firebaseConfig = {
  apiKey: "AIzaSyDDvEl5xZHfe6qgX8BOZjiZWFzg-QGHzrY",
  authDomain: "fadhil-learning-app.firebaseapp.com",
  projectId: "fadhil-learning-app",
  storageBucket: "fadhil-learning-app.firebasestorage.app",
  messagingSenderId: "703915103274",
  appId: "1:703915103274:web:7328fd05ebd8c777d8df53",
  measurementId: "G-9QBPFJYYJM"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'fadhil-learning-app'; // Kasih nama bebas aja string biasa

// --- UTILS: MARKDOWN SIMPLIFIER ---
const parseInline = (text) => {
  if (!text || typeof text !== 'string') return null;
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`|\$.*?\$)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index} className="text-slate-900 font-black">{part.slice(2, -2)}</strong>;
    if (part.startsWith('*') && part.endsWith('*')) return <em key={index} className="text-blue-500 font-bold not-italic">{part.slice(1, -1)}</em>;
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index} className="bg-slate-100 px-1.5 py-0.5 rounded-lg text-pink-500 font-mono text-sm border-b-2 border-slate-200">{part.slice(1, -1)}</code>;
    if (part.startsWith('$') && part.endsWith('$')) return <span key={index} className="font-mono text-blue-600 mx-1 bg-blue-50 px-1 rounded">{part}</span>;
    return part;
  });
};

const SimpleMarkdown = ({ text }) => {
  if (!text || typeof text !== 'string') return null;
  const parts = text.split(/(```[\s\S]*?```)/g);

  return (
    <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
      {parts.map((part, i) => {
        if (part.startsWith('```')) {
          const content = part.replace(/^```\w*\n?|```$/g, '');
          return (
            <div key={i} className="bg-slate-800 p-4 rounded-2xl font-mono text-xs overflow-x-auto my-3 text-white shadow-lg shadow-slate-200">
              <pre className="text-emerald-400">{content}</pre>
            </div>
          );
        }

        const lines = part.split('\n');
        const elements = [];
        let tableBuffer = [];

        const flushTable = () => {
          if (tableBuffer.length === 0) return;
          const isTable = tableBuffer.length >= 2 && tableBuffer[1].includes('---');
          if (isTable) {
            const headers = tableBuffer[0].split('|').filter(c => c.trim()).map(c => c.trim());
            const rows = tableBuffer.slice(2).map(r => r.split('|').filter(c => c.trim()).map(c => c.trim()));
            elements.push(
              <div key={`tbl-${i}-${elements.length}`} className="overflow-x-auto my-4 rounded-xl border border-slate-200 shadow-sm">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-blue-50 text-blue-700 font-bold uppercase text-xs">
                    <tr>{headers.map((h, idx) => (<th key={idx} className="p-3 border-b border-blue-100 whitespace-nowrap">{parseInline(h)}</th>))}</tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50">
                        {row.map((cell, cIdx) => (<td key={cIdx} className="p-3 text-slate-600 leading-normal min-w-[150px]">{parseInline(cell)}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          } else {
            tableBuffer.forEach((l, idx) => elements.push(<div key={`fallback-${i}-${idx}-${elements.length}`} className="leading-relaxed mb-2">{parseInline(l)}</div>));
          }
          tableBuffer = [];
        };

        for (let j = 0; j < lines.length; j++) {
          const line = lines[j].trim();
          if (line.startsWith('|')) {
            tableBuffer.push(line);
          } else {
            flushTable();
            if (!line) continue;
            if (line.startsWith('### ')) elements.push(<h3 key={`${i}-${j}`} className="text-lg font-black text-slate-800 mt-4 mb-2">{parseInline(line.slice(4))}</h3>);
            else if (line.startsWith('## ')) elements.push(<h2 key={`${i}-${j}`} className="text-xl font-black text-blue-600 mt-6 mb-3 flex items-center gap-2">{parseInline(line.slice(3))}</h2>);
            else if (line.startsWith('# ')) elements.push(<h1 key={`${i}-${j}`} className="text-2xl font-black text-slate-900 mt-6 mb-4">{parseInline(line.slice(2))}</h1>);
            else if (line.startsWith('- ') || line.startsWith('* ')) elements.push(<div key={`${i}-${j}`} className="flex gap-3 ml-2 mb-2"><div className="min-w-[6px] h-[6px] rounded-full bg-blue-400 mt-2"></div><span className="leading-relaxed">{parseInline(line.slice(2))}</span></div>);
            else elements.push(<div key={`${i}-${j}`} className="leading-relaxed mb-2">{parseInline(line)}</div>);
          }
        }
        flushTable();
        return <div key={i}>{elements}</div>;
      })}
    </div>
  );
};

// --- SMART AI SERVICES (MULTI-PROVIDER FALLBACK) ---

const fetchGemini = async (model, prompt) => {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
  });
  if (!response.ok) throw new Error("Gemini Error");
  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};

const fetchGroq = async (model, prompt) => {
  if (!GROQ_API_KEY) throw new Error("Groq Key Missing");
  const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${GROQ_API_KEY}` },
    body: JSON.stringify({
      messages: [{ role: "user", content: prompt }],
      model: model
    })
  });
  if (!response.ok) throw new Error("Groq Error");
  const data = await response.json();
  return data.choices[0].message.content;
};

// Master Function: Fallback Logic
const smartAIFetch = async (promptGenerator) => {
  // Prompt generator allows dynamic prompts if needed, but here we pass raw string mostly
  const prompt = typeof promptGenerator === 'function' ? promptGenerator() : promptGenerator;

  for (const provider of AI_PRIORITY) {
    try {
      if (provider === 'gemini') {
        for (const model of GEMINI_MODELS) {
          try {
            return await fetchGemini(model, prompt);
          } catch (e) { console.warn(`Gemini ${model} failed, trying next...`); }
        }
      } else if (provider === 'groq') {
        for (const model of GROQ_MODELS) {
          try {
            return await fetchGroq(model, prompt);
          } catch (e) { console.warn(`Groq ${model} failed, trying next...`); }
        }
      }
    } catch (e) { console.error(`${provider} failed completely.`); }
  }
  return null; // All failed
};

// --- IMPLEMENTATION OF FEATURES USING SMART AI ---

const generateLessonContent = async (topic, courseContext = "General") => {
  const prompt = `Kamu adalah Tutor Asik "Nexus". Pelajaran: "${courseContext}". Topik: "${topic}".
    Output JSON (WAJIB BAHASA INDONESIA):
    {
      "theory": "Penjelasan materi format Markdown < 200 kata. Bahasa Indonesia gaul.",
      "quiz": [
        { "question": "Tanya Indo", "options": ["A", "B", "C", "D"], "correctAnswer": 0, "explanation": "Jelaskan Indo" }
      ]
    }
    Buat pas 5 soal. HANYA JSON MURNI TANPA BLOCK MARKDOWN.`;

  const text = await smartAIFetch(prompt);
  if (!text) return null;
  try {
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanText);
  } catch (e) { return null; }
};

const chatWithAI = async (context, query) => {
  const prompt = `Konteks: "${context}". User: "${query}". Peran: Tutor Coding Gaul. Jawab dalam BAHASA INDONESIA yang asik.`;
  const res = await smartAIFetch(prompt);
  return res || "Sistem sibuk, coba lagi nanti ya Challenger!";
};

const runCodeWithAI = async (codeSnippet, language = "Python") => {
  const prompt = `Bertindak sebagai Interpreter Virtual ${language}.
    INSTRUKSI PENTING: Jika kode berikut ngawur, lirik lagu, atau bukan kode ${language} yang valid, jawab TEPAT: "⚠️ ERROR: Hei Challenger, ketik kode yang bener dong! Jangan ngasal.".
    Jangan buat kode baru. Jangan jelaskan. Cukup berikan output eksekusinya saja.
    Kode:
    ${codeSnippet}`;

  const res = await smartAIFetch(prompt);
  return res ? res.replace(/```/g, '').trim() : "Error Eksekusi.";
};

const explainConceptWithAI = async (term) => {
  const prompt = `Jelaskan istilah "${term}" secara singkat, padat, jelas dan asik. GUNAKAN BAHASA INDONESIA. Format: Markdown.`;
  const res = await smartAIFetch(prompt);
  return res || "Gagal memuat definisi.";
};

const generateDailyQuest = async (courseName) => {
  const prompt = `Buat Misi Harian untuk ${courseName}. BAHASA INDONESIA. HANYA JSON MURNI: { "title", "description", "starter_code", "difficulty", "xp": 150 }`;
  const text = await smartAIFetch(prompt);
  if (!text) return null;
  try {
    return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
  } catch (e) { return null; }
};

const verifyQuestSubmission = async (desc, code) => {
  const prompt = `Nilai kode ini. Soal: ${desc}. Kode User: ${code}. Output HANYA JSON: { "correct": boolean, "feedback": "Feedback dalam Bahasa Indonesia format Markdown." }`;
  const text = await smartAIFetch(prompt);
  if (!text) return { correct: false, feedback: "Error koneksi." };
  try {
    return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
  } catch (e) { return { correct: false, feedback: "Error validasi AI." }; }
};

const generateCheatSheet = async (moduleTitle) => {
  const prompt = `Buat Rangkuman Materi "${moduleTitle}" yang asik. WAJIB BAHASA INDONESIA. Format: Markdown.`;
  const res = await smartAIFetch(prompt);
  return res || "Gagal membuat rangkuman.";
};

const generateProjectIdea = async (userXP) => {
  const prompt = `Berikan Ide proyek coding seru buat level XP: ${userXP}. WAJIB BAHASA INDONESIA. Output HANYA JSON: { "title", "description", "features": [], "tip": "string" }`;
  const text = await smartAIFetch(prompt);
  if (!text) return null;
  try {
    return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
  } catch (e) { return null; }
};

const evaluateProjectSubmission = async (projectDesc, features, code) => {
  const prompt = `Role: Senior Dev Mentor Indonesia. Task: Review kode user berdasarkan proyek "${projectDesc}". Fitur: ${features.join(', ')}. Kode: \n${code}\n. Output HANYA JSON: { "is_passing": boolean, "feedback": "Saran perbaikan (Bahasa Indonesia santai, markdown)" }. Jangan kasih nilai angka dulu.`;
  const text = await smartAIFetch(prompt);
  if (!text) return { is_passing: false, feedback: "Gagal evaluasi." };
  try {
    return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
  } catch (e) { return { is_passing: false, feedback: "Error parsing AI." }; }
};

const gradeProjectSubmission = async (projectDesc, features, code) => {
  const prompt = `Role: Strict Tech Lead Indonesia. Task: Beri Nilai Akhir kode proyek "${projectDesc}". Kode: \n${code}\n. Output HANYA JSON: { "score": number (0-100), "feedback": "Komentar akhir singkat padat (Bahasa Indonesia, markdown)" }.`;
  const text = await smartAIFetch(prompt);
  if (!text) return { score: 0, feedback: "Gagal menilai." };
  try {
    return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
  } catch (e) { return { score: 0, feedback: "Error parsing AI." }; }
};

const Loading = () => (
  <div className="flex flex-col justify-center items-center h-full text-blue-500">
    <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
    <span className="font-bold tracking-widest text-sm">MEMUAT...</span>
  </div>
);

// --- COMPONENTS & SIDEBAR ---

const Sidebar = ({ userStats, userName, onRename, handleGoogleLogin, currentView, setCurrentView, onOpenCodeLab, onOpenProject, onOpenUplink }) => {
  const projectWinRate = userStats.totalProjectsFinished > 0
    ? Math.round((userStats.totalProjectScore || 0) / userStats.totalProjectsFinished)
    : 0;

  let wrColor = 'text-slate-500';
  if (projectWinRate >= 80) wrColor = 'text-green-500';
  else if (projectWinRate >= 50) wrColor = 'text-yellow-500';
  else if (projectWinRate > 0) wrColor = 'text-red-500';

  return (
    <div className="fixed bottom-0 w-full md:w-80 md:relative md:h-screen bg-white border-t md:border-t-0 md:border-r-2 border-slate-200 flex md:flex-col justify-between p-4 z-40">
      <div className="hidden md:flex items-center gap-3 px-4 py-6 mb-4">
        {/* Klik Avatar buat ganti nama */}
        <button onClick={onRename} className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-200 hover:scale-105 transition-transform group relative">
          <Zap fill="currentColor" />
          <span className="absolute -bottom-8 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Ganti Nama</span>
        </button>

        <div className="text-left">
          <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">Level<span className="text-blue-500">Up</span></h1>
          <div className="flex items-center gap-2">
            {/* Tampilkan Nama User di sini */}
            <button onClick={onRename} className="text-xs font-bold text-slate-400 hover:text-blue-500 transition-colors text-left truncate max-w-[120px]">
              @{userName} ✏️
            </button>

            {/* TOMBOL LOGIN / LOGOUT KECIL */}
            {/* Kita cek: Kalau namanya masih angka acak (user?.uid), berarti belum login Google */}
            <button
              onClick={handleGoogleLogin} // Nanti pass prop ini dari App
              className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-md font-bold text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              title="Simpan Akun / Login"
            >
              ☁️ Sync
            </button>
          </div>
        </div>
      </div>

      <nav className="w-full flex md:flex-col justify-around md:justify-start gap-2">
        {/* KITA DEFINISIKAN CLASS LENGKAP DI SINI BIAR TAILWIND BISA BACA */}
        {[
          {
            id: 'learn',
            icon: BookOpen,
            label: "Belajar",
            // Class Lengkap untuk Blue
            activeClass: "bg-blue-50 text-blue-600 border-blue-400",
            hoverClass: "text-slate-400 border-transparent hover:bg-blue-50 hover:text-blue-600"
          },
          {
            id: 'leaderboard',
            icon: Trophy,
            label: "Peringkat",
            // Class Lengkap untuk Yellow
            activeClass: "bg-yellow-50 text-yellow-600 border-yellow-400",
            hoverClass: "text-slate-400 border-transparent hover:bg-yellow-50 hover:text-yellow-600"
          },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex items-center gap-4 p-4 rounded-2xl transition-all border-2 font-black uppercase text-sm tracking-wide 
              ${currentView === item.id
                ? item.activeClass
                : item.hoverClass
              }`}
          >
            <item.icon size={24} /> <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}

        <div className="hidden md:block h-px bg-slate-100 my-2 mx-4"></div>
        <button onClick={onOpenCodeLab} className="flex items-center gap-4 p-4 rounded-2xl text-slate-500 hover:bg-purple-50 hover:text-purple-600 font-bold transition-all"><Terminal size={24} /> <span className="hidden md:inline">Lab Koding</span></button>
        <button onClick={onOpenProject} className="flex items-center gap-4 p-4 rounded-2xl text-slate-500 hover:bg-pink-50 hover:text-pink-600 font-bold transition-all"><Rocket size={24} /> <span className="hidden md:inline">Cari Ide Proyek</span></button>
        <button onClick={onOpenUplink} className="flex items-center gap-4 p-4 rounded-2xl text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 font-bold transition-all"><Network size={24} /> <span className="hidden md:inline">Tanya Konsep</span></button>
      </nav>

      <div className="hidden md:block border-2 border-slate-100 rounded-[24px] p-5 bg-slate-50 mt-auto">
        <h3 className="text-slate-400 text-xs font-black uppercase mb-4 tracking-wider">Statistik Kamu</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center"><span className="text-slate-500 flex items-center gap-2 font-bold"><Flame size={18} className="text-orange-500" fill="currentColor" /> XP</span><span className="text-slate-800 font-black text-lg">{userStats.xp || 0}</span></div>
          <div className="flex justify-between items-center"><span className="text-slate-500 flex items-center gap-2 font-bold"><CheckCircle size={18} className="text-green-500" /> Selesai</span><span className="text-slate-800 font-black text-lg">{userStats.lessonsCompleted || 0}</span></div>
          <div className="flex justify-between items-center pt-2 border-t border-slate-200 mt-2">
            <span className="text-slate-500 flex items-center gap-2 font-bold text-xs uppercase"><Trophy size={16} className="text-purple-500" /> WR Proyek</span>
            <span className={`font-black text-lg ${wrColor}`}>{projectWinRate}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// [UPDATED] CourseMap - LURUS & RAPI (Vertical Straight Line)
const CourseMap = ({ activeCourse, userProgress, onStartLesson, onOpenCheatSheet }) => {
  const isUnlocked = (lessonId, prevLessonId) => {
    if (!prevLessonId) return true;
    return userProgress[prevLessonId]?.completed === true;
  };
  let previousLessonId = null;
  const theme = getTheme(activeCourse.color);

  return (
    <div className="flex flex-col items-center py-10 pb-32 w-full max-w-2xl mx-auto">
      {activeCourse.modules.map((module, mIdx) => (
        <div key={module.id} className="w-full mb-12">
          <div className="flex items-center justify-between mb-8 px-4">
            <h3 className="text-slate-700 font-black text-xl uppercase tracking-tight">{module.title}</h3>
            <button onClick={() => onOpenCheatSheet(module.title)} className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors border-2 border-transparent ${theme.text} hover:${theme.bgLight} hover:${theme.borderLight}`}>
              📖 Rangkuman
            </button>
          </div>

          <div className="space-y-6 relative flex flex-col items-center">
            {module.lessons.map((lesson, lIdx) => {
              const unlocked = isUnlocked(lesson.id, previousLessonId);
              const completed = userProgress[lesson.id]?.completed;
              const currentId = lesson.id;
              const isPrevCompleted = previousLessonId ? userProgress[previousLessonId]?.completed : true;
              previousLessonId = currentId;

              // Dynamic Style
              let bgClass = "bg-slate-50 border-slate-200 text-slate-400";
              let borderClass = "border-b-slate-300";

              if (completed) {
                bgClass = `${theme.bg} ${theme.border} text-white`;
                borderClass = theme.borderB;
              } else if (unlocked) {
                bgClass = `bg-white border-slate-200 text-slate-700 hover:bg-slate-50`;
                borderClass = theme.borderLight;
              }

              return (
                <div key={lesson.id} className="relative z-10 w-full flex flex-col items-center">
                  {/* Line to next lesson */}
                  {lIdx < module.lessons.length - 1 && (
                    <div className={`absolute top-1/2 left-1/2 w-2 h-24 -translate-x-1/2 -z-10 ${completed ? theme.bg : 'bg-slate-200'}`}></div>
                  )}
                  {/* Connection from previous module/lesson */}
                  {lIdx === 0 && mIdx > 0 && (
                    <div className={`absolute bottom-full left-1/2 w-2 h-16 -translate-x-1/2 -z-10 ${isPrevCompleted ? 'bg-slate-300' : 'bg-slate-200'}`}></div>
                  )}

                  {/* TOMBOL LEVEL (Background Solid biar nutup garis) */}
                  <button
                    onClick={() => unlocked && onStartLesson(lesson)}
                    disabled={!unlocked}
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center border-4 ${borderClass} transition-all btn-3d shadow-lg z-20 ${bgClass} ${!unlocked && 'opacity-60 cursor-not-allowed'}`}
                  >
                    {completed ? <CheckCircle size={32} fill="currentColor" className="text-white" />
                      : !unlocked ? <Lock size={28} />
                        : <Star fill="currentColor" size={32} className={theme.textLight} />}
                  </button>

                  {/* Floating Label */}
                  <div className={`absolute left-1/2 ml-14 top-1/2 -translate-y-1/2 w-48 hidden md:block transition-all ${unlocked ? 'opacity-100' : 'opacity-30'}`}>
                    <h4 className="font-bold text-slate-700">{lesson.title}</h4>
                    <p className="text-xs text-slate-400">{lesson.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

// --- MODALS ---

const NeuralUplinkModal = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState("");
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    const res = await explainConceptWithAI(query);
    setExplanation(res);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in zoom-in-95">
      <div className="bg-white w-full max-w-2xl rounded-[32px] border-4 border-white ring-4 ring-emerald-100 shadow-2xl overflow-hidden flex flex-col h-[70vh]">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-emerald-50">
          <div>
            <h3 className="text-emerald-600 font-black text-xl flex items-center gap-2">
              <Network className="text-emerald-500" /> TANYA KONSEP
            </h3>
            <p className="text-emerald-400 text-xs font-bold">Bingung istilah? Tanya sini aja!</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-emerald-100 rounded-full transition-colors"><X className="text-emerald-500" /></button>
        </div>
        <div className="p-6 flex-1 flex flex-col overflow-hidden">
          <div className="relative mb-4">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="Misal: Apa itu Rekursi?..."
              className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3 pr-20 text-slate-700 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 transition-all font-bold"
            />
            <button onClick={handleSearch} className="absolute right-2 top-2 bottom-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 rounded-lg font-bold text-xs transition-all">
              {loading ? <RefreshCw className="animate-spin" size={16} /> : "CARI"}
            </button>
          </div>
          <div className="bg-slate-50 rounded-2xl p-6 border-2 border-slate-100 flex-1 overflow-y-auto">
            {explanation ? (
              <SimpleMarkdown text={explanation} />
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-slate-300">
                <Search size={48} className="mb-2 opacity-50" />
                <p className="font-bold">Menunggu pertanyaanmu...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectModal = ({ isOpen, onClose, userId, userXP }) => {
  const [view, setView] = useState('list');
  const [projects, setProjects] = useState([]);
  const [activeProject, setActiveProject] = useState(null);
  const [loading, setLoading] = useState(false);

  const [generatedIdea, setGeneratedIdea] = useState(null);
  const [code, setCode] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [evaluating, setEvaluating] = useState(false);

  // Hitung Winrate Project Arena
  const completedProjects = projects.filter(p => p.status === 'completed');
  const totalScore = completedProjects.reduce((acc, curr) => acc + (curr.score || 0), 0);
  const arenaWinRate = completedProjects.length > 0 ? Math.round(totalScore / completedProjects.length) : 0;

  useEffect(() => {
    if (!isOpen || !userId) return;
    const q = collection(db, 'artifacts', appId, 'users', userId, 'projects');
    const unsub = onSnapshot(q, (snap) => {
      const data = [];
      snap.forEach(d => data.push({ id: d.id, ...d.data() }));
      data.sort((a, b) => (a.status === 'completed' ? 1 : -1));
      setProjects(data);
    });
    return () => unsub();
  }, [isOpen, userId]);

  // Sync Active Project biar tombol langsung hilang
  useEffect(() => {
    if (activeProject && projects.length > 0) {
      const updated = projects.find(p => p.id === activeProject.id);
      if (updated) setActiveProject(updated);
    }
  }, [projects]);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await generateProjectIdea(userXP);
    setGeneratedIdea(res);
    setLoading(false);
  };

  const handleSaveProject = async () => {
    if (!generatedIdea) return;
    const newProject = {
      title: generatedIdea.title, description: generatedIdea.description, features: generatedIdea.features, tip: generatedIdea.tip, status: 'active', code: "", createdAt: serverTimestamp(), score: 0
    };
    await setDoc(doc(collection(db, 'artifacts', appId, 'users', userId, 'projects')), newProject);
    setView('list'); setGeneratedIdea(null);
  };

  const openEditor = (proj) => {
    setActiveProject(proj); setCode(proj.code || ""); setFeedback(null); setView('editor');
  };

  const saveDraft = async () => {
    if (!activeProject) return;
    await updateDoc(doc(db, 'artifacts', appId, 'users', userId, 'projects', activeProject.id), { code: code });
  };

  const handleCheck = async () => {
    setEvaluating(true); await saveDraft();
    const res = await evaluateProjectSubmission(activeProject.description, activeProject.features, code);
    setFeedback({ type: 'review', ...res });
    setEvaluating(false);
  };

  const handleFinalize = async () => {
    setEvaluating(true);
    const res = await gradeProjectSubmission(activeProject.description, activeProject.features, code);
    const ref = doc(db, 'artifacts', appId, 'users', userId, 'projects', activeProject.id);

    await updateDoc(ref, { code: code, status: 'completed', score: res.score, aiFeedback: res.feedback, completedAt: serverTimestamp() });
    const statsRef = doc(db, 'artifacts', appId, 'users', userId, 'stats', 'main');
    await updateDoc(statsRef, { totalProjectScore: increment(res.score), totalProjectsFinished: increment(1) });

    setFeedback({ type: 'final', ...res });
    setEvaluating(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in zoom-in-95">
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[32px] border-4 border-white ring-4 ring-pink-100 shadow-2xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-pink-50">
          <div>
            <h3 className="text-pink-600 font-black text-xl flex items-center gap-2"><Rocket className="text-pink-500" /> PROJECT ARENA</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-bold text-slate-400">WINRATE KAMU:</span>
              <span className={`text-sm font-black ${arenaWinRate >= 80 ? 'text-green-500' : arenaWinRate >= 50 ? 'text-yellow-500' : 'text-slate-500'}`}>{arenaWinRate}%</span>
            </div>
          </div>
          <div className="flex gap-2">
            {view !== 'list' && (<button onClick={() => setView('list')} className="px-4 py-2 text-pink-500 font-bold hover:bg-pink-100 rounded-xl transition-all">KEMBALI LIST</button>)}
            <button onClick={onClose} className="p-2 hover:bg-pink-100 rounded-full transition-colors"><X className="text-pink-500" /></button>
          </div>
        </div>

        {view === 'list' && (
          <div className="flex-1 p-6 overflow-y-auto bg-slate-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button onClick={() => { setView('generate'); handleGenerate(); }} className="flex flex-col items-center justify-center p-8 rounded-[24px] border-4 border-dashed border-pink-200 hover:border-pink-400 hover:bg-pink-50 transition-all group min-h-[200px]">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center text-pink-500 mb-4 group-hover:scale-110 transition-transform"><Sparkles size={32} /></div>
                <h4 className="font-black text-pink-400 text-lg">GENERATE BARU</h4><p className="text-slate-400 text-sm font-bold">Cari tantangan baru!</p>
              </button>
              {projects.map(proj => (
                <div key={proj.id} className={`p-6 rounded-[24px] border-2 relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl ${proj.status === 'completed' ? 'bg-white border-slate-200 opacity-80' : 'bg-white border-pink-400 ring-4 ring-pink-50'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`px-3 py-1 rounded-full text-xs font-black uppercase ${proj.status === 'completed' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>{proj.status === 'completed' ? 'SELESAI' : 'AKTIF'}</div>
                    {proj.status === 'completed' && (<div className="flex flex-col items-end"><span className="text-[10px] font-bold text-slate-400 uppercase">NILAI</span><span className={`text-2xl font-black ${proj.score >= 80 ? 'text-green-500' : proj.score >= 50 ? 'text-yellow-500' : 'text-red-500'}`}>{proj.score}</span></div>)}
                  </div>
                  <h3 className="font-black text-slate-800 text-xl mb-2 line-clamp-1">{proj.title}</h3><p className="text-slate-500 text-sm line-clamp-2 mb-6">{proj.description}</p>
                  <button onClick={() => openEditor(proj)} className={`w-full py-3 rounded-xl font-black text-sm uppercase tracking-wide btn-3d border-b-4 transition-all ${proj.status === 'completed' ? 'bg-slate-100 text-slate-400 border-slate-300' : 'bg-pink-500 text-white border-pink-700 hover:bg-pink-400'}`}>{proj.status === 'completed' ? 'LIHAT ARSIP' : 'LANJUT CODING'}</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'generate' && (
          <div className="flex-1 flex flex-col items-center justify-start p-8 text-center overflow-y-auto">
            {loading ? (<div className="animate-pulse my-auto"><RefreshCw className="animate-spin text-pink-500 w-12 h-12 mx-auto mb-4" /><h3 className="text-pink-400 font-bold text-lg">AI lagi mikir proyek susah buat lo...</h3></div>) : generatedIdea && (
              <div className="max-w-xl w-full animate-in zoom-in-95">
                <h2 className="text-3xl font-black text-slate-800 mb-4">{generatedIdea.title}</h2>
                <div className="bg-pink-50 p-6 rounded-2xl border-2 border-pink-100 mb-6 text-left">
                  <SimpleMarkdown text={generatedIdea.description} />
                  <div className="mt-4 pt-4 border-t border-pink-200"><p className="text-xs font-black text-pink-400 uppercase mb-2">Target Fitur:</p><div className="flex flex-wrap gap-2">{generatedIdea.features.map((f, i) => (<span key={i} className="px-2 py-1 bg-white border border-pink-200 rounded-lg text-xs font-bold text-pink-600">{f}</span>))}</div></div>
                </div>
                <div className="flex gap-4"><button onClick={handleGenerate} className="flex-1 py-3 bg-slate-100 text-slate-500 font-bold rounded-xl hover:bg-slate-200 transition-all">GANTI IDE</button><button onClick={handleSaveProject} className="flex-1 py-3 bg-pink-500 text-white font-black rounded-xl border-b-4 border-pink-700 btn-3d hover:bg-pink-400 transition-all">AMBIL PROYEK INI!</button></div>
              </div>
            )}
          </div>
        )}

        {view === 'editor' && activeProject && (
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            <div className="w-full md:w-1/3 bg-slate-50 border-r border-slate-200 p-6 overflow-y-auto">
              <div className="mb-6"><h2 className="font-black text-xl text-slate-800 mb-2">{activeProject.title}</h2><p className="text-sm text-slate-500 leading-relaxed">{activeProject.description}</p></div>
              {activeProject.status === 'completed' ? (
                <div className="bg-white p-4 rounded-xl border-2 border-slate-200 mb-6 text-center">
                  <p className="text-xs font-bold text-slate-400 uppercase">SKOR AKHIR</p><span className="text-4xl font-black text-slate-800">{activeProject.score}</span>
                  <div className="mt-2 text-left text-sm text-slate-600 bg-slate-50 p-2 rounded-lg"><SimpleMarkdown text={activeProject.aiFeedback || "-"} /></div>
                </div>
              ) : (<div className="space-y-3 mb-6"><h4 className="text-xs font-black text-slate-400 uppercase">INSTRUKSI AI:</h4><ul className="text-sm space-y-2">{activeProject.features?.map((f, i) => (<li key={i} className="flex gap-2 text-slate-600"><div className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-1.5"></div> {f}</li>))}</ul></div>)}
              {feedback && activeProject.status !== 'completed' && (
                <div className={`p-4 rounded-xl border-2 animate-in slide-in-from-bottom-4 ${feedback.type === 'review' ? (feedback.is_passing ? 'bg-green-50 border-green-200' : 'bg-yellow-50 border-yellow-200') : 'bg-white'}`}>
                  <h5 className={`font-black text-sm mb-2 ${feedback.is_passing ? 'text-green-600' : 'text-yellow-600'}`}>{feedback.type === 'review' ? (feedback.is_passing ? "KEREN! ✅" : "MASIH KURANG 🚧") : "HASIL FINAL"}</h5>
                  <SimpleMarkdown text={feedback.feedback} />
                </div>
              )}
            </div>
            <div className="flex-1 flex flex-col bg-slate-900">
              <div className="bg-slate-800 px-4 py-2 flex justify-between items-center border-b border-slate-700"><span className="text-xs font-mono text-slate-400">editor.py</span>{activeProject.status !== 'completed' && (<span className="text-xs text-yellow-500 animate-pulse font-bold">• Auto-save enabled</span>)}</div>
              <textarea value={code} onChange={e => setCode(e.target.value)} disabled={activeProject.status === 'completed'} className="flex-1 bg-[#0d0d0d] text-blue-300 font-mono p-4 resize-none focus:outline-none text-sm leading-relaxed disabled:opacity-50" placeholder="# Tulis kodemu di sini" spellCheck="false" />
              {activeProject.status !== 'completed' && (
                <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-end gap-3">
                  <button onClick={handleCheck} disabled={evaluating} className="px-6 py-2 rounded-xl font-bold text-slate-300 hover:bg-slate-700 transition-all border border-slate-600 text-sm">{evaluating ? "NGECEK..." : "CEK DULU (SARAN)"}</button>
                  <button onClick={handleFinalize} disabled={evaluating} className="px-6 py-2 bg-green-500 hover:bg-green-400 text-white font-black rounded-xl border-b-4 border-green-700 btn-3d transition-all text-sm flex items-center gap-2"><CheckCircle size={16} /> SELESAIKAN PROYEK (NILAI)</button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const CheatSheetModal = ({ isOpen, onClose, moduleTitle }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen && moduleTitle) {
      setLoading(true);
      generateCheatSheet(moduleTitle).then(res => { setContent(res); setLoading(false); });
    }
  }, [isOpen, moduleTitle]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4 animate-in zoom-in-95">
      <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-[32px] border-4 border-white ring-4 ring-purple-100 shadow-2xl overflow-hidden flex flex-col">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-purple-50">
          <h3 className="text-purple-600 font-black text-lg flex items-center gap-2">
            <FileText className="text-purple-500" /> RANGKUMAN: {moduleTitle}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-purple-100 rounded-full transition-colors"><X className="text-purple-500" /></button>
        </div>
        <div className="p-8 overflow-y-auto bg-white flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 space-y-4">
              <RefreshCw className="animate-spin text-purple-500" size={32} />
              <p className="text-purple-400 font-bold animate-pulse">Merangkum materi buat kamu...</p>
            </div>
          ) : (
            <SimpleMarkdown text={content} />
          )}
        </div>
      </div>
    </div>
  );
};


// LEADERBOARD VIEW: HYBRID EDITION
// (Kartu Statistik Modern + Podium Klasik)
const LeaderboardView = ({ currentUserXP, currentUserName, currentUserWinRate }) => {
  // 1. DATA PENGGUNA ASLI
  const leaderboardData = [
    {
      id: 'current_user',
      name: currentUserName || "KAMU",
      xp: currentUserXP,
      avatar: '😎',
      winRate: currentUserWinRate,
      isCurrentUser: true
    }
    // Nanti data user lain (Rank 2, Rank 3 dst) akan masuk sini dari database
  ];

  // Pisahkan Top 3 (Podium) dan Sisanya (List)
  const topThree = leaderboardData.slice(0, 3);
  const restOfPlayers = leaderboardData.slice(3);

  // Cari data spesifik untuk podium (bisa undefined jika belum ada player)
  const rank1 = topThree[0];
  const rank2 = topThree[1];
  const rank3 = topThree[2];

  // Hitungan lingkaran chart Win Rate (Matematika SVG)
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentUserWinRate / 100) * circumference;

  return (
    <div className="p-6 animate-in fade-in pb-32">
      {/* --- HEADER --- */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-slate-800 flex items-center justify-center gap-2 uppercase">
          <Trophy className="text-yellow-500" size={32} />
          Papan Juara
        </h2>
        <p className="text-slate-500 font-bold text-sm">Peringkat Global Para Challenger</p>
      </div>

      {/* --- BAGIAN 1: KARTU STATISTIK (MODERN STYLE) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {/* Kartu Ranking */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform">
            <Award size={100} />
          </div>
          <h3 className="text-lg font-bold mb-1 opacity-90">Peringkat Kamu</h3>
          <div className="text-5xl font-black flex items-baseline gap-2">
            #1
            <span className="text-lg font-bold opacity-60">/ {leaderboardData.length}</span>
          </div>
          <div className="mt-4 bg-white/20 rounded-xl p-3 text-sm font-bold inline-flex items-center gap-2 backdrop-blur-sm">
            <Zap size={16} className="text-yellow-300 fill-yellow-300" /> Total {currentUserXP.toLocaleString()} XP
          </div>
        </div>

        {/* Kartu Win Rate */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-slate-100 flex items-center justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-lg font-bold text-slate-700 mb-1 flex items-center gap-2">
              <Target size={20} className="text-emerald-500" /> Win Rate
            </h3>
            <div className="text-4xl font-black text-slate-800 mb-1">
              {currentUserWinRate}%
            </div>
            <p className="text-xs text-slate-400 font-bold max-w-[120px]">
              Akurasi keberhasilan misi proyekmu.
            </p>
          </div>
          {/* Chart SVG */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r={radius} stroke="#e2e8f0" strokeWidth="12" fill="transparent" />
              <circle cx="64" cy="64" r={radius} stroke="#10b981" strokeWidth="12" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-700">{currentUserWinRate}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- BAGIAN 2: PODIUM BAR CHART (CLASSIC STYLE) --- */}
      {/* Container Podium */}
      <div className="flex justify-center items-end gap-2 md:gap-4 mb-12 min-h-[300px]">

        {/* JUARA 2 (KIRI - BIRU) */}
        <div className="flex flex-col items-center w-1/3 max-w-[120px]">
          {rank2 ? (
            <>
              <div className="mb-2 text-center animate-in slide-in-from-bottom-8 duration-700">
                <div className="w-12 h-12 bg-blue-100 rounded-full border-4 border-blue-300 flex items-center justify-center text-blue-600 font-black text-lg shadow-lg mx-auto mb-2 relative">
                  {rank2.avatar}
                  {/* Badge YOU untuk Juara 2 */}
                  {rank2.isCurrentUser && <span className="absolute -top-2 -right-2 text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-white z-10">YOU</span>}
                </div>
                <p className="text-slate-600 font-bold text-xs truncate w-20 mx-auto">{rank2.name}</p>
                <p className="text-blue-500 text-[10px] font-bold">{rank2.xp} XP</p>
              </div>
              <div className="w-full h-32 bg-blue-400 rounded-t-3xl border-b-8 border-blue-600 flex justify-center pt-4 shadow-xl relative overflow-hidden animate-in slide-in-from-bottom-full duration-700">
                <span className="text-5xl font-black text-blue-300/50 absolute bottom-0">2</span>
              </div>
            </>
          ) : (
            <div className="w-full h-32 bg-slate-100 rounded-t-3xl border-b-8 border-slate-200 opacity-50 relative">
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-4xl font-black text-slate-200">2</span>
            </div>
          )}
        </div>

        {/* JUARA 1 (TENGAH - KUNING - MAHKOTA) */}
        <div className="flex flex-col items-center w-1/3 max-w-[140px] -mb-2 z-10">
          {rank1 && (
            <>
              <div className="mb-2 text-center animate-in slide-in-from-bottom-8 duration-500">
                <Crown className="text-yellow-400 mb-1 animate-bounce mx-auto drop-shadow-sm" fill="currentColor" size={48} />
                <div className="w-16 h-16 bg-yellow-100 rounded-full border-4 border-yellow-300 flex items-center justify-center text-yellow-600 text-2xl font-black shadow-xl mx-auto mb-2 relative">
                  {rank1.avatar}
                  {/* Badge YOU untuk Juara 1 */}
                  {rank1.isCurrentUser && <span className="absolute -top-3 -right-3 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full shadow-sm border-2 border-white z-10 font-bold animate-pulse">YOU</span>}
                </div>
                <p className="text-slate-800 font-black text-sm truncate w-24 mx-auto">{rank1.name}</p>
                <p className="text-yellow-600 text-xs font-bold">{rank1.xp} XP</p>
              </div>
              <div className="w-full h-48 bg-yellow-400 rounded-t-3xl border-b-8 border-yellow-600 flex justify-center pt-4 shadow-2xl relative overflow-hidden animate-in slide-in-from-bottom-full duration-500 delay-100">
                <span className="text-6xl font-black text-yellow-300/50 absolute bottom-0">1</span>
              </div>
            </>
          )}
        </div>

        {/* JUARA 3 (KANAN - PINK) */}
        <div className="flex flex-col items-center w-1/3 max-w-[120px]">
          {rank3 ? (
            <>
              <div className="mb-2 text-center animate-in slide-in-from-bottom-8 duration-1000">
                <div className="w-12 h-12 bg-pink-100 rounded-full border-4 border-pink-300 flex items-center justify-center text-pink-600 font-black text-lg shadow-lg mx-auto mb-2 relative">
                  {rank3.avatar}
                  {/* Badge YOU untuk Juara 3 */}
                  {rank3.isCurrentUser && <span className="absolute -top-2 -right-2 text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-white z-10">YOU</span>}
                </div>
                <p className="text-slate-600 font-bold text-xs truncate w-20 mx-auto">{rank3.name}</p>
                <p className="text-pink-500 text-[10px] font-bold">{rank3.xp} XP</p>
              </div>
              <div className="w-full h-24 bg-pink-400 rounded-t-3xl border-b-8 border-pink-600 flex justify-center pt-4 shadow-xl relative overflow-hidden animate-in slide-in-from-bottom-full duration-1000">
                <span className="text-5xl font-black text-pink-300/50 absolute bottom-0">3</span>
              </div>
            </>
          ) : (
            <div className="w-full h-24 bg-slate-100 rounded-t-3xl border-b-8 border-slate-200 opacity-50 relative">
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-4xl font-black text-slate-200">3</span>
            </div>
          )}
        </div>
      </div>
      {/* --- BAGIAN 3: LIST SISANYA (RANK 4 KE BAWAH) --- */}
      {restOfPlayers.length > 0 ? (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200/60 space-y-3">
          {restOfPlayers.map((user, idx) => {
            const rank = idx + 4;
            return (
              <div key={user.id} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100">
                <div className="flex items-center gap-4">
                  <span className="font-black text-slate-300 text-lg w-6">{rank}</span>
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg">{user.avatar}</div>
                  <span className="font-bold text-slate-600">{user.name}</span>
                </div>
                <span className="font-bold text-slate-400 text-sm">{user.xp} XP</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 bg-slate-50/50">
          {/* Placeholder kosong */}
          <p className="font-bold text-sm">Belum ada rival lain...</p>
          <p className="text-xs mt-1">Lawan masih loading, kamu rajanya sekarang! 👑</p>
        </div>
      )}
    </div>
  );
};

const ProtocolSelectModal = ({ isOpen, onClose, activeCourseId, onSelectCourse }) => {
  const [searchTerm, setSearchTerm] = useState("");
  if (!isOpen) return null;

  const filtered = COURSES_DATA.filter(c => c.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-5xl h-[85vh] rounded-[40px] shadow-2xl overflow-hidden flex flex-col border-4 border-white ring-4 ring-slate-100">
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white">
          <div>
            <h2 className="text-3xl font-black text-slate-800 tracking-tight">Pilih Materi</h2>
            <p className="text-slate-400 font-bold text-sm">APA YANG MAU KAMU PELAJARI HARI INI?</p>
          </div>
          <button onClick={onClose} className="p-3 bg-slate-100 hover:bg-red-100 text-slate-400 hover:text-red-500 rounded-2xl transition-all"><X size={28} strokeWidth={3} /></button>
        </div>

        <div className="p-8 overflow-y-auto bg-slate-50 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(course => {
              const active = activeCourseId === course.id;
              const theme = getTheme(course.color);

              return (
                <button
                  key={course.id}
                  onClick={() => { onSelectCourse(course.id); onClose(); }}
                  className={`relative text-left p-6 rounded-[30px] border-2 border-b-8 transition-all hover:-translate-y-1 hover:shadow-xl group
                                    ${active ? `bg-white ${theme.border} ${theme.borderB} ${theme.ring} ring-4` : 'bg-white border-slate-200 border-b-slate-300 hover:border-blue-300 hover:border-b-blue-400'}`}
                >
                  <div className={`w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-white shadow-lg ${active ? theme.bg : `bg-slate-200 group-hover:${theme.bg}`}`}>{course.icon}</div>
                  <h3 className="text-xl font-black text-slate-700 mb-2">{course.title}</h3>
                  <p className="text-slate-400 text-sm font-semibold leading-relaxed mb-6">{course.description}</p>

                  {active && (<div className={`absolute top-6 right-6 ${theme.bgLight} ${theme.text} px-3 py-1 rounded-full text-xs font-black uppercase`}>Aktif</div>)}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestSolverModal = ({ quest, onClose, onComplete }) => {
  const [code, setCode] = useState(quest.starter_code || "");
  const [checking, setChecking] = useState(false);
  const [result, setResult] = useState(null);

  const handleSubmit = async () => {
    setChecking(true);
    const res = await verifyQuestSubmission(quest.description, code);
    setResult(res);
    setChecking(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="w-full max-w-6xl h-[90vh] bg-white rounded-[32px] overflow-hidden shadow-2xl flex flex-col md:flex-row border-4 border-white ring-4 ring-blue-50">
        <div className="w-full md:w-1/3 bg-slate-50 p-8 border-r border-slate-200 overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl font-black text-sm border-b-4 border-yellow-200">
              <Trophy size={16} /> +{quest.xp} XP
            </div>
            <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-xl transition-colors"><X size={24} className="text-slate-400" /></button>
          </div>
          <h2 className="text-2xl font-black text-slate-800 mb-4">{quest.title}</h2>
          <p className="text-slate-500 leading-relaxed mb-8">{quest.description}</p>
          {result && (
            <div className={`p-6 rounded-2xl border-2 border-b-4 mb-6 ${result.correct ? 'bg-green-50 border-green-200 border-b-green-300' : 'bg-red-50 border-red-200 border-b-red-300'}`}>
              <div className={`font-black text-lg mb-2 flex items-center gap-2 ${result.correct ? 'text-green-600' : 'text-red-500'}`}>
                {result.correct ? <CheckCircle /> : <AlertTriangle />}
                {result.correct ? "BERHASIL!" : "KURANG TEPAT"}
              </div>
              <div className="text-slate-600 text-sm mb-4"><SimpleMarkdown text={result.feedback} /></div>
              {result.correct && (
                <button onClick={() => { onComplete(quest.xp); onClose(); }} className="w-full py-3 bg-green-500 hover:bg-green-400 text-white font-bold rounded-xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all btn-3d">
                  KLAIM HADIAH
                </button>
              )}
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col bg-slate-900">
          <div className="bg-slate-800 px-6 py-3 flex items-center justify-between">
            <span className="text-slate-400 font-mono text-xs font-bold">main.py</span>
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div><div className="w-3 h-3 rounded-full bg-yellow-500"></div><div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <textarea value={code} onChange={e => setCode(e.target.value)} className="flex-1 bg-slate-900 text-blue-300 font-mono p-6 resize-none focus:outline-none leading-relaxed text-sm" spellCheck="false" />
          <div className="p-4 bg-slate-800 border-t border-slate-700 flex justify-end">
            <button onClick={handleSubmit} disabled={checking || (result && result.correct)} className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-3 rounded-xl font-bold border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all btn-3d flex items-center gap-2">
              {checking ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />} {checking ? "MEMERIKSA..." : "JALANKAN KODE"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DailyQuestWidget = ({ onOpenQuest, onComplete, onQuestLoaded, activeCourseTitle }) => {
  const [quest, setQuest] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchQuest = async () => {
    setLoading(true);
    const data = await generateDailyQuest(activeCourseTitle);
    setQuest(data);
    onQuestLoaded(data);
    setLoading(false);
  };

  useEffect(() => { setQuest(null); }, [activeCourseTitle]);

  return (
    <div className="mx-4 mt-8 mb-8">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-[30px] p-1 shadow-xl shadow-blue-200 transform hover:scale-[1.01] transition-transform">
        <div className="bg-white/10 backdrop-blur-sm rounded-[28px] p-6 text-white relative overflow-hidden">
          <Sparkles className="absolute -top-4 -right-4 text-white/20 w-32 h-32" />
          {!quest ? (
            <div className="flex items-center justify-between relative z-10">
              <div>
                <h3 className="font-black text-2xl mb-1 flex items-center gap-2"><Shield fill="currentColor" className="text-yellow-300" /> MISI HARIAN</h3>
                <p className="text-blue-100 font-semibold text-sm">Selesaikan tantangan untuk dapat XP tambahan!</p>
              </div>
              <button onClick={fetchQuest} disabled={loading} className="bg-white text-blue-600 px-6 py-3 rounded-2xl font-black border-b-4 border-blue-100 shadow-lg active:border-b-0 active:translate-y-1 transition-all btn-3d">
                {loading ? "LOADING..." : "AMBIL MISI"}
              </button>
            </div>
          ) : (
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-black text-xl">{quest.title}</h3>
                <span className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-black uppercase">{quest.difficulty}</span>
              </div>
              <p className="text-blue-50 mb-6 font-semibold opacity-90">{quest.description}</p>
              <button onClick={onOpenQuest} className="w-full bg-yellow-400 hover:bg-yellow-300 text-yellow-900 font-black py-4 rounded-2xl border-b-4 border-yellow-600 shadow-lg active:border-b-0 active:translate-y-1 transition-all btn-3d flex justify-center gap-2 items-center">
                <Code size={20} /> MULAI CODING
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ChatDrawer = ({ isOpen, onClose, topic }) => {
  const [messages, setMessages] = useState([{ role: 'ai', text: `Hai Challenger! Ada yang bingung soal ${topic}?` }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input; setMessages(p => [...p, { role: 'user', text: userMsg }]);
    setInput(""); setLoading(true);
    const aiReply = await chatWithAI(topic, userMsg);
    setMessages(p => [...p, { role: 'ai', text: aiReply }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/20 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl" onClick={e => e.stopPropagation()}>
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-blue-500 text-white">
          <h3 className="font-bold flex items-center gap-2"><Sparkles size={18} /> Tutor AI</h3>
          <button onClick={onClose}><X className="text-blue-100 hover:text-white" /></button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${m.role === 'user' ? 'bg-blue-500 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}`}>
                <SimpleMarkdown text={m.text} />
              </div>
            </div>
          ))}
          {loading && <div className="text-slate-400 text-xs italic ml-2 animate-pulse">Mengetik...</div>}
        </div>
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex gap-2">
            <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="Ketik pertanyaan..." className="flex-1 bg-slate-100 border-transparent focus:bg-white border-2 focus:border-blue-400 rounded-xl px-4 py-3 text-slate-700 outline-none transition-all font-semibold" />
            <button onClick={handleSend} disabled={loading} className="p-3 bg-blue-500 rounded-xl hover:bg-blue-400 transition-colors text-white shadow-lg shadow-blue-200"><ArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CodeLabModal = ({ isOpen, onClose, activeCourse }) => {
  const [code, setCode] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [analyzing, setAnalyzing] = useState(false);

  useEffect(() => { if (isOpen && activeCourse?.codeConfig) { setCode(activeCourse.codeConfig.defaultCode); setAnalysis(""); } }, [isOpen, activeCourse]);
  if (!isOpen) return null;
  const currentLanguage = activeCourse?.codeConfig?.language || "Python";

  const handleRun = async () => {
    setAnalyzing(true);
    const res = await runCodeWithAI(code, currentLanguage);
    setAnalysis(res);
    setAnalyzing(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-5xl h-[80vh] rounded-[32px] overflow-hidden shadow-2xl flex flex-col border-4 border-white ring-4 ring-purple-100">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <h3 className="font-black text-slate-700 flex items-center gap-2 text-lg"><Terminal className="text-purple-500" /> Lab Koding: {currentLanguage}</h3>
          <button onClick={onClose}><X className="text-slate-400 hover:text-red-500" /></button>
        </div>
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="flex-1 flex flex-col bg-[#1e1e1e] p-4">
            <textarea value={code} onChange={e => setCode(e.target.value)} className="flex-1 bg-transparent text-blue-300 font-mono text-sm resize-none focus:outline-none p-2" spellCheck="false" />
            <button onClick={handleRun} disabled={analyzing} className="mt-4 bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 rounded-xl border-b-4 border-purple-700 active:border-b-0 active:translate-y-1 transition-all btn-3d flex items-center justify-center gap-2">
              {analyzing ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />} RUN
            </button>
          </div>
          <div className="flex-1 bg-slate-100 p-6 overflow-y-auto font-mono text-sm border-l border-slate-200">
            <h4 className="font-bold text-slate-400 text-xs uppercase mb-4">Output Terminal</h4>
            <pre className="text-slate-700 whitespace-pre-wrap">{analysis || "Menunggu eksekusi..."}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

const CyberLessonModal = ({ lesson, onClose, onComplete, courseTitle, onOpenChat }) => {
  const [stage, setStage] = useState('theory');
  const [content, setContent] = useState(null);
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => { generateLessonContent(lesson.title, courseTitle).then(setContent); }, [lesson, courseTitle]);

  const handleCheck = () => {
    if (selectedOption === null) return;
    const currentQ = content.quiz[currentQIndex];
    const isCorrect = selectedOption === currentQ.correctAnswer;
    setFeedback({ correct: isCorrect, text: currentQ.explanation });
    if (isCorrect) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentQIndex < (content.quiz?.length || 0) - 1) { setCurrentQIndex(p => p + 1); setSelectedOption(null); setFeedback(null); }
    else { setStage('summary'); }
  };

  if (!content) return <div className="fixed inset-0 z-50 bg-white flex items-center justify-center"><Loading /></div>;
  const passed = score >= 3;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in zoom-in-95 duration-200">
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden border-8 border-white">
        <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors"><X className="text-slate-400" /></button>
              <div className="flex gap-1">
                {Array.from({ length: content.quiz?.length || 5 }).map((_, i) => (
                  <div key={i} className={`h-2 rounded-full transition-all ${i < currentQIndex ? 'w-4 bg-green-400' : i === currentQIndex ? 'w-8 bg-blue-500' : 'w-4 bg-slate-200'}`}></div>
                ))}
              </div>
              <div className="w-8"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 relative">
          {stage === 'theory' && (
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-black text-slate-800 mb-6">{lesson.title}</h2>
              <div className="prose prose-slate prose-lg mb-8"><SimpleMarkdown text={content.theory} /></div>
              <div className="sticky bottom-0 bg-white/80 backdrop-blur p-4 border-t border-slate-100">
                <button onClick={() => setStage('quiz')} className="w-full bg-blue-500 hover:bg-blue-400 text-white font-black py-4 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all btn-3d shadow-lg shadow-blue-200">MULAI KUIS</button>
              </div>
            </div>
          )}

          {stage === 'quiz' && content.quiz && (
            <div className="max-w-xl mx-auto pt-4">
              <h3 className="text-xl font-bold text-slate-700 mb-8">{content.quiz[currentQIndex].question}</h3>
              <div className="space-y-4">
                {content.quiz[currentQIndex].options.map((opt, idx) => {
                  let stateStyle = "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-blue-300";
                  if (feedback) {
                    if (idx === content.quiz[currentQIndex].correctAnswer) stateStyle = "bg-green-100 border-green-400 text-green-700";
                    else if (idx === selectedOption) stateStyle = "bg-red-100 border-red-400 text-red-700";
                    else stateStyle = "bg-slate-50 border-slate-100 text-slate-300";
                  } else if (idx === selectedOption) { stateStyle = "bg-blue-100 border-blue-400 text-blue-700 ring-2 ring-blue-200"; }
                  return (<button key={idx} onClick={() => !feedback && setSelectedOption(idx)} disabled={!!feedback} className={`w-full p-5 rounded-2xl border-2 border-b-4 text-left font-bold transition-all ${stateStyle} ${!feedback && 'active:border-b-2 active:translate-y-1'}`}>{opt}</button>);
                })}
              </div>
              <div className="mt-8">
                {!feedback ? (
                  <button onClick={handleCheck} disabled={selectedOption === null} className="w-full bg-green-500 text-white font-black py-4 rounded-2xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all btn-3d disabled:opacity-50 disabled:cursor-not-allowed">CEK JAWABAN</button>
                ) : (
                  <div className="animate-in slide-in-from-bottom-4 fade-in duration-300">
                    <div className={`p-4 rounded-2xl mb-4 ${feedback.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      <p className="font-bold mb-1">{feedback.correct ? "Kamu Benar! 🎉" : "Ups, kurang tepat 😅"}</p>
                      <div className="text-sm"><SimpleMarkdown text={feedback.text} /></div>
                    </div>
                    <button onClick={handleNext} className={`w-full font-black py-4 rounded-2xl border-b-4 active:border-b-0 active:translate-y-1 transition-all btn-3d text-white ${feedback.correct ? 'bg-blue-500 border-blue-700' : 'bg-red-500 border-red-700'}`}>LANJUT</button>
                  </div>
                )}
              </div>
            </div>
          )}

          {stage === 'summary' && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              {passed ? (
                <div className="mb-6 flex flex-col items-center animate-bounce">
                  <Trophy size={80} className="text-yellow-400 drop-shadow-lg" />
                  <h2 className="text-3xl font-black text-yellow-500 mt-2">MISI SELESAI!</h2>
                </div>
              ) : (
                <div className="mb-6 flex flex-col items-center">
                  <AlertTriangle size={80} className="text-red-500 drop-shadow-lg" />
                  <h2 className="text-3xl font-black text-red-500 mt-2">MISI GAGAL</h2>
                </div>
              )}

              <p className="text-slate-500 mb-8 font-bold text-lg">Skor Kamu: {score} / {content.quiz.length}</p>

              <div className="flex gap-4 w-full max-w-sm">
                {passed ? (
                  <button onClick={() => { onComplete(); onClose(); }} className="flex-1 bg-blue-500 text-white font-black py-4 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all btn-3d">
                    KEMBALI KE MAP
                  </button>
                ) : (
                  <button onClick={() => { setStage('quiz'); setCurrentQIndex(0); setScore(0); setSelectedOption(null); setFeedback(null); }} className="flex-1 bg-slate-200 text-slate-600 font-black py-4 rounded-2xl border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 transition-all btn-3d">
                    ULANGI
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
        <button onClick={onOpenChat} className="absolute bottom-6 right-6 w-14 h-14 bg-pink-500 hover:bg-pink-400 text-white rounded-full flex items-center justify-center shadow-xl shadow-pink-200 transition-transform hover:scale-110 z-20"><MessageSquare fill="currentColor" size={24} /></button>
      </div>
    </div>
  );
};

// --- KOMPONEN BARU: SETUP PROFIL (WAJIB ISI) ---
const SetupProfileModal = ({ isOpen, onSave }) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  return (
    // z-index 100 biar paling atas, backdrop gelap biar fokus
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-700">
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 shadow-2xl border-8 border-white ring-4 ring-blue-500/30 text-center relative overflow-hidden">
        {/* Hiasan Atas */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-blue-100 shadow-inner animate-bounce">
          <Zap size={48} className="text-blue-500" fill="currentColor" />
        </div>

        <h2 className="text-3xl font-black text-slate-800 mb-2 tracking-tight">IDENTITAS BARU</h2>
        <p className="text-slate-400 font-bold text-sm mb-8 leading-relaxed">
          Selamat datang di sistem, Challenger! <br />
          Masukkan kodename / nama panggilanmu untuk memulai.
        </p>

        <div className="space-y-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && name.trim().length > 0 && onSave(name)}
            placeholder="Ketik nama keren..."
            maxLength={12}
            className="w-full bg-slate-100 border-4 border-slate-200 rounded-2xl px-4 py-4 text-center font-black text-xl text-slate-700 focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-300"
            autoFocus
          />

          <button
            onClick={() => name.trim().length > 0 && onSave(name)}
            disabled={name.trim().length === 0}
            className="w-full py-4 bg-blue-500 hover:bg-blue-400 text-white font-black rounded-2xl border-b-8 border-blue-700 active:border-b-0 active:translate-y-2 transition-all btn-3d disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-xl shadow-blue-200"
          >
            MULAI PETUALANGAN 🚀
          </button>

          <p className="text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-4">
            Setup Awal Sistem v1.0
          </p>
        </div>
      </div>
    </div>
  );
};

// --- KOMPONEN: HALAMAN LOGIN (GERBANG DEPAN) ---
const WelcomeScreen = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in fade-in duration-700">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white ring-4 ring-blue-100 text-center">

        {/* Header Gambar / Ikon */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center shadow-lg mb-4 ring-4 ring-white/30">
            <Zap size={48} className="text-yellow-300 fill-yellow-300 drop-shadow-md" />
          </div>
          <h1 className="text-3xl font-black text-white tracking-tight">Level<span className="text-yellow-300">Up</span></h1>
          <p className="text-blue-100 font-medium text-sm mt-2">Platform Belajar Dengan AI #1</p>
        </div>

        {/* Konten Bawah */}
        <div className="p-8">
          <h2 className="text-2xl font-black text-slate-800 mb-2">Siap Jadi Master?</h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-sm">
            Masuk sekarang untuk simpan progres XP, naik rank global, dan akses materi premium.
          </p>

          <button
            onClick={onLogin}
            className="w-full py-4 bg-white border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-sm hover:shadow-md"
          >
            {/* Ikon Google Sederhana */}
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
              <path fill="#EA4335" d="M12 4.62c1.61 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="group-hover:text-blue-600">Masuk dengan Google</span>
          </button>

          <p className="mt-6 text-xs text-slate-400 font-bold uppercase tracking-wider">
            Tidak perlu daftar • Gratis selamanya
          </p>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userProgress, setUserProgress] = useState({});
  const [userStats, setUserStats] = useState({ xp: 0, lessonsCompleted: 0 });
  const [activeLesson, setActiveLesson] = useState(null);
  const [currentView, setCurrentView] = useState('learn');
  const [activeCourseId, setActiveCourseId] = useState(COURSES_DATA[0].id);

  // Feature Flags (Restored Logic)
  const [showCodeLab, setShowCodeLab] = useState(false);
  const [showProtocolModal, setShowProtocolModal] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showQuestModal, setShowQuestModal] = useState(false);
  const [activeQuest, setActiveQuest] = useState(null);

  // RESTORED FLAGS
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showUplink, setShowUplink] = useState(false);
  const [activeCheatSheet, setActiveCheatSheet] = useState(null);

  const activeCourse = COURSES_DATA.find(c => c.id === activeCourseId) || COURSES_DATA[0];
  const activeTheme = getTheme(activeCourse.color);

  // Winrate Calculation for App Level (Passed to Leaderboard)
  const projectWinRate = userStats.totalProjectsFinished > 0
    ? Math.round((userStats.totalProjectScore || 0) / userStats.totalProjectsFinished)
    : 0;

  // Auth & Data Sync (MODE: ANTI-HANTU / KILL SWITCH)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      // Cek: Apakah user ada? DAN Apakah dia Anonymous (Hantu)?
      if (u && u.isAnonymous) {
        // KICK DIA KELUAR! 🦶
        console.warn("Mendeteksi akun hantu. Auto-logout...");
        signOut(auth).then(() => {
          setUser(null); // Set kosong biar WelcomeScreen muncul
        });
      } else {
        // Kalau User Google (Asli) atau belum login sama sekali
        setUser(u);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const unsubStats = onSnapshot(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), s => {
      if (s.exists()) setUserStats(s.data());
      else setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), { xp: 0, lessonsCompleted: 0 });
    });
    const unsubProg = onSnapshot(collection(db, 'artifacts', appId, 'users', user.uid, 'progress'), s => {
      const p = {}; s.forEach(d => p[d.id] = d.data()); setUserProgress(p);
    });
    return () => { unsubStats(); unsubProg(); };
  }, [user]);

  const handleLessonComplete = async () => {
    if (!user || !activeLesson) return;
    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'progress', activeLesson.id), { completed: true, completedAt: serverTimestamp() }, { merge: true });
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), { xp: increment(50), lessonsCompleted: increment(1) });
  };

  const handleQuestComplete = async (xp) => {
    if (!user) return;
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), { xp: increment(xp) });
  };

  // Fungsi untuk menyimpan nama pertama kali
  const handleInitialSetup = async (name) => {
    if (!user) return;
    const cleanName = name.trim().slice(0, 12); // Batasi 12 huruf

    // Simpan ke Database Firestore
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), {
      displayName: cleanName
    });

    // Update state lokal instan (biar modal langsung hilang tanpa nunggu loading)
    setUserStats(prev => ({ ...prev, displayName: cleanName }));
  };

  // --- FITUR LOGIN GOOGLE (SYNC DATA) ---
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      // Ini ajaib: Kalau akunmu Anonim, dia bakal coba nge-link ke Google.
      // Kalau Google-nya udah pernah dipake, dia bakal login biasa.
      await signInWithPopup(auth, provider);
      window.location.reload(); // Refresh biar data terbaru dimuat
    } catch (error) {
      console.error("Gagal Login:", error);
      alert("Gagal login Google. Cek konsol.");
    }
  };

  const handleLogout = async () => {
    if (confirm("Yakin mau logout?")) {
      await signOut(auth);
      window.location.reload(); // Refresh biar jadi akun baru/anonim lagi
    }
  };

  // FITUR BARU: GANTI NAMA USER
  const handleRename = async () => {
    if (!user) return;
    const newName = prompt("Masukkan nama panggilan baru kamu (Max 10 huruf):");

    if (newName && newName.trim().length > 0) {
      const cleanName = newName.trim().slice(0, 10); // Batasi 10 huruf biar ga kepanjangan

      // Simpan ke Database
      await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), {
        displayName: cleanName
      });

      // Update state lokal biar langsung berubah
      setUserStats(prev => ({ ...prev, displayName: cleanName }));
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50"><Loading /></div>;

  // 2. [BARU] Belum Login? Tampilkan Gerbang Depan
  if (!user) {
    return <WelcomeScreen onLogin={handleGoogleLogin} />;
  }

  // 3. Sudah Login? Tampilkan Aplikasi Utama
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-pink-200 selection:text-pink-900">

        <Sidebar
          userStats={userStats}
          userName={userStats.displayName || user?.uid.slice(0, 5) || "GUEST"}
          onRename={handleRename} // <--- Oper fungsi rename ke sini
          handleGoogleLogin={handleGoogleLogin}
          currentView={currentView}
          setCurrentView={setCurrentView}
          onOpenCodeLab={() => setShowCodeLab(true)}
          onOpenProject={() => setShowProjectModal(true)}
          onOpenUplink={() => setShowUplink(true)}
        />

        <main className="flex-1 relative overflow-y-auto hide-scrollbar">
          {/* Top Bar Mobile (SUDAH ADA FITUR RENAME) */}
          <div className="md:hidden flex justify-between items-center px-4 py-4 bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">

            {/* Bagian Kiri: Nama User (Bisa Diklik buat Rename) */}
            <div className="flex items-center gap-2">
              {/* ... Avatar & Nama ... */}
              <button
                onClick={handleRename}
                className="flex items-center gap-3 active:scale-95 transition-transform"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-md shadow-blue-200">
                  <Zap size={20} fill="currentColor" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Challenger</p>
                  <h1 className="font-black text-slate-800 text-sm truncate max-w-[120px]">
                    @{userStats.displayName || user?.uid.slice(0, 5) || "KAMU"} ✏️
                  </h1>
                </div>
              </button>

              {/* TOMBOL SYNC DI HP */}
              <button
                onClick={handleGoogleLogin}
                className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 hover:bg-blue-100 hover:text-blue-500 transition-colors"
              >
                <span className="text-xs">☁️</span>
              </button>
            </div>

            {/* Bagian Kanan: XP */}
            <div className="flex items-center gap-2 font-black text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200">
              <Zap className="text-yellow-500 fill-yellow-500" size={16} />
              {userStats.xp}
            </div>
          </div>

          {currentView === 'learn' && (
            <div className="px-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Course Header */}
              <div className="max-w-2xl mx-auto pt-10 text-center mb-8">
                <button
                  onClick={() => setShowProtocolModal(true)}
                  className="group relative inline-block transition-transform hover:scale-105"
                >
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center text-white shadow-xl ${activeTheme.shadow} transition-colors ${activeTheme.bg}`}>
                    {activeCourse.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-1">{activeCourse.title}</h2>
                  <p className={`font-bold text-sm flex items-center justify-center gap-1 transition-colors ${activeTheme.text}`}>
                    Ganti Materi <ArrowRight size={14} />
                  </p>
                </button>
              </div>

              <DailyQuestWidget
                activeCourseTitle={activeCourse.title}
                onQuestLoaded={setActiveQuest}
                onOpenQuest={() => setShowQuestModal(true)}
                onComplete={() => { }}
              />

              <CourseMap
                activeCourse={activeCourse}
                userProgress={userProgress}
                onStartLesson={setActiveLesson}
                onOpenCheatSheet={setActiveCheatSheet}
              />
            </div>
          )}

          {currentView === 'leaderboard' && (
            <div className="pt-10 animate-in fade-in">
              <LeaderboardView
                currentUserXP={userStats.xp}
                currentUserName={userStats.displayName || user?.uid.slice(0, 5) || "KAMU"}
                currentUserWinRate={projectWinRate} // [BARU] Oper winrate ke leaderboard
              />
            </div>
          )}
        </main>

        {/* All Modals */}
        <ProtocolSelectModal isOpen={showProtocolModal} onClose={() => setShowProtocolModal(false)} activeCourseId={activeCourseId} onSelectCourse={setActiveCourseId} />

        {activeLesson && <CyberLessonModal lesson={activeLesson} courseTitle={activeCourse.title} onClose={() => { setActiveLesson(null); setShowChat(false); }} onComplete={handleLessonComplete} onOpenChat={() => setShowChat(true)} />}

        <CodeLabModal isOpen={showCodeLab} onClose={() => setShowCodeLab(false)} activeCourse={activeCourse} />

        <ChatDrawer isOpen={showChat} onClose={() => setShowChat(false)} topic={activeLesson ? activeLesson.title : ''} />

        {showQuestModal && activeQuest && <QuestSolverModal quest={activeQuest} onClose={() => setShowQuestModal(false)} onComplete={handleQuestComplete} />}

        <ProjectModal isOpen={showProjectModal} onClose={() => setShowProjectModal(false)} userId={user?.uid} userXP={userStats.xp} />
        <NeuralUplinkModal isOpen={showUplink} onClose={() => setShowUplink(false)} />
        <CheatSheetModal isOpen={!!activeCheatSheet} moduleTitle={activeCheatSheet} onClose={() => setActiveCheatSheet(null)} />
        <SetupProfileModal isOpen={!loading && user && !userStats.displayName} onSave={handleInitialSetup} />
      </div>
    </>
  );
}