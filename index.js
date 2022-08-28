let cap_lt = document.querySelector(".upper_case");
let low_lt = document.querySelector(".lower_case");
let num = document.querySelector(".num");
let spec_char = document.querySelector(".spec_char");
let len = document.querySelector(".length");
let pw = document.getElementById("key");

function check() {
    let upper_case = /[A-Z]/g;
    if (pw.value.match(upper_case)) {
        cap_lt.classList.remove("invalid");
        cap_lt.classList.add("valid");
    }
    else {
        cap_lt.classList.remove("valid");
        cap_lt.classList.add("invalid");
    }

    let lower_case = /[a-z]/g;
    if (pw.value.match(lower_case)) {
        low_lt.classList.remove("invalid");
        low_lt.classList.add("valid");
    }
    else {
        low_lt.classList.remove("valid");
        low_lt.classList.add("invalid");
    }

    let numbers = /[0-9]/g;
    if (pw.value.match(numbers)) {
        num.classList.remove("invalid");
        num.classList.add("valid");
    }
    else {
        num.classList.remove("valid");
        num.classList.add("invalid");
    }

    let char = /["!","@","#","$","%","^","&","*"]/g;
    if (pw.value.match(char)) {
        spec_char.classList.remove("invalid");
        spec_char.classList.add("valid");
    }
    else {
        spec_char.classList.remove("valid");
        spec_char.classList.add("invalid");
    }

    let l = 8;
    if (pw.value.length >= l) {
        len.classList.remove("invalid");
        len.classList.add("valid");
    }
    else {
        len.classList.remove("valid");
        len.classList.add("invalid");
    }
}

document.querySelector("#key").addEventListener("keyup", check)
