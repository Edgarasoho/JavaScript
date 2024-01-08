let a = 15;
let b = 9;
let c = 22;

if (a > b && a > c) {
  console.log("didziausias yra:", a);
} else if (b > a && b > c) {
  console.log("didziausias yra:", b);
} else if (c > a && c > b) {
  console.log("didziausias yra:", c);
}

console.log("=======================================");
let maziausias;
if (a <= b && a <= c) {
  maziausias = a;
} else if (b <= a && b <= c) {
  maziausias = b;
} else {
  maziausias = c;
}
console.log("maziausias skaicius yra :", maziausias);
console.log("=======================================");
let rez1 = 9;
let rez2 = 6;
let rez3 = 8;
let vidurkis = (rez1 + rez2 + rez3) / 3;
if (vidurkis >= 8 && vidurkis <= 10) {
  console.log(" vidurkis 8-10");
} else if (vidurkis >= 5 && vidurkis < 8) {
  console.log("vidurkis 5 - 8");
} else if (vidurkis < 5) {
  console.log("neislaikyta");
}
console.log("========================================");
let Pirmas = 0;
let Antras = 5;

if (Pirmas > Antras || Pirmas == 0) {
  console.log("pirmas skaičius yra didesnis už antrąjį arba yra lygus 0;");
}
if (Antras > Pirmas || Antras == 5) {
  console.log("antras skaičius yra didesnis už pirmąjį arba yra lygus 5;");
}
if (Pirmas > Antras || Pirmas == 20) {
  (" ar pirmas skaičius yra didesnis už antrąjį ir yra lygus 20;");
}
if (Antras > Pirmas || Antras < 100) {
  console.log(
    " antras skaičius yra didesnis už pirmąjį ir yra mažesnis už 100;"
  );
}
