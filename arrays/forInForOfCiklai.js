console.log("---------uzduotis1---------");
let zodziai = ["ranka", "siena", "langas", "sniegas"];
let indeksas = 0;
for (zodis of zodziai) {
  console.log("indeksas", indeksas, "zodis", zodis);
  indeksas++;
}
console.log("---------uzduotis2---------");
let pirkiniai = ["duona", "pienas", "sviestas", "arbata"];
console.log("pirkiniu kiekis", pirkiniai.length);

for (let prekes of pirkiniai) {
  console.log("*", prekes);
}
console.log("---------uzduotis3---------");
let pazimiai = [5, 6, 7, 8, 10];
let vidurkis;
let suma = 0;
for (let pazimis of pazimiai) {
  suma += pazimis;
  console.log("pazimis", pazimis);
}
vidurkis = suma / pazimiai.length;
console.log("vidurkis", vidurkis);
console.log("---------uzduotis4---------");

let kelias = [150, 100, 159, 148];

for (let atstumas of kelias) {
  if (atstumas >= 150) {
    console.log("nuvaziuoti atstumai kuris siekia virs 150 km.", [atstumas]);
  }
}
console.log("---------uzduotis5---------");

console.log("---------uzduotis6---------");
let automobiliai = ["opel", "mitsubishi", "peugeot", "wolksvagen"];
for (let auto of automobiliai) {
  console.log(auto, auto.length);
}

console.log("---------uzduotis7---------");
console.log("---------uzduotis8---------");
let products = [20, 50, 60];
products[0];

console.log("---------uzduotis9---------");
let paz = [5, 5, 2, 10, 8, 6, 5, 3];

let teigiami = [];
let neigiami = [];
let Tvid;
let Nvid;
let sum = 0;
for (let ivert of paz) {
  sum += ivert;
  if (ivert >= 5) {
    teigiami.push(ivert);
  } else {
    neigiami.push(ivert);
  }
}
Tvid = sum / teigiami.length;
Nvid = sum / neigiami.length;
console.log("pazimiai", paz);
console.log(
  "teigiamas ivertinimas",
  teigiami,
  "teigiamu pazimiu kieikis",
  teigiami.length,
  "teigiamu pazimiu vidurkis",
  Tvid
);
console.log(
  "neigiamas ivertinimas",
  neigiami,
  "neigiamu pazimiu kiekis",
  neigiami.length,
  "neigiamu pazimiu vidurkis",
  Nvid
);
console.log("---------uzduotis10---------");

let frStud = [5, 8, 6, 8, 10];
let secStud = [10, 8, 9, 2, 2];
let frVid;
let secVid;
sumA = 0;
Suma = 0;
for (let nums of frStud) {
  sumA += nums;

  console.log("pirmo studento pazymis", nums);
}
frVid = sumA / frStud.length;
console.log("vidurkis", frVid);
for (let numbs of secStud) {
  Suma += numbs;
  console.log("antro studento pazimis", numbs);
}
secVid = Suma / secStud.length;
console.log("antro studento pazimiu vidurkis", secVid);
if (secVid > frVid) {
  console.log("antro studento vidurkis dydesnis");
}
if (frVid > secVid) {
  console.log("pirmo studento vidurkis dydesnis");
}
console.log("---------uzduotis11---------");
