async function retornarCasos() {
    const url = "http://localhost:3000/casos";
    const tabela = document.querySelector('#tabela-corpo');
    
    try {
        const requisicao = await fetch(url);
        const data = await requisicao.json();
        
        // Mapeia os casos para criar um array de strings HTML e junta com join('')
        tabela.innerHTML = data.map(caso => templateCaso(caso)).join('');
    } catch (erro) {
        alert(`Erro na requisição: ${erro.message}`);
    }
}

export function templateCaso(caso) {

    let data = caso.data.slice(0, 10).split("-");
    let dataFormatada = `${data[2]}/${data[1]}/${data[0]}`;
    let descricao = caso.descricao

    if (descricao.length > 150){
        descricao = descricao.slice(0, 130);
        descricao += ' ...'
    }

    return `<tr>
                <td class="titulo-caso">${caso.nome}</td>
                <td class="descricao-caso">${descricao}</td>
                <td class="tipo-caso">${caso.tipo}</td>
                <td class="status-caso"><span class="badge status-${caso.status.toLowerCase().replace(" ", "-")}">${caso.status}</span></td>
                <td class="data-abertura-caso">${dataFormatada}</td>
                <td class="perito-caso">${caso.peritoResponsavel}</td>
                <td><a href="../visualizacao-caso-especifico/visualizacao-de-caso.html?id=${caso.id}" class="btn btn-acessar-caso btn-sm">Acessar caso</a></td>
            </tr>`;
}

// Executa a função após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    retornarCasos();
});