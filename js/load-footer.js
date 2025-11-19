// Load footer dynamically
document.addEventListener('DOMContentLoaded', function () {
    // Determine the correct path based on current page location
    const currentPath = window.location.pathname;
    const isInPagesFolder = currentPath.includes('/pages/');
    const isHomePage = currentPath.endsWith('index.html') || currentPath.endsWith('/');

    // Choose the correct footer file
    let footerPath;
    if (isInPagesFolder) {
        footerPath = '../includes/footer.html';
    } else if (isHomePage) {
        footerPath = 'includes/footer-home.html';
    } else {
        footerPath = 'includes/footer.html';
    }

    // Create footer placeholder if it doesn't exist
    let footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) {
        // Find existing footer and replace it
        const existingFooter = document.querySelector('footer.footer');
        if (existingFooter) {
            footerPlaceholder = document.createElement('div');
            footerPlaceholder.id = 'footer-placeholder';
            existingFooter.parentNode.replaceChild(footerPlaceholder, existingFooter);
        }
    }

    if (footerPlaceholder) {
        fetch(footerPath)
            .then(response => response.text())
            .then(data => {
                footerPlaceholder.innerHTML = data;

                // Fix paths based on current location
                if (isInPagesFolder) {
                    // Update image paths
                    const footerLogo = footerPlaceholder.querySelector('.footer-logo-img');
                    if (footerLogo && footerLogo.src.includes('img/')) {
                        footerLogo.src = footerLogo.src.replace('img/', '../img/');
                    }

                    // Update home links
                    const homeLinks = footerPlaceholder.querySelectorAll('.footer-home-link');
                    homeLinks.forEach(link => {
                        if (link.getAttribute('href') === 'index.html') {
                            link.setAttribute('href', '../index.html');
                        }
                    });
                } else {
                    // For index.html, update page links to pages folder
                    const pageLinks = footerPlaceholder.querySelectorAll('.footer-page-link');
                    pageLinks.forEach(link => {
                        const href = link.getAttribute('href');
                        if (href && !href.startsWith('pages/')) {
                            link.setAttribute('href', 'pages/' + href);
                        }
                    });
                }
            })
            .catch(error => console.error('Error loading footer:', error));
    }
});
