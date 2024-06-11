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