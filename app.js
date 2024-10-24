document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modal-name');
    const modalBackground = document.getElementById('modal-background');
    const closeBtn = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.friend-card').forEach(card => {
        card.addEventListener('click', function() {
            modalName.textContent = this.dataset.name;
            modalBackground.textContent = this.dataset.background;
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('show'), 10);
        });
    });

    closeBtn.onclick = function() {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300);
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300);
        }
    }
});