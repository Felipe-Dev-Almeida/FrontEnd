const hobbies = [
    'Correr',
    'Cozinhar',
    'Viajar',
    'Ler',
    'Jogar videogame',
    'Escutar música',
    `Assistir filmes`,
    `Treinar na academia`
];

//Utilizando para iterar arrays e retornar um novo array, compondo um 
//novo array a partir do array original, utilizando uma função de callback

const novosHobbies = hobbies.map((hob) => {
    return `<p>${hob}</p>`;
});

console.log(novosHobbies);