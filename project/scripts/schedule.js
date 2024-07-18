localStorage.setItem("location", "SCHEDULE");

UpdateWayfinder();

const form = document.querySelector("form");
const main = document.querySelector("main");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const userInfo = {};
    
    formData.forEach((value, key) => {
        userInfo[key] = value;
    });

    main.removeChild(form);
    const paragraph = document.createElement("p");
    main.appendChild(paragraph);

    paragraph.textContent = `Thanks, ${userInfo['first-name']}. Your appointment for ${userInfo['date']} at ${userInfo['time']} has been confirmed.`
});