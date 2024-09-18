const punchbtn = document.querySelector(".btn-punch");
const punchtext = document.querySelector(".message");
const calcinput = document.querySelector("#calc-input");
const calcbtn = document.querySelector("#calculate-btn");
const calcresult = document.querySelector(".calc_result");

const answer = document.querySelector(".container");
const check = document.querySelector("#check-btn");
const age = document.querySelector("#age-input")
punchbtn.addEventListener("click", punched);
calcbtn.addEventListener("click", calculate);
check.addEventListener("click", checked)

function punched() {
    if (punchbtn.textContent === "Punch") {
        punchbtn.textContent = "Leave";
        punchtext.textContent = "Ouch T-T";
    }

    else {
        punchbtn.textContent = "Punch";
        punchtext.textContent = "Fuck You!";
    }
}

function calculate() {
    const input = calcinput.value;

    if (input === "") {
        calcresult.textContent = "Empty";
    }

    else {
        const result = eval(input);
        calcresult.textContent = result;
    }
}

function checked() {
    const age_input = age.value
    
    if (age_input < 18) {
        answer.style.backgroundColor = "Red"
        answer.textContent = "Not Allowed"
    }

    else {
        answer.style.backgroundColor = "Green"
        answer.textContent = "Allowed"
    }
}