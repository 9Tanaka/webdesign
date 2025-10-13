document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    const isMobile = window.innerWidth <= 768;

    // Hamburger menu toggle
    if (hamburger && navbar) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            navbar.classList.toggle('active');
            hamburger.classList.toggle('open');
        });
    }

  
    if (isMobile) {
        // Handle main dropdown toggles
        const dropdownToggles = document.querySelectorAll('.navbar .dropdown-toggle');
        
        dropdownToggles.forEach(toggle => {
            const clickHandler = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.closest('.dropdown');
                const menu = parent.querySelector('.dropdown-menu');
                
                if (!menu) return;
                
                // Close other dropdowns
                dropdownToggles.forEach(otherToggle => {
                    if (otherToggle !== this) {
                        const otherParent = otherToggle.closest('.dropdown');
                        const otherMenu = otherParent.querySelector('.dropdown-menu');
                        if (otherMenu) {
                            otherMenu.classList.remove('show');
                        }
                    }
                });
                
                // Toggle current menu
                menu.classList.toggle('show');
            };

            toggle.addEventListener('click', clickHandler);
            toggle.addEventListener('touchend', clickHandler);
        });

        // Handle submenu items
        const submenuItems = document.querySelectorAll('.dropdown-submenu > .dropdown-item');
        
        submenuItems.forEach(item => {
            const clickHandler = function(e) {
           
                if (this.href && this.href !== '#') {
                    return;
                }
                
                e.preventDefault();
                e.stopPropagation();
                
                const parent = this.closest('.dropdown-submenu');
                const submenu = parent.querySelector('.dropdown-menu');
                
                if (!submenu) return;
                
           
                submenuItems.forEach(otherItem => {
                    if (otherItem !== this) {
                        const otherParent = otherItem.closest('.dropdown-submenu');
                        const otherSubmenu = otherParent.querySelector('.dropdown-menu');
                        if (otherSubmenu) {
                            otherSubmenu.classList.remove('show');
                        }
                        otherParent.classList.remove('show');
                    }
                });
                
              
                parent.classList.toggle('show');
                submenu.classList.toggle('show');
            };

            item.addEventListener('click', clickHandler);
            item.addEventListener('touchend', clickHandler);
        });

      
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar') && !e.target.closest('.hamburger')) {
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
                document.querySelectorAll('.dropdown-submenu.show').forEach(submenu => {
                    submenu.classList.remove('show');
                });
            }
        });

        document.addEventListener('touchend', function(e) {
            if (!e.target.closest('.navbar') && !e.target.closest('.hamburger')) {
                document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                    menu.classList.remove('show');
                });
                document.querySelectorAll('.dropdown-submenu.show').forEach(submenu => {
                    submenu.classList.remove('show');
                });
            }
        });
    }
});