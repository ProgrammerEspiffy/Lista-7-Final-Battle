let Filmes=[
    {"id":1,"title":"DieHard","valor":12.00,"rating":5.0},
    {"id":2,"title": "Homem aranha 1","valor":8.00,"rating":4.0},
    {"id":3,"title": "Homem de ferro","valor":7.00,"rating":3.0},
    {"id":4,"title":"DieHard","valor":13.00,"rating":5.0}
];

let Contador = 0;
let Cur = Filmes.map((v) => v.valor)
let Tome = Cur.reduce((Acumulador, item) => {
    if (item < 10) {
        Contador++
        return Acumulador + item
    }else {
        return Acumulador;
    }
}
, 0)
console.log(Tome / Contador);