document.addEventListener('DOMContentLoaded', () => {
    // Obter todos os filmes
    const films = document.querySelectorAll('.film');
    
    // Obter o modal e seus elementos
    const modal = document.getElementById('film-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    
    // Adicionar evento de hover para exibir as descrições
    films.forEach(film => {
        film.addEventListener('mouseenter', () => {
            const description = film.getAttribute('data-description');
            film.setAttribute('title', description); // Exibe como uma dica (tooltip)
        });

        film.addEventListener('click', () => {
            const title = film.getAttribute('data-title');
            const description = film.getAttribute('data-description');

            // Preencher o modal com as informações do filme
            modalTitle.textContent = title;
            modalDescription.textContent = description;

            // Exibir o modal com uma animação
            modal.style.display = 'block';
            setTimeout(() => modal.classList.add('show'), 10); // Adiciona a classe 'show' para animação
        });
    });

    // Fechar o modal ao clicar no botão de fechar
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.style.display = 'none', 300); // Espera a animação de fechar
    });

    // Fechar o modal se o usuário clicar fora do conteúdo
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.style.display = 'none', 300); // Espera a animação de fechar
        }
    });
});
