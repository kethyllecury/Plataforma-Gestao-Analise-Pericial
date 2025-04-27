async function retornarCasos() {
    const url = "http://localhost:5000/api/casos"; // URL da sua API
    const tabela = document.querySelector('#tabela-corpo');
    const token = localStorage.getItem("token"); // Recupera o token salvo no login

    if (!token) {
        alert("Token não encontrado. Faça login novamente.");
        window.location.href = "../login/login.html"; // Redireciona para o login se não houver token
        return;
    }

    try {
        const requisicao = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` // Passa o token no cabeçalho
            }
        });

        if (!requisicao.ok) {
            const erro = await requisicao.json();
            throw new Error(erro.message || "Erro ao buscar casos");
        }

        const data = await requisicao.json();
        tabela.innerHTML = data.map(caso => templateCaso(caso)).join('');
    } catch (erro) {
        alert(`Erro na requisição: ${erro.message}`);
    }
}

export function templateCaso(caso) {
    const dataFormatada = caso.data ? new Date(caso.data).toLocaleDateString('pt-BR') : "Data inválida";

    let descricao = caso.descricao || "";
    if (descricao.length > 150) {
        descricao = descricao.slice(0, 150) + ' ...';
    }

    return `<tr>
                <td class="titulo-caso">${caso.nome}</td>
                <td class="descricao-caso">${descricao}</td>
                <td class="tipo-caso">${caso.tipo}</td>
                <td class="status-caso"><span class="badge status-${(caso.status || "").toLowerCase().replace(" ", "-")}">${caso.status}</span></td>
                <td class="data-abertura-caso">${dataFormatada}</td>
                <td class="perito-caso">${caso.peritoResponsavel?.nome || "Sem perito"}</td>
                <td><a href="../visualizacao-caso-especifico/visualizacao-de-caso.html?id=${caso._id}" class="btn btn-acessar-caso btn-sm">Acessar caso</a></td>
            </tr>`;
}



// Executa a função após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    retornarCasos();
});
