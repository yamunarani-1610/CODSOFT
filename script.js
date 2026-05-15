const products = [
  { id: 1, name: "Watch", price: 1000, img: "https://via.placeholder.com/150" },
  { id: 2, name: "Shoes", price: 2000, img: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 1500, img: "https://via.placeholder.com/150" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function showProducts() {
  let container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  let item = products.find(p => p.id === id);
  cart.push(item);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCount();
}

function updateCount() {
  document.getElementById("count").innerText = cart.length;
}

showProducts();
updateCount();