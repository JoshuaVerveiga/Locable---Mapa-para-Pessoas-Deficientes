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

            // Obtém o nome da cidade com base no cidadeId
            const cidadeDoLugar = cidade.find(c => c.id == lugar.cidadeId);

            const itemResultado = document.createElement('div');
            itemResultado.classList.add('item-resultado');
            
            // Adiciona o nome da cidade no topo, seguido pelos dados do lugar
            itemResultado.innerHTML = `
                <h2>${cidadeDoLugar.nome}</h2> <!-- Nome da cidade no topo -->
                <h3>${lugar.nome}</h3> <!-- Nome do local -->
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

//--------------

