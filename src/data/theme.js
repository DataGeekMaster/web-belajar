// src/data/theme.js

export const COLOR_THEMES = {
    // --- Warna Lama ---
    blue: {
        bg: 'bg-blue-500', bgLight: 'bg-blue-50', bgHover: 'hover:bg-blue-50',
        text: 'text-blue-600', textLight: 'text-blue-400',
        border: 'border-blue-500', borderLight: 'border-blue-200', borderB: 'border-b-blue-700',
        ring: 'ring-blue-200', icon: 'text-blue-500', shadow: 'shadow-blue-200'
    },
    pink: {
        bg: 'bg-pink-500', bgLight: 'bg-pink-50', bgHover: 'hover:bg-pink-50',
        text: 'text-pink-600', textLight: 'text-pink-400',
        border: 'border-pink-500', borderLight: 'border-pink-200', borderB: 'border-b-pink-700',
        ring: 'ring-pink-200', icon: 'text-pink-500', shadow: 'shadow-pink-200'
    },
    purple: {
        bg: 'bg-purple-500', bgLight: 'bg-purple-50', bgHover: 'hover:bg-purple-50',
        text: 'text-purple-600', textLight: 'text-purple-400',
        border: 'border-purple-500', borderLight: 'border-purple-200', borderB: 'border-b-purple-700',
        ring: 'ring-purple-200', icon: 'text-purple-500', shadow: 'shadow-purple-200'
    },
    green: {
        bg: 'bg-emerald-500', bgLight: 'bg-emerald-50', bgHover: 'hover:bg-emerald-50',
        text: 'text-emerald-600', textLight: 'text-emerald-400',
        border: 'border-emerald-500', borderLight: 'border-emerald-200', borderB: 'border-b-emerald-700',
        ring: 'ring-emerald-200', icon: 'text-emerald-500', shadow: 'shadow-emerald-200'
    },
    yellow: {
        bg: 'bg-yellow-400', bgLight: 'bg-yellow-50', bgHover: 'hover:bg-yellow-50',
        text: 'text-yellow-700', textLight: 'text-yellow-500',
        border: 'border-yellow-400', borderLight: 'border-yellow-200', borderB: 'border-b-yellow-600',
        ring: 'ring-yellow-200', icon: 'text-yellow-600', shadow: 'shadow-yellow-200'
    },

    // --- Warna Baru (Sesuai Daftar Matkul) ---
    indigo: {
        bg: 'bg-indigo-500', bgLight: 'bg-indigo-50', bgHover: 'hover:bg-indigo-50',
        text: 'text-indigo-600', textLight: 'text-indigo-400',
        border: 'border-indigo-500', borderLight: 'border-indigo-200', borderB: 'border-b-indigo-700',
        ring: 'ring-indigo-200', icon: 'text-indigo-500', shadow: 'shadow-indigo-200'
    },
    cyan: {
        bg: 'bg-cyan-500', bgLight: 'bg-cyan-50', bgHover: 'hover:bg-cyan-50',
        text: 'text-cyan-600', textLight: 'text-cyan-400',
        border: 'border-cyan-500', borderLight: 'border-cyan-200', borderB: 'border-b-cyan-700',
        ring: 'ring-cyan-200', icon: 'text-cyan-500', shadow: 'shadow-cyan-200'
    },
    orange: {
        bg: 'bg-orange-500', bgLight: 'bg-orange-50', bgHover: 'hover:bg-orange-50',
        text: 'text-orange-600', textLight: 'text-orange-400',
        border: 'border-orange-500', borderLight: 'border-orange-200', borderB: 'border-b-orange-700',
        ring: 'ring-orange-200', icon: 'text-orange-500', shadow: 'shadow-orange-200'
    },
    gray: {
        bg: 'bg-gray-500', bgLight: 'bg-gray-50', bgHover: 'hover:bg-gray-50',
        text: 'text-gray-600', textLight: 'text-gray-400',
        border: 'border-gray-500', borderLight: 'border-gray-200', borderB: 'border-b-gray-700',
        ring: 'ring-gray-200', icon: 'text-gray-500', shadow: 'shadow-gray-200'
    },
    red: {
        bg: 'bg-red-500', bgLight: 'bg-red-50', bgHover: 'hover:bg-red-50',
        text: 'text-red-600', textLight: 'text-red-400',
        border: 'border-red-500', borderLight: 'border-red-200', borderB: 'border-b-red-700',
        ring: 'ring-red-200', icon: 'text-red-500', shadow: 'shadow-red-200'
    },
    // --- Warna Tambahan Keren (New Vibes) ---
    teal: {
        bg: 'bg-teal-500', bgLight: 'bg-teal-50', bgHover: 'hover:bg-teal-50',
        text: 'text-teal-600', textLight: 'text-teal-400',
        border: 'border-teal-500', borderLight: 'border-teal-200', borderB: 'border-b-teal-700',
        ring: 'ring-teal-200', icon: 'text-teal-500', shadow: 'shadow-teal-200'
    },
    rose: {
        bg: 'bg-rose-500', bgLight: 'bg-rose-50', bgHover: 'hover:bg-rose-50',
        text: 'text-rose-600', textLight: 'text-rose-400',
        border: 'border-rose-500', borderLight: 'border-rose-200', borderB: 'border-b-rose-700',
        ring: 'ring-rose-200', icon: 'text-rose-500', shadow: 'shadow-rose-200'
    },
    violet: {
        bg: 'bg-violet-500', bgLight: 'bg-violet-50', bgHover: 'hover:bg-violet-50',
        text: 'text-violet-600', textLight: 'text-violet-400',
        border: 'border-violet-500', borderLight: 'border-violet-200', borderB: 'border-b-violet-700',
        ring: 'ring-violet-200', icon: 'text-violet-500', shadow: 'shadow-violet-200'
    },
    lime: {
        bg: 'bg-lime-500', bgLight: 'bg-lime-50', bgHover: 'hover:bg-lime-50',
        text: 'text-lime-700', textLight: 'text-lime-600', // Lime text perlu agak gelap biar kebaca
        border: 'border-lime-500', borderLight: 'border-lime-200', borderB: 'border-b-lime-700',
        ring: 'ring-lime-200', icon: 'text-lime-600', shadow: 'shadow-lime-200'
    },
    slate: {
        bg: 'bg-slate-600', bgLight: 'bg-slate-100', bgHover: 'hover:bg-slate-100',
        text: 'text-slate-700', textLight: 'text-slate-500',
        border: 'border-slate-600', borderLight: 'border-slate-300', borderB: 'border-b-slate-800',
        ring: 'ring-slate-300', icon: 'text-slate-600', shadow: 'shadow-slate-300'
    }
};

export const getTheme = (color) => {
    return COLOR_THEMES[color] || COLOR_THEMES.blue;
};