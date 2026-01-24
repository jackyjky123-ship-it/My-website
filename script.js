document.addEventListener('DOMContentLoaded', () => {
    const linkHome = document.getElementById('link-home');
    const linkSkills = document.getElementById('link-skills');
    const sectionHome = document.getElementById('section-home');
    const sectionSkills = document.getElementById('section-skills');

    // Helper to hide all sections
    function hideAllSections() {
        if (sectionHome) sectionHome.style.display = 'none';
        if (sectionSkills) sectionSkills.style.display = 'none';
        // Add other sections here as needed
    }

    // Helper to deactivate all links
    function deactivateAllLinks() {
        document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
    }

    if (linkHome && sectionHome) {
        linkHome.addEventListener('click', (e) => {
            e.preventDefault();
            deactivateAllLinks();
            linkHome.classList.add('active');
            
            hideAllSections();
            // Remove inline display style to let CSS take over (display: flex)
            sectionHome.style.display = ''; 
        });
    }

    if (linkSkills && sectionSkills) {
        linkSkills.addEventListener('click', (e) => {
            e.preventDefault();
            deactivateAllLinks();
            linkSkills.classList.add('active');

            hideAllSections();
            // Remove inline display style to let CSS take over (display: flex coming from .skills class if strictly defined, or block)
            // But wait, initially it is style="display: none". Removing it shows it.
            sectionSkills.style.display = ''; 
        });
    }
});
