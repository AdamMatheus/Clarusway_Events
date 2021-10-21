// let navbarItem1 = document.getElementsByClassName("nav__item")[0].innerText;
// console.log(navbarItem1);
// let navbarItem1 = document.getElementsByClassName("nav__links")[0].firstElementChild.innerText;
let navbarItem1 = document.getElementsByClassName("nav__links")[0].children[0];
let navbarItem2 = document.getElementsByClassName("nav__links")[0].children[1];
let navbarItem3 = document.getElementsByClassName("nav__links")[0].children[2];
// console.log(navbarItem1);

let h1 = document.querySelector("h1");
let span = h1.querySelector(".highlight");
span.style.color = "red";
// span.classList.remove("highlight");
// span.className = "highlight";
// span.classList.add("highlight");
// console.log(span);
let headerDiv = h1.parentElement.children;
// console.log(headerDiv);
// [... headerDiv].forEach(function(element) {
//     if(element != h1){
//         element.style.transform = 'scale(0.7)';
//         element.style.color = "purple";
//     }
// });

for (let index = 0; index < headerDiv.length; index++) {
    if(headerDiv[index] != h1){
        headerDiv[index].style.transform = 'scale(0.7)';
        headerDiv[index].style.color = "purple";
    }
}
