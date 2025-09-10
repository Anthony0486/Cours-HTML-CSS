//Exercice 1 - Inverser les valeurs de deux variables :
let carte1 = "Tortank"
let carte2= "Typlosion"
console.log(carte1, carte2);
let inversion = carte1;
carte1=carte2;
carte2=inversion;
console.log(carte1, carte2);

//Exercice 2 - Concaténation de variables et/ou chaînes de caractères (string):
let names = "Manu ";
let age = "39 ans ";
let bienvenue = "Bonjour " + names +"tu as " + age + "aujourd'hui, c'est la fiesta !";
console.log(bienvenue);

//Exercice 3 - Afficher le dernier éléments d'une chaîne de caractères:
let surname = "Antho"
console.log(surname[4]);
console.log(surname[surname.length-1]);

//Exercice 4 - Afficher les premiers éléments d'une chaîne de caractères:
let surnames = "Anthony"
let lastNames = "Pruniere"
let phrase=[surnames, lastNames,surnames[0]+lastNames[0]];
console.log(phrase);

//Exercice 5 - Calculer une moyenne à l'aide d'une fonction:
let noteA = 10;
let noteB = 20;
function average(a,b){
    return (a + b)/2;
}
console.log(average(noteA,noteB));

//Exercice 6:
//Random avec la variable de base "Math" et la fonction de base "random"
let random = Math.random();
console.log(random);
//Modification d'un tableau avec la fonction de base "map"
let tab =[1,2,3,4,5,6];
let oneMore = tab.map(function(a){
    return a+1;
});
console.log(oneMore);

//Exercice 7: Moyenne d'un tableau à trois entrées + affichage d'un message:
function Mention(tab){
    let moyenne = (tab[0]+tab[1]+tab[2])/tab.length;
        if (moyenne>=15){
            return "Très bien";
        }else if (moyenne>=10){
            return "Assez bien";
        }else {
            return "Refus";
        }
}
console.log(Mention([15,15,15]));
//Exercice 8:
let i=0;
let dessin=[];
while (i<10){
    i++;
    dessin.push("#");
    console.log(dessin);
}
//Exercice 9 :
function moyenne2(tab){
let moyenne=0;
    for (let i=0;i<tab.length;i++){
        moyenne+=tab[i];
    }
    return moyenne/tab.length;
}
console.log(moyenne2([10,15,5]));

// les objets :

//Exercice 1: créer et manipuler les objets:

const gamingConsole = {
    "name": "switch",
    "color": "grey",
    "support": "cartouche",
    "price": 299,
    "avantages": ["puissance","autonomie"]
};
console.log(gamingConsole.name);
console.log(gamingConsole.avantages[1]);
gamingConsole.release=2017; //Ajout d'une clé dans l'objet
console.log(gamingConsole);
delete gamingConsole.release //Supression d'une clé dans l'objet
console.log(gamingConsole.hasOwnProperty("release")); //Verifier si la clé existe dans l'objet.
gamingConsole.brand="Nintendo";
console.log(gamingConsole);

const gamingConsole2 = {
    "name" : "switch 2",
    "spec" : {
        "puissance": 1024,
        "autonomie": 6,
        "modele" : {
            "color": ["black","white"],
            "edition": "standard",
        }
    }
}
console.log(gamingConsole2.spec.modele);

//Exercice 2 : Ajouter des clés aux objets 
const bibliotheque = {
    "livre" : {
        "titre": "Dune",
        "editeur" : "hachete", 
    },
    "film" : {
    },
    "musique" : {

    },
}
bibliotheque.film.release=2025;
bibliotheque.film.productor="mgm";
bibliotheque.film.genre="horror";
bibliotheque.film.name="Ca";
console.log(bibliotheque);
bibliotheque.musique.release=1979;
bibliotheque.musique.productor="X";
bibliotheque.musique.genre="Rock";
bibliotheque.musique.title="Led Zep";
console.log(bibliotheque);

//Exercice 3 : Template strings
let spidey = "Spiderman";
let pp = "Peter Parker";
let mj = "Mary Jane";

let phrase1 = "Salut ! Je suis " + pp + " alias " + spidey + "! Vous n'auriez pas vu " + mj + " par hasard?";
console.log(phrase1);

let phrase2 = `Salut ! Je suis ${pp} alias ${spidey}! Vous n'auriez pas vu ${mj} par hasard?`;
console.log(phrase2);

// Exercice 4 : Destructuring 

const recette = {
    ingredient1 : "Quetsche",
    ingredient2 : "Farine",
    ingredient3 : "Beurre",
}

const  {ingredient1, ingredient2, ingredient3} = recette;
console.log(ingredient1,ingredient2,ingredient3);

const recette2 = {
    ingredientA : "Quetsche",
    ingredientB : "Farine",
    ingredientC : "Beurre",
};
const {ingredientA:ingrédientPrincipal, ingredientB,ingredientC} = recette2;
console.log(ingrédientPrincipal);

const notes = [12, 17, 8, 9, 11, 15, 14];
const [francais, philo, lv1, lv2] = notes;
console.log(lv2);

//Exercice 5 : Melanger un array 

function melange(tab){
    for (let i=0;i<tab.length;i++) {
        const random = Math.floor(Math.random() * tab.length);
        [tab[i], tab[random]] = [tab[random], tab[i]];
    }
    return tab
}
console.log(melange([1,2,3,4,5,6]));

// Le spread operator (...)
const groupe1 = ["switch", "nes", "superNes"];
const groupe2 = ["gameboy", "nds", "3ds"];
const liste = [...groupe1, ...groupe2];
liste.push("gameboyColor");
console.log(liste);
const liste2 = ["Salon:", ...groupe1, "Portable:", ...groupe2];
console.log(liste);

//DOM (document objet model)

//Créer la variable pour recuperer un élément de la page HTML dans JS :

const titreH2 = document.body.getElementsByTagName("H2");
console.log(titreH2);
const paragraphe1 = document.getElementById("paragraphe1");
console.log(paragraphe1);
const p1 = document.getElementsByClassName("p1");
console.log(p1);
const selector = document.querySelector(".p1"); //. pour une classe # pour un id
console.log(selector);
const selector2 = document.querySelectorAll("p");
console.log(selector2);