

var nameInput = document.getElementById('siteName');
var URLInput = document.getElementById('siteURL');
//var displayDiv = document.getElementById('displayDiv').innerHTML;
var urlR = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/;

if (localStorage.getItem("myData")) {
    var productContainer = JSON.parse(localStorage.getItem("myData"));
} else {
    var productContainer = [];
}


displayProduct(productContainer);

function createURL() {
    var oneProduct = {
        siteName: nameInput.value,
       siteURL : URLInput.value,

    };

    if(oneProduct.siteURL.startsWith("http://www.")){
    
    }else if(oneProduct.siteURL.startsWith("http://")){
        oneProduct.siteURL = oneProduct.siteURL.replace("http://", '');
        oneProduct.siteURL = "http://www." + oneProduct.siteURL;
    }else if(oneProduct.siteURL.startsWith("www.")){
        oneProduct.siteURL = "http://" + oneProduct.siteURL;
    }else{
        oneProduct.siteURL = "http://www." + oneProduct.siteURL;
    }

    if(urlR.test(oneProduct.siteURL)){
        productContainer.push(oneProduct);
        localStorage.setItem("myData", JSON.stringify(productContainer));
        displayProduct(productContainer);
        console.log(productContainer);

    }else{
        alert("Please enter valid URL")
    }


}

function displayProduct(list) {

    var tableDisplayProduct = '';
    for (var i = 0; i < list.length; i++) {
        tableDisplayProduct += `<div class="shadow mb-4 form justify-content-between d-flex"><div><Span class="text-start font">${list[i].siteName}</Span></div>
      <div><a href="${list[i].siteURL}" target="_blank" id="addBtn" class="btn btn-primary m-1">Visit</a>
      <button  id="addBtn" onclick="deleteData(${i})" class="btn btn-danger m-1">Delete</button></div></div>`
      
    }
    
    document.getElementById('displayDiv').innerHTML = tableDisplayProduct;
}






function deleteData(index) {
    productContainer.splice(index, 1);
    displayProduct(productContainer);
    localStorage.setItem("myData", JSON.stringify(productContainer));
}




