document.addEventListener('DOMContentLoaded', () => {
    // get elements
    const themeToggle = document.getElementById('theme-toggle');
    const themeIconLight = document.getElementById('theme-icon-light');
    const themeIconDark = document.getElementById('theme-icon-dark');
    const heroImage = document.getElementById('hero-image');
    const backToTopBtn = document.getElementById('back-to-top');
	const projectImage = document.getElementById('project-image');

    // function to switch items and piucures based on active theme
    const updateThemeAssets = (isDark) => {
        // toogle icons
        if (isDark) {
            themeIconLight.classList.add('hidden');
            themeIconDark.classList.remove('hidden');
        } else {
            themeIconLight.classList.remove('hidden');
            themeIconDark.classList.add('hidden');
        }

        // Hero-Image switch
        if (heroImage) {
            heroImage.src = isDark 
                ? "/assets/img/hero_dark.png"
                : "/assets/img/hero_light.png";
        }
		
		// Projekt-Image switch
        if (projectImage) {
            projectImage.src = isDark 
                ? "/assets/img/project_dark.png"
                : "/assets/img/project_light.png";
        }
    };

    
    const initialThemeIsDark = document.documentElement.classList.contains('dark');
    
    // load initial pictures and icons to reduce flickering.
    updateThemeAssets(initialThemeIsDark);

    // --- Event Listeners ---

    // Event Listener for the toggle-button
    themeToggle.addEventListener('click', () => {
    
        const isCurrentlyDark = document.documentElement.classList.toggle('dark');
        
        // save new state in localStorage
        localStorage.setItem('theme', isCurrentlyDark ? 'dark' : 'light');
        
        // update icons and pictures
        updateThemeAssets(isCurrentlyDark);
    });
    
    // Event Listener for "Back to top"
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});