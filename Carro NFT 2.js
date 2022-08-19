//vetor de objetos
const V = [
    {Numero:1},{Numero:4},{Numero:7},{Numero:1},{Numero:2},{Numero:1},{Numero:4},{Numero:25},{Numero:3},{Numero:7}
]

//calculo
let Media = V.reduce((Acumulador, Num) => Acumulador += Num.Numero,0)

//console.lol
console.log(Media / V.length);