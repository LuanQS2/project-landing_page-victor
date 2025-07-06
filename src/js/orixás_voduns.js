document.addEventListener('DOMContentLoaded', () => {
    const articles = document.querySelectorAll('.card');
    const articlesPerPage = 6; // Quantidade de artigos por página
    const totalArticles = articles.length;
    const totalPages = Math.ceil(totalArticles / articlesPerPage); // Total de páginas
    const paginationContainer = document.getElementById('pagination');
    
    // Função para exibir os artigos da página atual
    function displayArticles(page) {
        const startIndex = (page - 1) * articlesPerPage;
        const endIndex = page * articlesPerPage;

        articles.forEach((article, index) => {
            if (index >= startIndex && index < endIndex) {
                article.style.display = 'block'; // Exibe o artigo
            } else {
                article.style.display = 'none'; // Oculta o artigo
            }
        });
    }

    // Função para gerar a navegação de páginas
    function generatePagination() {
        // Limpa a navegação existente
        paginationContainer.innerHTML = '';

        // Cria os botões de navegação
        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement('a');
            pageLink.href = '#';
            pageLink.textContent = i;

            // Adiciona o evento de clique
            pageLink.addEventListener('click', (e) => {
                e.preventDefault();
                displayArticles(i);
                updatePagination(i);
            });

            paginationContainer.appendChild(pageLink);
        }
    }

    // Função para atualizar a navegação, marcando a página atual
    function updatePagination(currentPage) {
        const pageLinks = paginationContainer.querySelectorAll('a');

        pageLinks.forEach(link => {
            link.classList.remove('selected'); // Remove a classe 'selected' de todos os links
        });

        pageLinks[currentPage - 1].classList.add('selected'); // Adiciona a classe 'selected' ao link da página atual
    }

    // Exibe os artigos da primeira página e gera a navegação
    displayArticles(1);
    generatePagination();
    updatePagination(1); // Marca a primeira página como selecionada
});