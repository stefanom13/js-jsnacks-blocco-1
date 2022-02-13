
// L’utente inserisce due numeri in successione, con due 
// prompt. Il software stampa il maggiore

// creazione variabili 
let firstNumber = parseFloat (prompt('inserisci un numero'))
let secondNumber = parseFloat (prompt('inserisci altro numero'))
console.log(firstNumber,secondNumber)

// creo variabile per if 
let numberMagg = firstNumber

// inizializzo if per vedere quale numero sia maggiore 
if (firstNumber < secondNumber) {
    numberMagg = secondNumber
}

// stampo numero maggiore 
   console.log(`numero maggiore = ${numberMagg}`)    