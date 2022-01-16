import { getData } from "./data.js";
import { getDataMado } from "./dataMado.js";

const data = getData();
const dataMado = getDataMado();
const contentMenu = document.querySelector(".menu-right");




dataMado.forEach(function (el) {
    const head = document.createElement("div");
    //     head.innerHTML = `<h4>${el.menus}</h4>
    // <div class="content-menu"></div>`;
    //     contentColumn.appendChild(head);

    const info = document.createElement("div");
    info.className = "card";
    info.innerHTML = `
    <img src="${el.imgURL}" alt="">
    <div class="card">
    <div>${el.servedFor}</div>
    <div class="darkBlue">${el.itemTitle}</div>
    <div class="green">${el.itemPrice}</div>
    </div>
`
    contentMenu.appendChild(info);
})



// for (let i = 0; i< dataMado.length; i++){
// dataMado[i].keys = num;
// num +=1;
//  }
//  console.log(data)
//  console.log(dataMado)

// for (let i = 0; i < dataMado.length; i++) {
//     if (dataMado[i].menus === "Hot Desserts"){
//         dataMado[i].menus = "hotDesserts"
//      }
//     } 

// for (let i = 0; i < dataMado.length; i++) {
//     if (dataMado[i].menus === "Cold Desserts"){
//         dataMado[i].menus = "coldDesserts"
//     }
// }
// for (let i = 0; i < dataMado.length; i++) {
//     if (dataMado[i].menus === "Hot Drinks"){
//         dataMado[i].menus = "hotDrinks"
//     } 
// }
// for (let i = 0; i < dataMado.length; i++) {
//     if (dataMado[i].menus === "Cold Drinks"){
//         dataMado[i].menus = "coldDrinks"
//     }
// }
//     console.log(dataMado)
// }

// let num = 120000;
// for (let i = 0; i < data.length; i++) {
//     data[i].id = num;
//     num += 1;
// }
// console.log(data)
//  console.log(dataMado)



// // -------***********-------
// // img link :
// document.getElementsByClassName("menu-item-card")[0].firstElementChild.style.backgroundImage.slice(5, -2)
// document.getElementsByClassName('title-wrapper')[0].innerText.split("\n")
// document.querySelectorAll('.menu-item-card')[0].lastElementChild.querySelectorAll('div')
// // -------***********-------
// const data1 = [];
// document.querySelectorAll('.menu-item-card').forEach(function (el) {
//     let id = el.getAttribute("data-w-id");
//     let imgURL = el.firstElementChild.style.backgroundImage.slice(5, -2);
//     let nameArr = el.lastElementChild.querySelectorAll('div');
//     let servedFor = nameArr[0].innerText;
//     let itemTitle = nameArr[1].innerText;
//     let itemPrice = nameArr[2].innerText;
//     data1.push({
//         id: id,
//         menus: "Baklava",
//         servedFor: servedFor,
//         itemTitle: itemTitle,
//         itemPrice: itemPrice,
//         imgURL: imgURL,
//     }
//     )
// }); data1
// // -------***********-------
// // -------***********-------
// const data2 = [];
// document.querySelectorAll('.title-wrapper').forEach(function (el) {
//     let nameArr = el.innerText.split("\n");
//     let servedFor = nameArr[0];
//     let itemTitle = nameArr[1];
//     let itemPrice = nameArr[2];
//     data2.push({
//         servedFor: servedFor,
//         itemTitle: itemTitle,
//         itemPrice: itemPrice,
//     })
// });
// data2
// console.log(data)





