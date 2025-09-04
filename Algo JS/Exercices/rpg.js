// Le but de cet exercice est de simuler des combats entre des personnages
// Un personnage sera représenté par un nom, un nombre de points de vie, un nombre de points de mana, une force

// 1) Comment faire pour stocker toutes ces informations dans une seule variable ?

// A l'aide d'un tableau.

// 2) Créer une variable firstPlayer et stocker dedans le personnage "Nico Minoru" qui a 50 points de vie, 100 points de mana, et 10 de force.
let firstPlayer=["Nico Minoru",50,"points",100,"points",10,"points"];
// console.log(firstPlayer)
// 3) Créer une variable secondPlayer et stocker dedans le personnage "Spiderman" qui a 120 points de vie, 0 point de mana, et 50 de force.
let secondPlayer=["Spiderman",120,"points",0,"points",50,"points"];
// console.log(secondPlayer);
// 4) Donner 25 points de vie supplémentaires au premier personnage.
firstPlayer[1]=firstPlayer[1]+25;
// console.log(firstPlayer);

// 5) Créer une fonction displayInfo qui reçoit un personnage en entrée et qui affiche dans la console un message à propos de ce personnage (cf en dessous de la fonction).
function displayInfo(player) {
let point="point";
let points="points";
    if(player[1]<=1){
        player[2]=point;
    }else{
        player[2]=points;
    }
    if(player[3]<=1){
        player[4]=point;
    }else{
        player[4]=points;
    }
    if(player[5]<=1){
        player[6]=point;
    }else{
        player[6]=points;
    }       
console.log(player[0],"a",player[1],player[2],"de vie,",player[3],player[4],"de mana et",player[5],player[6],"de force");
}


// Par exemple, 
displayInfo(secondPlayer);
// devra afficher :
// Nico Minoru a 50 points de vie, 100 points de mana et 10 points de force.

// 6) Trouver l'erreur de français dans la fonction précédente (:innocent:) en la testant avec le second personnage.
//OK//
// 7) Corriger la fonction pour faire disparaître cette erreur.
//OK//
// https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2021/11/12201506/clean_259.jpg
// 8) Le deuxième personnage a perdu 3 de vie. Décrémenter la variable correspondante.
secondPlayer[1]=secondPlayer[1]-3;
// 9) Vérifier que
displayInfo(secondPlayer);
// affiche bien : "Spiderman a 117 points de vie, 0 point de mana, et 50 de force."
//OK//
// 10) Écrire une fonction directHit qui reçoit deux personnages en entrée et qui fait perdre des points de vie au second. Le nombre de points de vie perdus sera égal à la force du premier personnage.
function directHit(player1, player2) {
	player1[1]=player1[1]-player2[5];
    return player1, player2;
}
// 11) Utiliser la fonction précédente pour que le second personnage tape le premier personnage.
(directHit(firstPlayer,secondPlayer));
console.log((directHit(firstPlayer,secondPlayer)));

// 12) Le second personnage boit une potion de soin ! Ajouter 3 points de vie à Spiderman.
firstPlayer[1]=firstPlayer[1]+3;
// 13) Le premier personnage va boire plusieurs potions.
let randomNumber = Math.floor(Math.random()*8)+2;
console.log("Nico Minoru s'apprête à boire",randomNumber,"potions de vie !");
// TODO
displayInfo(firstPlayer);
displayInfo(secondPlayer);

// 14) Écrire une fonction qui reçoit deux personnages A et B en entrée et qui fait lancer un sort à A pour attaquer B
// Cette fonction doit :
// - vérifier que le personnage a au moins 10 points de mana ; si ce n'est pas le cas, la fonction est terminée
// - faire perdre 10 points de mana à A
// - faire perdre 25 points de vie à B