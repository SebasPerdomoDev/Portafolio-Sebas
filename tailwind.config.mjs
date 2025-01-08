/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                lila: '#7400ff', // Color de fondo personalizado
                textlila: '#7400ff', // Color de texto personalizado
            },
        },
    },
    plugins: [],
}