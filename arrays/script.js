let produktai = ["makaronai", "pienas", "vanduo", "duona"];
console.log(produktai[0]);
console.log(produktai[produktai.length - 1]);
console.log(produktai[2]);
console.log(produktai.length);
console.log("--------------------------");
console.log(produktai);
produktai[1] = "sviestas";
produktai[2] = "padazas";
produktai[3] = "cipsai";
console.log(produktai);
console.log("--------------------------");
let tuscias = [];
tuscias.push(1, 2, 3, 4, 5, 6);
console.log(tuscias);
console.log("---------Uzduotis4-----------------");
let pastatas = [];
pastatas.push(Math.floor(Math.random() * 10));
console.log(pastatas);
console.log("---------Uzduotis5-----------------");

let firstStud = [];
let secStud = [];

firstStud.push(5, 10, 8, 10, 7);
secStud.push(10, 7, 4, 9, 6);

let sum =
  firstStud[0] + firstStud[1] + firstStud[2] + firstStud[3] + firstStud[4];
let vidurkisFirst = sum / firstStud.length;
let suma = secStud[0] + secStud[1] + secStud[2] + secStud[3] + secStud[4];
let vidurkisSec = suma / secStud.length;
console.log("pirmojo studento pazimiai", firstStud);
console.log("antrojo studento pazimiai", secStud);

console.log("pirmo studento vidurkis ", vidurkisFirst);
console.log("antro studento vidurkis", vidurkisSec);

if (vidurkisFirst > vidurkisSec) {
  console.log("pirmojo studento vidurkis didesnis");
}
if (vidurkisFirst < vidurkisSec) {
  console.log("antrojo studento vidurkis didesnis");
}
console.log("---------Uzduotis6-----------------");
let stud = ["matematikos", "teises", "ekonimikos", "pedagogikos"];

console.log("studiju programa", stud[0]);
console.log("studiju programa", stud[1]);
console.log("studiju programa", stud[2]);
console.log("studiju programa", stud[3]);
console.log();
// antras budas su for
for (let i = 0; i < stud.length; i++) {
  console.log("studiju programa:", stud[i]);
}
console.log("---------Uzduotis7-----------------");
let salis = ["Anglija", "Norvegija", "Danija", "Vokietija"];
console.log("Salis:", salis[0]);
console.log("Salis:", salis[1]);
console.log("Salis:", salis[2]);
console.log("Salis:", salis[3]);
console.log("---------Uzduotis8-----------------");

let project = ["vaiku darzelis", "gyvenamasis namas", "parkas", "baznycia"];
for (let i = 0; i < project.length; i++) {
  console.log(i + 1 + "-as projektas yra" + project[i]);
}

console.log("---------Uzduotis9-----------------");
