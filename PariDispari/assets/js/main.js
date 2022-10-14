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
// ciclo for 

// chiedimao all'utente discelgiere tra pari e dispari 

const pariOdispari = prompt(`Scelgi pari o dispari`);
console.log(pariOdispari);

// chiediamo all'utente di scegliere un numero da 1 a 5 

const userNumber = Number(prompt(`Scegli da 1 a 5`))
console.log(userNumber);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function genereteRandomNumber(min, max) {
    return Math.floor(Math.random() * (min - max)) + min;
    
}

// ciclo for 
for (let i = 0; i < 5; i++) {
    const randomNumber = genereteRandomNumber(1, 5);
    console.log(randomNumber);
    
}


