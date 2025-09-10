// Le but est de trier un tableau nous-même (il faut mettre les éléments du plus petit au plus grand). Pour cela, on va procéder en plusieurs étapes :

let tab1=[9,8,7,6,5,4,3,2,1,0];

// Étape 1 : écrire une fonction qui reçoit un tableau et un numéro de case (i). Son but est d'échanger les valeurs des cases i et i+1 si celles-ci ne sont pas dans le bon ordre.
function orderedTab1(tab,i){
let save=tab[i];
    if (tab[i]>tab[i+1]){
            tab[i]=tab[i+1]; 
            tab[i+1]=save;
        }
    return tab;
}

console.log(orderedTab1(tab1,0));

// Étape 2 : écrire une fonction qui reçoit un tableau et qui applique l'étape 1 sur toutes les cases successives (cases 0/1, cases 1/2, cases 2/3, ..., cases avant-dernière/dernière).
function orderedTab2(tab){
    for (let i=0;i<tab.length;i++){
            orderedTab1(tab,i);
    }
    return tab;
}

console.log(orderedTab2(tab1));
// Étape 3 : écrire une fonction qui reçoit un tableau et qui le trie en appelant la fonction 2 autant de fois qu'il y a d'éléments dans le tableau.
function orderedTab3(tab){
    for (let i=0;i<tab.length;i++){
        orderedTab2(tab1);
    }
    return tab;
}

console.log(orderedTab3(tab1));
// Note : on peut visualiser cet algorithme sur cette image <https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/211162/a9b17b54-b6dd-1602-be04-6fc125676b7a.gif>.