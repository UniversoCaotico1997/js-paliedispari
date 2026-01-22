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
// + ===
// if 
// const 


// chiedimao all'utente discelgiere tra pari e dispari 

// const choice = prompt(`Scegli pari o dispari`);
// console.log(choice);

// chiediamo all'utente di scegliere un numero da 1 a 5 

// const userNumber = Number(prompt(`Scegli da 1 a 5`));
// console.log(userNumber);

// variabile con i numeri random generati dal computer 
// const randomNumber = genereteRandomNumber(1, 5);

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// function genereteRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;

// }

// function pariOdispari(numero) {
//     if (numero % 2 === 0) {
//         return true

//     }   return false

// }

// if (pariOdispari(userNumber + randomNumber) === 0) {
//     console.log(`Hai vinto`);

// }else{
//     console.log(`Hai perso`);
// }

//////////////////// ESERCIZIO V2 /////////////////////


// const userEvenOdd = prompt('Scegli Pari o Dispari').toLocaleLowerCase()
// const userNumber = Number(prompt('Scegli un numero da 1 a 5'))
// const pcNumber = fiveRandomNumber(1, 5)


// function fiveRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }


// function sum(firstNumber, secondNumber) {
//     return firstNumber + secondNumber
// }


// function evenToOdd(total) {

//     if (total % 2 === 0) {
//         console.log('sono qui');
//         return 'pari'
//     }
//     console.log('sono qui 2');
//     return 'dispari'
// }

// function win() {
//     if (evenToOdd(sum(userNumber, pcNumber)) === userEvenOdd) {
//         return 'Hai vinto'
//     }
//     return 'Ha vinto il Computer'
// }
// console.log(win());

//////////////////// ESERCIZIO V2 Refactoring  /////////////////////


const userEvenOdd = prompt('Choise Even or Odd').toLocaleLowerCase()
const userNumber = Number(prompt('Choise a number from 1 to 5'))


const fiveRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const pcNumber = fiveRandomNumber(1, 5)

const sum = (firstNumber, secondNumber) => firstNumber + secondNumber

const evenToOdd = (total) => total % 2 === 0 ? 'Even' : 'Odd'

const win = () => evenToOdd(sum(userNumber, pcNumber)) === userEvenOdd ? 'Hai vinto' : 'Ha vinto il Computer'

console.log(win());




