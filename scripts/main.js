'use strict';

const type = document.querySelector('.type-text');

let listTexts = [' To My Protfolio ...',' My Name is Mouradiano ...'];

let index = -1;
let current = 0;

function typeTextFunc() {
    if (current === listTexts.length) {
        current = 0;
    }
    let typeText = setInterval(() => {
        if (index == listTexts[current].length - 1) {
            clearInterval(typeText);
            clearTextFunc();
        } else {
            index++;
            type.textContent += listTexts[current][index];
        }
    }, 75);
};

function clearTextFunc() {
    let clearText = setInterval(() => {
        if (type.textContent.length == 0) {
            clearInterval(clearText);
            index = -1;
            current++
            typeTextFunc();
        } else {
            type.textContent = type.textContent.slice(0, -1)
        }
    }, 75);
};

typeTextFunc();


(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();


