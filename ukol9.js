// function vypisSachovnici() {
//     for (let i = 0; i < 8; i++) {
//         let radek = "";
//         for (let j = 0; j < 8; j++) {
//             // Podmínka pro střídání barev
//             if ((i + j) % 2 === 0) {
//                 radek += "Bílá ";  // Bílá políčka
//             } else {
//                 radek += "Černá "; // Černá políčka
//             }
//         }
//         console.log(radek); // Vytiskneme celý řádek
//     }
// }

// // Zavolání funkce
// vypisSachovnici();


// function generujTeploty() {
//     // Města, pro které budeme generovat teploty
//     const mesta = ["Praha", "Brno", "Ostrava", "Plzeň", "Liberec"];
    
//     // 2D pole pro uchování teplot měst
//     const teploty = [];

//     // Pro každé město vygenerujeme náhodnou teplotu mezi -10 a 35 stupni
//     for (let i = 0; i < mesta.length; i++) {
//         let teplota = Math.floor(Math.random() * (35 - (-10) + 1)) + (-10); // Generuje teplotu mezi -10 a 35
//         teploty.push([mesta[i], teplota]);
//     }

//     // Vytiskneme výsledky
//     for (let i = 0; i < teploty.length; i++) {
//         console.log(`${teploty[i][0]}: ${teploty[i][1]}°C`);
//     }
// }

// // Zavolání funkce
// generujTeploty();


// function generujStavKin() {
//     // Počet řad a sedadel v kině
//     const pocetRad = 10; // Počet řad
//     const pocetSedelek = 12; // Počet sedadel v každé řadě
    
//     // Vytvoříme 2D pole pro kino, kde každé sedadlo může být volné (0) nebo obsazené (1)
//     const kino = [];

//     for (let i = 0; i < pocetRad; i++) {
//         const rad = [];
//         for (let j = 0; j < pocetSedelek; j++) {
//             // Generování náhodného čísla 0 nebo 1 pro volné/obsazené místo
//             rad.push(Math.random() > 0.5 ? 1 : 0); // 1 = obsazeno, 0 = volno
//         }
//         kino.push(rad);
//     }

//     // Funkce pro zobrazení stavu kina
//     for (let i = 0; i < kino.length; i++) {
//         let rad = "";
//         for (let j = 0; j < kino[i].length; j++) {
//             // Zobrazí "X" pro obsazené a "O" pro volné místo
//             rad += kino[i][j] === 1 ? "X " : "O ";
//         }
//         console.log(`Řada ${i + 1}: ${rad}`);
//     }
// }

// // Zavoláme funkci pro generování a zobrazení stavu kina
// generujStavKin();




function generujVysledky() {
    const predmety = ['Matematika', 'Čeština', 'Přírodopis', 'Dějepis', 'Tělocvik'];
    const studenti = [
        'Jan Novák', 'Petr Svoboda', 'Lucie Kovářová', 'Eva Černá', 'Tomáš Štěpán', 
        'Alena Veselá', 'Michal Horák', 'Martina Dvořáková', 'Jakub Jelínek', 'Anna Pokorná'
    ];
    
    const vysledky = [];

    // Pro každého studenta vygenerujeme výsledky
    for (let i = 0; i < studenti.length; i++) {
        const student = studenti[i];
        const znamky = {};

        // Pro každý předmět vygenerujeme náhodnou známku
        for (let j = 0; j < predmety.length; j++) {
            const predmet = predmety[j];
            const znamka = Math.floor(Math.random() * 101);  // Náhodné číslo mezi 0 a 100
            znamky[predmet] = znamka;
        }

        // Uložíme výsledky studenta
        vysledky.push({
            student: student,
            znamky: znamky
        });
    }

    // Vytiskneme výsledky
    console.log("Výsledky studentů:");
    vysledky.forEach(vysledek => {
        let radek = `${vysledek.student}:`;
        for (let predmet in vysledek.znamky) {
            radek += ` ${predmet}: ${vysledek.znamky[predmet]}`;
        }
        console.log(radek);
    });
}

// Zavolání funkce pro generování a zobrazení výsledků
generujVysledky();
