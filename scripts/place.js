// Obtains the current year
const currentYear = new Date().getFullYear();
// Selects the element with an id of "currentyear" to display the const in
const currentYearElement = document.querySelector("#currentyear");
// Updates the text with the year
currentYearElement.textContent = currentYear;

// Gets the last modification date
let oLastModif = new Date(document.lastModified);
// Selects the correct element
const lastModifiedElement = document.querySelector("#lastmodified");
// Updates text
lastModifiedElement.textContent = oLastModif;

function calculateWindChill(T, V) {
    let result = 35.74 + 0.6215 * T - 35.75 * (V ** 0.16) + 0.4275 * T * (V ** 0.16);
    return Math.round(result, 1);
}

let temperature = 25;
let windSpeed = 3;
let windChill = calculateWindChill(temperature, windSpeed);

const tempElement = document.querySelector("#temp-element");
const windSpeedElement = document.querySelector("#wind-speed-element");
const windChillElement = document.querySelector("#wind-chill-element");

tempElement.textContent = `${temperature}°C`;
windSpeedElement.textContent = `${windSpeed} km/h`;

if (temperature <= 10) {
    windChillElement.textContent = `${windChill}°C`;
} else {
    windChillElement.textContent = "N/A";
}