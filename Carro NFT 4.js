// Array Objeto
let filmes=[
    {"id":1,"title":"DieHard","valor":12.00,"rating":5.0},
    {"id":2,"title": "Homem aranha 1","valor":8.00,"rating":4.0},
    {"id":3,"title": "Homem de ferro","valor":7.00,"rating":3.0},
    {"id":4,"title":"DieHard","valor":13.00,"rating":5.0}
];

//Calculo
let Carango = filmes.map((Valor) => Valor.valor * 0.9);
let Nao_Enche_Meu_Saas = filmes.filter(x => x.valor >= 10)

// Console Daquele Jeito $_$
console.log(Carango);
console.log(Nao_Enche_Meu_Saas);