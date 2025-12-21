// src/data/courses.jsx
import { Terminal, BarChart2 } from 'lucide-react';

export const COURSES_DATA = [
    {
        id: "python_protocol",
        title: "PYTHON",
        icon: <Terminal size={24} />,
        description: "Kuasai bahasa mesin. Bangun backend, skrip, dan model AI.",
        color: "blue",
        codeConfig: {
            language: "Python",
            defaultCode: "print('Halo Dunia dari Python')",
            placeholder: "Masukkan Kode Python..."
        },
        modules: [
            {
                id: "mod_getting_started",
                title: "Inisialisasi Sistem",
                lessons: [
                    { id: "py_what_is", title: "Konsep Inti", description: "Sejarah & kemampuan" },
                    { id: "py_install", title: "Setup Lingkungan", description: "Persiapan environment" },
                    { id: "py_interpreter", title: "Link Interpreter", description: "Cara kerjanya" },
                    { id: "py_first_prog", title: "Protokol Hello World", description: "Program Pertama" }
                ]
            },
            {
                id: "mod_primitive",
                title: "Primitif Data",
                lessons: [
                    { id: "pt_variables", title: "Alokasi Memori", description: "Variabel" },
                    { id: "pt_strings", title: "Aliran Teks", description: "Strings" },
                    { id: "pt_numbers", title: "Data Numerik", description: "Integers & Floats" },
                    { id: "pt_conversion", title: "Mutasi Tipe", description: "Konversi Tipe" }
                ]
            }
        ]
    },
    {
        id: "stats_stream",
        title: "STATISTIKA",
        icon: <BarChart2 size={24} />,
        description: "Pecahkan pola realitas. Analisis distribusi data dan probabilitas.",
        color: "pink",
        codeConfig: {
            language: "R",
            defaultCode: "data <- c(10, 20, 30, 40)\nmean(data)",
            placeholder: "Masukkan Kode R..."
        },
        modules: [
            {
                id: "mod_stat_desc",
                title: "Analitik Deskriptif",
                lessons: [
                    { id: "stat_intro", title: "Tipe Data", description: "Kualitatif vs Kuantitatif" },
                    { id: "stat_central", title: "Tendensi Sentral", description: "Mean, Median, Modus" },
                ]
            },
            {
                id: "mod_prob",
                title: "Matriks Probabilitas",
                lessons: [
                    { id: "prob_basic", title: "Logika Peluang", description: "Aturan Dasar Probabilitas" },
                ]
            }
        ]
    }
];