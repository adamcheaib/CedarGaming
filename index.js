"use strict"

const navContainer = document.querySelector("nav");
const phoneMenu = document.getElementById("phoneNavButtons");
const main = document.querySelector("main");
window.scrollTo(0, 0);
const dialog = document.querySelector("dialog");

const detectScroll = () => {
    let oldScroll = window.scrollY;
    
    return () => {
        if (window.scrollY > oldScroll) {
            navContainer.style.position = "fixed";
            navContainer.style.top = -70 + "px";
            oldScroll = window.scrollY;
        } else {
            navContainer.style.position = "fixed";
            navContainer.style.top = 0 + "px";
            oldScroll = window.scrollY;
        }

        if (window.scrollY < 30) {
            navContainer.style.position = "static";
            main.style.marginTop = 0 + "px";
        } else {
            navContainer.style.position = "fixed";
            main.style.marginTop = 70 + "px";
        }
    }
}

const eventFunction = detectScroll();

window.addEventListener("scroll", eventFunction);
phoneMenu.addEventListener("click", popUpMenu);

function popUpMenu() {
    if (document.querySelector(".dialog") !== null) {
        document.querySelector(".dialog").remove();
    }
    const dialog = document.createElement("div");
    dialog.innerHTML = "";
    dialog.className = "dialog";

    dialog.style.top = window.scrollY - 100;
    
    dialog.innerHTML = `
    <div id="dialogContainer">
        <div id="close">
            <span>X</span>
        </div>
    
        <div id="touchContainer">
            <a href="#topPage">HOME</a>
            <a href="#ourWork">OUR WORK</a>
            <a href="#aboutUs">ABOUT US</a>
        </div>
    </div>
    `;
    
    dialog.querySelectorAll("#touchContainer > a").forEach(item => {
        item.addEventListener("click", () => dialog.remove());
    })

    dialog.querySelector("#close").addEventListener("click", () => dialog.remove());

    document.body.appendChild(dialog);
}