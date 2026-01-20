/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "primary": "#f27f0d", // Keeping brand color acting as accent
                "background-light": "#FFFaf6", // Nfinite Cream
                "background-dark": "#0F1316",  // Nfinite Off-Black
                "surface-dark": "#1a1d21",
                "accent-blue": "#DFF2F3", // Nfinite Button Color
            },
            fontFamily: {
                "sans": ["Inter", "sans-serif"], // Clean sans base
                "display": ["Manrope", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
            },
            animation: {
                "scroll": "scroll 40s linear infinite",
            },
            keyframes: {
                "scroll": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
}
