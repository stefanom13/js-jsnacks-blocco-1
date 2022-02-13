// L’utente inserisce due parole in successione, con due 
// prompt. Il software stampa prima la parola più corta, poi la 
// parola più lunga.

// creare array 

let parole = [];

while ( parole.length !== 2 ) {
    const parola = prompt("inserisci una parola");

    if (parola.length > 0) {
        parole.push(parola)
    }
    
}

const [parolaA, parolaB] = parole;

let maggiore = `${parolaA} ${parolaB}`;
console.log (maggiore)

if (parolaB.length > parolaA.length) {
    maggiore = `La parola più lunga è ${parolaB}, la più corta è ${parolaA}`;
} else if (parolaA.length == parolaB.length) {
    maggiore = "le parole sono lunghe uguali"
};
// stampare prima parola più corta e poi più lunga
console.log(maggiore);
   
     
 
