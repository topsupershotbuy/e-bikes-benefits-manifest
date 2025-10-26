document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('color-toggle-btn');
    const body = document.getElementById('site-body');

    // Função que alterna a classe 'alt-theme' no <body>
    function toggleTheme() {
        body.classList.toggle('alt-theme');
        
        // Salva a preferência do usuário no armazenamento local
        if (body.classList.contains('alt-theme')) {
            localStorage.setItem('theme', 'alt');
        } else {
            localStorage.setItem('theme', 'default');
        }
    }

    // Aplica o tema salvo (se existir) na carga da página
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'alt') {
        body.classList.add('alt-theme');
    }

    // Adiciona o evento de clique ao botão, garantindo que ele exista
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleTheme);
    }
});
