document.querySelector("#gerarRelatorioForm").addEventListener("submit", (e) => {
    // Pega todos os checkboxes dentro do formulário
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // Verifica se pelo menos um está selecionado
    const algumSelecionado = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
    if (!algumSelecionado) {
        e.preventDefault(); // Impede o envio do formulário
        alert('Por favor, selecione pelo menos um anexo para gerar relatório.');
    } else{

        // Feedback visual para o usuário
        alert('Formulário enviado com sucesso! Verifique o console para os dados.');
        
        // Opcional: Limpar o formulário após o envio
        document.querySelector("#gerarRelatorioForm").reset();
    }
    // Se algumSelecionado for true, o envio ocorre normalmente, pois não há preventDefault
});

document.querySelector('#cadastroEvidencia').addEventListener("submit", (e) => {
    alert("A sua evidência foi cadastrada com sucesso.")
})