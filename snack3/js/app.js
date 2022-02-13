// Il software deve chiedere per 5 volte all’utente di inserire un numero
// Il programma stampa la somma di tutti i numeri inseriti
// Esegui questo programma in due versioni, con il for // e con il while.

const numeri = []

let totale = 0

for (i = 0; i < 5; i++){
  let numberUser = parseInt( prompt ('Inserisci un numero') )
  numeri.push(numberUser)
  totale += numeri[i]
}
console.log(numeri)
console.log(totale)

// while (numeri.length <= 4 ){
//     let numberUser = parseInt( prompt ('Inserisci un numero') )
//     if (numberUser !== isNaN)
//     numeri.push(numberUser)
//   }
//   console.log(numeri)
  
//   let totale = 0
//  for(i = 0; i < 5; i++){
//     totale += numeri[i]
//   }
//   console.log(totale)