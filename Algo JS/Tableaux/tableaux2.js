// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function dernierelem(tab){;
console.log(tab.pop());
}

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function dernierelem2(tab){
    return tab.pop();
}


// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.

function minimum(tab1){
    let plusPetit=tab1[0];
    for (let i=1;i<tab1.length;i++){
        if(tab1[i]<plusPetit){
            plusPetit=tab1[i];
        }
    }
    return plusPetit;
}

tab1=[10,30,50,60,70,100,12,2,3,4,5];

console.log(minimum(tab1));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.

function maximum(tab2){
    let plusGrand=tab2[0];
    for (let i=1;i<tab2.length;i++){
        if(tab2[i]>plusGrand){
            plusGrand=tab2[i];
        }
    }
    return plusGrand;
}

tab2=[10,30,50,60,70,100,12,2,3,4,5];

console.log(maximum(tab2));

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.

function same(tab3,a){
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

function exist(tab4,a){
    for(let i=0;i<tab4.length;i++){
        if(tab4[i]==a){
            return true;
        }
        else{
            return false;
        }
    }
}

tab4=[10,30,30,20,40,100,12,50,3,4,5];
console.log(exist(tab4,5));

// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]