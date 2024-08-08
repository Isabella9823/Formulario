document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const mensagemInput = document.getElementById('mensagem');
    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const mensagemError = document.getElementById('mensagemError');

    // Função para validar o nome
    function validateNome() {
        const nome = nomeInput.value.trim();
        if (nome.length > 0) {
            nomeError.textContent = '';
        } else {
            nomeError.textContent = 'O nome é obrigatório.';
        }
    }

    // Função para validar o e-mail
    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            emailError.textContent = '';
        } else {
            emailError.textContent = 'E-mail inválido.';
        }
    }

    // Função para validar a mensagem
    function validateMensagem() {
        const mensagem = mensagemInput.value.trim();
        if (mensagem.length > 0) {
            mensagemError.textContent = '';
        } else {
            mensagemError.textContent = 'A mensagem é obrigatória.';
        }
    }

    // Adiciona event listeners para validação em tempo real
    nomeInput.addEventListener('input', validateNome);
    emailInput.addEventListener('input', validateEmail);
    mensagemInput.addEventListener('input', validateMensagem);

    // Validação ao submeter o formulário
    form.addEventListener('submit', (e) => {
        validateNome();
        validateEmail();
        validateMensagem();
        if (nomeError.textContent || emailError.textContent || mensagemError.textContent) {
            e.preventDefault(); // Impede o envio do formulário se houver erros
        }
    });
});
