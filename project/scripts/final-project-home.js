localStorage.setItem("location", "HOME");
const hamburger = document.querySelector("button");
const navBar = document.querySelector("nav");

function ToggleMenu() {
    if (hamburger.textContent == "☰"){
        hamburger.textContent = "✖";
        navBar.style.display = "flex";
    }
    else if (hamburger.textContent == "✖") {
        hamburger.textContent = "☰";
        navBar.style.display = "none"
    }
}

function UpdateWayfinder(){
    const wayfinder = document.querySelector(".wayfinder")
    let loc = localStorage.getItem("location")
    wayfinder.innerHTML = `${loc}`;
}

UpdateWayfinder();

hamburger.addEventListener('click', ToggleMenu);