// Filmes
let FiLmes=[
    {"id":1,"title":"DieHard","valor":12.00,rating:5.0},
    {"id":2,"title": "Homem aranha 1","valor":8.00,rating:4.0},
    {"id":3,"title": "Homem de ferro","valor":7.00,rating:3.0},
    {"id":4,"title":"DieHard","valor":13.00,rating:5.0}
];

//Calculo
let Mapear = FiLmes.map((rating) => {
    //Se rating == 5
    if(rating.rating == 5.0){
        return rating.id
    }
    // filtro de underfined
}).filter(Id =>{
    if (Id != undefined) {
        return Id
    }
})

console.log(Mapear);