



//Implementujte v JavaScriptu

/*
function createAndPrintArray() {
    let array = []; // Inicializace prázdného pole
    for (let i = 1; i <= 10; i++) {
        array.push(i); // Přidání hodnoty do pole
    }
    console.log("Pole: ", array); // Vytištění pole do konzole
}

createAndPrintArray();
*/


/*
function reverseArray() {
    let n = parseInt(prompt("Zadejte počet čísel:"));
    let array = [];
    
    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt(`Zadejte číslo ${i + 1}:`)));
    }

    console.log("Pole v opačném pořadí: ", array.reverse());
}

reverseArray();
*/


/*
function sumAndAverage() {
    let n = parseInt(prompt("Zadejte počet čísel:"));
    let array = [];
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Zadejte číslo ${i + 1}:`));
        array.push(num);
        sum += num;
    }

    let average = sum / n;
    console.log("Pole: ", array);
    console.log("Součet: ", sum);
    console.log("Průměr: ", average);
}

sumAndAverage();
*/

/*
function countDuplicates() {
    let n = parseInt(prompt("Zadejte počet čísel:"));
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt(`Zadejte číslo ${i + 1}:`)));
    }

    let counts = {};
    for (let num of array) {
        counts[num] = (counts[num] || 0) + 1;
    }

    for (let [key, value] of Object.entries(counts)) {
        console.log(`Číslo ${key} se opakuje ${value}x`);
    }
}

countDuplicates();
*/

/*
function findMinMax() {
    let n = parseInt(prompt("Zadejte počet čísel:"));
    let array = [];

    for (let i = 0; i < n; i++) {
        array.push(parseInt(prompt(`Zadejte číslo ${i + 1}:`)));
    }

    let max = Math.max(...array);
    let min = Math.min(...array);

    console.log("Pole: ", array);
    console.log("Maximální hodnota: ", max);
    console.log("Minimální hodnota: ", min);
}

findMinMax();
*/

/*
function separateEvenOdd() {
    let n = parseInt(prompt("Zadejte počet čísel:"));
    let array = [];
    let even = [];
    let odd = [];

    for (let i = 0; i < n; i++) {
        let num = parseInt(prompt(`Zadejte číslo ${i + 1}:`));
        array.push(num);
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }

    console.log("Pole sudých čísel: ", even);
    console.log("Pole lichých čísel: ", odd);
}

separateEvenOdd();
*/

//Dvourozměrné pole

// function createAndFindMinMax(N, M) {
//     let matrix = [];
//     let min = Infinity;
//     let max = -Infinity;

//     for (let i = 0; i < N; i++) {
//         matrix[i] = [];
//         for (let j = 0; j < M; j++) {
//             let num = Math.floor(Math.random() * 100); 
//             matrix[i][j] = num;

//             if (num < min) min = num;
//             if (num > max) max = num;
//         }
//     }

//     console.log("Matice:");
//     console.table(matrix);
//     console.log(`Minimální hodnota: ${min}`);
//     console.log(`Maximální hodnota: ${max}`);
// }

// createAndFindMinMax(6, 8); 

// function findElementInMatrix(matrix, X, findAll = false) {
//     let occurrences = [];
//     for (let i = 0; i < matrix.length; i++) {
//         for (let j = 0; j < matrix[i].length; j++) {
//             if (matrix[i][j] === X) {
//                 if (!findAll) {
//                     console.log(`Prvek ${X} nalezen na souřadnicích: [${i}, ${j}]`);
//                     return;
//                 } else {
//                     occurrences.push([i, j]);
//                 }
//             }
//         }
//     }
//     if (occurrences.length > 0) {
//         console.log(`Prvek ${X} nalezen na souřadnicích:`, occurrences);
//     } else {
//         console.log(`Prvek ${X} nebyl nalezen.`);
//     }
// }

// // Testovací matice
// let testMatrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
// findElementInMatrix(testMatrix, 5); // Varianta (a)
// findElementInMatrix(testMatrix, 5, true); // Varianta (b)

// function compareSums(matrix) {
//     let sumAboveDiagonal = 0;
//     let sumBelowDiagonal = 0;
//     let m = matrix.length; // Počet řádků
//     let n = matrix[0].length; // Počet sloupců

//     for (let i = 0; i < m; i++) {
//         for (let j = 0; j < n; j++) {
//             if (i < j) {
//                 // Prvky nad hlavní diagonálou
//                 sumAboveDiagonal += matrix[i][j];
//             } else if (i > j) {
//                 // Prvky pod hlavní diagonálou
//                 sumBelowDiagonal += matrix[i][j];
//             }
//         }
//     }

//     console.log("Součet nad diagonálou: " + sumAboveDiagonal);
//     console.log("Součet pod diagonálou: " + sumBelowDiagonal);

//     if (sumAboveDiagonal > sumBelowDiagonal) {
//         console.log("Součet nad diagonálou je větší.");
//     } else if (sumBelowDiagonal > sumAboveDiagonal) {
//         console.log("Součet pod diagonálou je větší.");
//     } else {
//         console.log("Součty nad a pod diagonálou jsou stejné.");
//     }
// }

// // Testování aplikace s příkladem matice
// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ];

// compareSums(matrix);


// function countOddInEvenColumns(matrix) {
//     let count = 0; // Počet lichých čísel
//     let c = matrix.length; // Počet řádků
//     let d = matrix[0].length; // Počet sloupců

//     // Projdeme všechny sloupce (od indexu 0 do d-1)
//     for (let j = 0; j < d; j++) {
//         // Pokud je sloupec sudý (index j je sudý)
//         if (j % 2 === 0) {
//             // Projdeme všechny řádky v tomto sloupci
//             for (let i = 0; i < c; i++) {
//                 // Pokud je číslo liché, zvýšíme počet
//                 if (matrix[i][j] % 2 !== 0) {
//                     count++;
//                 }
//             }
//         }
//     }

//     console.log("Počet lichých čísel v sudých sloupcích: " + count);
// }

// // Testování s maticí
// let matrixB = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
// ];

// countOddInEvenColumns(matrixB);


// Funkce pro načtení matice
// function readMatrix(size) {
//     let matrix = [];
//     for (let i = 0; i < size; i++) {
//         let row = [];
//         for (let j = 0; j < size; j++) {
//             let value = parseInt(prompt(`Zadejte hodnotu pro matici na pozici (${i + 1}, ${j + 1}):`));
//             row.push(value);
//         }
//         matrix.push(row);
//     }
//     return matrix;
// }

// // Funkce pro součet dvou matic
// function addMatrices(matrix1, matrix2, size) {
//     let resultMatrix = [];
//     for (let i = 0; i < size; i++) {
//         let row = [];
//         for (let j = 0; j < size; j++) {
//             row.push(matrix1[i][j] + matrix2[i][j]);
//         }
//         resultMatrix.push(row);
//     }
//     return resultMatrix;
// }

// // Funkce pro zobrazení matice
// function displayMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//         console.log(matrix[i].join(" "));
//     }
// }

// // Hlavní funkce
// function main() {
//     let size = parseInt(prompt("Zadejte velikost čtvercové matice (například 3 pro matici 3x3):"));
    
//     console.log("Zadejte hodnoty pro první matici:");
//     let matrix1 = readMatrix(size);  // Načteme první matici

//     console.log("Zadejte hodnoty pro druhou matici:");
//     let matrix2 = readMatrix(size);  // Načteme druhou matici

//     console.log("Součet matic je:");
//     let resultMatrix = addMatrices(matrix1, matrix2, size);  // Sečteme matice

//     displayMatrix(resultMatrix);  // Vypíšeme výsledek
// }

// main();
