const hamburger = document.getElementById('hamburger');
        const navbar = document.getElementById('navbar');

        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            navbar.classList.toggle('active');
        });

        // Handle nested dropdown hover/click
        document.querySelectorAll('.dropdown-submenu').forEach(item => {
            item.addEventListener('mouseenter', function() {
                const submenu = this.querySelector('.dropdown-menu');
                if (submenu) submenu.style.display = 'block';
            });
            item.addEventListener('mouseleave', function() {
                const submenu = this.querySelector('.dropdown-menu');
                if (submenu) submenu.style.display = 'none';
            });
        });

        // Mobile click support for nested dropdowns
        document.querySelectorAll('.dropdown-submenu > a').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const submenu = this.nextElementSibling;
                if (submenu) {
                    submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.navbar') && !e.target.closest('.hamburger')) {
                navbar.classList.remove('active');
                hamburger.classList.remove('open');
            }
        });