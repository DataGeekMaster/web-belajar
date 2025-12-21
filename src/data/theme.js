// src/data/theme.js

export const COLOR_THEMES = {
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
    }
};

export const getTheme = (color) => {
    return COLOR_THEMES[color] || COLOR_THEMES.blue;
};