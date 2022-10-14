// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione 
// per capire se la parola inserita è palindroma


// STRUMENTI

// prompt
// funzione
// modulo ===
// if

//Chiediamo all'utente di scrivere una parola

const word = prompt(`Scrivi una parola`);
console.log(word);


// scomponiamo la parola in un Array  

let wordBrokenDown = word.split(``);
// console.log(wordBrokenDown);

// Invertiamo il nostro Array 

let = wordBrokenDown.reverse();
// console.log(wordBrokenDown);

// Ricomponimao la parola 

const invertedWord = wordBrokenDown.join(``);
// console.log(invertedWord);

// Creiamo una funzione 

function palindroma(check) {
    
    if (word === invertedWord) {
        return true   
    
    }   return false
}



if (palindroma(word === invertedWord)) {
    
    console.log(`La parola è palindroma`);
        
 } else {
        console.log(`La parola non è palindroma`);
        
 }