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

/*
function createAndFindMinMax(N, M) {
    let matrix = [];
    let min = Infinity;
    let max = -Infinity;

    for (let i = 0; i < N; i++) {
        matrix[i] = [];
        for (let j = 0; j < M; j++) {
            let num = Math.floor(Math.random() * 100); // Náhodné číslo od 0 do 99
            matrix[i][j] = num;

            // Hledání minima a maxima
            if (num < min) min = num;
            if (num > max) max = num;
        }
    }

    console.log("Matice:");
    console.table(matrix);
    console.log(`Minimální hodnota: ${min}`);
    console.log(`Maximální hodnota: ${max}`);
}

createAndFindMinMax(6, 8); 
*/

function findElementInMatrix(matrix, X, findAll = false) {
    let occurrences = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === X) {
                if (!findAll) {
                    console.log(`Prvek ${X} nalezen na souřadnicích: [${i}, ${j}]`);
                    return;
                } else {
                    occurrences.push([i, j]);
                }
            }
        }
    }
    if (occurrences.length > 0) {
        console.log(`Prvek ${X} nalezen na souřadnicích:`, occurrences);
    } else {
        console.log(`Prvek ${X} nebyl nalezen.`);
    }
}

// Testovací matice
let testMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
findElementInMatrix(testMatrix, 5); // Varianta (a)
findElementInMatrix(testMatrix, 5, true); // Varianta (b)

