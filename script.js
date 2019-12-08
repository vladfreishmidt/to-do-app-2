let ourForm = document.getElementById("ourForm");
let ourFiled = document.getElementById("ourField");
let ourList = document.getElementById("ourList");

ourForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createItem(ourFiled.value);
})

function createItem(x) {
    let ourHtml = `<li>${x} <button onclick="deleteItem(this)">Delete</button></li>`;
    ourList.insertAdjacentHTML("beforeend", ourHtml)
    ourFiled.value = "";
    ourFiled.focus();
}

function deleteItem(elementToDelete) {
    elementToDelete.parentElement.remove();
    ourFiled.focus();
}