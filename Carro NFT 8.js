const empresas=[
    { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk',anoDeCriacao:1938},
    { nome: 'Microsoft',valorDeMercado: 415, CEO: 'SatyaNadella',anoDeCriacao:1975},
    { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich',anoDeCriacao:1968},
    { nome: 'Facebook',valorDeMercado: 383, CEO:'MarkZuckerberg',anoDeCriacao:2004},
    { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek',anoDeCriacao:2006},
    {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook',anoDeCriacao:1976}
];

let doismil = empresas.filter((Filtro) => Filtro.anoDeCriacao >= 2000)

let NomeCeo = empresas.map((x) => {
    let string = "Nome da empresa: " + x.nome + " Nome do CEO:  " + x.CEO
    return string
})

let Valor = empresas.reduce((Valor, Soma) => Valor  += Soma.valorDeMercado, 0)

console.log(doismil);
console.log(NomeCeo);
console.log(Valor);