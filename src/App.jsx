import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInAnonymously, signInWithCustomToken, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import {
  collection, doc,
  getDocs, getDoc,
  getFirestore,
  increment,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
  collectionGroup,
  query,
  orderBy,
  limit,
  writeBatch
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
  Pencil,
  Play,
  RefreshCw,
  Rocket,
  Save,
  Search,
  Shield,
  Sparkles,
  Star,
  Target,
  Terminal,
  Trash2,
  Trophy,
  X,
  XCircle,
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
const AI_PRIORITY = ["groq", "gemini"];

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

// --- UTILS: MARKDOWN SIMPLIFIER (FINAL FIX) ---
const parseInline = (text) => {
  if (!text || typeof text !== 'string') return null;

  const cleanText = text.replace(/\\n/g, '\n').trim();

  // FIX REGEX: Gunakan [\s\S] menggantikan . agar bisa membaca baris baru (multiline bold)
  const parts = cleanText.split(/(\*\*[\s\S]*?\*\*|\*[\s\S]*?\*|`.*?`|\$.*?\$)/g);

  return parts.map((part, index) => {
    // Bold: Ubah font-black jadi font-bold agar tidak terlalu "nge-gas" tebalnya
    if (part.startsWith('**') && part.endsWith('**'))
      return <strong key={index} className="font-bold tracking-tight">{part.slice(2, -2)}</strong>;

    // Italic
    if (part.startsWith('*') && part.endsWith('*'))
      return <em key={index} className="text-blue-600 font-semibold not-italic bg-blue-50 px-1 rounded">{part.slice(1, -1)}</em>;

    // Code
    if (part.startsWith('`') && part.endsWith('`'))
      return <code key={index} className="bg-slate-100 px-1.5 py-0.5 rounded-lg text-pink-600 font-mono text-[13px] font-bold border border-slate-200">{part.slice(1, -1)}</code>;

    // Math
    if (part.startsWith('$') && part.endsWith('$'))
      return (
        <span key={index} className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-100 px-2 py-0.5 rounded-md font-serif italic mx-1 text-[13px] shadow-sm">
          {part.slice(1, -1)}
        </span>
      );

    return part;
  });
};

const SimpleMarkdown = ({ text }) => {
  if (!text || typeof text !== 'string') return null;

  // Pre-processing
  let processedText = text.replace(/\\n/g, '\n');

  // --- LOGIKA UNWRAPPER (Tetap Sama) ---
  const trimmed = processedText.trim();
  if ((trimmed.startsWith("```markdown") || trimmed.startsWith("```md")) && trimmed.endsWith("```")) {
    const lines = trimmed.split('\n');
    if (lines.length >= 2) {
      processedText = lines.slice(1, -1).join('\n').trim();
    }
  }
  // -------------------------

  const parts = processedText.split(/(```[\s\S]*?```)/g);

  return (
    // FIX: Tambahkan 'font-sans' agar font konsisten meski hasil copy-paste
    <div className="space-y-3 text-[15px] leading-relaxed font-medium font-sans">
      {parts.map((part, i) => {
        // Handle Code Block
        if (part.startsWith('```')) {
          const content = part.replace(/^```\w*\n?|```$/g, '');
          return (
            <div key={i} className="bg-[#1e1e1e] p-4 rounded-xl font-mono text-xs overflow-x-auto my-4 text-blue-300 shadow-md border border-slate-700">
              <pre>{content}</pre>
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
              <div key={`tbl-${i}-${elements.length}`} className="overflow-x-auto my-4 rounded-xl border border-slate-200/60 shadow-sm bg-white/50">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-slate-50/80 text-slate-700 font-bold uppercase text-xs">
                    <tr>{headers.map((h, idx) => (<th key={idx} className="p-3 border-b border-slate-200/50 whitespace-nowrap">{parseInline(h)}</th>))}</tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white/80">
                    {rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50">
                        {row.map((cell, cIdx) => (<td key={cIdx} className="p-3 text-slate-600 leading-normal min-w-[150px]">{parseInline(cell)}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          } else {
            tableBuffer.forEach((l, idx) => elements.push(<div key={`fallback-${i}-${idx}-${elements.length}`} className="leading-relaxed mb-1">{parseInline(l)}</div>));
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

            // Horizontal Rule (Minimal 3 strip/bintang)
            if (/^[-*_]{3,}$/.test(line)) {
              elements.push(<hr key={`${i}-${j}`} className="my-6 border-t-2 border-slate-200" />);
            }
            // Header
            else if (line.startsWith('### ')) elements.push(<h3 key={`${i}-${j}`} className="text-lg font-bold mt-5 mb-2 opacity-90">{parseInline(line.slice(4))}</h3>);
            else if (line.startsWith('## ')) elements.push(<h2 key={`${i}-${j}`} className="text-xl font-bold mt-6 mb-3 pb-2 border-b border-current opacity-80">{parseInline(line.slice(3))}</h2>);
            else if (line.startsWith('# ')) elements.push(<h1 key={`${i}-${j}`} className="text-2xl font-bold mt-6 mb-4">{parseInline(line.slice(2))}</h1>);

            // Blockquote
            else if (line.startsWith('>')) {
              const content = line.replace(/^>\s?/, '');
              elements.push(
                <blockquote key={`${i}-${j}`} className="border-l-4 border-blue-400 pl-4 py-2 my-4 bg-blue-50/50 rounded-r-lg italic text-slate-600">
                  {parseInline(content)}
                </blockquote>
              );
            }
            // List
            else if (line.startsWith('- ') || line.startsWith('* ')) elements.push(
              <div key={`${i}-${j}`} className="flex gap-3 ml-1 mb-2 items-start">
                <div className="min-w-[6px] h-[6px] rounded-full bg-current opacity-60 mt-2"></div>
                <span className="leading-relaxed">{parseInline(line.slice(2))}</span>
              </div>
            );
            // Paragraf Biasa
            else elements.push(<div key={`${i}-${j}`} className="leading-relaxed mb-2">{parseInline(line)}</div>);
          }
        }
        flushTable();
        return <div key={i}>{elements}</div>;
      })}
    </div>
  );
};

// --- HELPER: CONTEXT AWARENESS (OPTIMIZED) ---
const getCurriculumContext = (course, currentLessonId) => {
  if (!course || !course.modules) return null;

  // 1. Ratakan (Flatten) semua lesson menjadi satu list urut
  let allLessons = [];
  course.modules.forEach(mod => {
    mod.lessons.forEach(lesson => {
      allLessons.push(lesson.title);
    });
  });

  // 2. Cari posisi lesson saat ini
  const currentIndex = allLessons.findIndex(title =>
    course.modules.some(m => m.lessons.some(l => l.id === currentLessonId && l.title === title))
  );

  if (currentIndex === -1) return null;

  // 3. OPTIMISASI TOKEN (Sliding Window):
  // Cuma ambil 5 topik ke belakang dan 5 topik ke depan.
  // Gak perlu kirim ratusan list lesson yang bikin token jebol.

  const startPrev = Math.max(0, currentIndex - 5);
  const previousTopics = allLessons.slice(startPrev, currentIndex).join(', ');

  const endFuture = Math.min(allLessons.length, currentIndex + 6);
  const futureTopics = allLessons.slice(currentIndex + 1, endFuture).join(', ');

  const currentTopic = allLessons[currentIndex];

  return { previousTopics, currentTopic, futureTopics };
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

// --- [NEW] GENERATOR TERPISAH (MATERI & SOAL) ---

// 1. Generate Teori Dulu
const generateLessonTheory = async (title, courseTitle, description) => {
  const prompt = `
    Role: Tutor Coding & Sains yang Asik, Gaul, tapi sangat mendalam pengetahuannya.
    Konteks: Kursus "${courseTitle}".
    Topik: "${title}".
    Deskripsi Singkat: "${description}".

    Tugas:
    Buat penjelasan materi LENGKAP, MENDALAM, dan TERSTRUKTUR tentang topik di atas.
    - Gunakan Bahasa Indonesia yang santai/gaul tapi tetap edukatif.
    - Berikan contoh nyata atau analogi yang mudah dimengerti.
    - Jika ini tentang coding, berikan contoh kode snippet.
    - Jika ini tentang sains/matematika, berikan rumus dan contoh perhitungannya.
    - Format output WAJIB Markdown murni. JANGAN pakai JSON di sini.
  `;

  return await smartAIFetch(prompt);
};

// 2. Generate Kuis Berdasarkan Teori Tadi, [UPDATED] Generate Kuis dengan Konteks Kurikulum & Tingkat Kesulitan
const generateLessonQuiz = async (theoryContent, isProgramming, context) => {
  // Susun instruksi konteks (jika ada)
  let contextInstruction = "";
  if (context) {
    contextInstruction = `
    ATURAN KURIKULUM (STRICT):
    1. Materi yang SUDAH dipelajari user: [${context.previousTopics}]. Boleh digunakan sebagai pendukung.
    2. Materi SAAT INI: "${context.currentTopic}". WAJIB menjadi fokus utama soal.
    3. Materi MASA DEPAN (BELUM BELAJAR): [${context.futureTopics}]. DILARANG KERAS menggunakan konsep/library dari sini.
    `;
  }

  const prompt = `
    Role: Guru Coding untuk Pemula yang Sangat Pengertian.
    Tugas: Buat soal ujian BERDASARKAN materi berikut.
    
    ${contextInstruction}

    Materi Referensi:
    """
    ${theoryContent}
    """

    Instruksi Output:
    1. Buat "multiple_choice": Array berisi 5 soal pilihan ganda.
    2. UNTUK SETIAP SOAL, buat field "feedback" (Array string respon A,B,C,D).
    
    ${isProgramming ? `
    3. Buat "coding_challenge" (Essay) dengan SYARAT KHUSUS:
       - TINGKAT KESULITAN: SANGAT MUDAH / PEMULA.
       - HANYA minta user menulis kode yang berkaitan LANGSUNG dengan materi "${context?.currentTopic || 'ini'}".
       - JANGAN menyuruh import library (seperti math, random, dll) KECUALI materi ini memang membahas library tersebut.
       - Contoh yang BENAR: Jika materi "For Loop", minta user print angka 1 sampai 5.
       - Contoh yang SALAH: Jika materi "For Loop", jangan minta user buat algoritma sorting atau import numpy.
    ` : ``}
    
    Format JSON MURNI (Tanpa markdown code block):
    {
      "multiple_choice": [ ... ],
      ${isProgramming ? `"coding_challenge": {
         "question": "Instruksi soal koding yang simpel...",
         "starter_code": "# Tulis kodemu disini",
         "solution_keyword": "keyword jawaban"
      }` : ``}
    }
  `;

  const text = await smartAIFetch(prompt);
  if (!text) return null;
  try {
    const cleanText = text.replace(/```json/g, '').replace(/```/g, '').trim();
    return JSON.parse(cleanText);
  } catch (e) {
    console.error("Gagal parse JSON Quiz:", e);
    return null;
  }
};

// [UPDATED] Chat dengan Memori & Konteks
const chatWithAI = async (topic, historyMessages) => {
  // Ambil maksimal 10 pesan terakhir agar prompt tidak kepanjangan (Hemat Token & Biaya)
  const recentHistory = historyMessages.slice(-10);

  // Format percakapan menjadi teks skrip
  const conversationText = recentHistory.map(m =>
    `${m.role === 'user' ? 'Challenger (User)' : 'Tutor (AI)'}: ${m.text}`
  ).join('\n');

  const prompt = `
    [SYSTEM]
    Peran: Tutor Coding "Tutor AI" yang Gaul, Asik, tapi Pintar dan Bijaksana.
    Konteks Materi Saat Ini: "${topic}".
    Tugas: Jawab respon TERAKHIR dari User berdasarkan riwayat percakapan di bawah.
    Gaya Bahasa: Bahasa Indonesia santai, gunakan emoji sesekali, memotivasi, dan to-the-point.
    
    [RIWAYAT PERCAKAPAN]
    ${conversationText}
    
    [JAWABAN TUTOR]
    (Berikan jawabanmu di sini):
  `;

  const res = await smartAIFetch(prompt);
  return res || "Waduh, sinyal otak AI lagi putus-nyambung nih. Coba tanya lagi ya!";
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

// [UPDATED] Verifikasi Kode dengan Skor Akurasi
const verifyQuestSubmission = async (desc, code) => {
  const prompt = `
    Role: Senior Code Reviewer.
    Tugas: Nilai kode user berdasarkan soal: "${desc}".
    Kode User:
    """
    ${code}
    """
    
    Analisis:
    1. Apakah kode berjalan tanpa error?
    2. Apakah logika memecahkan masalah?
    3. Apakah output sesuai permintaan?

    Output WAJIB JSON MURNI:
    {
      "correct": boolean (true jika akurasi >= 80),
      "accuracy": number (0-100, berikan 100 jika sempurna, 50-99 jika jalan tapi ada kurang dikit, <50 jika salah/error),
      "feedback": "Komentar singkat & saran perbaikan (Bahasa Indonesia, markdown)"
    }
  `;

  const text = await smartAIFetch(prompt);
  if (!text) return { correct: false, accuracy: 0, feedback: "Gagal terhubung ke AI juri." };

  try {
    return JSON.parse(text.replace(/```json/g, '').replace(/```/g, '').trim());
  } catch (e) {
    return { correct: false, accuracy: 0, feedback: "Error membaca penilaian AI." };
  }
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

// [UPDATED] Sidebar - Fix Tampilan Mobile (Lebih Rapi & Proporsional)
const Sidebar = ({ userStats, userName, onRename, handleGoogleLogin, onLogout, currentView, setCurrentView, onOpenCodeLab, onOpenProject, onOpenUplink, isAnonymous, showCodeLab }) => {
  const projectWinRate = userStats.totalProjectsFinished > 0
    ? Math.round((userStats.totalProjectScore || 0) / userStats.totalProjectsFinished)
    : 0;

  let wrColor = 'text-slate-500';
  if (projectWinRate >= 80) wrColor = 'text-green-500';
  else if (projectWinRate >= 50) wrColor = 'text-yellow-500';
  else if (projectWinRate > 0) wrColor = 'text-red-500';

  return (
    // UBAH 1: Padding container dikurangi di mobile (p-2) biar tidak terlalu tebal
    <div className="fixed bottom-0 w-full md:w-80 md:relative md:h-full bg-white border-t md:border-t-0 md:border-r-2 border-slate-200 flex md:flex-col justify-between p-2 md:p-4 z-40 md:overflow-y-auto hide-scrollbar">

      {/* Header Desktop (Tetap Sama) */}
      <div className="hidden md:flex items-center gap-3 px-4 py-3 mb-4">
        <button onClick={onRename} className="group relative">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-xl object-contain bg-white shadow-lg shadow-blue-200 hover:scale-105 transition-transform"
          />
          <span className="absolute -bottom-8 left-0 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
            Ganti Nama
          </span>
        </button>

        <div className="text-left">
          <h1 className="text-xl font-black text-slate-800 tracking-tight leading-none">Level<span className="text-blue-500">Up</span></h1>
          <div className="flex items-center gap-2">
            <button onClick={onRename} className="text-xs font-bold text-slate-400 hover:text-blue-500 transition-colors text-left truncate max-w-[120px]">
              @{userName} ✏️
            </button>
            {isAnonymous && (
              <button
                onClick={handleGoogleLogin}
                className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded-md font-bold text-slate-500 hover:bg-blue-50 hover:text-blue-600 transition-colors animate-pulse"
                title="Simpan Akun / Login"
              >
                ☁️ Sync
              </button>
            )}
          </div>
        </div>
      </div>

      {/* UBAH 2: Navigasi Mobile pakai 'justify-evenly' biar jaraknya pas di layar lebar */}
      <nav className="w-full flex md:flex-col justify-evenly md:justify-start gap-1 md:gap-2">
        {[
          {
            id: 'learn',
            icon: BookOpen,
            label: "Belajar",
            activeClass: "bg-blue-50 text-blue-600 border-blue-400",
            hoverClass: "text-slate-400 border-transparent hover:bg-blue-50 hover:text-blue-600"
          },
          {
            id: 'leaderboard',
            icon: Trophy,
            label: "Peringkat",
            activeClass: "bg-yellow-50 text-yellow-600 border-yellow-400",
            hoverClass: "text-slate-400 border-transparent hover:bg-yellow-50 hover:text-yellow-600"
          },
        ].map(item => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            // UBAH 3: Padding tombol di mobile dikurangi (p-3) biar muat banyak icon
            className={`flex items-center gap-4 p-3 md:p-4 rounded-2xl transition-all border-2 font-black uppercase text-sm tracking-wide 
              ${currentView === item.id
                ? item.activeClass
                : item.hoverClass
              }`}
          >
            {/* Ukuran icon di mobile sedikit diperkecil (20 vs 24) biar rapi */}
            <item.icon size={20} className="md:w-6 md:h-6" /> <span className="hidden md:inline">{item.label}</span>
          </button>
        ))}

        <div className="hidden md:block h-px bg-slate-100 my-2 mx-4"></div>

        {/* Tombol Fitur Tambahan (CodeLab, Project, Uplink) */}
        {showCodeLab && (
          <button onClick={onOpenCodeLab} className="flex items-center gap-4 p-3 md:p-4 rounded-2xl text-slate-500 hover:bg-purple-50 hover:text-purple-600 font-bold transition-all">
            <Terminal size={20} className="md:w-6 md:h-6" /> <span className="hidden md:inline">Lab Koding</span>
          </button>
        )}

        <button onClick={onOpenProject} className="flex items-center gap-4 p-3 md:p-4 rounded-2xl text-slate-500 hover:bg-pink-50 hover:text-pink-600 font-bold transition-all">
          <Rocket size={20} className="md:w-6 md:h-6" /> <span className="hidden md:inline">Cari Ide Proyek</span>
        </button>

        <button onClick={onOpenUplink} className="flex items-center gap-4 p-3 md:p-4 rounded-2xl text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 font-bold transition-all">
          <Network size={20} className="md:w-6 md:h-6" /> <span className="hidden md:inline">Tanya Konsep</span>
        </button>
      </nav>

      {/* Footer Desktop (Tetap Sama) */}
      <div className="hidden md:flex flex-col gap-3 px-4 mt-auto mb-4 w-full">
        {!isAnonymous && (
          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 py-2 text-[10px] font-black text-red-400 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all uppercase tracking-widest border border-transparent hover:border-red-100"
          >
            <LogOut size={14} /> Keluar Sistem
          </button>
        )}

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
    </div>
  );
};

// [UPDATED] CourseMap - Support Legacy Data (Centang) & New Score (Angka)
const CourseMap = ({ activeCourse, userProgress, onStartLesson, onOpenCheatSheet }) => {
  const isUnlocked = (lessonId, prevLessonId) => {
    if (!prevLessonId) return true;
    return userProgress[prevLessonId]?.completed === true;
  };
  let previousLessonId = null;
  const theme = getTheme(activeCourse.color);

  return (
    <div className="flex flex-col items-center py-10 pb-32 w-full">
      {activeCourse.modules.map((module, mIdx) => (
        <div key={module.id} className="w-full mb-12">

          {/* HEADER MODUL */}
          <div className="sticky top-0 z-30 bg-slate-50 py-4 mb-8 w-full">
            <div className="flex items-center justify-between px-4 w-full max-w-2xl mx-auto">
              <h3 className="text-slate-700 font-black text-xl uppercase tracking-tight flex-1 pr-4">
                {module.title}
              </h3>
              <button
                onClick={() => onOpenCheatSheet(module.title)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl font-bold text-sm transition-colors border-2 border-transparent ${theme.text} hover:${theme.bgLight} hover:${theme.borderLight}`}
              >
                📖 <span className="hidden md:inline">Rangkuman</span>
              </button>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-b from-slate-50 to-transparent"></div>
          </div>

          <div className="space-y-6 relative flex flex-col items-center w-full max-w-2xl mx-auto">
            {module.lessons.map((lesson, lIdx) => {
              const unlocked = isUnlocked(lesson.id, previousLessonId);

              // Ambil data progress
              const progressData = userProgress[lesson.id];
              const completed = progressData?.completed;

              // Cek apakah ada data skor (untuk pelajaran baru)
              const hasScoreData = progressData?.score !== undefined && progressData?.maxScore !== undefined;
              const scoreText = hasScoreData ? `${progressData.score}/${progressData.maxScore}` : null;

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
                <div key={lesson.id} className="relative z-10 w-full flex flex-col items-center group">
                  {/* Garis Konektor */}
                  {lIdx < module.lessons.length - 1 && (
                    <div className={`absolute top-1/2 left-1/2 w-2 h-36 md:h-24 -translate-x-1/2 -z-10 ${completed ? theme.bg : 'bg-slate-200'}`}></div>
                  )}
                  {lIdx === 0 && mIdx > 0 && (
                    <div className={`absolute bottom-full left-1/2 w-2 h-24 -translate-x-1/2 -z-10 ${isPrevCompleted ? 'bg-slate-300' : 'bg-slate-200'}`}></div>
                  )}

                  {/* TOMBOL LEVEL */}
                  <div className="relative">
                    <button
                      onClick={() => unlocked && onStartLesson(lesson)}
                      disabled={!unlocked}
                      className={`w-20 h-20 md:w-24 md:h-24 rounded-full flex flex-col items-center justify-center border-4 ${borderClass} transition-all btn-3d shadow-lg z-20 ${bgClass} ${!unlocked && 'opacity-60 cursor-not-allowed'}`}
                    >
                      {completed ? <CheckCircle size={32} fill="currentColor" className="text-white" />
                        : !unlocked ? <Lock size={28} />
                          : <Star fill="currentColor" size={32} className={theme.textLight} />}
                    </button>

                    {/* BADGE PINTAR: Prioritaskan Skor Angka, Fallback ke Centang */}
                    {completed && (
                      scoreText ? (
                        // TAMPILAN SKOR (Untuk pelajaran yang BARU dikerjakan)
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-yellow-900 text-[10px] md:text-xs font-black px-2 py-1 rounded-full border-2 border-white shadow-md z-30 transform rotate-[-5deg] animate-in zoom-in">
                          {scoreText}
                        </div>
                      ) : (
                        // TAMPILAN CENTANG (Untuk pelajaran LAMA / Legacy data)
                        <div className="absolute -bottom-1 -right-1 bg-green-500 text-white p-1 rounded-full border-2 border-white shadow-sm z-30 animate-in zoom-in" title="Selesai (Data lama)">
                          <CheckCircle size={14} strokeWidth={4} />
                        </div>
                      )
                    )}
                  </div>

                  {/* LABEL JUDUL */}
                  <div className={`
                    mt-3 md:mt-0 
                    md:absolute md:left-1/2 md:ml-16 md:top-1/2 md:-translate-y-1/2 
                    w-48 text-center md:text-left 
                    transition-all duration-500
                    ${unlocked ? 'opacity-100' : 'opacity-40'}
                    relative z-20 
                  `}>
                    <div className="inline-block md:block bg-slate-50 px-2 md:px-3 py-1 md:py-2 rounded-lg">
                      <h4 className="font-bold text-slate-700 text-sm md:text-base leading-tight mb-1">{lesson.title}</h4>
                      <p className="text-xs text-slate-400 font-medium leading-tight hidden md:block">{lesson.description}</p>
                      <p className="text-[10px] text-slate-400 md:hidden leading-tight line-clamp-2">{lesson.description}</p>
                    </div>
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


// =========================================
// LEADERBOARD VIEW: REAL-TIME DATABASE
// =========================================
const LeaderboardView = ({ db, userId }) => {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Query ajaib: Ambil semua dokumen "stats" dari semua user, urutkan XP tertinggi
    const q = query(
      collectionGroup(db, 'stats'),
      orderBy('xp', 'desc'),
      limit(50)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const users = snapshot.docs.map(doc => {
        const data = doc.data();

        // Trik mengambil ID User dari path database (users/{uid}/stats/main)
        // Path: artifacts/appid/users/UID_ADALAH_INDEX_KE_3/stats/main
        const pathSegments = doc.ref.path.split('/');
        const uid = pathSegments[3];

        // Hitung WinRate user lain dari data stats mereka
        const winRate = data.totalProjectsFinished > 0
          ? Math.round((data.totalProjectScore || 0) / data.totalProjectsFinished)
          : 0;

        return {
          id: uid,
          name: data.displayName || "Anonymous", // Kalau pacarmu belum set nama, munculnya Anonymous
          xp: data.xp || 0,
          avatar: '😎', // Nanti bisa dibikin random emoji
          winRate: winRate,
          isCurrentUser: uid === userId
        };
      });

      setLeaderboardData(users);
      setLoading(false);
    }, (error) => {
      console.error("Error Leaderboard:", error);
      // PENTING: Kalau error "Index required", cek console browser!
    });

    return () => unsubscribe();
  }, [db, userId]);

  // Pisahkan Top 3 dan Sisanya
  const topThree = leaderboardData.slice(0, 3);
  const restOfPlayers = leaderboardData.slice(3);

  // Ambil data spesifik podium (kasih fallback object biar gak error kalau kosong)
  const rank1 = topThree[0];
  const rank2 = topThree[1];
  const rank3 = topThree[2];

  // Cari data user sendiri buat ditampilkan di kartu atas
  const currentUser = leaderboardData.find(u => u.isCurrentUser) || { xp: 0, winRate: 0, name: 'KAMU' };
  const currentUserRank = leaderboardData.findIndex(u => u.isCurrentUser) + 1;

  // Matematika Chart Lingkaran
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (currentUser.winRate / 100) * circumference;

  if (loading) return <div className="p-10 text-center animate-pulse font-bold text-slate-400">Sedang memanggil para juara...</div>;

  return (
    <div className="p-6 animate-in fade-in pb-32">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-black text-slate-800 flex items-center justify-center gap-2 uppercase">
          <Trophy className="text-yellow-500" size={32} />
          Papan Juara
        </h2>
        <p className="text-slate-500 font-bold text-sm">Peringkat Global Para Challenger</p>
      </div>

      {/* KARTU STATISTIK (USER SENDIRI) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {/* Kartu Ranking */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 relative overflow-hidden group">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform"><Award size={100} /></div>
          <h3 className="text-lg font-bold mb-1 opacity-90">Peringkat Kamu</h3>
          <div className="text-5xl font-black flex items-baseline gap-2">
            #{currentUserRank > 0 ? currentUserRank : '-'}
            <span className="text-lg font-bold opacity-60">/ {leaderboardData.length}</span>
          </div>
          <div className="mt-4 bg-white/20 rounded-xl p-3 text-sm font-bold inline-flex items-center gap-2 backdrop-blur-sm">
            <Zap size={16} className="text-yellow-300 fill-yellow-300" /> Total {currentUser.xp.toLocaleString()} XP
          </div>
        </div>

        {/* Kartu Win Rate */}
        <div className="bg-white rounded-3xl p-6 shadow-xl border-2 border-slate-100 flex items-center justify-between relative overflow-hidden">
          <div className="z-10">
            <h3 className="text-lg font-bold text-slate-700 mb-1 flex items-center gap-2"><Target size={20} className="text-emerald-500" /> Win Rate</h3>
            <div className="text-4xl font-black text-slate-800 mb-1">{currentUser.winRate}%</div>
            <p className="text-xs text-slate-400 font-bold max-w-[120px]">Akurasi keberhasilan misi proyekmu.</p>
          </div>
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="64" cy="64" r={radius} stroke="#e2e8f0" strokeWidth="12" fill="transparent" />
              <circle cx="64" cy="64" r={radius} stroke="#10b981" strokeWidth="12" fill="transparent" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} strokeLinecap="round" className="transition-all duration-1000 ease-out" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-xl font-black text-slate-700">{currentUser.winRate}%</span>
            </div>
          </div>
        </div>
      </div>

      {/* PODIUM (JUARA 1, 2, 3) */}
      <div className="flex justify-center items-end gap-2 md:gap-4 mb-12 min-h-[300px]">
        {/* JUARA 2 */}
        <div className="flex flex-col items-center w-1/3 max-w-[120px]">
          {rank2 ? (
            <div className="w-full flex flex-col items-center animate-in slide-in-from-bottom-8 duration-700">
              <div className="mb-2 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full border-4 border-blue-300 flex items-center justify-center text-blue-600 font-black text-lg shadow-lg mx-auto mb-2 relative">
                  {rank2.avatar}
                  {rank2.isCurrentUser && <span className="absolute -top-2 -right-2 text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-white z-10">YOU</span>}
                </div>
                <p className="text-slate-600 font-bold text-xs truncate w-20 mx-auto">{rank2.name}</p>
                <p className="text-blue-500 text-[10px] font-bold">{rank2.xp} XP</p>
              </div>
              <div className="w-full h-32 bg-blue-400 rounded-t-3xl border-b-8 border-blue-600 flex justify-center pt-4 shadow-xl relative"><span className="text-5xl font-black text-blue-300/50 absolute bottom-0">2</span></div>
            </div>
          ) : <div className="w-full h-32 bg-slate-100 rounded-t-3xl border-b-8 border-slate-200 opacity-50 relative"><span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-4xl font-black text-slate-200">2</span></div>}
        </div>

        {/* JUARA 1 */}
        <div className="flex flex-col items-center w-1/3 max-w-[140px] -mb-2 z-10">
          {rank1 ? (
            <div className="w-full flex flex-col items-center animate-in slide-in-from-bottom-8 duration-500">
              <Crown className="text-yellow-400 mb-1 animate-bounce mx-auto drop-shadow-sm" fill="currentColor" size={48} />
              <div className="mb-2 text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full border-4 border-yellow-300 flex items-center justify-center text-yellow-600 text-2xl font-black shadow-xl mx-auto mb-2 relative">
                  {rank1.avatar}
                  {rank1.isCurrentUser && <span className="absolute -top-3 -right-3 text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full shadow-sm border-2 border-white z-10 font-bold animate-pulse">YOU</span>}
                </div>
                <p className="text-slate-800 font-black text-sm truncate w-24 mx-auto">{rank1.name}</p>
                <p className="text-yellow-600 text-xs font-bold">{rank1.xp} XP</p>
              </div>
              <div className="w-full h-48 bg-yellow-400 rounded-t-3xl border-b-8 border-yellow-600 flex justify-center pt-4 shadow-2xl relative"><span className="text-6xl font-black text-yellow-300/50 absolute bottom-0">1</span></div>
            </div>
          ) : null}
        </div>

        {/* JUARA 3 */}
        <div className="flex flex-col items-center w-1/3 max-w-[120px]">
          {rank3 ? (
            <div className="w-full flex flex-col items-center animate-in slide-in-from-bottom-8 duration-1000">
              <div className="mb-2 text-center">
                <div className="w-12 h-12 bg-pink-100 rounded-full border-4 border-pink-300 flex items-center justify-center text-pink-600 font-black text-lg shadow-lg mx-auto mb-2 relative">
                  {rank3.avatar}
                  {rank3.isCurrentUser && <span className="absolute -top-2 -right-2 text-[8px] bg-blue-600 text-white px-1.5 py-0.5 rounded-full shadow-sm border border-white z-10">YOU</span>}
                </div>
                <p className="text-slate-600 font-bold text-xs truncate w-20 mx-auto">{rank3.name}</p>
                <p className="text-pink-500 text-[10px] font-bold">{rank3.xp} XP</p>
              </div>
              <div className="w-full h-24 bg-pink-400 rounded-t-3xl border-b-8 border-pink-600 flex justify-center pt-4 shadow-xl relative"><span className="text-5xl font-black text-pink-300/50 absolute bottom-0">3</span></div>
            </div>
          ) : <div className="w-full h-24 bg-slate-100 rounded-t-3xl border-b-8 border-slate-200 opacity-50 relative"><span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-4xl font-black text-slate-200">3</span></div>}
        </div>
      </div>

      {/* LIST SISANYA (RANK 4 DST) */}
      {restOfPlayers.length > 0 ? (
        <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200/60 space-y-3">
          {restOfPlayers.map((user, idx) => (
            <div key={user.id} className={`flex items-center justify-between p-4 rounded-2xl border ${user.isCurrentUser ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-100'}`}>
              <div className="flex items-center gap-4">
                <span className="font-black text-slate-300 text-lg w-6">{idx + 4}</span>
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg">{user.avatar}</div>
                <div className="flex flex-col">
                  <span className={`font-bold ${user.isCurrentUser ? 'text-blue-700' : 'text-slate-600'}`}>{user.name}</span>
                  {user.isCurrentUser && <span className="text-[10px] text-blue-500 font-bold">KAMU</span>}
                </div>
              </div>
              <span className="font-bold text-slate-400 text-sm">{user.xp} XP</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 bg-slate-50/50">
          <p className="font-bold text-sm">Belum ada rival lain...</p>
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

// [UPDATED] ChatDrawer - Support Edit, Delete & Memory
const ChatDrawer = ({ isOpen, onClose, topic }) => {
  const initialMessage = { role: 'ai', text: `Hai Challenger! Ada yang bingung soal **${topic}**? Cerita sini dong!` };
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  // State untuk Edit Message
  const [editingIndex, setEditingIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  // Auto-Reset saat ditutup (Sesuai request: Data dihapus jika user keluar)
  useEffect(() => {
    if (!isOpen) {
      setMessages([initialMessage]);
      setEditingIndex(null);
      setLoading(false);
    }
  }, [isOpen, topic]);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isOpen, editingIndex]);

  // Handle Kirim Pesan Baru
  const handleSend = async () => {
    if (!input.trim()) return;
    const newMsg = { role: 'user', text: input };

    // Update UI dulu
    const newHistory = [...messages, newMsg];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    // Panggil AI dengan Memori
    const aiReply = await chatWithAI(topic, newHistory);
    setMessages(prev => [...prev, { role: 'ai', text: aiReply }]);
    setLoading(false);
  };

  // Handle Hapus Pesan
  const handleDelete = (index) => {
    if (window.confirm("Hapus pesan ini?")) {
      setMessages(prev => prev.filter((_, i) => i !== index));
    }
  };

  // Handle Mulai Edit
  const handleStartEdit = (index, text) => {
    setEditingIndex(index);
    setEditValue(text);
  };

  // Handle Simpan Edit (Regenerate Response)
  const handleSaveEdit = async (index) => {
    if (!editValue.trim()) return;

    // 1. Potong history sampai pesan yang diedit (pesan setelahnya dihapus karena konteks berubah)
    // index adalah posisi pesan user. Kita ambil 0 sampai index.
    const slicedHistory = messages.slice(0, index);

    // 2. Tambahkan pesan user yang baru
    const updatedMsg = { role: 'user', text: editValue };
    const newHistory = [...slicedHistory, updatedMsg];

    // 3. Set State & Loading
    setMessages(newHistory);
    setEditingIndex(null);
    setLoading(true);

    // 4. Minta AI jawab ulang
    const aiReply = await chatWithAI(topic, newHistory);
    setMessages(prev => [...prev, { role: 'ai', text: aiReply }]);
    setLoading(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end bg-slate-900/20 backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-md bg-white h-full flex flex-col shadow-2xl animate-in slide-in-from-right duration-300" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-blue-600 text-white">
          <h3 className="font-black text-lg flex items-center gap-2"><Sparkles size={20} className="text-yellow-300 fill-yellow-300" /> Tutor AI</h3>
          <div className="flex items-center gap-2">
            <button onClick={() => setMessages([initialMessage])} className="p-1.5 hover:bg-blue-500 rounded-lg text-xs font-bold transition-colors" title="Reset Chat">
              <RefreshCw size={16} />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-blue-500 rounded-full transition-colors"><X className="text-white" /></button>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6 bg-slate-50" ref={scrollRef}>
          {messages.map((m, i) => (
            <div key={i} className={`group flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                max-w-[85%] p-4 rounded-2xl shadow-sm text-[15px] leading-relaxed font-medium relative
                ${m.role === 'user'
                  ? 'bg-blue-600 text-white rounded-tr-none'
                  : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'}
              `}>

                {/* Tampilan Edit Mode */}
                {editingIndex === i ? (
                  <div className="flex flex-col gap-2 min-w-[200px]">
                    <textarea
                      value={editValue}
                      onChange={e => setEditValue(e.target.value)}
                      className="w-full bg-blue-700 text-white p-2 rounded-lg text-sm focus:outline-none resize-none"
                      rows={3}
                    />
                    <div className="flex justify-end gap-2">
                      <button onClick={() => setEditingIndex(null)} className="p-1 hover:bg-blue-500 rounded"><XCircle size={16} /></button>
                      <button onClick={() => handleSaveEdit(i)} className="p-1 hover:bg-blue-500 rounded"><Save size={16} /></button>
                    </div>
                  </div>
                ) : (
                  // Tampilan Normal
                  <>
                    <SimpleMarkdown text={m.text} />

                    {/* Action Buttons (Edit/Delete) - Hanya muncul saat hover & khusus pesan User */}
                    {m.role === 'user' && (
                      <div className="absolute -left-16 top-1/2 -translate-y-1/2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleStartEdit(i, m.text)} className="p-1.5 bg-white text-slate-500 rounded-full shadow-md hover:text-blue-600 hover:scale-110 transition-all">
                          <Pencil size={12} />
                        </button>
                        <button onClick={() => handleDelete(i)} className="p-1.5 bg-white text-slate-500 rounded-full shadow-md hover:text-red-600 hover:scale-110 transition-all">
                          <Trash2 size={12} />
                        </button>
                      </div>
                    )}

                    {/* Hapus pesan AI juga boleh kalau mau bersih-bersih */}
                    {m.role === 'ai' && i !== 0 && (
                      <div className="absolute -right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleDelete(i)} className="p-1.5 bg-slate-200 text-slate-500 rounded-full hover:text-red-600 hover:bg-red-100 transition-all">
                          <Trash2 size={12} />
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-slate-200 px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="flex gap-2 items-end">
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Tanya apa aja..."
              rows={1}
              className="flex-1 bg-slate-100 border-2 border-transparent focus:bg-white focus:border-blue-500 rounded-xl px-4 py-3 text-slate-800 outline-none transition-all font-bold placeholder:text-slate-400 resize-none min-h-[48px] max-h-[120px]"
              style={{ height: 'auto', overflow: 'hidden' }}
              onInput={(e) => {
                e.target.style.height = 'auto';
                e.target.style.height = e.target.scrollHeight + 'px';
              }}
            />
            <button onClick={handleSend} disabled={loading} className="p-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition-colors text-white shadow-lg shadow-blue-200 active:scale-95 transform h-[48px] w-[48px] flex items-center justify-center">
              <ArrowRight strokeWidth={3} />
            </button>
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

// [UPDATED] CyberLessonModal - Support Swipe (Mobile) & Keyboard Shortcuts (Desktop)
const CyberLessonModal = ({ lesson, onClose, onComplete, courseTitle, onOpenChat, isProgramming }) => {
  const [stage, setStage] = useState('theory');
  const [content, setContent] = useState(null);

  // Loading & Error
  const [loadingStatus, setLoadingStatus] = useState("Menginisialisasi...");
  const [isError, setIsError] = useState(false);

  // Quiz State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [quizHistory, setQuizHistory] = useState({});
  const [maxReached, setMaxReached] = useState(0);
  const [tempSelectedOption, setTempSelectedOption] = useState(null);

  // SCORING STATE
  const [mcqScore, setMcqScore] = useState(0);
  const [essayPoints, setEssayPoints] = useState(0);

  // Essay State
  const [essayCode, setEssayCode] = useState("");
  const [essayResult, setEssayResult] = useState(null);
  const [checkingEssay, setCheckingEssay] = useState(false);

  // --- TOUCH STATE (UNTUK SWIPE HP) ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // --- Load Content ---
  const loadContent = async () => {
    setIsError(false); setContent(null);
    try {
      setLoadingStatus("Menyusun materi...");
      const theoryText = await generateLessonTheory(lesson.title, courseTitle, lesson.description);
      if (!theoryText) throw new Error("Gagal generate materi.");

      setLoadingStatus("Meracik soal...");
      const context = getCurriculumContext(activeCourse, lesson.id);
      const quizData = await generateLessonQuiz(theoryText, isProgramming, context);

      if (!quizData || !quizData.multiple_choice) throw new Error("Gagal generate soal.");

      setContent({
        theory: theoryText,
        quiz: quizData.multiple_choice,
        challenge: quizData.coding_challenge || null
      });
    } catch (error) {
      console.error(error); setIsError(true);
    }
  };

  useEffect(() => { loadContent(); }, [lesson, courseTitle, activeCourse]);

  useEffect(() => {
    if (content?.challenge) setEssayCode(content.challenge.starter_code);
  }, [content]);

  useEffect(() => { setTempSelectedOption(null); }, [currentQIndex]);

  // --- CORE ACTIONS ---

  const handleCheck = () => {
    // Cegah double check atau check kosong
    if (tempSelectedOption === null || quizHistory[currentQIndex]) return;

    const currentQ = content.quiz[currentQIndex];
    const isCorrect = tempSelectedOption === currentQ.correctAnswer;

    // Feedback Dinamis
    let feedbackText = "";
    if (Array.isArray(currentQ.feedback) && currentQ.feedback[tempSelectedOption]) {
      feedbackText = currentQ.feedback[tempSelectedOption];
    } else {
      feedbackText = isCorrect
        ? "Jawaban kamu benar! 🎉 " + (currentQ.explanation || "")
        : "Kurang tepat. 😅 " + (currentQ.explanation || "");
    }

    const feedbackObj = { correct: isCorrect, text: feedbackText };
    setQuizHistory(prev => ({ ...prev, [currentQIndex]: { selectedOption: tempSelectedOption, feedback: feedbackObj } }));

    if (isCorrect) setMcqScore(s => s + 1);
    if (currentQIndex === maxReached) { setMaxReached(m => m + 1); }
  };

  const handleNext = () => {
    if (currentQIndex < (content.quiz.length) - 1) {
      setCurrentQIndex(p => p + 1);
    } else {
      if (isProgramming && content.challenge) {
        setStage('essay');
      } else {
        setStage('summary');
      }
    }
  };

  const handlePrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(p => p - 1);
    }
  };

  const jumpToQuestion = (index) => {
    if (index <= maxReached && index < content.quiz.length) { setCurrentQIndex(index); setStage('quiz'); }
  };

  // --- KEYBOARD SHORTCUTS (DESKTOP) ---
  useEffect(() => {
    if (stage !== 'quiz') return;

    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowLeft':
          handlePrev();
          break;
        case 'ArrowRight':
          // Hanya boleh ke kanan jika sudah pernah sampai sana (maxReached)
          if (currentQIndex < maxReached) {
            // Pindah ke soal berikutnya
            setCurrentQIndex(prev => Math.min(prev + 1, content.quiz.length - 1));
          } else if (quizHistory[currentQIndex]) {
            // Jika soal ini sudah dijawab, boleh lanjut (handleNext logic)
            handleNext();
          }
          break;
        case 'Enter':
          // LOGIKA ENTER PINTAR:
          // 1. Jika belum jawab & sudah pilih opsi -> CEK JAWABAN
          if (!quizHistory[currentQIndex] && tempSelectedOption !== null) {
            handleCheck();
          }
          // 2. Jika sudah jawab -> LANJUT KE SOAL BERIKUTNYA
          else if (quizHistory[currentQIndex]) {
            handleNext();
          }
          break;
        // Shortcut pilih jawaban (1, 2, 3, 4 atau A, B, C, D)
        case '1': case 'a': if (!quizHistory[currentQIndex]) setTempSelectedOption(0); break;
        case '2': case 'b': if (!quizHistory[currentQIndex]) setTempSelectedOption(1); break;
        case '3': case 'c': if (!quizHistory[currentQIndex]) setTempSelectedOption(2); break;
        case '4': case 'd': if (!quizHistory[currentQIndex]) setTempSelectedOption(3); break;
        default: break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, currentQIndex, maxReached, tempSelectedOption, quizHistory, content]);


  // --- TOUCH HANDLERS (SWIPE HP) ---
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe Kiri (Next) -> Logika sama kayak ArrowRight
      if (currentQIndex < maxReached) {
        setCurrentQIndex(prev => Math.min(prev + 1, content.quiz.length - 1));
      } else if (quizHistory[currentQIndex]) {
        handleNext();
      }
    } else if (isRightSwipe) {
      // Swipe Kanan (Prev)
      handlePrev();
    }
  };

  // --- Handle Essay Check ---
  const handleCheckEssay = async () => {
    setCheckingEssay(true);
    const res = await verifyQuestSubmission(content.challenge.question, essayCode);
    setEssayResult(res);

    let points = 0;
    if (res.accuracy === 100) points = 2;
    else if (res.accuracy >= 50) points = 1;

    setEssayPoints(points);
    setCheckingEssay(false);
  };

  if (isError) return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-white"><div className="text-center"><h3 className="font-bold text-lg">Gagal memuat.</h3><button onClick={onClose} className="mt-4 bg-slate-200 px-4 py-2 rounded-lg">Tutup</button></div></div>);

  if (!content) return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      <span className="font-bold tracking-widest text-sm text-blue-500 animate-pulse uppercase">{loadingStatus}</span>
    </div>
  );

  const finalScore = mcqScore + essayPoints;
  const kkm = Math.ceil(content.quiz.length / 2);
  const passed = finalScore > kkm;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-4 animate-in zoom-in-95 duration-200">
      <div className="w-full max-w-3xl h-[90vh] bg-white rounded-[40px] shadow-2xl flex flex-col overflow-hidden border-8 border-white">

        {/* HEADER */}
        <div className="p-6 border-b-2 border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors"><X className="text-slate-400" /></button>
              <div className="flex gap-1">
                {content.quiz.map((_, i) => {
                  let dotClass = "w-4 bg-slate-200 cursor-not-allowed";
                  if (stage === 'quiz' && i === currentQIndex) { dotClass = "w-8 bg-blue-500"; }
                  else if (i <= maxReached || stage === 'essay' || stage === 'summary') {
                    const hist = quizHistory[i];
                    if (hist?.feedback?.correct) dotClass = "w-4 bg-green-400 cursor-pointer";
                    else if (hist) dotClass = "w-4 bg-red-400 cursor-pointer";
                    else dotClass = "w-4 bg-slate-300 cursor-pointer";
                  }
                  return <button key={i} onClick={() => jumpToQuestion(i)} disabled={stage === 'essay' || stage === 'summary' ? false : i > maxReached} className={`h-2 rounded-full transition-all ${dotClass}`} />;
                })}
                {content.challenge && (
                  <div className={`h-2 rounded-full transition-all ml-2 ${stage === 'essay' ? 'w-8 bg-purple-500' : (stage === 'summary' ? (essayPoints > 0 ? 'w-4 bg-green-400' : 'w-4 bg-red-400') : 'w-4 bg-slate-200')} `} />
                )}
              </div>
              <div className="w-8"></div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-8 relative"
          // PASANG EVENT TOUCH DI SINI (CONTAINER UTAMA)
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >

          {/* STAGE 1: TEORI */}
          {stage === 'theory' && (
            <div className="max-w-xl mx-auto">
              <h2 className="text-3xl font-black text-slate-800 mb-6">{lesson.title}</h2>
              <div className="prose prose-slate prose-lg mb-8"><SimpleMarkdown text={content.theory} /></div>
              <div className="sticky bottom-0 bg-white/80 backdrop-blur p-4 border-t border-slate-100">
                <button onClick={() => setStage('quiz')} className="w-full bg-blue-500 hover:bg-blue-400 text-white font-black py-4 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all btn-3d shadow-lg shadow-blue-200">
                  MULAI KUIS (ENTER)
                </button>
              </div>
            </div>
          )}

          {/* STAGE 2: KUIS MCQ */}
          {stage === 'quiz' && (
            <div className="max-w-xl mx-auto pt-4">
              <div className="mb-6 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pertanyaan {currentQIndex + 1}</span>
                <button onClick={() => setStage('theory')} className="flex items-center gap-2 text-xs font-bold text-blue-500 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"><BookOpen size={14} /> LIHAT MATERI</button>
              </div>

              <h3 className="text-xl font-bold text-slate-700 mb-8 animate-in fade-in slide-in-from-right-4 duration-300">
                {content.quiz[currentQIndex].question}
              </h3>

              <div className="space-y-4">
                {content.quiz[currentQIndex].options.map((opt, idx) => {
                  let stateStyle = "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-blue-300";
                  const isAnswered = !!quizHistory[currentQIndex];
                  const hist = quizHistory[currentQIndex];

                  if (isAnswered) {
                    if (idx === content.quiz[currentQIndex].correctAnswer) stateStyle = "bg-green-100 border-green-400 text-green-700 opacity-100";
                    else if (idx === hist.selectedOption) stateStyle = "bg-red-100 border-red-400 text-red-700 opacity-60";
                    else stateStyle = "bg-slate-50 border-slate-100 text-slate-300 opacity-50";
                  } else if (idx === tempSelectedOption) { stateStyle = "bg-blue-100 border-blue-400 text-blue-700 ring-2 ring-blue-200"; }

                  return (
                    <button key={idx} onClick={() => !isAnswered && setTempSelectedOption(idx)} disabled={isAnswered} className={`w-full p-5 rounded-2xl border-2 border-b-4 text-left font-bold transition-all ${stateStyle} ${!isAnswered && 'active:border-b-2 active:translate-y-1'}`}>
                      {opt}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8">
                {!quizHistory[currentQIndex] ? (
                  <button onClick={handleCheck} disabled={tempSelectedOption === null} className="w-full bg-green-500 text-white font-black py-4 rounded-2xl border-b-4 border-green-700 active:border-b-0 active:translate-y-1 transition-all btn-3d disabled:opacity-50">
                    KUNCI JAWABAN (ENTER) 🔒
                  </button>
                ) : (
                  <div className="animate-in slide-in-from-bottom-4 fade-in duration-300">
                    <div className={`p-4 rounded-2xl mb-4 ${quizHistory[currentQIndex].feedback.correct ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                      <p className="font-bold mb-1">{quizHistory[currentQIndex].feedback.correct ? "Kamu Benar! 🎉" : "Ups, kurang tepat 😅"}</p>
                      <div className="text-sm"><SimpleMarkdown text={quizHistory[currentQIndex].feedback.text} /></div>
                    </div>
                    <button onClick={handleNext} className="w-full bg-blue-500 text-white font-black py-4 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all btn-3d">
                      LANJUT (ENTER) 👉
                    </button>
                  </div>
                )}
              </div>

              {/* Petunjuk Shortcut Desktop (Hanya muncul di layar besar) */}
              <div className="hidden md:flex justify-center gap-4 mt-8 text-[10px] text-slate-400 font-bold uppercase tracking-wider opacity-60">
                <span>[ ← ] Back</span>
                <span>[ Enter ] Confirm/Next</span>
                <span>[ → ] Next</span>
                <span>[ 1-4 ] Pilih Jawaban</span>
              </div>
            </div>
          )}

          {/* STAGE 3: ESSAY CODING */}
          {stage === 'essay' && content.challenge && (
            <div className="max-w-xl mx-auto pt-4 animate-in slide-in-from-right-8">
              <div className="mb-4 bg-purple-100 text-purple-700 px-4 py-2 rounded-xl font-bold border-l-4 border-purple-500 flex items-center gap-2">
                <Terminal size={18} /> TANTANGAN KODING
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-4">{content.challenge.question}</h3>

              <div className="bg-slate-900 rounded-xl overflow-hidden border-4 border-slate-800 mb-4">
                <div className="bg-slate-800 px-4 py-2 text-xs text-slate-400 font-mono flex justify-between">
                  <span>editor.py</span>
                  <span>Python/R</span>
                </div>
                <textarea
                  value={essayCode}
                  onChange={e => setEssayCode(e.target.value)}
                  className="w-full h-48 bg-[#0d0d0d] text-blue-300 font-mono p-4 resize-none focus:outline-none text-sm"
                  spellCheck="false"
                />
              </div>

              {essayResult && (
                <div className={`p-4 rounded-2xl mb-4 border-l-4 ${essayResult.accuracy >= 50 ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold">{essayResult.accuracy === 100 ? "Sempurna! (2 Poin)" : essayResult.accuracy >= 50 ? "Lumayan (1 Poin)" : "Perbaiki lagi (0 Poin)"}</h4>
                    <span className="text-xs font-black bg-white/50 px-2 py-1 rounded">Akurasi: {essayResult.accuracy}%</span>
                  </div>
                  <div className="text-sm"><SimpleMarkdown text={essayResult.feedback} /></div>
                </div>
              )}

              <div className="flex gap-3">
                <button onClick={handleCheckEssay} disabled={checkingEssay} className="flex-1 bg-purple-500 hover:bg-purple-400 text-white font-bold py-3 rounded-xl border-b-4 border-purple-700 active:border-b-0 active:translate-y-1 btn-3d transition-all flex justify-center items-center gap-2">
                  {checkingEssay ? <RefreshCw className="animate-spin" /> : <Play fill="currentColor" />} {checkingEssay ? "MENILAI..." : "CEK KODE"}
                </button>

                <button onClick={() => setStage('summary')} className={`flex-1 bg-slate-200 hover:bg-slate-300 text-slate-600 font-bold py-3 rounded-xl border-b-4 border-slate-400 active:border-b-0 active:translate-y-1 btn-3d transition-all ${essayPoints > 0 ? 'bg-green-500 text-white border-green-700 hover:bg-green-400' : ''}`}>
                  {essayPoints > 0 ? "LANJUT HASIL 🏆" : "LEWATI"}
                </button>
              </div>
            </div>
          )}

          {/* STAGE 4: SUMMARY */}
          {stage === 'summary' && (
            <div className="flex flex-col items-center justify-center h-full text-center">
              {passed ? (
                <div className="mb-6 flex flex-col items-center animate-bounce"><Trophy size={80} className="text-yellow-400 drop-shadow-lg" /><h2 className="text-3xl font-black text-yellow-500 mt-2">MISI SELESAI!</h2></div>
              ) : (
                <div className="mb-6 flex flex-col items-center"><AlertTriangle size={80} className="text-red-500 drop-shadow-lg" /><h2 className="text-3xl font-black text-red-500 mt-2">MISI GAGAL</h2></div>
              )}

              <div className="bg-slate-50 p-6 rounded-2xl border-2 border-slate-100 mb-8 w-full max-w-sm">
                <p className="text-slate-400 font-bold text-xs uppercase mb-2">Rapor Nilai</p>
                <div className="flex justify-between text-sm mb-1"><span>Pilihan Ganda:</span> <span className="font-bold">{mcqScore}</span></div>
                <div className="flex justify-between text-sm mb-3 border-b border-slate-200 pb-3"><span>Coding Challenge:</span> <span className="font-bold">{essayPoints}</span></div>
                <div className="flex justify-between text-lg font-black text-slate-800"><span>TOTAL SKOR:</span> <span>{finalScore}</span></div>
                <div className="mt-2 text-xs text-center text-slate-400">Target Lulus: &gt; {kkm} Poin</div>
              </div>

              <div className="flex gap-4 w-full max-w-sm">
                {passed ? (
                  <button onClick={() => {
                    onComplete({
                      mcqScore,
                      essayPoints,
                      totalQuestions: content.quiz.length,
                      hasEssay: !!content.challenge
                    });
                    onClose();
                  }} className="flex-1 bg-blue-500 text-white font-black py-4 rounded-2xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 transition-all btn-3d">
                    KEMBALI KE MAP
                  </button>
                ) : (
                  <button onClick={() => {
                    setStage('quiz'); setCurrentQIndex(0); setMcqScore(0); setEssayPoints(0); setQuizHistory({}); setMaxReached(0); setTempSelectedOption(null); setEssayResult(null); setEssayCode(content.challenge?.starter_code || "");
                  }} className="flex-1 bg-slate-200 text-slate-600 font-black py-4 rounded-2xl border-b-4 border-slate-300 active:border-b-0 active:translate-y-1 transition-all btn-3d">
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

// --- KOMPONEN BARU: SETUP PROFIL ---
const SetupProfileModal = ({ isOpen, onSave }) => {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  return (
    // z-index 100 biar paling atas, backdrop gelap biar fokus
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-700">
      <div className="w-full max-w-md bg-white rounded-[40px] p-8 shadow-2xl border-8 border-white ring-4 ring-blue-500/30 text-center relative overflow-hidden">
        {/* Hiasan Atas */}
        <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <img
          src="/logo.png"
          alt="Logo"
          className="w-24 h-24 rounded-full mx-auto mb-6 border-4 border-blue-100 shadow-xl animate-bounce object-contain bg-white"
        />

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
const WelcomeScreen = ({ onLogin, onGuestLogin }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 animate-in fade-in duration-700">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl overflow-hidden border-8 border-white ring-4 ring-blue-100 text-center">

        {/* Header Visual */}
        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-10 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <img
            src="/logo.png"
            alt="App Logo"
            className="w-24 h-24 rounded-3xl object-contain bg-white/20 backdrop-blur-md shadow-lg mb-4 ring-4 ring-white/30 p-2"
          />
          <h1 className="text-3xl font-black text-white tracking-tight">Level<span className="text-yellow-300">Up</span></h1>
          <p className="text-blue-100 font-medium text-sm mt-2">Platform Belajar Dengan AI #1</p>
        </div>

        {/* Konten Tombol */}
        <div className="p-8">
          <h2 className="text-2xl font-black text-slate-800 mb-2">Pilih Akses Masuk</h2>
          <p className="text-slate-500 mb-8 leading-relaxed text-sm">
            Simpan progresmu selamanya dengan Google, atau coba dulu sebagai Tamu.
          </p>

          <div className="space-y-4">
            {/* Tombol 1: Google */}
            <button
              onClick={onLogin}
              className="w-full py-4 bg-white border-2 border-slate-200 hover:border-blue-500 hover:bg-blue-50 text-slate-700 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all group shadow-sm hover:shadow-md active:scale-95"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.11c-.22-.66-.35-1.36-.35-2.11s.13-1.45.35-2.11V7.05H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.95l3.66-2.84z" />
                <path fill="#EA4335" d="M12 4.62c1.61 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.05l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="group-hover:text-blue-600">Masuk dengan Google</span>
            </button>

            {/* Separator */}
            <div className="flex items-center gap-4 opacity-50">
              <div className="h-px bg-slate-300 flex-1"></div>
              <span className="text-xs font-bold text-slate-400">ATAU</span>
              <div className="h-px bg-slate-300 flex-1"></div>
            </div>

            {/* Tombol 2: Tamu / Anonim */}
            <button
              onClick={onGuestLogin}
              className="w-full py-4 bg-slate-800 text-white hover:bg-slate-700 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-slate-300 active:scale-95"
            >
              <Zap size={20} className="text-yellow-400 fill-yellow-400" />
              <span>Lanjut Sebagai Tamu</span>
            </button>
          </div>

          <p className="mt-6 text-[10px] text-slate-400 font-bold text-center leading-tight">
            *Data tamu tersimpan di perangkat ini saja.<br />Jika cache dihapus, progres hilang.
          </p>
        </div>
      </div>
    </div>
  );
};

const SyncConfirmationModal = ({ isOpen, onMerge, onSeparate, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 animate-in zoom-in-95">
      <div className="bg-white w-full max-w-md rounded-[32px] p-8 text-center border-4 border-white ring-4 ring-blue-500">
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <RefreshCw size={32} />
        </div>
        <h2 className="text-2xl font-black text-slate-800 mb-2">Simpan Progres Tamu?</h2>
        <p className="text-slate-500 text-sm font-semibold mb-8">
          Kami mendeteksi kamu punya data XP sebagai Tamu. Mau digabung ke akun Google barumu?
        </p>
        <div className="space-y-3">
          <button onClick={onMerge} className="w-full py-3 bg-blue-500 hover:bg-blue-400 text-white font-black rounded-xl border-b-4 border-blue-700 active:border-b-0 active:translate-y-1 btn-3d transition-all">
            YA, GABUNGKAN DATA 🚀
          </button>
          <button onClick={onSeparate} className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold rounded-xl transition-all">
            TIDAK, MULAI LEMBARAN BARU
          </button>
        </div>
      </div>
    </div>
  );
};

const ConflictModal = ({ isOpen, localStats, remoteStats, onKeepRemote, onCancel }) => {
  if (!isOpen) return null;

  const remoteWR = remoteStats.totalProjectsFinished > 0
    ? Math.round((remoteStats.totalProjectScore || 0) / remoteStats.totalProjectsFinished)
    : 0;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-in zoom-in-95">
      <div className="bg-white w-full max-w-lg rounded-[32px] p-8 text-center border-8 border-white ring-4 ring-orange-500 relative overflow-hidden">

        <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <AlertTriangle size={32} />
        </div>

        <h2 className="text-2xl font-black text-slate-800 mb-2">Akun Lama Ditemukan!</h2>
        <p className="text-slate-500 text-sm font-semibold mb-6">
          Email ini sudah terdaftar sebagai <strong>{remoteStats.displayName}</strong>.
          <br />Pilih akun mana yang ingin dimainkan?
        </p>

        {/* PERBANDINGAN DATA */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {/* Data Tamu (Saat Ini) */}
          <div className="p-4 bg-slate-50 rounded-2xl border-2 border-slate-200">
            <p className="text-[10px] font-black uppercase text-slate-400 mb-2">GUEST SAAT INI</p>
            <div className="text-xl font-black text-slate-600">{localStats.xp} XP</div>
            <div className="text-xs font-bold text-slate-400">Level Kamu</div>
          </div>

          {/* Data Google (Lama) */}
          <div className="p-4 bg-orange-50 rounded-2xl border-2 border-orange-200 relative">
            <div className="absolute -top-3 -right-2 bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded-full shadow-sm">DISARANKAN</div>
            <p className="text-[10px] font-black uppercase text-orange-400 mb-2">AKUN GOOGLE</p>
            <div className="text-xl font-black text-orange-600">{remoteStats.xp} XP</div>
            <div className="text-xs font-bold text-orange-400">Winrate: {remoteWR}%</div>
          </div>
        </div>

        <div className="space-y-3">
          <button onClick={onKeepRemote} className="w-full py-4 bg-orange-500 hover:bg-orange-400 text-white font-black rounded-xl border-b-4 border-orange-700 active:border-b-0 active:translate-y-1 btn-3d transition-all">
            YA, GUNAKAN AKUN GOOGLE ✅
          </button>
          <button onClick={onCancel} className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-500 font-bold rounded-xl transition-all">
            BATALKAN (Kembali ke Awal)
          </button>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
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

  const [showSyncModal, setShowSyncModal] = useState(false);
  const [showConflictModal, setShowConflictModal] = useState(false);
  const [conflictData, setConflictData] = useState({ local: null, remote: null });
  const [pendingGoogleLogin, setPendingGoogleLogin] = useState(false); // Trigger penanda

  const activeCourse = COURSES_DATA.find(c => c.id === activeCourseId) || COURSES_DATA[0];
  const activeTheme = getTheme(activeCourse.color);

  // Winrate Calculation for App Level (Passed to Leaderboard)
  const projectWinRate = userStats.totalProjectsFinished > 0
    ? Math.round((userStats.totalProjectScore || 0) / userStats.totalProjectsFinished)
    : 0;

  // --- AUTH & DATA SYNC (VERSI PERBAIKAN) ---

  // 1. useEffect PERTAMA: Khusus menangani Login/Logout (Supaya Loading cepat hilang)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u);
      } else {
        setUser(null);
        setUserStats({ xp: 0, lessonsCompleted: 0 });
      }
      // PENTING: Apapun yang terjadi (sukses/gagal), Loading HARUS berhenti di sini
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // 2. useEffect KEDUA: Smart Data Fetching & Auto-Restore
  useEffect(() => {
    if (!user) {
      console.log("⛔ [DB] User belum login. Listener tidak dijalankan.");
      return;
    }

    console.log("🔄 [DB] Memulai listener database untuk User ID:", user.uid);
    let isMounted = true; // Flag untuk mencegah memory leak

    // A. Ambil Stats (CORE LOGIC)
    const statsRef = doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main');

    const unsubStats = onSnapshot(statsRef, async (s) => {
      if (!isMounted) return;

      console.log(`📥 [DB] Snapshot Stats diterima. Exists: ${s.exists()} | Source: ${s.metadata.hasPendingWrites ? 'Local' : 'Server'}`);

      if (s.exists()) {
        // [KASUS 1] Data SUDAH ADA di Firestore 
        // (Bisa data normal user lama, atau hasil restore yang baru saja sukses ditulis)
        const data = s.data();
        console.log("✅ [DB] Data valid ditemukan:", data);

        setUserStats(data);

        // KUNCI: Data valid sudah masuk, baru kita izinkan UI tampil
        // Ini akan menghilangkan Loading screen dan (jika ada nama) tidak akan memunculkan Modal Setup
        setIsDataLoaded(true);
      } else {
        // [KASUS 2] Data KOSONG di Firestore
        console.log("⚠️ [DB] Dokumen stats kosong. Mengecek status user...");

        // Cek LocalStorage: Apakah ada "harta karun" (backup) yang tertinggal?
        const savedBackup = localStorage.getItem('guest_backup');

        if (user.isAnonymous && savedBackup) {
          // --- LOGIKA RESTORE ---
          console.log("♻️ [RESTORE] Terdeteksi User Tamu dengan Backup Lokal.");

          // PENTING: JANGAN set setIsDataLoaded(true) di sini!
          // Biarkan UI tetap dalam status "Loading..." agar Modal Setup Profile TIDAK MUNCUL.

          try {
            const backupData = JSON.parse(savedBackup);
            console.log("📦 [RESTORE] Isi Backup:", backupData);

            // Tulis data backup ke Firestore UID yang baru
            console.log("⏳ [RESTORE] Menulis data ke Firestore...");

            await setDoc(statsRef, {
              ...backupData,
              restoredAt: serverTimestamp() // Penanda bahwa ini hasil restore
            }, { merge: true });

            console.log("💾 [RESTORE] Penulisan BERHASIL. Menunggu snapshot berikutnya...");

            // KITA STOP DI SINI. 
            // Jangan lakukan apa-apa lagi.
            // Tindakan 'setDoc' di atas akan memicu 'onSnapshot' ini berjalan LAGI.
            // Di putaran berikutnya, dia akan masuk ke [KASUS 1] karena s.exists() sudah true.
            return;

          } catch (e) {
            console.error("❌ [RESTORE] Gagal memulihkan backup:", e);
            // Jika restore error fatal, terpaksa anggap user baru biar tidak stuck
            setUserStats({ xp: 0, lessonsCompleted: 0 });
            setIsDataLoaded(true);
          }
        } else {
          // [KASUS 3] Benar-benar User Baru (Tidak ada backup / Bukan Anonim)
          console.log("✨ [NEW] User baru murni (atau User Google baru). Menginisialisasi data awal...");

          // Init data default 0 XP
          setDoc(statsRef, { xp: 0, lessonsCompleted: 0 }, { merge: true });

          setUserStats({ xp: 0, lessonsCompleted: 0 });

          // Buka gerbang UI -> Karena stats kosong (belum ada nama), Modal Setup Profile AKAN MUNCUL (Sesuai harapan)
          setIsDataLoaded(true);
        }
      }
    }, (error) => {
      console.error("🔥 [DB ERROR] Gagal mengambil Stats:", error);
      setIsDataLoaded(true); // Fallback agar aplikasi tidak macet di loading screen selamanya
    });

    // B. Ambil Progress (Logika Standar)
    const progRef = collection(db, 'artifacts', appId, 'users', user.uid, 'progress');
    const unsubProg = onSnapshot(progRef, (s) => {
      console.log(`📚 [DB] Progress update. Jumlah course: ${s.size}`);
      const p = {};
      s.forEach(d => p[d.id] = d.data());
      setUserProgress(p);
    });

    return () => {
      console.log("🔌 [DB] Membersihkan listener...");
      isMounted = false;
      unsubStats();
      unsubProg();
    };
  }, [user]);

  // 3. LOGIC BACKUP: Simpan ke LocalStorage (Safe Guard)
  useEffect(() => {
    // Hanya backup jika:
    // 1. User Anonim
    // 2. Data SUDAH dimuat dari DB (isDataLoaded) -> Mencegah overwrite backup dengan data kosong saat inisialisasi
    // 3. Punya progress (XP > 0)
    if (user && user.isAnonymous && isDataLoaded && userStats.xp > 0) {
      localStorage.setItem('guest_backup', JSON.stringify(userStats));
    }
  }, [user, userStats, isDataLoaded]);

  // [UPDATED] Handle Complete: Simpan Skor ke Database
  const handleLessonComplete = async (results) => {
    if (!user || !activeLesson) return;

    // Ambil data hasil (kasih default 0 jika error/kosong)
    const mcqScore = results?.mcqScore || 0;
    const essayPoints = results?.essayPoints || 0;
    const totalQuestions = results?.totalQuestions || 0;
    const hasEssay = results?.hasEssay || false;

    // --- RUMUS XP ---
    const xpFromMcq = mcqScore * 10;
    const xpFromEssay = essayPoints * 25;
    const totalXpGained = xpFromMcq + xpFromEssay;

    // --- FORMAT SKOR ---
    // Hitung skor akhir untuk ditampilkan di Map
    const finalScore = mcqScore + (essayPoints > 0 ? 1 : 0);
    const maxScore = totalQuestions + (hasEssay ? 1 : 0);

    // 1. Simpan Progress Lengkap
    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'progress', activeLesson.id), {
      completed: true,
      score: finalScore,      // PENTING: Ini data angka yang akan ditampilkan
      maxScore: maxScore,     // PENTING: Ini data total soal
      xpEarned: totalXpGained,
      completedAt: serverTimestamp()
    }, { merge: true });

    // 2. Update Total XP User
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), {
      xp: increment(totalXpGained),
      lessonsCompleted: increment(1)
    });
  };

  const handleQuestComplete = async (xp) => {
    if (!user) return;
    await updateDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), { xp: increment(xp) });
  };

  // Helper: Eksekusi Login Google Sebenarnya + AUTO CLEANUP
  const performGoogleSignIn = async (shouldMergeAnonData) => {
    const provider = new GoogleAuthProvider();

    // 1. Simpan data Tamu (Guest) saat ini
    const currentGuestStats = { ...userStats };
    const currentGuestID = user ? user.uid : null;
    const isGuest = user ? user.isAnonymous : false;

    // 2. Hitung WR
    const guestWR = currentGuestStats.totalProjectsFinished > 0
      ? Math.round((currentGuestStats.totalProjectScore || 0) / currentGuestStats.totalProjectsFinished)
      : 0;

    // 3. CEK KONDISI SAMPAH (0 XP & 0 WR)
    const isTrashAccount = currentGuestStats.xp === 0 && guestWR === 0;

    try {
      const result = await signInWithPopup(auth, provider);
      const googleUser = result.user;

      // ============================================================
      // 🔥 SKENARIO 1: AKUN TAMU SAMPAH (0 XP) -> LANGSUNG HAPUS
      // ============================================================
      if (isGuest && isTrashAccount && currentGuestID) {
        console.warn(`🧹 [CLEANUP] Membersihkan TOTAL akun tamu sampah ${currentGuestID}...`);
        const batch = writeBatch(db);

        batch.delete(doc(db, 'artifacts', appId, 'users', currentGuestID, 'stats', 'main'));

        // Cek sisa progress/project kalau ada
        const progQ = await getDocs(collection(db, 'artifacts', appId, 'users', currentGuestID, 'progress'));
        progQ.forEach(d => batch.delete(d.ref));

        const projQ = await getDocs(collection(db, 'artifacts', appId, 'users', currentGuestID, 'projects'));
        projQ.forEach(d => batch.delete(d.ref));

        await batch.commit();
        localStorage.removeItem('guest_backup');

        console.log("✨ [CLEANUP] Database akun tamu bersih total!");
        setShowSyncModal(false);
        return;
      }

      // ... (Cek Konflik Data Google TETAP SAMA) ...
      const googleStatsRef = doc(db, 'artifacts', appId, 'users', googleUser.uid, 'stats', 'main');
      const googleStatsSnap = await getDoc(googleStatsRef);

      if (shouldMergeAnonData && googleStatsSnap.exists() && googleStatsSnap.data().xp > 0) {
        setConflictData({ local: currentGuestStats, remote: googleStatsSnap.data() });
        setShowConflictModal(true);
        setShowSyncModal(false);
        return;
      }

      // ============================================================
      // 🔥 SKENARIO 2: MERGE DATA (GUEST XP > 0) -> PINDAH & HAPUS
      // ============================================================
      if (shouldMergeAnonData) {
        console.log(`🚀 [MERGE] Memindahkan data ${currentGuestStats.xp} XP ke akun Google...`);
        const finalName = googleUser.displayName || currentGuestStats.displayName || "Challenger";

        // 1. TULIS DATA KE AKUN GOOGLE
        await setDoc(googleStatsRef, {
          ...currentGuestStats,
          displayName: finalName,
          mergedAt: serverTimestamp(),
          mergedFrom: currentGuestID // Jejak audit
        }, { merge: true });

        // 2. PINDAHKAN PROGRESS BELAJAR (Opsional tapi bagus)
        // Kalau mau perfect, kita baca progress tamu dan tulis ke Google juga.
        // Tapi untuk sekarang, kita fokus ke Stats dulu sesuai request.

        // 3. 🔥 DEEP CLEAN AKUN TAMU LAMA (4cB...) 🔥
        // Agar ID lama tidak jadi sampah, kita hapus total sekarang.
        if (currentGuestID) {
          console.log(`🧹 [MERGE-CLEANUP] Menghapus jejak akun tamu lama ${currentGuestID}...`);
          const batch = writeBatch(db);

          // Hapus Stats
          batch.delete(doc(db, 'artifacts', appId, 'users', currentGuestID, 'stats', 'main'));

          // Hapus Progress
          const progressSnaps = await getDocs(collection(db, 'artifacts', appId, 'users', currentGuestID, 'progress'));
          progressSnaps.forEach(d => batch.delete(d.ref));

          // Hapus Projects
          const projectsSnaps = await getDocs(collection(db, 'artifacts', appId, 'users', currentGuestID, 'projects'));
          projectsSnaps.forEach(d => batch.delete(d.ref));

          await batch.commit();
        }

        localStorage.removeItem('guest_backup');
        console.log("✅ [MERGE] Sukses! Data pindah ke Google, Akun Tamu dimusnahkan.");
      }

      setShowSyncModal(false);

    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  // --- ACTIONS UNTUK MODAL KONFLIK ---

  // Pilihan 1: "Ya, Gunakan Akun Google"
  const resolveConflictUseRemote = () => {
    // Saat ini posisi user SUDAH login sebagai Google (karena signInWithPopup sudah sukses di awal).
    // Kita hanya perlu menutup modal.
    // Tampilan otomatis refresh ke data Google (50 XP) karena useEffect mendeteksi user Google.

    // PENTING: Kita TIDAK menjalankan deleteDoc untuk Guest ID.
    // Jadi data Guest 2 (10 XP) tetap aman di database (orphaned), sesuai request "jangan dibuang datanya".

    setShowConflictModal(false);
    alert(`Berhasil beralih ke akun ${conflictData.remote.displayName}!`);
  };

  // Pilihan 2: "Batalkan"
  const resolveConflictCancel = async () => {
    // User ingin membatalkan penggunaan akun Google ini.
    // Kita Logout dari Google.
    await signOut(auth);

    // User akan kembali ke WelcomeScreen.
    // Data Guest 2 juga TIDAK dihapus.

    setShowConflictModal(false);
  };

  // Fungsi untuk menyimpan nama pertama kali
  const handleInitialSetup = async (name) => {
    if (!user) return;
    const cleanName = name.trim().slice(0, 12);
    await setDoc(doc(db, 'artifacts', appId, 'users', user.uid, 'stats', 'main'), {
      displayName: cleanName
    }, { merge: true });
    setUserStats(prev => ({ ...prev, displayName: cleanName }));
  };

  const handleGuestLogin = async () => {
    setLoading(true);
    try {
      await signInAnonymously(auth);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  // --- FITUR LOGIN GOOGLE (SYNC DATA) ---
  const handleGoogleLogin = async () => {
    if (user && user.isAnonymous) {
      // Jika sedang Anonim, tanya dulu
      setShowSyncModal(true);
    } else {
      // Belum login sama sekali, langsung pop-up
      performGoogleSignIn(false);
    }
  };

  const handleLogout = async () => {
    if (confirm("Yakin mau logout?")) {
      await signOut(auth);
      // Setelah logout, otomatis akan kembali ke WelcomeScreen karena user jadi null
    }
  };

  // FITUR BARU: GANTI NAMA USER
  const handleRename = async () => {
    if (!user) return;
    const newName = prompt("Masukkan nama panggilan baru kamu (Max 10 huruf):");
    if (newName && newName.trim().length > 0) {
      handleInitialSetup(newName);
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50"><Loading /></div>;

  // 1. Gerbang Depan (Jika belum login)
  if (!user) {
    return <WelcomeScreen onLogin={() => handleGoogleLogin()} onGuestLogin={handleGuestLogin} />;
  }

  // 2. Dashboard Aplikasi
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen overflow-hidden bg-slate-50 text-slate-800 font-sans selection:bg-pink-200 selection:text-pink-900">

        <Sidebar
          userStats={userStats}
          userName={userStats.displayName || "Loading..."}
          onRename={handleRename}
          handleGoogleLogin={handleGoogleLogin}
          onLogout={handleLogout}
          currentView={currentView}
          setCurrentView={setCurrentView}
          onOpenCodeLab={() => setShowCodeLab(true)}
          onOpenProject={() => setShowProjectModal(true)}
          onOpenUplink={() => setShowUplink(true)}
          isAnonymous={user.isAnonymous}
          showCodeLab={activeCourse.isProgramming}
        />

        <main className="flex-1 relative overflow-y-auto hide-scrollbar">
          {/* Header Mobile */}
          <div className="md:hidden flex justify-between items-center px-4 py-4 bg-white border-b border-slate-100 sticky top-0 z-30 shadow-sm">
            <div className="flex items-center gap-2">
              <button onClick={handleRename} className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Logo"
                  className="w-10 h-10 rounded-full object-contain bg-white shadow-sm border border-slate-100"
                />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-400 uppercase leading-none mb-1">Challenger</p>
                  <h1 className="font-black text-slate-800 text-sm truncate max-w-[120px]">@{userStats.displayName || "KAMU"}</h1>
                </div>
              </button>
            </div>

            {/* BAGIAN KANAN: XP & ACTION BUTTONS */}
            <div className="flex items-center gap-2">
              {/* 1. XP Bubble */}
              <div className="flex items-center gap-1 font-black text-slate-700 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 text-xs">
                <Zap className="text-yellow-500 fill-yellow-500" size={14} /> {userStats.xp}
              </div>

              {/* 2. LOGIKA TOMBOL DINAMIS (Sign In vs Logout) */}
              {user.isAnonymous ? (
                // JIKA TAMU: Tampilkan Tombol SYNC (Sign In)
                <button
                  onClick={handleGoogleLogin}
                  className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1.5 rounded-xl text-xs font-black border-b-2 border-blue-800 active:border-b-0 active:translate-y-1 transition-all shadow-lg shadow-blue-200 animate-pulse"
                >
                  ☁️ Login
                </button>
              ) : (
                // JIKA USER GOOGLE: Tampilkan Tombol LOGOUT
                <button
                  onClick={handleLogout}
                  className="w-9 h-9 flex items-center justify-center bg-red-50 text-red-500 rounded-xl border border-red-100 hover:bg-red-100 transition-colors"
                >
                  <LogOut size={18} />
                </button>
              )}
            </div>
          </div>

          {currentView === 'learn' && (
            <div className="px-4 pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="max-w-2xl mx-auto pt-10 text-center mb-8">
                <button onClick={() => setShowProtocolModal(true)} className="group relative inline-block transition-transform hover:scale-105">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-3xl flex items-center justify-center text-white shadow-xl ${getTheme(activeCourse.color).shadow} transition-colors ${getTheme(activeCourse.color).bg}`}>
                    {activeCourse.icon}
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-1">{activeCourse.title}</h2>
                  <p className={`font-bold text-sm flex items-center justify-center gap-1 transition-colors ${getTheme(activeCourse.color).text}`}>
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

          {currentView === 'leaderboard' && <LeaderboardView db={db} userId={user.uid} />}
        </main>

        {/* --- MODAL AREA --- */}

        {/* MODAL WAJIB: Setup Nama */}
        <SetupProfileModal
          isOpen={!loading && isDataLoaded && user && !userStats.displayName}
          onSave={handleInitialSetup}
        />

        {/* MODAL BARU: Konfirmasi Merge */}
        <SyncConfirmationModal
          isOpen={showSyncModal}
          onMerge={() => performGoogleSignIn(true)}
          onSeparate={() => performGoogleSignIn(false)}
          onClose={() => setShowSyncModal(false)}
        />

        <ConflictModal
          isOpen={showConflictModal}
          localStats={conflictData.local || { xp: 0 }}
          remoteStats={conflictData.remote || { xp: 0, displayName: 'User' }}
          onKeepRemote={resolveConflictUseRemote}
          onCancel={resolveConflictCancel}
        />

        <ProtocolSelectModal isOpen={showProtocolModal} onClose={() => setShowProtocolModal(false)} activeCourseId={activeCourseId} onSelectCourse={setActiveCourseId} />
        {activeLesson && <CyberLessonModal lesson={activeLesson} courseTitle={activeCourse.title} onClose={() => { setActiveLesson(null); setShowChat(false); }} onComplete={handleLessonComplete} onOpenChat={() => setShowChat(true)} isProgramming={activeCourse.isProgramming} activeCourse={activeCourse} />}
        <CodeLabModal isOpen={showCodeLab} onClose={() => setShowCodeLab(false)} activeCourse={activeCourse} />
        <ChatDrawer isOpen={showChat} onClose={() => setShowChat(false)} topic={activeLesson ? activeLesson.title : ''} />
        {showQuestModal && activeQuest && <QuestSolverModal quest={activeQuest} onClose={() => setShowQuestModal(false)} onComplete={handleQuestComplete} />}
        <ProjectModal isOpen={showProjectModal} onClose={() => setShowProjectModal(false)} userId={user.uid} userXP={userStats.xp} />
        <NeuralUplinkModal isOpen={showUplink} onClose={() => setShowUplink(false)} />
        <CheatSheetModal isOpen={!!activeCheatSheet} moduleTitle={activeCheatSheet} onClose={() => setActiveCheatSheet(null)} />

      </div>
    </>
  );
}