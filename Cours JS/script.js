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
        moyenne=moyenne+tab[i];
    }
    return moyenne/=tab.length;
}
console.log(moyenne2([10,15,5]));