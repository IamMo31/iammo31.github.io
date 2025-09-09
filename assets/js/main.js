// assets/js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Elemente abrufen
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const heroImage = document.getElementById('hero-image');
    const backToTopBtn = document.getElementById('back-to-top');
	const projectImage = document.getElementById('project-image');

    // Funktion, die Icons UND Bild basierend auf dem Theme-Status aktualisiert
    const updateThemeAssets = (isDark) => {
        // Icons umschalten
        if (isDark) {
            themeIconLight.classList.add('hidden');
            themeIconDark.classList.remove('hidden');
        } else {
            themeIconLight.classList.remove('hidden');
            themeIconDark.classList.add('hidden');
        }

        // Hero-Image Quelle umschalten (nur wenn das Bild auf der Seite existiert)
        if (heroImage) {
            heroImage.src = isDark 
                ? "/assets/img/hero_dark.png"
                : "/assets/img/hero_light.png";
        }
		
		// Projekt-Image Quelle umschalten (nur wenn das Bild auf der Seite existiert)
        if (projectImage) {
            projectImage.src = isDark 
                ? "/assets/img/project_dark.png"
                : "/assets/img/project_light.png";
        }
    };

    // --- Initiales Setup beim Laden der Seite ---
    // Die "Wahrheit" über den Theme-Status kommt jetzt direkt vom <html>-Tag,
    // da unser Skript im <head> diesen bereits korrekt gesetzt hat.
    const initialThemeIsDark = document.documentElement.classList.contains('dark');
    
    // Initiales Bild und Icons beim Laden korrekt setzen, um das Bild-Flackern zu beheben.
    updateThemeAssets(initialThemeIsDark);

    // --- Event Listeners ---

    // Event Listener für den Toggle-Button
    themeToggle.addEventListener('click', () => {
        // Die .dark-Klasse am <html>-Tag umschalten
        const isCurrentlyDark = document.documentElement.classList.toggle('dark');
        
        // Den neuen Zustand im localStorage speichern
        localStorage.setItem('theme', isCurrentlyDark ? 'dark' : 'light');
        
        // Icons und Bild entsprechend dem neuen Zustand aktualisieren
        updateThemeAssets(isCurrentlyDark);
    });
    
    // Event Listener für "Back to top"
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});