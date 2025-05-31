        function showModal(title, description, image, rating, link) {
            const modal = document.getElementById('appModal');
            document.getElementById('modalTitle').textContent = title;
            document.getElementById('modalDescription').textContent = description;
            document.getElementById('modalImage').src = image;
            document.getElementById('modalRating').textContent = `Rating: ⭐ ${rating}`;
            document.getElementById('modalLink').href = link;
            modal.style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('appModal').style.display = 'none';
        }

        window.onclick = function(event) {
            const modal = document.getElementById('appModal');
            if (event.target === modal) {
                closeModal();
            }
        }