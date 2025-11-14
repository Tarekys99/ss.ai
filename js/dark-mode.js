/**
 * Dark Mode Toggle Script - Enhanced
 * SS.AI Website
 */

// Apply saved theme immediately (before DOM loads)
(function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-mode');
        if (document.body) {
            document.body.classList.add('dark-mode');
        }
    }
})();

// Main dark mode functionality
document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Get saved theme
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply theme to body
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Add toggle button to navigation
    setTimeout(function () {
        addDarkModeToggle();
    }, 100);

    /**
     * Add dark mode toggle button to navigation
     */
    function addDarkModeToggle() {
        // Try multiple selectors to find navigation menu
        let navMenu = document.querySelector('.navbar-nav-right');

        if (!navMenu) {
            navMenu = document.querySelector('.navbar-nav');
        }

        if (!navMenu) {
            navMenu = document.querySelector('.nav.navbar-nav');
        }

        if (!navMenu) {
            console.warn('Navigation menu not found');
            return;
        }

        // Check if toggle already exists
        if (document.getElementById('darkModeToggle')) {
            return;
        }

        // Create toggle element
        const toggleLi = document.createElement('li');
        toggleLi.className = 'nav-item';
        toggleLi.style.cssText = 'padding: 20px 10px;';

        toggleLi.innerHTML = `
            <label class="dark-mode-toggle" title="Toggle Dark Mode" style="cursor: pointer;">
                <input type="checkbox" id="darkModeToggle" ${currentTheme === 'dark' ? 'checked' : ''}>
                <span class="dark-mode-slider">
                    <i class="fa fa-sun-o dark-mode-icon sun"></i>
                    <i class="fa fa-moon-o dark-mode-icon moon"></i>
                </span>
            </label>
        `;

        // Add to navigation
        navMenu.appendChild(toggleLi);

        // Add event listener
        const toggle = document.getElementById('darkModeToggle');
        if (toggle) {
            toggle.addEventListener('change', function () {
                toggleDarkMode(this.checked);
            });
            console.log('Dark mode toggle added successfully');
        }
    }

    /**
     * Toggle dark mode on/off
     */
    function toggleDarkMode(isDark) {
        if (isDark) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
            console.log('Dark mode enabled');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
            console.log('Light mode enabled');
        }
    }

    // Log initialization
    console.log('Dark mode initialized. Current theme:', currentTheme);
});
