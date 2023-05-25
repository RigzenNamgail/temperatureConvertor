const convertBtn = document.getElementById('convert-btn');
const tempInput = document.getElementById('temp');
const unitSelect = document.getElementById('unit');
const resultDiv = document.getElementById('result');

convertBtn.addEventListener('click', () => {
  const temp = parseFloat(tempInput.value);
  const unit = unitSelect.value;
  
  if (isNaN(temp)) {
    resultDiv.innerText = 'Please enter a valid number.';
    return;
  }
  
  switch (unit) {
    case 'celsius':
      resultDiv.innerText = `${temp} °C = ${celsiusToFahrenheit(temp)} °F = ${celsiusToKelvin(temp)} K`;
      break;
    case 'fahrenheit':
      resultDiv.innerText = `${temp} °F = ${fahrenheitToCelsius(temp)} °C = ${fahrenheitToKelvin(temp)} K`;
      break;
    case 'kelvin':
      resultDiv.innerText = `${temp} K = ${kelvinToCelsius(temp)} °C = ${kelvinToFahrenheit(temp)} °F`;
      break;
    }
});

function celsiusToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit + 459.67) * 5/9;
  }
  
  function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
  }
  
  function kelvinToFahrenheit(kelvin) {
    return kelvin * 9/5 - 459.67;
  }