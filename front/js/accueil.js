
fetch('http://localhost:3000/api/products/')
.then(data => data.json())
.then(jsonListProduct => {
    for(let jsonProduct of jsonListProduct){
        let product= new Product(jsonProduct);
        document.querySelector('.items').innerHTML += ` <section class="items" id="items"> 
                                                        <a href="./product.html?id=42">
                                                        <article> 
                                                        <img src="${product.imageUrl}" alt="${product.altText}">
                                                        <h3 class="productName">${product.name}</h3>
                                                        <p class="productDescription">${product.description}</p>
                                                        </a> 
                                                        </section>`
    }
})

/*
fetch('http://localhost:3000/api/products/')
    .then(res => res.json)
    .then(data => console.log(data))

    function getAllProduct(){
        return fetch('http://localhost:3000/api/products/')
             .then(res => res.json())
     }
     
     function findProduct(productId){
         return fetch('http://localhost:3000/api/products/'+ productId)
             .then(res => res.json())
     }
     
     products = getAllProduct();
     product = findProduct('107fb5b75607497b96722bda5b504926');
     
     console.log(product);
     
     function getAllProduct(){}
     fetch('http://localhost:3000/api/products/')
        .then(res => res.json())
    /*   .then(res => console.log(res)) *
    
    console.log(products);  

    for(let i = 0, i < 8 ,i++){
        console.log('http://localhost:3000/images/kanap0 '+ i + '.jpeg')
    }
*/
/*
fetch('http://localhost:3000/api/products/')
   .then(res =>{
       console.log(res);

       if(res.ok){
           res.json().then(data => {console.log})
       } else {
           console.log("ERREUR")
       }
   }) */


