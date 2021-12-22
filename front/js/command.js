// Créer un bouton ajouter au panier en utilisant le localstorage

//transfer du produit de la page produit à la page panier
let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productInLocalStorage);
if (productInLocalStorage === null){
    console.log("Votre panier est vide.");
}else{
    let cartElement = [];
    for(j = 0; j < productInLocalStorage.length; j++){
        document.querySelector(".cartAndFormContainer").innerHTML += `  <section class="cart">
        <section id="cart__items">
          <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
            <div class="cart__item__img">
              <img src="../images/product01.jpg" alt="Photographie d'un canapé">
            </div>
            <div class="cart__item__content">
              <div class="cart__item__content__description">
                <h2>${productInLocalStorage.name}</h2>
                <p>Vert</p>
                <p>42,00 €</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>
                </div>
              </div>
            </div>
          </article> 
        </section>
        <div class="cart__price">
          <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span> €</p>
        </div>  `;
    }
}
/*
localStorage.setItem("");
localStorage.getItem("");
localStorage.removeItem("");
localStorage.clear();*/
