//Vetor improvisado
const vetor = [
    { Num: 10 }, { Num: 14 }, { Num: 20 }, { Num: 9 }, { Num: 16 }, { Num: 22 },
]

//Console e Filter
let Numero = vetor.filter(x => x.Num >= 15)
console.log(Numero);