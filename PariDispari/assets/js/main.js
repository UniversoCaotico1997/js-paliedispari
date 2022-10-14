// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri 
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
// Dichiariamo chi ha vinto.

// STRUMENTI

// Prompt 
// Math random * 5
// Funzione
// +
// if 
// const 


// chiedimao all'utente discelgiere tra pari e dispari 

const choice = prompt(`Scegli pari o dispari`);
console.log(choice);

// chiediamo all'utente di scegliere un numero da 1 a 5 

const userNumber = Number(prompt(`Scegli da 1 a 5`))
console.log(userNumber);

// variabile con i numeri random generati dal computer 
const randomNumber = genereteRandomNumber(1, 5);

// somma dei numeri 


// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function genereteRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
    
}

function pariOdispari(numero) {
    if (numero % 2 == 0) {
        return true
        
    }   return false
          
}

if (pariOdispari(userNumber + randomNumber) == 0) {
    console.log(`Hai vinto`);
    
}else{
    console.log(`Hai perso`);
}






// // ciclo for 
// for (let i = 0; i < 5; i++) {
//     const randomNumber = genereteRandomNumber(1, 5);
//     console.log(randomNumber);
    
// }


