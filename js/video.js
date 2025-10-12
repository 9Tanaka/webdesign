   // Sample data - you can replace these with actual video data
        const shortsData = [
            {
                id: 1,
                title: 'funny moment',
                channel: 'funny',
                category: 'funny',
                thumbnail: 'https://via.placeholder.com/200x270?text=Funny+Moment', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 2,
                title: 'babu',
                channel: 'singing',
                category: 'singing',
                thumbnail: 'https://via.placeholder.com/200x270?text=Babu', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 3,
                title: 'leeandlie asmr',
                channel: 'ASMR',
                category: 'funny',
                thumbnail: 'https://via.placeholder.com/200x270?text=ASMR', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 4,
                title: 'dance cover',
                channel: 'dance',
                category: 'dance',
                thumbnail: 'https://via.placeholder.com/200x270?text=Dance', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            }
        ];

        const videosData = [
            {
                id: 1,
                title: 'Full Concert Performance',
                channel: 'Vtuber Studio',
                category: 'singing',
                thumbnail: 'img/concert1.jpg', 
                videoSource: 'https://www.youtube.com/watch?v=WubP90C6KlY' 
            },
            {
                id: 2,
                title: 'Gaming Marathon',
                channel: 'Game Channel',
                category: 'game',
                thumbnail: 'https://via.placeholder.com/280x160?text=Gaming', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 3,
                title: 'Funny Moments Compilation',
                channel: 'Vtuber Clips',
                category: 'funny',
                thumbnail: 'https://via.placeholder.com/280x160?text=Funny', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 4,
                title: 'Dance Practice Video',
                channel: 'Dance Studio',
                category: 'dance',
                thumbnail: 'https://via.placeholder.com/280x160?text=Dance', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 5,
                title: 'Karaoke Night Stream',
                channel: 'Singing Channel',
                category: 'singing',
                thumbnail: 'https://via.placeholder.com/280x160?text=Karaoke', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            },
            {
                id: 6,
                title: 'Comedy Sketch',
                channel: 'Comedy Central',
                category: 'funny',
                thumbnail: 'https://via.placeholder.com/280x160?text=Sketch', // REPLACE WITH YOUR IMAGE URL
                videoSource: 'https://www.youtube.com/watch?v=VIDEO_ID_HERE' // REPLACE WITH YOUR VIDEO URL
            }
        ];

        let currentCategory = 'all';

        function renderShorts(category = 'all') {
            const shortsGrid = document.getElementById('shortsGrid');
            shortsGrid.innerHTML = '';

            const filteredShorts = category === 'all' ? shortsData : shortsData.filter(short => short.category === category);

            filteredShorts.forEach(short => {
                const card = document.createElement('div');
                card.className = 'short-card';
                card.onclick = () => handleVideoClick(short.id, 'short');
                card.innerHTML = `
                    <div class="short-thumbnail" style="background-image: url('${short.thumbnail}'); background-size: cover;">
                        <div class="play-icon">▶</div>
                    </div>
                    <div class="short-title">${short.title}</div>
                `;
                shortsGrid.appendChild(card);
            });
        }

        function renderVideos(category = 'all') {
            const videoGrid = document.getElementById('videoGrid');
            videoGrid.innerHTML = '';

            const filteredVideos = category === 'all' ? videosData : videosData.filter(video => video.category === category);

            filteredVideos.forEach(video => {
                const card = document.createElement('div');
                card.className = 'video-card';
                card.onclick = () => handleVideoClick(video.id, 'video');
                card.innerHTML = `
                    <div class="video-thumbnail" style="background-image: url('${video.thumbnail}'); background-size: cover;">
                        <div class="play-icon">▶</div>
                    </div>
                    <div class="video-info">
                        <div class="video-title">${video.title}</div>
                        <div class="video-channel">${video.channel}</div>
                    </div>
                `;
                videoGrid.appendChild(card);
            });
        }

        function filterByCategory(category) {
            currentCategory = category;

            // Update active button
            document.querySelectorAll('.category-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            event.target.classList.add('active');

            // Render filtered content
            renderShorts(category);
            renderVideos(category);
        }

        function handleVideoClick(videoId, type) {
            const allData = type === 'short' ? shortsData : videosData;
            const video = allData.find(v => v.id === videoId);
            
            if (video && video.videoSource) {
                openModal(video);
            }
        }

        function openModal(video) {
            // Extract YouTube video ID from URL
            let youtubeId = '';
            if (video.videoSource.includes('youtube.com/watch?v=')) {
                youtubeId = video.videoSource.split('v=')[1];
            } else if (video.videoSource.includes('youtu.be/')) {
                youtubeId = video.videoSource.split('youtu.be/')[1];
            }

            // Update modal with video information
            document.getElementById('modalTitle').textContent = video.title;
            document.getElementById('modalChannel').textContent = video.channel;
            document.getElementById('externalLink').href = video.videoSource;

            // Set iframe src for YouTube embedded player
            if (youtubeId) {
                document.getElementById('videoPlayer').src = `https://www.youtube.com/embed/${youtubeId}`;
            }

            // Show modal
            document.getElementById('videoModal').classList.add('active');

            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            document.getElementById('videoModal').classList.remove('active');
            document.getElementById('videoPlayer').src = '';

            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside the modal content
        document.addEventListener('DOMContentLoaded', function() {
            const modal = document.getElementById('videoModal');
            window.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });

            // Close modal with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });

            // Initial render
            renderShorts();
            renderVideos();
        });