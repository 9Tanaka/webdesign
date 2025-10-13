 // Follow button functionality
        document.querySelectorAll('.follow-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('following');
                if (this.classList.contains('following')) {
                    this.textContent = 'Following';
                } else {
                    this.textContent = 'Follow';
                }
            });
        });

        // Three dots dropdown functionality
        document.querySelectorAll('.more-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const dropdown = this.querySelector('.dropdown-menu-custom');
                
                // Close all other dropdowns
                document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
                    if (menu !== dropdown) {
                        menu.classList.remove('show');
                    }
                });
                
                dropdown.classList.toggle('show');
            });
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function() {
            document.querySelectorAll('.dropdown-menu-custom').forEach(menu => {
                menu.classList.remove('show');
            });
        });

        // Report button functionality
        document.querySelectorAll('.report-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.getElementById('reportModal').classList.add('show');
            });
        });

        function closeModal() {
            document.getElementById('reportModal').classList.remove('show');
        }

        function submitReport() {
            const selected = document.querySelector('input[name="report"]:checked');
            if (selected) {
                alert('Report submitted: ' + selected.value);
                closeModal();
                // Reset radio buttons
                document.querySelectorAll('input[name="report"]').forEach(radio => {
                    radio.checked = false;
                });
            } else {
                alert('Please select a reason for reporting');
            }
        }

        // Close modal when clicking outside
        document.getElementById('reportModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });