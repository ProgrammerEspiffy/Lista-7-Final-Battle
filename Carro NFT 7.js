let par = FiLmes.filter(ID =>{
    if (ID.id % 2 == 0) {
       return ID
    }
})
console.log(par);