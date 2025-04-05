// Seleciona todos os botões de tabs
const buttons = document.querySelectorAll('[data-tab-button]');

// Adiciona evento de clique para cada botão de tabulação
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        const abaAlvo = event.target.dataset.tabButton;
        const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);

        // Remove a classe ativa de todas as abas e botões
        escondeTodasAbas();
        removeBotaoAtivo();

        // Adiciona a classe ativa à aba e ao botão clicado
        aba.classList.add('shows__list--is-active');
        event.target.classList.add('shows__tabs__button--is-active'); // Corrigido o nome da classe
    });
}

// Função para remover a classe ativa de todos os botões
function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active'); // Corrigido o nome da classe
    }
}

// Função para esconder todas as abas
function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
}
