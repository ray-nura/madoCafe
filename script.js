import { getDataMado } from "./dataMado.js";

const dataMado = getDataMado();
const navMenu = document.querySelector("#navMenu");
const mainFirstPage = document.querySelector("main");
const centerMenu = document.querySelector(".menu-center");
const contentMenu = document.querySelector(".menu-right");
const leftMenu = document.querySelector(".menu-left");


const menuHeader = document.querySelector("#menuHeader");
const sectionMenuCenter = document.querySelector(".section-menu-center");
const sectionMenu = document.querySelector(".section-menu");
const locationContent = document.querySelector(".locationContent");
const clickLocationContent = document.querySelector("#locationContent");
const aboutUsContent = document.querySelector(".aboutUsContent");
const clickAboutUsContent = document.querySelector("#aboutUsContent");
const menuBtn = document.querySelector(".menubtn");
const clickLogoMado = document.querySelector(".logoMado");
const navMenuContent = document.querySelector(".nav-menu-content");

function refreshPage(){
    mainFirstPage.style.display = "block"
    sectionMenu.style.display = "none"
    sectionMenuCenter.style.display = "none";
}
function displayAllCategory() {
    mainFirstPage.style.display = "none"
    sectionMenu.style.display = "none"
    sectionMenuCenter.style.display = "block";
    console.log("navbar");
}
function showResult(filteredArr) {
    sectionMenuCenter.style.display = "none";
    sectionMenu.style.display = "grid"
    clearDiv();
    filteredArr.forEach(function (el) {
        const info = document.createElement("div");
        info.className = "card";
        info.innerHTML = `
        <img src="${el.imgURL}" alt="">
        <div class="card">
        <div>${el.servedFor}</div>
        <div class="darkBlue">${el.itemTitle}</div>
        <div class="green">${el.itemPrice}
        <button class="addCart">add <i class="fas fa-cart-arrow-down"></i></button>
        </div></div>
    `
        contentMenu.appendChild(info);
    })
}
function clearDiv() {
    while (contentMenu.firstChild) {
        contentMenu.removeChild(contentMenu.firstChild);
    }
}

function showAllCategory(event) {
    let divID = event.target
    let item = divID.id.toLocaleLowerCase();
    console.log(divID);
    menuHeader.innerText = divID.innerText
    const filteredArray = dataMado.filter((el) => el.menus.toLocaleLowerCase().includes(item));
    console.log(filteredArray);
    showResult(filteredArray);
}



leftMenu.addEventListener("click", showAllCategory);
centerMenu.addEventListener("click", showAllCategory);
navMenu.addEventListener("click", displayAllCategory);
clickLogoMado.addEventListener("click", refreshPage);
clickLocationContent.addEventListener("click", function(){
    if (locationContent.style.display == "block"){
        locationContent.style.display = "none"
    }else {
        locationContent.style.display = "block"
    }
})
clickAboutUsContent.addEventListener("click", function(){
    if (aboutUsContent.style.display == "block"){
        aboutUsContent.style.display = "none"
    }else {
        aboutUsContent.style.display = "block"
    }
})
menuBtn.addEventListener("click", function(){
    if (navMenuContent.style.display == "block"){
        navMenuContent.style.display = "none"
    }else {
        navMenuContent.style.display = "block"
        menuBtn.style.color = "var(--main-blue-color)"
    }
})