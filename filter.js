import { getDataMado } from "./dataMado.js";
import { showResult } from "./script.js";
const dataMado = getDataMado();

const navFilterBlock = document.querySelector(".nav-search-items");
const itemTitle = document.querySelector("#itemTitle");
const servedFor = document.querySelector("#servedFor");

export function navFilter(filteredArray) {
    navFilterBlock.style.display = "block";
    filtrPrice();
    itemTitleFn(filteredArray, itemTitle);
    servedForFn(filteredArray, servedFor)
}
function servedForFn(filteredArray, dataList) {
    while (dataList.firstChild) {
        dataList.removeChild(dataList.firstChild);
    }
    const searchArray = [];
    for (let i = 0; i < filteredArray.length; i++) {
        let val = filteredArray[i].servedFor;
        if (!searchArray.includes(val)) {
            searchArray.push(val);
            const d = document.createElement("div");
            d.innerHTML = `<option value="${val}">`;
            dataList.appendChild(d);
        }
    }
}
function itemTitleFn(filteredArray, dataList) {
    while (dataList.firstChild) {
        dataList.removeChild(dataList.firstChild);
    }
    const searchArray = [];
    for (let i = 0; i < filteredArray.length; i++) {
        let val = filteredArray[i].itemTitle;
        if (!searchArray.includes(val)) {
            searchArray.push(val);
            const d = document.createElement("div");
            d.innerHTML = `<option id="${filteredArray[i].id}" value="${val}">`;
            dataList.appendChild(d);
        }
    }
}
// --- search in all  Data
const searchValue = document.querySelector(".allData");
export function searchByName() {
    const val = searchValue.value.toLowerCase();
    const filteredArray = dataMado.filter(el => el.itemTitle.toLowerCase().includes(val))
    showResult(filteredArray);
    searchValue.value='';
}
document.querySelector('.servedForInput').addEventListener('input', function (event) {
    const item = event.target.value;
    const filteredArray = dataMado.filter((el) => el.servedFor.includes(item));
    showResult(filteredArray);
    document.querySelector('.servedForInput').value = ""

})
document.querySelector('.itemTitleInput').addEventListener('input', function (event) {
    const item = event.target.value;
    const filteredArray = dataMado.filter((el) => el.itemTitle.includes(item));
    showResult(filteredArray);
    document.querySelector('.itemTitleInput').value = ""

})

document.querySelector("#priceSearch").addEventListener("click", (evt) => {
    evt.preventDefault();
    let priceMax = +x.innerText
    let priceMin = +y.innerText
    const filteredArray=dataMado.filter(el=>
        +(el.itemPrice.replace(/\$/g,''))<=priceMax && +(el.itemPrice.replace(/\$/g,''))>=priceMin)
    return showResult(filteredArray)
})
// ------ slidecontainer---
const slideMin = document.getElementById("priceMin");
const slideMax = document.getElementById("priceMax");
const y = document.getElementById("vMin");
const x = document.getElementById("vMax");
// ------ slidecontainer--- ^^^
export function filtrPrice() {
    y.innerHTML = slideMin.value;
    x.innerHTML = slideMax.value;
    slideMin.oninput = function () {
        y.innerHTML = this.value;
    };
    slideMax.oninput = function () {
        x.innerHTML = this.value;
    };
}