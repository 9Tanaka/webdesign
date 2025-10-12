 const tocBtn = document.getElementById('tocBtn');
        const tocModal = document.getElementById('tocModal');
        const tocClose = document.getElementById('tocClose');

        // Open modal
        tocBtn.addEventListener('click', () => {
            tocModal.classList.add('active');
        });

        // Close modal
        tocClose.addEventListener('click', () => {
            tocModal.classList.remove('active');
        });

        // Close modal when clicking outside
        tocModal.addEventListener('click', (e) => {
            if (e.target === tocModal) {
                tocModal.classList.remove('active');
            }
        });

        // Add active state to sidebar links based on scroll
        const sections = document.querySelectorAll('main section');
        const links = document.querySelectorAll('.sidebar a');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            links.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').slice(1) === current) {
                    link.classList.add('active');
                }
            });
        });

        // Close modal when a link is clicked
        document.querySelectorAll('.toc-modal a').forEach(link => {
            link.addEventListener('click', () => {
                tocModal.classList.remove('active');
            });
        });