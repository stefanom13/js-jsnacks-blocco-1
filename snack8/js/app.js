// Chiedi un numero di 4 cifre all’utente e 
// calcola la somma  di tutte le cifre che compongono il numero.

const numberUser = prompt('inserisci un numero di 4 cifre');
console.log(numberUser);

const singleNumber = numberUser.split('');
console.log(singleNumber);

const number = []
for (let index = 0; index < singleNumber.length; index++) {
    number.push(parseInt(singleNumber[index]));
    
}
console.log(number)

let sommaNumeri = 0

for (let index = 0; index < number.length; index++) {
    sommaNumeri += number[index]
    
}


console.log(`La somma del numero da te inserito è = ${sommaNumeri}`)  

