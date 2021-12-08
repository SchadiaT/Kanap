class Product {
    constructor(jsonProduct){
        jsonProduct && Object.assign(this, jsonProduct)
    }
}

var str = "http://localhost:3000/";

var url = new URL(http://localhost:3000/);

var search_params = new URLSearchParams(url.search); 

if(search_params.has('product')) {
  var name = search_params.get('product');
  console.log(product)
}