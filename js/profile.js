  let isFollowing = false;

        function toggleFollow() {
            const btn = document.getElementById('followBtn');
            const followersCount = document.getElementById('followersCount');
            
            isFollowing = !isFollowing;
            
            if (isFollowing) {
                btn.textContent = 'Following';
                btn.classList.add('following');
                followersCount.textContent = parseInt(followersCount.textContent) + 1;
            } else {
                btn.textContent = 'Follow';
                btn.classList.remove('following');
                followersCount.textContent = Math.max(0, parseInt(followersCount.textContent) - 1);
            }
        }

        function toggleDropdown() {
            const dropdown = document.getElementById('dropdownMenu');
            dropdown.classList.toggle('show');
            event.stopPropagation();
        }

        // Close dropdown when clicking outside
        document.addEventListener('click', function(event) {
            const dropdown = document.getElementById('dropdownMenu');
            const moreOptions = document.querySelector('.more-options');
            
            if (dropdown && !moreOptions.contains(event.target)) {
                dropdown.classList.remove('show');
            }
        });

        function editProfile() {
            alert('Edit Profile - Navigate to profile editing page');
            document.getElementById('dropdownMenu').classList.remove('show');
        }

        function shareProfile() {
            alert('Share Profile - Copy link or share to social media');
            document.getElementById('dropdownMenu').classList.remove('show');
        }

        function settings() {
            alert('Settings - Navigate to settings page');
            document.getElementById('dropdownMenu').classList.remove('show');
        }

        function reportProfile() {
            alert('Report Profile - Submit a report');
            document.getElementById('dropdownMenu').classList.remove('show');
        }

        function logout() {
            if (confirm('Are you sure you want to logout?')) {
                alert('Logging out... Redirecting to login page');
                // window.location.href = '/login';
            }
            document.getElementById('dropdownMenu').classList.remove('show');
        }

        function switchTab(index) {
            const tabs = document.querySelectorAll('.tab');
            const contents = document.querySelectorAll('.tab-content');
            
            tabs.forEach((tab, i) => {
                if (i === index) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });
            
            contents.forEach((content, i) => {
                if (i === index) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        }

        function goBack() {
            alert('Going back to previous page...');
            // window.history.back();
        }

        function showPosts() {
            switchTab(0);
        }

        function showFollowing() {
            alert('Following list:\n• View users you follow\n• Manage following');
        }

        function showFollowers() {
            alert('Followers list:\n• View your followers\n• Manage followers');
        }

        function showLikes() {
            alert('Liked content:\n• View posts you liked\n• Manage favorites');
        }