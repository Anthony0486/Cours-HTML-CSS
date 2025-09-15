addEventListener("click", function(){
    console.log("1 clic");
} );
addEventListener("click", function(event){ 
    console.log(event.x, event.y);
})
//AJOUTER UNE IMG AU CLIC V1
addEventListener("click", function(unEvent){
    const monImg = document.createElement("img");
    const taille = 100;
    monImg.setAttribute("src", `https://placecats.com/${taille}/${taille}`);
    // console.log(unEvent.x, unEvent.y);
    monImg.style.position = "absolute";
    monImg.style.left = unEvent.x - taille/2 + "px";
    monImg.style.top = unEvent.y - taille/2 + "px";
    document.body.appendChild(monImg);

})
//V2
addEventListener("click", function (unEvent) {
    const monImg = document.createElement("img");
    monImg.setAttribute("src", "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/xzZzNsWgyJY5ipYg7pPpaQmibNR.jpg");
    console.log(unEvent.x, unEvent.y);
    monImg.style.position = "absolute";
    monImg.style.left = unEvent.x-monImg.width/2 + "px" 
    monImg.style.top = unEvent.y-monImg.height/2+"px"

    document.body.appendChild(monImg);
});

//Appliquer du style au passage de la souris:
// const display = document.querySelector("h1");
// addEventListener("mouseout", function(){
//     display.style.display = "block";
// })
//Créer une barre de chargement au scroll:
const bar = document.querySelector(".bar");
addEventListener("scroll", function(){
    console.log(`hauteur page : ${document.body.scrollHeight} hauteur affichage : ${innerHeight} scroll position : ${pageYOffset}`);
    const scrollMax = document.body.scrollHeight - innerHeight;
    const onEstOu = pageYOffset / scrollMax * 100;
    bar.style.width = onEstOu + "%";
})

