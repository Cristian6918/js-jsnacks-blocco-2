
//****************Versione FOR *************//
/**Uso del While per controllo dato inserito **/


// let somma = 0;
// for (let i = 0; i < 5; i++) {
//     let number = parseInt(prompt('inserisci un numero'));


//     while (isNaN(number)) { 
//         number = parseInt(prompt('inserisci un numero valido'));
//     }
//     somma += number;
// }
// console.log("la somma è:", somma);


//*************Versione While ************//
let somma = 0;
let j = 0;
while (j < 5) {
    let number = parseInt(prompt('Inserisci un numero'));
    while (isNaN(number)) {
        number = parseInt(prompt('Inserire un numero Valido'));
    }
    somma += number;
    j++;
}

console.log('La somma è ', somma);