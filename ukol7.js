//Ůloha 1
// function averageOfNumbers() {
//     let p = prompt("Zadej pocet cisel");
//     let sum = 0;
//     for (let i = 0; i < p; i++) {
//         let num = prompt("Zadej cislo");
//         sum += parseInt(num);
//     }
//     let avg = sum / p;
//     alert("Prumer je: " + avg);
// }
// averageOfNumbers();


//Ůloha 2
// function getMultiplication() {
//   for (let x = 1; x <= 10; x++) {
//     for (let y = 1; y <= 10; y++) {
//       console.log(x + " * " + y + " = " + x * y);
//     }
//   }
// }
// getMultiplication();


//Ůloha 3
// function findMinimum() {
//     let min = null;
//     while (true) {
//         let number = parseFloat(prompt("Zadejte číslo (nebo 0 pro ukončení):"));
//         if (number === 0) break;
//         if (min === null || number < min) min = number;
//     }
//     console.log("Minimální hodnota je: " + min);
// }

// findMinimum();

//Ůloha 4
// function countPositivesAndNegatives() {
//     let positiveCount = 0;
//     let negativeCount = 0;
//     while (true) {
//         let number = parseFloat(prompt("Zadejte číslo (nebo 0 pro ukončení):"));
//         if (number === 0) break;
//         if (number > 0) positiveCount++;
//         else if (number < 0) negativeCount++;
//     }
//     console.log("Počet kladných čísel: " + positiveCount);
//     console.log("Počet záporných čísel: " + negativeCount);
// }
// countPositivesAndNegatives();

//Ůloha 5
// function isDivisible(a, b) {
//     return a % b === 0;
// }
// console.log(isDivisible(10, 5));

//Ůloha 6
/*
function factorial(n) {
    if (n < 0) {
        console.log("Faktoriál není definován pro záporná čísla.");
        return null;
    }
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));
*/

//Ůloha 7

function powers(upTo) {
    for (let i = 1; i <= upTo; i++) {
        console.log(`Zadáno číslo ${i} a mocnina je ${i ** 2}.`);
    }
}

// Testovací výstup
powers(5);
