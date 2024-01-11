for (let i = 0; i <= 10; i++) {
  console.log(i);
}
console.log("============================");

for (let i = 0; i <= 15; i += 2) {
  console.log(i);
}
console.log("============================");
for (let i = 1; i <= 20; i += 3) {
  console.log([i]);
}
console.log("============================");
for (let i = 1; i <= 20; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}
console.log("============================");
let pradzia = 10;
let pabaiga = 0;
for (let i = pradzia; i < pabaiga; i++) {
  console.log("skaicius", i, i * i);
  console.log("---------------------------------");
}
console.log();
for (let i = pradzia; i <= pabaiga; i += 3) {
  console.log("skaicius", i);
  console.log("---------------------------------");
}
