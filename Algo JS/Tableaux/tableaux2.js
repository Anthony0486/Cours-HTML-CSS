// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function dernierElem(tab){;
    console.log(tab.pop());
}
let tab0=[1,2,3];
dernierElem(tab0);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function dernierElem2(tab){
    return tab.pop();
}

console.log(dernierElem2(tab0));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function minimum(tab){
    let plusPetit=tab[0];
    for (let i=1;i<tab.length;i++){
        if(tab[i]<plusPetit){
            plusPetit=tab[i];
        }
    }
    return plusPetit;
}

tab1=[10,30,50,60,70,100,12,2,3,4,5];

console.log(minimum(tab1));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function maximum(tab){
    let plusGrand=tab[0];
    for (let i=1;i<tab.length;i++){
        if(tab2[i]>plusGrand){
            plusGrand=tab[i];
        }
    }
    return plusGrand;
}

tab2=[10,30,50,60,70,100,12,2,3,4,5];

console.log(maximum(tab2));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

function same(tab,a){
    acount=0
    for(let i=0;i<tab3.length;i++){
        if (tab3[i]==a){
            acount++;
        }
    }
    return acount;
}

tab3=[10,30,50,50,50,100,12,50,3,4,5];
console.log(same(tab3,50));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.

function exist(tab,a){
    for(let i=0;i<tab4.length;i++){
        if(tab[i]==a){
            return true;
            }
    }
    return false;
}

tab4=[10,30,30,20,40,100,12,50,3,4,5];
console.log(exist(tab4,5));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].
let tab5 = [];
for (let i=1;i<=7777;i++){
    tab5.push(i);
}
console.log(tab5);


// Créer un tableau qui contient [10,20,30,...,77770].

let tab6 = [];
for (let i=10;i<77710;i+=10){
    tab6.push(i);
}
console.log(tab6);


// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

let tab7=[0];
for (let i=1;i<38885;i++){
    tab6[i]=tab6[i]-5;
    tab7[i]=tab6[i];
    }
console.log(tab7);


// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
function supLast(tab){
    for(let i=0;i<tab.length-1;i++){
        if (tab.pop()>50){
            tab.pop();
        }
    }
    return tab
}
console.log(supLast([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]