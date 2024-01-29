function veiksmas() {
  console.log("Edgaras");
  console.log("Smagu");
}
veiksmas();
veiksmas();
veiksmas();
console.log("-----------------------------------");
function eilerastis() {
  console.log(
    "Sukurkite funkciją-\n kuri išvestų 5 eilučių eilėraštį. Iškvieskite šią funkciją"
  );
}
for (let i = 0; i < 5; i++) eilerastis();
eilerastis();
console.log("-----------------------------------");
function text() {
  console.log("vienas");
}
function text1() {
  console.log("du");
}
function text2() {
  console.log("trys");
}
text();
text1();
text2();
console.log("--------------------------------------------------");

function pirmas() {
  console.log("kaip graziai leidziasi saule");
}
function antras() {
  console.log("siltas vakarinis vejas");
}

pirmas();
antras();
console.log("-------------------------------------------------------");
function numbers() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let suma = num1 + num2;
  console.log(num1 + "+" + num2 + "=" + suma);
}
numbers();
numbers();
numbers();
console.log("---------------------------------------------------");
function pareigunas(vardas, pavarde, amzius, alga, etatas, pareigos) {
  console.log("pareigunas:", vardas, pavarde, amzius, alga, etatas, pareigos);
}
let vardas = "Jonas";
let pavarde = "Jonaitis";
let amzius = 68;
let alga = 1200;
let etatas = "pilnas";
let pareigos = "kriminalistas";
pareigunas(vardas, pavarde, amzius, alga, etatas, pareigos);
console.log("-----------------------------------------------");
function randNumbs() {}
