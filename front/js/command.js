// Créer un bouton ajouter au panier en utilisant le localstorage

//transfer du produit de la page produit à la page panier
let productInLocalStorage = JSON.parse(localStorage.getItem("product"));
console.log(productInLocalStorage);
if (productInLocalStorage === null){
    console.log("Votre panier est vide.");
}else{
    let cartElement = [];
    for(j = 0; j < productInLocalStorage.length; j++){
      cartElement = cartElement + `  <section class="cart">
        <section id="cart__items">
          <article class="cart__item" data-id="${productInLocalStorage[j]._id}" data-color="{product-color}">
            <div class="cart__item__img">
              <img src="${productInLocalStorage[j].image}" alt="${productInLocalStorage[j].altTxt}">
            </div>
            <div class="cart__item__content">
              <div class=${productInLocalStorage[j].description}>
                <h2>${productInLocalStorage[j].name}</h2>
                <p>${productInLocalStorage[j].color}</p>
                <p>${productInLocalStorage[j].price}</p>
              </div>
              <div class="cart__item__content__settings">
                <div class="cart__item__content__settings__quantity">
                  <p>Qté : </p>
                  <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${productInLocalStorage[j].quantity}">
                </div>
                <div class="cart__item__content__settings__delete">
                  <p class="deleteItem">Supprimer</p>    
                </div>
              </div>
            </div>
          </article> 
        </section>  `;
    }
    let cartTotal = []; 
    let cartTotalPrice = [];
    for (let k = 0; k < productInLocalStorage.length; k++){
      cartTotal.push (productInLocalStorage[k].price);
      const addPreviousValueWithCurrentValue = (previousValue, currentValue) => previousValue + currentValue;
      cartTotalPrice = cartTotal.reduce(addPreviousValueWithCurrentValue);
      cartTotalElement =
     ` <div class="cart__price">
    <p>Total (<span id="totalQuantity"><!-- 2 --></span> articles) : <span id="totalPrice"><!-- 84,00 --></span>${cartTotalPrice}€</p>
  </div>  `;}
  //console.log(cartTotalPrice);
  let fileInformationData = ` <div class="cart__order">
  <form method="get" class="cart__order__form">
    <div class="cart__order__form__question">
      <label for="firstName">Prénom: </label>
      <input type="text" name="firstName" id="firstName" required>
      <p id="firstNameErrorMsg"><!-- ci est un message d'erreur --></p>
    </div>
    <div class="cart__order__form__question">
      <label for="lastName">Nom: </label>
      <input type="text" name="lastName" id="lastName" required>
      <p id="lastNameErrorMsg"></p>
    </div>
    <div class="cart__order__form__question">
      <label for="address">Adresse: </label>
      <input type="text" name="address" id="address" required>
      <p id="addressErrorMsg"></p>
    </div>
    <div class="cart__order__form__question">
      <label for="city">Ville: </label>
      <input type="text" name="city" id="city" required>
      <p id="cityErrorMsg"></p> 
    </div>
    <div class="cart__order__form__question">
      <label for="email">Email: </label>
      <input type="email" name="email" id="email" required>
      <p id="emailErrorMsg"></p>
    </div>
    <div class="cart__order__form__submit">
      <input type="submit" value="Commander !" id="order">
    </div>
  </form>
 </div> `

  let allCartElement = cartElement + cartTotalElement + fileInformationData;
  document.querySelector(".cart").innerHTML = allCartElement;

  let _id = document.querySelectorAll(".cart__item");
  console.log(_id);
 // écouter le bouton supprimer
 let deleteItemButton = document.querySelectorAll(".deleteItem");
 //console.log(deleteItemButton);
 for (let l = 0; l < deleteItemButton.length; l++) {
   deleteItemButton[l].addEventListener("click" , (event) =>{
     event.preventDefault();

     let suppressionButton = productInLocalStorage[l]._id;
     console.log("suppressionButton");
     //méthode filter
     productInLocalStorage = productInLocalStorage.filter( el => el._id !== suppressionButton);
     //console.log(productInLocalStorage);
     localStorage.setItem("product",JSON.stringify(productInLocalStorage));
     //recharger la page
     window.location.href = "cart.html";
   })
 }
 //Récuperter les valeurs du formulaires existant
 let cartForm = document.querySelector(".cart__order__form");
 cartForm.firstName.addEventListener('change', function() {
  validFirstName(this);
 });
 const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(`^[a-zA-Z]+$`,'g');
  let testFirstName = firstNameRegExp.test(inputFirstName.value);
  let firstNameErrorMsg = inputFirstName.nextElementSibling;
  if (testFirstName) {
    firstNameErrorMsg.innerHTML = ''
  }
  else {
    firstNameErrorMsg.innerHTML = 'Prénom non valide'
  }
 }

 cartForm.lastName.addEventListener('change', function() {
  validLasttName(this);
 });
 const validLasttName = function (inputLastName) {
  let lastNameRegExp = new RegExp(`^[a-zA-Z]+$`,'g');
  let testLastName = lastNameRegExp.test(inputLastName.value);
  let lastNameErrorMsg = inputLastName.nextElementSibling;
  if (testLastName) {
    lastNameErrorMsg.innerHTML = ''
  }
  else {
    lastNameErrorMsg.innerHTML = 'Nom non valide'
  }
 }

 cartForm.address.addEventListener('change', function() {
  validAddress(this);
 });
 const validAddress = function (inputAddress) {
  let addressRegExp = new RegExp(`^[a-zA-Z0-9_\s]+$`,'g');
  let testAddress = addressRegExp.test(inputAddress.value);
  let addressErrorMsg = inputAddress.nextElementSibling;
  if (testAddress) {
    addressErrorMsg.innerHTML = ''
  }
  else {
    addressErrorMsg.innerHTML = 'Adresse non valide'
  }
 }

 cartForm.city.addEventListener('change', function() {
  validCity(this);
 });
 const validCity = function (inputCity) {
  let cityRegExp = new RegExp(`^[a-zA-Z]+$`,'g');
  let testCity = cityRegExp.test(inputCity.value);
  let cityErrorMsg = inputCity.nextElementSibling;
  if (testCity) {
    cityErrorMsg.innerHTML = ''
  }
  else {
    cityErrorMsg.innerHTML = 'Nom de la ville non valide'
  }
 }

 cartForm.email.addEventListener('change', function() {
  validEmail(this);
 });
 const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(`^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$`,'g');
  let testEmail = emailRegExp.test(inputEmail.value);
  let emailErrorMsg = inputEmail.nextElementSibling;
  if (testEmail) {
    emailErrorMsg.innerHTML = ''
  }
  else {
    emailErrorMsg.innerHTML = 'Email non valide'
  }
 }

 //Rentrer les donner du Formulaire dans le localstorage 

 let sentFileButton = document.querySelector("#order")
 sentFileButton.addEventListener("click", (event)=>{
 event.preventDefault();
 let fileElement = {
  prenom: document.querySelector("#firstName").value,
  nom: document.querySelector("#lastName").value,
  address: document.querySelector("#address").value,
  ville: document.querySelector("#city").value,
  email: document.querySelector("#email").value
 }
 console.log(fileElement)

 // Validation du formulaire pour le localstorage

 localStorage.setItem("fileElement", JSON.stringify(fileElement));
 // Objet rassemblant les produits sélectionnées et le formulaire validé
 const submitButton = {
  fileElement,
  productInLocalStorage 
 }
 console.log ("submitButton", JSON.stringify(submitButton));


 // Envoyer le localstorage avec fetch en méthode post
 fetch('http://localhost:3000/api/products/order', {
  method: "POST",
  body: JSON.stringify(submitButton),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
 })
 .then(response => response.json())
 .then(data => {
   console.log('Success', data);
 })
 .catch((error) =>{
   console.error('Error', error);
 })
}); 

  



};


/*
//Récuperter les valeurs du formulaires existant
let cartForm = document.querySelector(".cart__order__form");
cartForm.firstName.addEventListener('change', function() {
  validFirstName(this);
});
const validFirstName = function (inputFirstName) {
  let firstNameRegExp = new RegExp(`^[a-zA-Z]+$`,'g');
  let testFirstName = firstNameRegExp.test(inputFirstName.value);
  let firstNameErrorMsg = inputFirstName.nextElementSibling;
  if (testFirstName) {
    firstNameErrorMsg.innerHTML = ''
  }
  else {
    firstNameErrorMsg.innerHTML = 'Prénom non valide'
  }
}

cartForm.lastName.addEventListener('change', function() {
  validLasttName(this);
});
const validLasttName = function (inputLastName) {
  let lastNameRegExp = new RegExp(`^[a-zA-Z]+$`,'g');
  let testLastName = lastNameRegExp.test(inputLastName.value);
  let lastNameErrorMsg = inputLastName.nextElementSibling;
  if (testLastName) {
    lastNameErrorMsg.innerHTML = ''
  }
  else {
    lastNameErrorMsg.innerHTML = 'Nom non valide'
  }
}

cartForm.address.addEventListener('change', function() {
  validAddress(this);
});
const validAddress = function (inputAddress) {
  let addressRegExp = new RegExp(`^[a-zA-Z0-9_\s]+$`,'g');
  let testAddress = addressRegExp.test(inputAddress.value);
  let addressErrorMsg = inputAddress.nextElementSibling;
  if (testAddress) {
    addressErrorMsg.innerHTML = ''
  }
  else {
    addressErrorMsg.innerHTML = 'Adresse non valide'
  }
}

cartForm.city.addEventListener('change', function() {
  validCity(this);
});
const validCity = function (inputCity) {
  let cityRegExp = new RegExp(`^[a-zA-Z]+$`,'g');
  let testCity = cityRegExp.test(inputCity.value);
  let cityErrorMsg = inputCity.nextElementSibling;
  if (testCity) {
    cityErrorMsg.innerHTML = ''
  }
  else {
    cityErrorMsg.innerHTML = 'Nom de la ville non valide'
  }
}

cartForm.email.addEventListener('change', function() {
  validEmail(this);
});
const validEmail = function (inputEmail) {
  let emailRegExp = new RegExp(`^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$`,'g');
  let testEmail = emailRegExp.test(inputEmail.value);
  let emailErrorMsg = inputEmail.nextElementSibling;
  if (testEmail) {
    emailErrorMsg.innerHTML = ''
  }
  else {
    emailErrorMsg.innerHTML = 'Email non valide'
  }
}

//Rentrer les donner du Formulaire dans le localstorage 

let sentFileButton = document.querySelector("#order")
sentFileButton.addEventListener("click", (event)=>{
event.preventDefault();
let fileElement = {
  prenom: document.querySelector("#firstName").value,
  nom: document.querySelector("#lastName").value,
  address: document.querySelector("#address").value,
  ville: document.querySelector("#city").value,
  email: document.querySelector("#email").value
}
console.log(fileElement)

// Validation du formulaire pour le localstorage

localStorage.setItem("fileElement", JSON.stringify(fileElement));

// Objet rassemblant les produits sélectionnées et le formulaire validé
const submitButton = {
  fileElement,
  productInLocalStorage
}
//console.log ("submitButton", JSON.stringify(submitButton));


// Envoyer le localstorage avec fetch en méthode post
let orderButton = fetch('http://localhost:3000/api/products/order', {
  method: "POST",
  body: JSON.stringify(submitButton),
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
})
}); 














.then(response=>response.json())
  .then(data => {
    console.log(data.orderButton);
  }) 


localStorage.setItem("orderId", orderButton)
window.location = "confirmation.html";*/


