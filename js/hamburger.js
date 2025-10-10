document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    if (hamburger && navbar) {
        hamburger.addEventListener('click', function() {
            navbar.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }

    // Mobile dropdown functionality
    if (window.innerWidth <= 768) {
        // Handle main dropdowns
        const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.closest('.dropdown');
                const menu = parent.querySelector('.dropdown-menu');
                
                // Close other dropdowns at the same level
                const siblings = parent.parentElement.querySelectorAll(':scope > .dropdown');
                siblings.forEach(sibling => {
                    if (sibling !== parent) {
                        sibling.querySelector('.dropdown-menu')?.classList.remove('show');
                    }
                });
                
                menu.classList.toggle('show');
            });
        });

        // Handle submenu items
        const submenuItems = document.querySelectorAll('.dropdown-submenu > .dropdown-item');
        
        submenuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.closest('.dropdown-submenu');
                const submenu = parent.querySelector('.dropdown-menu');
                
                // Close other submenus at the same level
                const siblings = parent.parentElement.querySelectorAll(':scope > .dropdown-submenu');
                siblings.forEach(sibling => {
                    if (sibling !== parent) {
                        sibling.classList.remove('show');
                        sibling.querySelector('.dropdown-menu')?.classList.remove('show');
                    }
                });
                
                parent.classList.toggle('show');
                submenu.classList.toggle('show');
            });
        });

        // Close all dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar')) {
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    menu.classList.remove('show');
                });
                document.querySelectorAll('.dropdown-submenu').forEach(submenu => {
                    submenu.classList.remove('show');
                });
            }
        });
    }
});