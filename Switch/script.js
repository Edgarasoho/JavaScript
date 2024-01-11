let ticket = "pirmas";

switch (ticket) {
  case "pirmas":
    console.log("vartotojas laimėjo vandens.");
    break;
  case "antras":
    console.log("vartotojas laimėjo limonadą.");
    break;
  case "trecias":
    console.log("vartotojas laimėjo arbatą.");
    break;
  case "ketvirtas":
    console.log("vartotojas laimėjo kavą.");
    break;
    console.log("nera tokio bileto");
  default:
    break;
}
console.log("=================================");
let pirmas = 4;
let antras = 2;
let trecias = 3;
switch (pirmas) {
  case 1:
    let sum = pirmas + antras + trecias;
    console.log(sum);
    break;
  case 2:
    let san = antras * trecias;
    console.log(san);
    break;
  case 3:
    let sa = pirmas * pirmas;
    console.log(sa);
    break;
  default:
    console.log("konsole");
    break;
}
console.log("=================================");
let klaida = "c";
switch (klaida) {
  case "a":
    console.log("pirma klaida");
    break;
  case "b":
    console.log("Antra klaida");
    break;
  case "c":
    console.log("Trecia klaida");
    break;
  case "d":
    console.log("Ketvirta klaida");
    break;

  default:
    console.log("Nera klaidos");
    break;
}
console.log("=================================");
let darboValPerD = 8;
let kepiniaiPerVal = 20;
let darbuotojai = 10;
let kepSavKaina = 1;
let kepKaina = 3;
let uzsak = 1200;

let kepiniai = darboValPerD * kepiniaiPerVal * darbuotojai;
console.log("Kepiniu kiekis per diena:", kepiniai, "kepalu");

let savikaina = kepiniai / kepSavKaina;
console.log("kepalų savikaina:", savikaina, "EUR");

let pajamosPard = kepiniai * kepKaina;
console.log("Pajamos pardavus kepinius:", pajamosPard, "EUR");

let pelnoDal = pajamosPard - savikaina;
console.log("Gauta pelno dalis:", pelnoDal, "EUR");

if (uzsak <= kepiniai) {
  console.log(
    "Uzsakymas ivykdytas,",
    "pagaminta daugiau :",
    kepiniai - uzsak,
    "kepalu"
  );
} else if (uzsak > kepiniai) {
  console.log("Uzsakymas neivykdytas nes truksta:", uzsak - kepiniai, "kepalu");
}
let pajamosIrPelnas = kepiniai * kepKaina - savikaina;
console.log("pajamos ir pelnas", pajamosIrPelnas, "Eur");
