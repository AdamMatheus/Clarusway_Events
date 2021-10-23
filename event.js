// let navbarItem1=document.getElementsByClassName("naw__item")[0].innerText;
// console.log(navbarItem1);
//let navbarItem1= document.getElementsByClassName("nav_links")[0].firstElementChild.innerText;
let navbarItem1= document.getElementsByClassName("nav__links")[0].children[0];
let navbarItem2= document.getElementsByClassName("nav__links")[0].children[1];
let navbarItem3= document.getElementsByClassName("nav__links")[0].children[2];

//console.log(navbarItem1);

let h1= document.querySelector("h1");
let span= h1.querySelector(".highlight");
span.getElementsByClassName.color="red";

// span.classList.remove("highlight");
// span.className="highlight";
// span.classList.add("highlight");
// console.log((span));

let headerDiv=h1.parentElement.children;
//console.log(headerDiv);
// [...headerDiv].forEach(function(element){
//     if (element !=h1){
//         element.getElementsByClassName.transform='scale(0.7)';
//         element.style.color="purple";

//     }
// });

for (let index=0; index<headerDiv.length;index++){
    if(headerDiv[index] !=h1){
        headerDiv[index].style.transform="scale(0.7)";
    }
}

//////////////          DOM EVENTS      /////////

window.onload=(e)=>{
    console.log("your page is loaded");
    //alert("your page is rendered")
}

window.addEventListener('load',(e)=>{
    console.log("windowload evenlistener added");
    console.log(navbarItem1.innerText);
});

window.addEventListener("DOMContentLoaded",function(e){
    console.log("DOMContent was Loaded");
});

navbarItem1.addEventListener('click' , ()=>{
    alert("Paths clicked by eventlistener")
});