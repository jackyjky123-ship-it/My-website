document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('nav');

    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('fa-xmark');
            navbar.classList.toggle('active');
        });

        navbar.querySelectorAll('a').forEach(link => {
             link.addEventListener('click', () => {
                menuIcon.classList.remove('fa-xmark');
                navbar.classList.remove('active');
             });
        });
    }
    const linkHome = document.getElementById('link-home');
    const linkSkills = document.getElementById('link-skills');
    const sectionHome = document.getElementById('section-home');
    const sectionSkills = document.getElementById('section-skills');

    function hideAllSections() {
        if (sectionHome) sectionHome.style.display = 'none';
        if (sectionSkills) sectionSkills.style.display = 'none';
    }
    function deactivateAllLinks() {
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    }

    if (linkHome && sectionHome) {
        linkHome.addEventListener('click', (e) => {
            e.preventDefault();
            deactivateAllLinks();
            linkHome.classList.add('active');
            
            hideAllSections();
            sectionHome.style.display = ''; 
        });
    }

    if (linkSkills && sectionSkills) {
        linkSkills.addEventListener('click', (e) => {
            e.preventDefault();
            deactivateAllLinks();
            linkSkills.classList.add('active');

            hideAllSections();
            sectionSkills.style.display = ''; 
        });
    }
});
