// Theme logic
const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    // Si no hay tema (asumimos oscuro por defecto), cambiamos a light, y viceversa
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateThemeButtonText(newTheme);
};

const updateThemeButtonText = (theme) => {
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        // Usamos los SVGs de assets
        if (theme === 'light') {
            themeBtn.innerHTML = '<img src="assets/icons/moon.svg" width="20" height="20" alt="Dark Mode" style="display: block;">';
            themeBtn.setAttribute('aria-pressed', 'true');
        } else {
            themeBtn.innerHTML = '<img src="assets/icons/sun.svg" width="20" height="20" alt="Light Mode" style="display: block;">';
            themeBtn.setAttribute('aria-pressed', 'false');
        }
    }
};

const initializeTheme = () => {
    // 1. Revisar localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
        // 2. Revisar preferencia del sistema
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
        if (prefersLight) {
            document.documentElement.setAttribute('data-theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
        }
    }
};

// Ejecutar inmediatamente para evitar parpadeos (FOUC)
initializeTheme();

document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    updateThemeButtonText(currentTheme);

    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
});
