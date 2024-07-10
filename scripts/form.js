const products = [
  {
    id: 'fc-1888',
    name: "flux capacitor",
    avgRating: 4.5
  },
  {
    id: 'fc-2050',
    name: "power laces",
    avgRating: 4.7
  },
  {
    id: 'fs-1987',
    name: "time circuits",
    avgRating: 3.5
  },
  {
    id: 'ac-2000',
    name: "low voltage reactor",
    avgRating: 3.9
  },
  {
    id: 'jj-1969',
    name: "warp equalizer",
    avgRating: 5.0
  }
];

const selectInput = document.querySelector('select');

products.forEach((product) => {
  let newOption = document.createElement('option');
  newOption.textContent = product.name;
  newOption.setAttribute('value', product.id);
  selectInput.appendChild(newOption);
});

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