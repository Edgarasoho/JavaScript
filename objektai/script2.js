let books = [
  { pavadinimas: "beglis", zanras: "veiksmo", autorius: "Leonardas Davis" },
  {
    pavadinimas: "medinis akmuo",
    zanras: "romanas",
    autorius: "Pranas Pranaitis",
  },
  { pavadinimas: "Obuoliu pasaka", zanras: "pasakos", autorius: "Vacys Molis" },
];
for (knyga of books) {
  console.log(`- ${knyga.pavadinimas}(${knyga.zanras})`);
}
// console.log("knygos:\n", books, "\n-----------");
console.log("trecia knyga:\n", books[2].pavadinimas, "\n-------");
console.log("trecios knygos zanras:\n", books[2].zanras, "\n--------------");
console.log("-----------------uzduotis-2------------------------");
let prekes = [
  { preke: "plaktukas", svoris: "5 kg.", kaina: "15 eur." },
  { preke: "kirvis", svoris: "15 kg.", kaina: "25.5 eur." },
  { preke: "kastuvas", svoris: "6 kg.", kaina: "38.2 eur." },
];
console.log("\n", prekes[0], "\n--------------------------------------------");
console.log("\n", prekes[1], "\n--------------------------------------------");
console.log("\n", prekes[2], "\n--------------------------------------------");

console.log("-----------------uzduotis-3------------------------");
const cars = [
  {
    marke: "Skoda",
    modelis: "Octavia",
    galia: "85 kw.",
    metai: 2019,
  },
  {
    marke: "Chrysler",
    modelis: "Voyager",
    galia: "96 kw.",
    metai: 2010,
  },
  {
    marke: "Ford",
    modelis: "Mondeo",
    galia: "98 kw.",
    metai: 2015,
  },
  {
    marke: "Wolksvagen",
    modelis: "T-Roc",
    galia: "110 kw.",
    metai: 2022,
  },
];
for (car of cars) {
  console.log(
    `${car.marke}(${car.modelis}) automobilio amzius: (${
      2024 - car.metai
    } metai)`
  );
}
console.log("-----------------uzduotis-4------------------------");
const company = [
  {
    imone: "UAB Motorai",
    darbuotojai: 4,
    veikla: "el. motoru remontas",
    pelnas: 15000,
  },
  {
    imone: "UAB Ratai",
    darbuotojai: 10,
    veikla: "transporto nuoma",
    pelnas: 36500,
  },
  {
    imone: "UAB Kranai",
    darbuotojai: 3,
    veikla: "kranu paslaugos",
    pelnas: 68200,
  },
  {
    imone: "UAB Medis",
    darbuotojai: 12,
    veikla: "pjovimo darbai",
    pelnas: 15000,
  },
];
for (job of company) {
  console.log();
}
