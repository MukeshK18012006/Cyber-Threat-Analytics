// =========================================
// Cybersecurity Threat Analytics
// Main JavaScript
// =========================================

// Console Welcome

console.log("Cybersecurity Threat Analytics Loaded");


// =========================================
// Navbar Active Link
// =========================================

const links=document.querySelectorAll(".navbar-menu a");

links.forEach(link=>{

    link.addEventListener("click",function(){

        links.forEach(item=>item.classList.remove("active"));

        this.classList.add("active");

    });

});


// =========================================
// Smooth Scroll
// =========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


// =========================================
// Glass Card Hover
// =========================================

const cards=document.querySelectorAll(".glass-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-12px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// =========================================
// Button Ripple
// =========================================

const buttons=document.querySelectorAll("button");

buttons.forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

circle.style.position="absolute";

circle.style.width="10px";

circle.style.height="10px";

circle.style.background="rgba(255,255,255,.6)";

circle.style.borderRadius="50%";

circle.style.left=e.offsetX+"px";

circle.style.top=e.offsetY+"px";

circle.style.transform="scale(0)";

circle.style.animation="ripple .6s linear";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});


// =========================================
// Counter Animation
// =========================================

const counters=document.querySelectorAll(".statistics h2");

counters.forEach(counter=>{

const target=counter.innerText;

counter.innerText="0";

let count=0;

const interval=setInterval(()=>{

count++;

counter.innerText=target;

clearInterval(interval);

},300);

});


// =========================================
// Page Loaded
// =========================================

window.onload=function(){

document.body.style.opacity="1";

};