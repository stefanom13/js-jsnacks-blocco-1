// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero
// se è dispari inseriscilo nell’array.

const numeriPari =[]
const numeriDispari =[]

for (let index = 0; index < 6; index++) {
    numberUser = parseInt(prompt('inserisci un numero'))
    console.log(numberUser)
    if (numberUser %2 == 0) {
        numeriPari.push(numberUser)
        
    } else {
        numeriDispari.push(numberUser)
        
    }
}

console.log(numeriPari)
console.log(numeriDispari)