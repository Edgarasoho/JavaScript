let studentas = {
  vardas: "Edgaras",
  pavarde: "Obana",
  amzius: 22,
  ugis: 186,
  kursa: 2,
  mokykla: "vilnius coding",
};

console.log(studentas);
console.log(studentas.vardas);
console.log(studentas.ugis);
console.log(studentas.mokykla);
console.log("-----------------------");
let filmas = {
  pavadinimas: "The Dead Dont Die",
  režisierius: "Jim Jarmusch",
  biudžetas: 200.0,
  žanras: "veiksmo",
  trukmė: 103,
  išleista: 2019,
  uzdarbis: 500.0,
};
let pelnas = filmas.uzdarbis - filmas.biudžetas;
let metai = new Date(Date.now()).getFullYear() - filmas.išleista;
let aktoriai = [
  "Bill Murray",
  "Tilda Swinton",
  "Chloë Sevigny",
  "Selena Gomez",
  "IGGY POP",
  "Steve Buscemi",
];
console.log(filmas);
console.log("aktoriai:", aktoriai, "vaidino", aktoriai.length, "aktoriai");
console.log("filmo pelnas:", pelnas, "tukstanciu", "eur.");
console.log("filmas yra", metai, "metu senumo");
console.log("-----------------------");
let knyga = {
  pavadinimas: "ROBINZONAS KRUZAS",
  autorius: " Daniel Defoe",
  zanras: "nuotikiu romanas",
  kaina: 19.99,
  puslapiai: 224,
  skyriai: 10,
  isleista: 2020,
  knygynuose: "yra",
};
let knyga2 = {
  pavadinimas: "ŠERLOKO HOLMSO IR DAKTARO DŽONO H. VATSONO ISTORIJOS",
  autorius: "Artur Conan Doyle",
  zanras: "nuotikiu ",
  kaina: 20.69,
  puslapiai: 1168,
  skyriai: 52,
  isleista: 2020,
  knygynuose: "yra",
};
if (knyga.puslapiai > knyga2.puslapiai) {
  console.log(
    "ROBINZONAS KRUZAS turi daugiau puslapiu nei ŠERLOKO HOLMSO IR DAKTARO DŽONO H. VATSONO ISTORIJOS"
  );
  if (knyga2.puslapiai > knyga.puslapiai) {
    console.log(
      "ŠERLOKO HOLMSO IR DAKTARO DŽONO H. VATSONO ISTORIJOS turi daugiau puslapiu nei ROBINZONAS KRUZAS"
    );
  }
}
console.log(knyga);
console.log(knyga2);
console.log(
  knyga2.puslapiai > knyga.puslapiai,
  "ŠERLOKO HOLMSO IR DAKTARO DŽONO H. VATSONO ISTORIJOS turi daugiau puslapiu nei ROBINZONAS KRUZAS"
);

console.log(
  knyga.puslapiai > knyga2.puslapiai,
  "ROBINZONAS KRUZAS turi daugiau puslapiu nei ŠERLOKO HOLMSO IR DAKTARO DŽONO H. VATSONO ISTORIJOS"
);

console.log("----------------------------------------------------------------");

let preke1 = {
  pavadinimas: "plaktukas",
  kaina: 12,
  savikaina: 8.5,
  kodas: "plak02",
  sandelyje: 36,
  siunta: "5x5x3",
};
let preke2 = {
  pavadinimas: "kirvis",
  kaina: 18,
  savikaina: 11,
  kodas: "plak02",
  sandelyje: 29,
  siunta: "10x10x3",
};
let preke3 = {
  pavadinimas: "kastuvas",
  kaina: 21,
  savikaina: 16,
  kodas: "plak02",
  sandelyje: 48,
  siunta: "100x5x3",
};

console.log(preke1, preke2, preke3);
console.log(
  "pirmos prekes kaina:",
  preke1.kaina,
  "antros prekes kaina:",
  preke2.kaina,
  "trecios prekes kaina:",
  preke3.kaina
);
if (preke1.kaina > preke2.kaina && preke1.kaina > preke3.kaina) {
  console.log("pirmos prekes kaina didziausia ", preke1.kaina);
}
if (preke2.kaina > preke1.kaina && preke2.kaina > preke3.kaina) {
  console.log("antros prekes kaina didziausia", preke2.kaina);
}
if (preke3.kaina > preke1.kaina && preke3.kaina > preke2.kaina) {
  console.log("trecios prekes kaina didziausia", preke3.kaina);
}
console.log("siuntos dydis", preke1.siunta);
console.log("siuntos dydis", preke2.siunta);
console.log("siuntos dydis", preke3.siunta);

console.log(
  "pelningumas",
  preke1.kaina - preke1.savikaina,
  "eur.",
  "likutis:",
  preke1.sandelyje,
  "vnt."
);
console.log(
  "pelningumas",
  preke2.kaina - preke2.savikaina,
  "eur.",
  "likutis:",
  preke2.sandelyje,
  "vnt."
);
console.log(
  "pelningumas",
  preke3.kaina - preke3.savikaina,
  "eur.",
  "likutis:",
  preke3.sandelyje,
  "vnt."
);
console.log("----------------------------------------------------------------");
let car = {};

console.log(car);
car.marke = "Skoda";
car.modelis = "octavia";
car.rida = 25000;
car.metai = 2020;
car.spalva = "raudona";
car.galia = 1.5;
car.bukle = "nedauzta";
car.statusas = "parduodama";

console.log(car);
console.log(
  "automobilio amzius:",
  new Date(Date.now()).getFullYear() - car.metai,
  "metai"
);
