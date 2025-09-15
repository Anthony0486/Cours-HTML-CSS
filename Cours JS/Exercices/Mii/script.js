const leftArrow = document.getElementById("leftButton");
const miiFace = document.querySelector(".miiFace");
const rightArrow = document.getElementById("rightButton");
const black = document.querySelector(".colorContainerBlack");
const blond = document.querySelector(".colorContainerYellow");
const turquoise = document.querySelector(".colorContainerBlue");
const hair = document.querySelector("#hair");
let currentColor = "black";
let currentIndex = 0;
const hairStyle = {
    black: [
        "Assets/hair-black-1.png",
        "Assets/hair-black-2.png",
        "Assets/hair-black-3.png"

    ],
    blond: [
        "Assets/hair-blond-1.png",
        "Assets/hair-blond-2.png",
        "Assets/hair-blond-3.png"
    ],

    turquoise: [
        "Assets/hair-turquoise-1.png",
        "Assets/hair-turquoise-2.png",
        "Assets/hair-turquoise-3.png"
    ]
}

rightArrow.addEventListener("mousedown", () => {
    if (currentIndex != 2){
    currentIndex ++;
    }
    hair.setAttribute("src", hairStyle[currentColor][currentIndex]); 
});

leftArrow.addEventListener("mousedown", () => {
    if (currentIndex != 0){
    currentIndex --;
    }
    hair.setAttribute("src", hairStyle[currentColor][currentIndex]);     
});

black.addEventListener("mousedown", () => {
    currentColor = "black";
    hair.setAttribute("src", "Assets/hair-black-1.png");
});

blond.addEventListener("mousedown", () => {
    currentColor = 'blond';
    hair.setAttribute("src", "Assets/hair-blond-1.png"); 
});

turquoise.addEventListener("mousedown", () => {
    currentColor = "turquoise";
    hair.setAttribute("src", "Assets/hair-turquoise-1.png");
})

