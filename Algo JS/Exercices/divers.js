// Exercice divers_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.
function largestPos(tab){
    let position=0;
    for (let i=0;i<tab.length;i++){
        if (tab[i]>position){
            position=i;
        }
    }
    return position;
}
let tab1 =[10,20,50,30,20,10,100];
console.log(largestPos(tab1));

// Exemple : positionBiggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1

// Exercice divers_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
function totalTab(tab){
let total=0;
    for (let i=0;i<tab.length;i++){
        total = total + tab[i];
    }
    return total;
}

console.log(totalTab(tab1));

// Exercice divers_3 : écrire une fonction qui retourne la somme des valeurs positives d'un tableau.

function totalTabPos(tab){
let total=0;
    for (let i=0;i<tab.length;i++){
        if (tab[i] > 0){
        total = total + tab[i];
        }
    }
    return total;
}

let tab2=[-2,-2,10,10,10];
console.log(totalTabPos(tab2));

// Exercice divers_4 : En utilisant les deux fonctions précédentes, écrire une fonction qui retourne la somme des valeurs négatives d'un tableau.

function totalTabNeg(tab){
let total=0;
    for (let i=0;i<tab.length;i++){
        if (tab[i] < 0){
        total = total + tab[i];
        }
    }
    return total;
}

console.log(totalTabNeg(tab2));