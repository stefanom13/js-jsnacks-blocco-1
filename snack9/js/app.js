// Calcola la somma e la media dei primi 10 numeri. 

const listNumber = []

for (let index = 1; index <= 10; index++) {
    const numbers = index;
    console.log(numbers)
    listNumber.push(numbers)
    
}

let totale = 0
for (let index = 0; index < listNumber.length; index++) {
    totale += listNumber[index]
    
}
console.log(totale)

const medium = totale/10

console.log(medium)