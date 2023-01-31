const price = 0.21; //prezzo del biglietto
const discount20 = 0.2; //sconto minori 18
const discount40 = 0.4; //sconto over 65
let km = parseFloat(prompt("Inserire i chilometri che si voglio percorrere:")); //chilometri
let age = parseInt(prompt("Inserire l'età:")); //età
let finalPrice; //prezzo finale

//Se l'utente è minorenne
if (age < 18) {
    finalPrice = price * km; //calcolo il prezzo completo
    finalPrice = parseFloat(finalPrice - (finalPrice * discount20)).toFixed(2); //calcolo il prezzo con lo sconto e arrotondo
} else if (age > 65) { //se l'utente è sopra i 65 anni
    finalPrice = price * km; //calcolo il prezzo completo
    finalPrice = parseFloat(finalPrice - (finalPrice * discount40)).toFixed(2); //calcolo il prezzo con lo sconto e arrotondo
} else { //altrimenti
    finalPrice = parseFloat(price * km).toFixed(2); //calcolo il prezzo finale e arrotondo
}

//Stampa in console
console.log("Chilometri: " + km); //stampa chilometri
console.log("Età: " + age); //stampa età
console.log("Prezzo finale: " + finalPrice); //stampa del prezzo finale