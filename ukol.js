/*
function compareNumbers(a, b) {
    if (a === b) {
        console.log("Čísla jsou si rovna.");
    } else {
        console.log("Čísla nejsou si rovna.");
    }
}
compareNumbers(1, 2);
*/

/*
function oddOrEven(number) {
    if (number % 2 === 0) {
        console.log("Číslo je sudé.");
    } else {
        console.log("Číslo je liché.");
    }
}

oddOrEven(4); 
*/

/*
function positiveOrNegative(number) {
    if (number > 0) {
        console.log("Číslo je kladné.");
    } else if (number < 0) {
        console.log("Číslo je záporné.");
    } else {
        console.log("Číslo je nula.");
    }
}
positiveOrNegative(-2); // Číslo je nula.
*/

/*
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        console.log("Rok je přestupný.");
    } else {
        console.log("Rok není přestupný.");
    }
}
isLeapYear(2020);
*/

/*
function ageCategory(age) {
    if (age >= 0 && age <= 6) {
        console.log("Kategorie: dítě.");
    } else if (age >= 7 && age <= 18) {
        console.log("Kategorie: žák.");
    } else if (age >= 19 && age <= 59) {
        console.log("Kategorie: dospělý.");
    } else if (age >= 60) {
        console.log("Kategorie: důchodce.");
    } else {
        console.log("Neplatný věk.");
    }
}
ageCategory(40); 
*/

/*
function largestOfThree(a, b, c) {
    if (a >= b && a >= c) {
        console.log("Největší číslo je: " + a);
    } else if (b >= a && b >= c) {
        console.log("Největší číslo je: " + b);
    } else {
        console.log("Největší číslo je: " + c);
    }
}
largestOfThree(2,40,655); 
*/


function calculateBMI(weight, height) {
    let bmi = weight / (height * height); // výška v metrech
    if (bmi < 18.5) {
        console.log(`BMI: ${bmi.toFixed(2)} - Podváha`);
    } else if (bmi >= 18.5 && bmi < 24.9) {
        console.log(`BMI: ${bmi.toFixed(2)} - Normální váha`);
    } else if (bmi >= 25 && bmi < 29.9) {
        console.log(`BMI: ${bmi.toFixed(2)} - Nadváha`);
    } else {
        console.log(`BMI: ${bmi.toFixed(2)} - Obezita`);
    }
}
calculateBMI(90, 1.8); 