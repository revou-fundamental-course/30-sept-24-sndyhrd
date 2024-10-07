const celciusInput = document.getElementById("celciusInput");
const fahrenheitInput = document.getElementById("fahrInput");
const formulaText = document.getElementById("formula");
formulaText.textContent = `(°C x 9/5) + 32 = °F | °C = (°F - 32) x 5/9`;

function convertToFahrenheit() {
  const celcius = celciusInput.value;
  if (celcius === "") {
    fahrenheitInput.value = "";
    reset()
  } else {
    const fr = (9 / 5) * celcius + 32;
    fahrenheitInput.value = fr.toFixed(1);
    updateFormula(celcius, fr.toFixed(1));
  }
}

function convertToCelcius() {
  const fahrenheit = fahrenheitInput.value;
  if (fahrenheit === "") {
    celciusInput.value = "";
    reset()
  } else {
    const celcius = (fahrenheit - 32) * (5 / 9);
    celciusInput.value = celcius.toFixed(1);
    updateFormula(celcius.toFixed(1), fahrenheit);
  }
}

function updateFormula(celcius, fahrenheit) {
  formulaText.textContent = `(${celcius} °C x 9/5) + 32 = ${fahrenheit} °F | ${celcius} °C = (${fahrenheit} °F - 32) x 5/9`;
}


celciusInput.addEventListener("input", convertToFahrenheit);
fahrenheitInput.addEventListener("input", convertToCelcius);

function reset(){
    fahrenheitInput.value = ""
    celciusInput.value = ""
    formulaText.textContent = `(°C x 9/5) + 32 = °F | °C = (°F - 32) x 5/9`;
}
