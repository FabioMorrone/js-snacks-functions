/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function salutare(userName) {
    return 'Ciao '+ userName; 

}

// Invoca la funzione qui e stampa il risultato in console

const somma = salutare (userName)
console.log(somma);


//Risultato atteso se si passa 'Mario': // ciao Mario
