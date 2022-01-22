import { getDataMado } from "./dataMado.js";
import { searchByName, navFilter } from "./filter.js"
import { addCartFN } from "./cart.js"

const dataMado = getDataMado();

// event by click-> menu -> category menu-> left category menu 
const navMenu = document.querySelector("#navMenu");
const centerMenu = document.querySelector(".menu-center");
const leftMenu = document.querySelector(".menu-left");
const rightMenu = document.querySelector(".menu-right");
const menuHeader = document.querySelector("#menuHeader");
const active = document.querySelectorAll(".card");
// display none
const mainFirstPage = document.querySelector("main");
const sectionMenuCenter = document.querySelector(".section-menu-center");
const sectionMenu = document.querySelector(".section-menu");
const navFilterBlock = document.querySelector(".nav-search-items");

function refreshPage() {
    mainFirstPage.style.display = "grid"
    sectionMenu.style.display = "none"
    sectionMenuCenter.style.display = "none";
    navFilterBlock.style.display = "none";
}
function displayAllCategory() {
    mainFirstPage.style.display = "none"
    sectionMenuCenter.style.display = "block";
    sectionMenu.style.display = "none";
    navFilterBlock.style.display = "none";
}
export function showResult(filteredArr) {
    sectionMenuCenter.style.display = "none";
    sectionMenu.style.display = "grid"
    clearDiv();
    filteredArr.forEach(function (el) {
        const info = document.createElement("div");
        info.className = "card";
        info.innerHTML = `
        <img src="${el.imgURL}" alt="">
        <div class="card">
        <div>${el.servedFor}</div><br>
        <div class="darkBlue">${el.itemTitle}</div><br>
        <div class="green">${el.itemPrice}
        <button class="addCart">add <i class="fas fa-cart-arrow-down"></i></button>
        </div></div>`
        rightMenu.appendChild(info);
    })
}
function clearDiv() {
    while (rightMenu.firstChild) {
        rightMenu.removeChild(rightMenu.firstChild);
    }
}
 function showAllCategory(event) {
    let divID = event.target
    let item = divID.id.toLocaleLowerCase();
    active.forEach(el => el.classList.remove("active")) // remove active class
    divID.classList.add("active");            // add active class
    menuHeader.innerText = divID.innerText
    const filteredArray = dataMado.filter((el) => el.menus.toLocaleLowerCase().includes(item));
    showResult(filteredArray);
    navFilter(filteredArray);
}
// event by click-> menu -> category menu-> left category menu 
navMenu.addEventListener("click", displayAllCategory);
centerMenu.addEventListener("click", showAllCategory);
leftMenu.addEventListener("click", showAllCategory);
// ---- nav-Main-Menu ---
const clickLogoMado = document.querySelector(".logoMado");
clickLogoMado.addEventListener("click", refreshPage);
const menuBtn = document.querySelector(".menubtn");
menuBtn.addEventListener("click", () =>
    document.querySelector(".nav-menu-content").classList.toggle("show"))
const clickAboutUsContent = document.querySelector("#aboutUsContent");
clickAboutUsContent.addEventListener("click", () =>
    document.querySelector(".aboutUsContent").classList.toggle("show"))
const clickLocationContent = document.querySelector("#locationContent");
clickLocationContent.addEventListener("click", () =>
    document.querySelector(".locationContent").classList.toggle("show"))
//--- filtr search part ---
const home = document.querySelector("#home-menu");
home.addEventListener("click", displayAllCategory);
const searchAll = document.querySelector(".fa-search");
searchAll.addEventListener("click", searchByName);
document.querySelector(".allData").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        searchByName();
    }
  });
const addCart1 = document.querySelector(".addCart");
// addCart1.addEventListener("click", addCartFN)