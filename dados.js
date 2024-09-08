// Exemplo de dados dos lugares
let cidade = [
    { id: 1, nome: 'São Paulo', descricao: 'A maior cidade do Brasil, conhecida por sua diversidade cultural e grandes eventos.' },
    { id: 2, nome: 'Rio de Janeiro', descricao: 'Famosa por suas praias, carnaval e o Cristo Redentor.' },
    { id: 3, nome: 'Curitiba', descricao: 'Conhecida por seu planejamento urbano e parques.' }
];

let lugares = [
    { id: 1, cidadeId: 1, nome: 'Praça da Sé', tipo: 'Praças Públicas', descricao: 'Famosa praça no centro de São Paulo, com a catedral.' },
    { id: 2, cidadeId: 1, nome: 'Bairro da Liberdade', tipo: 'Bairros', descricao: 'Bairro japonês com várias lojas e restaurantes.' },
    { id: 3, cidadeId: 1, nome: 'Metrô Sé', tipo: 'Transporte', descricao: 'Uma das principais estações de metrô de São Paulo.' },
    { id: 4, cidadeId: 1, nome: 'Restaurante Vegano', tipo: 'Restaurantes', descricao: 'Restaurante com várias opções veganas e acessibilidade.' },
    { id: 5, cidadeId: 1, nome: 'Hotel Paulista', tipo: 'Hotéis', descricao: 'Hotel próximo à Avenida Paulista, com acessibilidade.' },
    
    { id: 6, cidadeId: 2, nome: 'Praia de Copacabana', tipo: 'Praças Públicas', descricao: 'Praia famosa com calçadas acessíveis.' },
    { id: 7, cidadeId: 2, nome: 'Bairro de Santa Teresa', tipo: 'Bairros', descricao: 'Bairro cultural com ruas históricas.' },
    { id: 8, cidadeId: 2, nome: 'Metrô Cinelândia', tipo: 'Transporte', descricao: 'Estação central no Rio de Janeiro, próxima ao Theatro Municipal.' },
    { id: 9, cidadeId: 2, nome: 'Restaurante da Lapa', tipo: 'Restaurantes', descricao: 'Restaurante famoso por sua culinária carioca.' },
    { id: 10, cidadeId: 2, nome: 'Hotel Copacabana Palace', tipo: 'Hotéis', descricao: 'Hotel de luxo com acessibilidade completa.' },
    
    { id: 11, cidadeId: 3, nome: 'Jardim Botânico', tipo: 'Praças Públicas', descricao: 'Ponto turístico famoso de Curitiba com jardins e trilhas.' },
    { id: 12, cidadeId: 3, nome: 'Bairro Batel', tipo: 'Bairros', descricao: 'Bairro moderno com muitos restaurantes e opções de lazer.' },
    { id: 13, cidadeId: 3, nome: 'Estação Rodoferroviária', tipo: 'Transporte', descricao: 'Terminal de transporte adaptado para deficientes.' },
    { id: 14, cidadeId: 3, nome: 'Restaurante Curitiba Grill', tipo: 'Restaurantes', descricao: 'Restaurante de rodízio de carnes, com acessibilidade.' },
    { id: 15, cidadeId: 3, nome: 'Hotel Plaza Curitiba', tipo: 'Hotéis', descricao: 'Hotel confortável com acessibilidade completa.' }
];

// Dados de acessibilidade
let acessibilidades = [
    { lugarId: 1, tipo: ['Rampa', 'Piso Tátil'] },
    { lugarId: 2, tipo: ['Piso Tátil'] },
    { lugarId: 3, tipo: ['Braile', 'Rampa', 'Banheiro Adaptado', 'Piso Tátil'] },
    { lugarId: 4, tipo: ['Banheiro Adaptado', 'Rampa'] },
    { lugarId: 5, tipo: ['Banheiro Adaptado', 'Rampa'] },

    { lugarId: 6, tipo: ['Rampa', 'Piso Tátil'] },
    { lugarId: 7, tipo: [] },
    { lugarId: 8, tipo: ['Banheiro Adaptado', 'Rampa'] },
    { lugarId: 9, tipo: ['Banheiro Adaptado'] },
    { lugarId: 10, tipo: ['Banheiro Adaptado', 'Rampa'] },

    { lugarId: 11, tipo: ['Rampa', 'Piso Tátil'] },
    { lugarId: 12, tipo: ['Piso Tátil'] },
    { lugarId: 13, tipo: ['Braile', 'Rampa', 'Banheiro Adaptado'] },
    { lugarId: 14, tipo: ['Banheiro Adaptado'] },
    { lugarId: 15, tipo: ['Banheiro Adaptado', 'Rampa'] }
];

// Adiciona imagens para cada lugar
let imagens = {
    1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtr1aPjjkNvMf9szAtVmT6nX4Tov4TgRcVMxIEbWZwvQfZIiT5QDcoeQ&s=10e.jpg",
    2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtr1aPjjkNvMf9szAtVmT6nX4Tov4TgRcVMxIEbWZwvQfZIiT5QDcoeQ&s=10.jpg",
    3: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtr1aPjjkNvMf9szAtVmT6nX4Tov4TgRcVMxIEbWZwvQfZIiT5QDcoeQ&s=10.jpg",
    4: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtr1aPjjkNvMf9szAtVmT6nX4Tov4TgRcVMxIEbWZwvQfZIiT5QDcoeQ&s=10.jpg",
    5: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtr1aPjjkNvMf9szAtVmT6nX4Tov4TgRcVMxIEbWZwvQfZIiT5QDcoeQ&s=10.jpg",
    
    6: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bk6iJ8qvxUWObMtvvVCFq6YT0CDjBdqIIw&usqp=CAU.jpg",
    7: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bk6iJ8qvxUWObMtvvVCFq6YT0CDjBdqIIw&usqp=CAU.jpg",
    8: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bk6iJ8qvxUWObMtvvVCFq6YT0CDjBdqIIw&usqp=CAU.jpg",
    9: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bk6iJ8qvxUWObMtvvVCFq6YT0CDjBdqIIw&usqp=CAU.jpg",
    10: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bk6iJ8qvxUWObMtvvVCFq6YT0CDjBdqIIw&usqp=CAU.jpg",
    
    11: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj9PHNSZrAeG1VWSuKTnYxerB05Cof-eLbbP9Gl1ii8Pm3IJRaZIOy78&s=10.jpg",
    12: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj9PHNSZrAeG1VWSuKTnYxerB05Cof-eLbbP9Gl1ii8Pm3IJRaZIOy78&s=10.jpg",
    13: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj9PHNSZrAeG1VWSuKTnYxerB05Cof-eLbbP9Gl1ii8Pm3IJRaZIOy78&s=10.jpg",
    14: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj9PHNSZrAeG1VWSuKTnYxerB05Cof-eLbbP9Gl1ii8Pm3IJRaZIOy78&s=10.jpg",
    15: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj9PHNSZrAeG1VWSuKTnYxerB05Cof-eLbbP9Gl1ii8Pm3IJRaZIOy78&s=10.jpg"
};

//-----

// Simulando o banco de dados com cidades
const cidades = [
    { id: 1, nome: 'São Paulo', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAtr1aPjjkNvMf9szAtVmT6nX4Tov4TgRcVMxIEbWZwvQfZIiT5QDcoeQ&s=10e.jpg/300x150?text=Sao+Paulo' },
    { id: 2, nome: 'Rio de Janeiro', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7bk6iJ8qvxUWObMtvvVCFq6YT0CDjBdqIIw&usqp=CAU.jpg/300x150?text=Rio+de+Janeiro' },
    { id: 3, nome: 'Curitiba', imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPj9PHNSZrAeG1VWSuKTnYxerB05Cof-eLbbP9Gl1ii8Pm3IJRaZIOy78&s=10.jpg/300x150?text=Curitiba' }
];

// Função para obter as cidades
function obterCidades() {
    return cidades;
}


