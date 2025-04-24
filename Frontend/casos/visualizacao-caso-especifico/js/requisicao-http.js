const tabelaContainer = document.querySelector('#tabela-corpo');
console.log(tabelaContainer)

// Get id from url
const urlSerachParams = new URLSearchParams(window.location.search)
const casoId = urlSerachParams.get("id")
// console.log(postId);

async function getIndividualCaso(){
    try{
        const url = `http://localhost:3000/casos/${casoId}`;
        const response = await fetch(url);
        const caso = await response.json()
        // console.log(caso);
        window.document.title = `${caso.nome}`
        
        tabelaContainer.innerHTML = templateCaso(caso)
        
    }
    catch{
        console.log('Erro');
        
    }
}

function templateCaso(caso) {

    let data = caso.data.slice(0, 10).split("-");
    let dataFormatada = `${data[2]}/${data[1]}/${data[0]}`;

    return `<tr>
                <td class="titulo-caso">${caso.nome}</td>
                <td class="descricao-caso">${caso.descricao}</td>
                <td class="tipo-caso">${caso.tipo}</td>
                <td class="status-caso"><span class="badge status-${caso.status.toLowerCase().replace(" ", "-")}">${caso.status}</span></td>
                <td class="data-abertura-caso">${dataFormatada}</td>
                <td class="perito-caso">${caso.peritoResponsavel}</td>
            </tr>`;
}

// Executa a função após o DOM estar carregado
document.addEventListener('DOMContentLoaded', () => {
    getIndividualCaso();
});