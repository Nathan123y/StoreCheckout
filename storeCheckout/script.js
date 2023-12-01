var cart = document.getElementById("cart")

var barcodeInput = document.getElementById("barcode")

var quantityInput = document.getElementById("quantity")

var cartTotalElement = document.getElementById("grandTotal");


var addToCartButton = document.getElementById("cartButton");



const storeItems = {
  "689145740844": { name: "JavaScript Textbook", price: 34.95 },
  "4549292070248": { name: "Xerox Paper", price: 10.99 },
  "092265222983": { name: "First Aid Kit", price: 20.99 },
  "X002ELVL3J": { name: "Box of Pencils (50ct.)", price: 15.99 },
  "686024002468": { name: "Sanitizing Wipes", price: 10.99 },
  "860004186236": { name: "N95 Face Masks", price: 15.99 },
  "036000214000": { name: "Kleenex", price: 3.99 },
  "8809693254156": { name: "Hand Sanitizer", price: 7.99 },
  "036500060480": { name: "Printer Paper", price: 9.99 },
  "085014561877": { name: "Brush Pens", price: 10.99 },
  "X0032YGP2T": { name: "Multiport Adapter", price: 25.99 },
  "B07G6JT1XS": { name: "Scissors (20ct.)", price: 23.99 },
  "9780134682334": { name: "iOS Programming Textbook", price: 119.99 },
  "718103230759": { name: "Spiral Notebook", price: 1.99 }
};

addToCartButton.addEventListener("click", addToCart);

function addToCart(){

var barcode = barcodeInput.value;
if (storeItems.hasOwnProperty(barcode)) {
  var item = storeItems[barcode];
  var quantity = parseInt(quantityInput.value, 10);

  

  var subtotal = quantity * item.price;

  let itemContainer = document.createElement("div");
  itemContainer.classList.add("items")
  
  var itemNameElement = document.createElement("p");
  itemNameElement.innerText = item.name
  itemNameElement.classList.add("Name")

  var itemPriceElement = document.createElement("p");
  itemPriceElement.innerText = item.price.toFixed(2);
  itemPriceElement.classList.add("price")
  
  var itemQuantityElement = document.createElement("p");
    itemQuantityElement.innerText = quantity;
    itemQuantityElement.classList.add("quantity")
 
    itemContainer.appendChild(itemNameElement);
    itemContainer.appendChild(itemPriceElement);
    itemContainer.appendChild(itemQuantityElement);

    checkIfIn()

  cart.appendChild(itemContainer);


  var currentTotal = parseFloat(cartTotalElement.innerText.replace("Grand Total: $", ""));
  var newTotal = currentTotal + subtotal;
  cartTotalElement.innerText = "Grand Total: $" + newTotal.toFixed(2);

  document.getElementById("itemName").innerText =  item.name;
  document.getElementById("itemPrice").innerText = "$" + item.price.toFixed(2);
  document.getElementById("itemQuantity").innerText = quantity;

  

} else {
  alert("Item not found in the store.");
}

}

function findItemInCart(barcode) {
  var itemsInCart = document.querySelectorAll(".items");
  for (var i = 0; i < itemsInCart.length; i++) {
      var item = itemsInCart[i];
      if (item.querySelector(".Name").innerText === storeItems[barcode].name) {
          return {
              element: item,
              quantityElement: item.querySelector(".quantity"),
              quantity: parseInt(item.querySelector(".quantity").innerText, 10)
          };
      }
  }
  return null;
}

var existingItem = findItemInCart(barcode);

        if (existingItem) {
            // Update the quantity if the item is already in the cart
            existingItem.quantity += quantity;
            existingItem.quantityElement.innerText = existingItem.quantity;
        }else{
 
function checkIfIn(barcode){
  let itemsInCart = document.querySelectorAll(".items")
  console.log (itemsInCart)

  

}
  
        }
