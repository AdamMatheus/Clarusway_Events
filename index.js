//Reaching DOM Element Recap
let navbarItem1 = document.getElementsByClassName("nav__item")[0];
let navbarItem2 = document.getElementsByClassName("nav__item")[1];
let navbarItem3 = document.getElementsByClassName("nav__item")[2];

//DOM Traversing -- navbarItem2 reaching alternative(parent-child)
//let navbarItem2 = document.getElementsByClassName("nav__links")[0].children[1];
//let navbarItem2 = document.getElementsByClassName("nav__link")[0].parentElement;
//console.log(navbarItem2);

// DOM Element usage like document(DOM Tree)
const h1 = document.querySelector("h1");
// const highlightedH1 = h1.querySelectorAll(".highlight");
// console.log(highlightedH1);
// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "blue";
//h1.closest('.header').style.backgroundColor = "yellow";
//console.log(h1.parentElement.children);

//Giving styling except for h1 element
// [... h1.parentElement.children].forEach(function(el){
//   if (el != h1) {
//     el.style.transform = 'scale(0.5)' ;
//   }
// });

//EVENTS!!!
//Window load events(SetTimeout for DOM Object!!)
window.addEventListener("DOMContentLoaded", function (e) {
  console.log("DOM Tree Build!", e);
});
window.onload = (e) => {
  console.log("Page full loaded!", e);
};
window.addEventListener("load", (e) => {
  console.log("Page full loaded!", e);
});

//Add eventListener to DOM Element
// navbarItem1.onclick = function (e) { alert('navbarItem1 click1!')}
// navbarItem1.addEventListener('click', function (e) {
//   alert('navbarItem1 click1!');
// });
// navbarItem1.addEventListener('click', function (e) {
//   alert('navbarItem1 click2!');
// });
// navbarItem2.addEventListener('mouseenter', function (e) {
//   alert('navbarItem2 mouseenter!');
// });

//3 Types of Function Declaration

//Basic Function
function navbarAlertFunc() {
  alert("Item clicked - Func.");
}
//Function Expression(Variable Function)
const navbarAlertVariableFunc = function () {
  alert("Item clicked - Variable");
};
//Arrow Function
const navbarAlertArrowFunc = () => {
  alert("Item clicked - Arrow");
};

//Add Func. to eventListener
// navbarItem1.addEventListener("click", navbarAlertArrowFunc);

//Add multiple func. to eventListener
navbarItem1.addEventListener('click', () => { navbarAlertArrowFunc(), navbarAlertFunc() });

// navbarItem2.addEventListener('mouseenter', navbarAlertArrowFunc);
// navbarItem2.addEventListener('mouseover', () => navbarItem2.textContent = "Over Me!");
// navbarItem2.addEventListener('mouseout', () => navbarItem2.textContent = "Operations");

//EventListener Removing
//navbarItem2.removeEventListener('mouseenter', navbarAlertArrowFunc);

//SetTimeout Remove
//setTimeout(() =>navbarItem2.removeEventListener('mouseenter', navbarAlertArrowFunc), 5000);

// Bubbling and Capturing with rgb color(rgb(255,255,255), >> bitwise shift operator?)
const randomNumber = () => Math.floor(Math.random() * 256);

const randomColor = () =>
  `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;

//Bubbling(Netscape says parent func runs firstly)
//Capturing(Microsoft says child func runs firstly)

navbarItem3.addEventListener("click", function () {
  this.style.backgroundColor = randomColor();
});

document
  .getElementsByClassName("nav__links")[0]
  .addEventListener("click", function () {
    this.style.backgroundColor = randomColor();
  });

document
  .getElementsByClassName("nav")[0]
  .addEventListener("click", function () {
    this.style.backgroundColor = randomColor();
  });

//Stopping bubbling up(stopping propagation)
navbarItem3.addEventListener("click", function (e) {
  event.stopPropagation();
  // event.stopImmediatePropagation();
});

//Dynamic Smooth Scroll Navigation(Add href to navbar link "#section--1,2,3!!")
document.querySelectorAll(".nav__link").forEach(function (el) {
  el.addEventListener("click", function (e) {
    // e.preventDefault();
    const id = this.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});
