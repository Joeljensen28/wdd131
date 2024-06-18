let inputElement = document.querySelector("input");
let buttonElement = document.querySelector("button");
let listElement = document.querySelector("ul");

buttonElement.addEventListener('click', function () {
    if (inputElement.value.trim() !== '') {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = inputElement.value;
        deleteButton.textContent = "❌";

        listElement.append(li);
        listElement.appendC(deleteButton);

        deleteButton.addEventListener('click', function () {
            listElement.removeChild(li);
            input.focus();
            inputElement.value = "";
        });
    }
});