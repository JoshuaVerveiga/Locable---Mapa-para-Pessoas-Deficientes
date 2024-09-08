function pesquisar() {
    // Obtém o valor digitado na barra de pesquisa
    const cidadePesquisada = document.getElementById('search-bar').value.trim().toLowerCase();
    
    // Filtra a cidade correspondente
    const cidadeEncontrada = cidade.find(c => c.nome.toLowerCase() === cidadePesquisada);
    
    // Verifica se encontrou a cidade
    if (!cidadeEncontrada) {
        document.getElementById('resultados-pesquisa').innerHTML = '<p>Nenhuma cidade encontrada com esse nome.</p>';
        return;
    }
    
    // Filtra os lugares relacionados à cidade encontrada
    const lugaresDaCidade = lugares.filter(lugar => lugar.cidadeId === cidadeEncontrada.id);
    
    // Obtém o contêiner onde os resultados serão exibidos
    const resultadosContainer = document.getElementById('resultados-pesquisa');
    resultadosContainer.innerHTML = ''; // Limpa os resultados anteriores

    // Adiciona cada local encontrado dentro da cidade
    lugaresDaCidade.forEach(lugar => {
        const itemResultado = document.createElement('div');
        itemResultado.classList.add('item-resultado');

        // Verifica se existe uma imagem associada ao lugar
        const imagemLugar = imagens[lugar.id] ? imagens[lugar.id] : 'default_image.jpg'; // Caso não haja imagem, usa uma imagem padrão

        // Exibe o nome do local, imagem, descrição, tipo e acessibilidades
        itemResultado.innerHTML = `
            <img src="${imagemLugar}" alt="Imagem de ${lugar.nome}" class="imagem-resultado">
            <h2>${lugar.nome}</h2>
            <p>Tipo: ${lugar.tipo}</p>
            <p>Descrição: ${lugar.descricao}</p>
        `;
        
        resultadosContainer.appendChild(itemResultado);
    });
}

function filtrar() {
    // Obtém os valores dos filtros
    const cidadeId = document.getElementById('filtro-cidade').value;
    const tipoLugar = document.getElementById('filtro-tipo').value;
    const acessibilidadeSelecionada = document.getElementById('filtro-acessibilidade').value;
    
    // Filtra os lugares com base na cidade, tipo e acessibilidade
    let lugaresFiltrados = lugares;

    // Filtrar por cidade
    if (cidadeId) {
        lugaresFiltrados = lugaresFiltrados.filter(lugar => lugar.cidadeId == cidadeId);
    }

    // Filtrar por tipo de lugar
    if (tipoLugar) {
        lugaresFiltrados = lugaresFiltrados.filter(lugar => lugar.tipo === tipoLugar);
    }

    // Filtrar por acessibilidade
    if (acessibilidadeSelecionada) {
        lugaresFiltrados = lugaresFiltrados.filter(lugar => {
            const acessibilidadeLugar = acessibilidades.find(a => a.lugarId === lugar.id);
            return acessibilidadeLugar && acessibilidadeLugar.tipo.includes(acessibilidadeSelecionada);
        });
    }

    // Exibir os resultados filtrados
    const resultadosContainer = document.getElementById('resultados-pesquisa');
    resultadosContainer.innerHTML = ''; // Limpa os resultados anteriores

    if (lugaresFiltrados.length > 0) {
        lugaresFiltrados.forEach(lugar => {
            const acessibilidadeDoLugar = acessibilidades.find(a => a.lugarId === lugar.id);
            const acessibilidadeTexto = acessibilidadeDoLugar && acessibilidadeDoLugar.tipo.length > 0
                ? acessibilidadeDoLugar.tipo.join(", ")
                : "Sem acessibilidades listadas";
            
            const itemResultado = document.createElement('div');
            itemResultado.classList.add('item-resultado');

            // Verifica se existe uma imagem associada ao lugar
            const imagemLugar = imagens[lugar.id] ? imagens[lugar.id] : 'default_image.jpg'; // Caso não haja imagem, usa uma imagem padrão

            // Exibe o nome do local, imagem, descrição, tipo e acessibilidades
            itemResultado.innerHTML = `
                <img src="${imagemLugar}" alt="Imagem de ${lugar.nome}" class="imagem-resultado">
                <h2>${lugar.nome}</h2>
                <p>Tipo: ${lugar.tipo}</p>
                <p>Descrição: ${lugar.descricao}</p>
                <p>Acessibilidades: ${acessibilidadeTexto}</p>
            `;
            
            resultadosContainer.appendChild(itemResultado);
        });
    } else {
        resultadosContainer.innerHTML = '<p>Nenhum local encontrado com esses critérios.</p>';
    }
}

//-----

// Função que carrega as cidades do banco de dados e as exibe antes da pesquisa
function carregarCidades() {
    const resultadosDiv = document.getElementById('resultados-pesquisa');
    resultadosDiv.innerHTML = ''; // Limpa o conteúdo antes de preencher

    const cidades = obterCidades(); // Obtém as cidades do banco de dados

    cidades.forEach(cidade => {
        // Cria o container da cidade
        const cidadeDiv = document.createElement('div');
        cidadeDiv.classList.add('cidade-container');

        // Adiciona a imagem da cidade
        const imgCidade = document.createElement('img');
        imgCidade.src = cidade.imagem; // Assume que a URL da imagem está no objeto cidade
        imgCidade.alt = `Imagem de ${cidade.nome}`;
        cidadeDiv.appendChild(imgCidade);

        // Adiciona o nome da cidade
        const nomeCidade = document.createElement('h3');
        nomeCidade.textContent = cidade.nome;
        cidadeDiv.appendChild(nomeCidade);

        // Cria o botão para ver lugares na cidade
        const botaoCidade = document.createElement('button');
        botaoCidade.textContent = `Ver lugares em ${cidade.nome}`;
        botaoCidade.onclick = () => filtrarPorCidade(cidade.id);
        cidadeDiv.appendChild(botaoCidade);

        // Adiciona o container da cidade ao resultado
        resultadosDiv.appendChild(cidadeDiv);
    });
}

// Função que filtra os resultados por cidade (ajuste conforme sua lógica de filtragem)
function filtrarPorCidade(cidadeId) {
    console.log(`Filtrando por cidade com ID: ${cidadeId}`);
    filtrar(); // Chama a função de filtragem
}

// Chama a função para carregar as cidades assim que a página carrega
window.onload = carregarCidades;

