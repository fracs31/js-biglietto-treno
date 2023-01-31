const price = 0.21; //prezzo del biglietto
const discount20 = 0.2; //sconto minori 18
const discount40 = 0.4; //sconto over 65
let km = parseFloat(prompt("Inserire i chilometri che si voglio percorrere:")); //chilometri
let age = parseInt(prompt("Inserire l'età:")); //età
let fistName = prompt("Inserire il nome:"); //nome
let secondName = prompt("Inserire il cognome:"); //cognome
let discountAdd; //sconto applicato oppure no
let standardPrice; //prezzo base
let finalPrice; //prezzo finale

//Se l'utente è minorenne
if (age < 18) {
    standardPrice = parseFloat(price * km).toFixed(2); //calcolo il prezzo completo
    finalPrice = parseFloat(standardPrice - (standardPrice * discount20)).toFixed(2); //calcolo il prezzo con lo sconto e arrotondo
} else if (age > 65) { //se l'utente è sopra i 65 anni
    standardPrice = parseFloat(price * km).toFixed(2); //calcolo il prezzo completo
    finalPrice = parseFloat(standardPrice - (standardPrice * discount40)).toFixed(2); //calcolo il prezzo con lo sconto e arrotondo
    discountAdd = "40%"; //sconto applicato
} else { //altrimenti
    standardPrice = parseFloat(price * km).toFixed(2); //calcolo il prezzo finale e arrotondo
    finalPrice = standardPrice; //prezzo finale e prezzo base sono uguali
    discountAdd = "0%"; //sconto non applicato
}

//Stampa in console
console.log("Nome: " + fistName + " " + secondName); //stampa del nome e cognome
console.log("Chilometri: " + km); //stampa chilometri
console.log("Età: " + age); //stampa età
console.log("Prezzo base: €" + standardPrice); //stampa del prezzo base
console.log("Sconto applicato: " + discountAdd); //stampa dello sconto applicato
console.log("Prezzo finale: €" + finalPrice); //stampa del prezzo finale