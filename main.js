// chiedere nome all'utente
var nome_utente = prompt("Inserisci il tuo nome", "Luca");
// chiedere il cognome all'utente
var cognome_utente = prompt("Inserisci il tuo cognome", 'Santini');
// chiedere il colore preferito all'utente
var colore_utente = prompt("Inserisci il tuo colore preferito", 'Blu');
// numero
var numero = ("20");

document.getElementById("password").innerHTML = nome_utente + cognome_utente + colore_utente + numero;

console.log(nome_utente);
console.log(cognome_utente);
console.log(colore_utente);
