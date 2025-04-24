const formulario = document.querySelector('#form-cadastro-caso');
const url = "http://localhost:3000/casos/";

const nome = document.querySelector('#nome');
const local = document.querySelector('#local');
const data = document.querySelector('#data');
const hora = document.querySelector('#hora');
const descricao = document.querySelector('#descricao');
const tipo = document.querySelector('#tipo');
const perito = document.querySelector('#perito');
const anexos = document.querySelector('#anexos');

formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Impede o comportamento padrão do formulário
    if (!formulario.checkValidity()) {
        alert('Por favor, preencha todos os campos obrigatórios');
        formulario.reportValidity(); // Mostra mensagens de validação do HTML5
    } else {
        const dadosObjeto = {
            nome: nome.value,
            local: local.value,
            data: data.value,
            hora: hora.value,
            descricao: descricao.value,
            tipo: tipo.value,
            status: "Em andamento",
            peritoResponsavel: perito.value,
            anexos: anexos.value
        };
        postDados(dadosObjeto);
    }
});

async function postDados(dadosFormulario) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(dadosFormulario), // Converte o objeto para JSON
            headers: {
                "Content-Type": "application/json" // Corrigido "content-type" para "Content-Type"
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        alert('Caso cadastrado com sucesso!');
        formulario.reset(); // Limpa o formulário após sucesso
        
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao cadastrar caso: ' + error.message);
    }
}