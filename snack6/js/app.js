// Stampa il cubo dei primi N numeri, dove N è un numero 
// indicato dall’utente.

const numberUSer = parseInt(prompt('inserisci un numero'))

for (let index = 1; index < numberUSer; index++) {
    const element = [index];
    let numberCube =[index]**3
    
    console.log(`il cubo dei primi ${numberUSer} numeri è ${numberCube}`)
    
}