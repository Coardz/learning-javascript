const inputName = document.querySelector("#name-input");
const btnSubmit = document.querySelector("#btn-submit");
const btnClear = document.querySelector("#btn-clear");
const strOutput = document.querySelector("#str-output");



btnSubmit.addEventListener("click", submit);
btnClear.addEventListener("click", clear);

function submit() {
    // let name = ;
    strOutput.textContent =  `Hello ${inputName.value}`;
}

function clear() {
    strOutput.textContent = "";
    inputName.value = "";
}