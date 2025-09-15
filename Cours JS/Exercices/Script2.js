// SELECTEURS
// document.querySelector('h4').style.background = 'yellow';
// const baliseHTML = document.querySelector('h4');

// CLICK EVENTS
const questionContainer = document.querySelector(".click-event");
console.log(questionContainer);
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const answer = document.querySelector("p");
console.log(answer);
// questionContainer.style.borderRadius = "150px"

questionContainer.addEventListener('click', () =>{
    questionContainer.classList.toggle("questionClicked")
    // add, remove ou toggle pour jouer avec la classe
});

btn1.addEventListener("click", () =>{
    answer.classList.add("showAnswer");
    answer.style.background = "green";
})
btn2.addEventListener("click", () =>{
   answer.classList.add("showAnswer");
       answer.style.background = "red";
})

//-------------------------------------

// MOUSE EVENTS

const mousemove = document.querySelector(".mousemove");
window.addEventListener("mousemove", (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
})
window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -25%)";
})
window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
})
 
questionContainer.addEventListener("mouseenter", () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});
questionContainer.addEventListener("mouseout", () => {
    questionContainer.style.background = "pink";
});
answer.addEventListener("mouseover", () => {
    answer.style.transform = "rotate(2deg)";
});

//-------------------------------------

// KEYPRESS EVENTS

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = () => {
    const audio = new Audio();
    audio.src = "./Assets/z.mp3";
    audio.play();
}



document.addEventListener("keypress", (e) => {
key.textContent = e.key;
    if (e.key ==="j"){
        keypressContainer.style.background = "pink";
    }else if (e.key === "h"){
        keypressContainer.style.background = "teal";
    }else {
        keypressContainer.style.background = "red";
        }
ring();

});

//SCROLL EVENTS----------------------------

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    if (window.scrollY > 120){
        nav.style.top = 0;
    }else {
        nav.style.top = "-50px";
    }
});

//INPUT EVENTS----------------------------
const inputName = document.querySelector('input[type="text"]');
let pseudo = "";
const select = document.querySelector("select");
let language = "";
const form = document.querySelector("form");

inputName.addEventListener("input", (e) => {
    pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
    language = e.target.value;
    
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (cgv.checked){
        document.querySelector("form > div").innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `
    }else {
        alert("Veuillez accpeter les CGV");
    }

});