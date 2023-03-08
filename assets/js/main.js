/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

// Numero di KM da chiedere

let userKm = Number(prompt("Quanti Km si vuole percorrere?"));
console.log(userKm);
if (userKm < 1) {
  alert("ERRORE. Km non validi");
}

// Età passeggero

let userAge = Number(prompt("Quanti anni hai?"));
console.log(userAge);

if (userAge < 1) {
  alert("ERRORE. L'età non è valida");
}

// Costo Biglietto in base ai Km

let costKm = 0.21;
console.log(costKm);

// Biglietto senza sconto

ticket = userKm * costKm;
console.log(ticket);

// Biglietto scontato

if (userAge < 18) {
  // sconto del 20% per i minorenni
  ticket *= 0.8;
  console.log(ticket);
} else if (userAge >= 65) {
  // sconto del 40% per gli over 65
  ticket *= 0.6;
  console.log(ticket);
}

// Prezzo Finale

let finalPrice = ticket.toFixed(2);

alert(`Il prezzo del tuo viaggio è di ${finalPrice} €`);
console.log(`Il prezzo del tuo viaggio è di ${finalPrice} €`);


const finalPriceCounter = document.getElementById("Km");
finalPriceCounter.innerHTML = `<span>Km da Percorrere ${userKm}</span>
<br>
<span>Età Passeggero: ${userAge}</span>
<br>
<span>Il biglietto costerà </span>
<span style="color: red;">${finalPrice}</span>`
