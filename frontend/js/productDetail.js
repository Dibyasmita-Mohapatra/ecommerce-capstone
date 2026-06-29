const container = document.getElementById("detailContainer");

// Get selected product from localStorage
const product = JSON.parse(localStorage.getItem("selectedProduct"));

// Safety check (VERY IMPORTANT in real apps)
if (!container) {
  console.error("detailContainer not found in DOM");
}

if (!product) {
  container.innerHTML = `
    <div class="error">
      <h2>No product selected 😢</h2>
      <a href="#/product">Go back to products</a>
    </div>
  `;
} else {
  renderProductDetail(product);
}

// Main render function
function renderProductDetail(product) {
  container.innerHTML = `
    <div class="detail-card">
      <img src="${product.image}" alt="${product.name}" />

      <div class="detail-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <h3>Price: ₹${product.price}</h3>

        <div class="buttons">
          <button id="addToCart">Add to Cart 🛒</button>
          <button id="addToWishlist">Add to Wishlist ❤️</button>
        </div>
      </div>
    </div>
  `;

  // Attach events AFTER rendering

  document.getElementById("addToCart").addEventListener("click", () => {
    addToCart(product);
  });

  document.getElementById("addToWishlist").addEventListener("click", () => {
    addToWishlist(product);
  });
}

// 🛒 Add to Cart (with safe storage handling)
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push(product);

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("Added to cart 🛒");
}

// ❤️ Wishlist feature
function addToWishlist(product) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  // prevent duplicates
  const exists = wishlist.some(item => item.id === product.id);

  if (!exists) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    showToast("Added to wishlist ❤️");
  } else {
    showToast("Already in wishlist 🙂");
  }
}

// 🔔 Simple toast notification
function showToast(message) {
  let toast = document.createElement("div");

  toast.innerText = message;

  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.right = "20px";
  toast.style.background = "#000";
  toast.style.color = "#fff";
  toast.style.padding = "10px 15px";
  toast.style.borderRadius = "8px";
  toast.style.zIndex = "9999";
  toast.style.opacity = "0.9";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 2000);
}