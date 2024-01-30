let calculateButton = document.getElementById("skaiciuoti");
calculateButton.addEventListener("click", function () {
  //   console.log("clicked");
  let darbuotojai = parseInt(
    document.getElementById("darbuotojuSkaicisu").value
  );
  let vienasPerD = parseInt(document.getElementById("vienasPerDiena").value);
  let uzsak = parseInt(document.getElementById("Uzsakymai").value);

  let pagKiekis = darbuotojai * vienasPerD;
  let uzsakIvikd = pagKiekis >= uzsak;

  //   let info = { pagKiekis, uzsakIvikd };
  //   console.log(info);

  let allResults = document.getElementById("results");
  console.log(allResults);
  allResults.innerHTML = `<p> <strong>Kepykla per diena pagamins :</strong>${pagKiekis} kepalus</p>`;
  allResults.innerHTML += `<p> <strong>Kepyklai reikia pagaminti :</strong>${uzsak} kepalus </p>`;
  allResults.innerHTML += `<p> <strong>Ar kepyklai pavyks iškepti reikiama kieki?</strong>${
    uzsakIvikd ? "taip" : "ne"
  } </p>`;
});
document
  .getElementById("darbuotojuSkaicisu")
  .addEventListener("keyup", function (event) {
    // console.log("reiksme pasikeite");
    let valueOfAll = event.target.valueAsNumber;
    if (valueOfAll < 0) {
      event.target.classList.add("error");
      event.target.nextElementSibling.classList.add("show");
    } else {
      event.target.classList.remove("error");
      event.target.nextElementSibling.classList.remove("show");
    }
  });
document.getElementById("reset").addEventListener("click", function () {
  //   console.log("paspausti");
  document.getElementById("darbuotojuSkaicisu").value = 0;
  document.getElementById("vienasPerDiena").value = 0;
  document.getElementById("Uzsakymai").value = 0;
  document.getElementById("results").innerHTML = `<p>skaičiavimų nėra</p>`;
});
document
  .getElementById("vienasPerDiena")
  .addEventListener("keyup", function (event) {
    // console.log("reiksme pasikeite");
    let makedVolue = event.target.valueAsNumber;
    if (makedVolue < 0) {
      event.target.classList.add("PerDienaError");
      event.target.nextElementSibling.classList.add("show");
    } else {
      event.target.classList.remove("PerDienaError");
      event.target.nextElementSibling.classList.remove("show");
    }
  });
