// TODO 1: Dans une variable monTitre, récupérer le titre h1
// TODO 2: on execute le fonction setTimeout() qui prend 2 paramètres: une fonction et un nombre (les miliseconde)
// TODO 3: dans la fonction en param de setTimeout(),modifier dans le style de monTitre l'opacité  que l'on met à 1
// TODO 3-2: modifier dans le style de monTitre le background color  que l'on met à (couleur au choix)
// TODO: 3-3: assigner une chaine de caractères (au choix) au innerHTML de monTitre

// let monTitre = document.querySelector("h1");

// setTimeout(() => {
//     monTitre.style.opacity = "1";
//     monTitre.style.background = "teal";
//     monTitre.innerHTML = "HACKED";
// },500);

//Créer un compte à rebours qui se déclenche quand on clique sur un titre <h1> de la page.

//- Au clic sur le titre, un compte à rebours de 3 secondes commence
//- Le titre affiche successivement : "3", "2", "1", puis "GO GO GO"
//- Chaque changement se fait toutes les secondes
//pensez a arreter l'interval à la fin !

let monTitre = document.querySelector("h1");
let timer = "3";
monTitre.addEventListener("click", () =>{
    monTitre.style.fontSize = "5em";
    const monInterval = setInterval(() => {
        if (timer > 0){
        monTitre.innerText = timer;
        timer --;
        }
    }, 1000);
    setInterval(() => {
        clearInterval(monInterval);
        monTitre.innerText = "GO GO GO!";
    },4000);

});

//Exercice : Empêcher la soumission d'un formulaire

//Empêcher qu'un formulaire se soumette normalement et afficher un message dans la console à la place.
//Quand on clique sur le bouton "Submit" du formulaire, la page ne se recharge pas et à la place, "OK" s'affiche dans la console.
//Le formulaire se vide automatiquement après la soumission (Utilisez un ".reset()").

const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Le lien ne redirige plus.
    console.log("OK");
    form.reset();
});

const textArea = document.querySelector("textarea");
const copyArea = document.querySelector(".copyArea");
localStorage.setItem("texte", textArea.value);


textArea.addEventListener("keyup", () => {
    copyArea.innerHTML = textArea.value;
    console.log(localStorage.getItem("texte"));
})


