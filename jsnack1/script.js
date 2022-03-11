

// creazione array con numeri casuali 1-300

const array = [];
let somma = 0;
for (let i = 0; i < 20; i++) {
    array[i] = Math.floor(Math.random() * 300 + 1);
    if (i % 2 === 1) {
        somma += array[i];
    }
}
console.log("La somma è:", somma);
