const randomNumbers = [];
const userNumbers = [];
const winNumbers = [];
const numbersBoard = document.querySelector(".random_numbers");
const winBoard = document.querySelector(".win_numbers");
// Visualizzare in pagina 5 numeri casuali.
    // Genero 5 numeri casuali con un ciclo e li aggiungo ad un array di numeri estratti

while (randomNumbers.length < 5) {
    let newNumber = Math.floor(Math.random() * 99) + 1;
    // Creo un controllo per non estrarre numeri uguali
    // Stampo i numeri estratti nell'html
    if (!randomNumbers.includes(newNumber)) {
        randomNumbers.push(newNumber);
        numbersBoard.innerHTML += `<span class="extracted_number">${newNumber}</span>`;
    }
}
console.log(randomNumbers);
// Da lì parte un timer di 10 secondi.
setTimeout(gameQuestions, 10000);
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    // Creo una time function che dopo 10 secondi fa apparire 5 prompt in cui chiede all'utente i numeri visualizzati.
    function gameQuestions() {
        // faccio sparire nell'html la lista di numeri iniziale.
        numbersBoard.classList.add("none");
        for (let i = 0; userNumbers.length < 5; i++){
            let userNumber = parseInt(prompt(`Inserisci i numeri che hai visto: (${i+1}/5)`));
            // Per ogni numero inserito dall'utente lo aggiungo ad un array di numeri scelti dall'utente
            userNumbers.push(userNumber);
            // Verifico se il numero è contenuto nell'array dei numeri iniziali estratti.
            // Se il numero è contenuto nell'array allora lo aggiungo ad un'array di numeri individuati
            if (randomNumbers.includes(userNumber) && !winNumbers.includes(userNumber)) {
                winNumbers.push(userNumber);
                winBoard.innerHTML += `<span class="win_number">${userNumber}</span>`;
            }
        }
        // Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
        winBoard.innerHTML += (`<div class="exit_msg">
                                    Numeri indovinati: ${winNumbers.length}!
                               </div>`);
        // Stampo il valore della lunghezza dell'array di numeri individuati ed ogni valore all'interno
        winBoard.classList.remove("none");
    }