// Récuperer le produit via l'api fetch grâce à l'url de l'api et l'id du produit

let params = new URLSearchParams(window.location.search);
let productID = params.get("id");

// Afficher le produit dans la page product.html
fetch('http://localhost:3000/api/products/' + productID)
.then(data =>data.json()) 
.then (productID => {
let choiceElementName = ` 
<div class="item__img">
<img src="${productID.imageUrl}" alt="${productID.altTxt}">
</div>
<div class="item__content">

<div class="item__content__titlePrice">
  <h1 id="title"> ${productID.name} </h1>
  <p>Prix : <span id="price">${productID.price} </span>€</p>
</div>

<div class="item__content__description">
  <p class="item__content__description__title">Description :</p>
  <p id="description"> ${productID.description} </p>
</div>

<div class="item__content__settings">
  <div class="item__content__settings__color">
    <label for="color-select">Choisir une couleur :</label>
    <select name="color-select" id="colors">
        <option value="">--SVP, choisissez une couleur --</option>`
      
        //Début boucle`
        for (let i = 0; i < productID.colors.length; i++){
          let color = productID.colors[i];
          var choiceElementColor = choiceElementColor +
        `<option value="${i}">${color}</option>`
        }//Fin boucle
  
    let choiceElementQuantity =
    `</select>
   </div>

  <div class="item__content__settings__quantity">
    <label for="itemQuantity">Nombre d'article(s) (1-100) :</label>
    <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
  </div>
</div>

<div class="item__content__addButton">
  <button id="addToCart">Ajouter au panier</button>
</div>

</div> `
let choiceAllElement = choiceElementName + choiceElementColor + choiceElementQuantity;
document.querySelector(".item").innerHTML = choiceAllElement;

let selectColor = document.querySelector("#colors");
console.log(selectColor);

let productQuantity = document.querySelector("#quantity")
//Envoyer au panier 
let addToCartButton = document.querySelector("#addToCart");
addToCartButton.addEventListener("click", (event)=>{
  event.preventDefault();


  // Les données qui doivent être enrégistés dans le panier
  let productSelection = {
    _id:productID,
    name: productID.name, 
    price: productID.price*productQuantity.value,
    color: selectColor.value,
    description: productID.description,
    image: productID.imageUrl,
    altTxt: productID.altTxt,
    quantity: productQuantity.value,
   }
   console.log(productSelection);

  //Local Storage pour enregistrer le produit dans le panier

let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
if (productInLocalStorage){
  productInLocalStorage.push(productSelection);
  localStorage.setItem("product",JSON.stringify(productInLocalStorage))
}
else{
  productInLocalStorage = [];
  productInLocalStorage.push(productSelection);
  localStorage.setItem("product",JSON.stringify(productInLocalStorage))
}
//console.log(productInLocalStorage);

   });
})
;
 