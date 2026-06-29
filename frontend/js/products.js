import { products } from "./data/products.js";

const container = document.getElementById("productList");
const searchInput = document.getElementById("search");

if (!container) {
  console.error("productList container not found");
}

// -----------------------------
// ⚡ Skeleton Loader (UI effect)
// -----------------------------
function showSkeleton() {
  container.innerHTML = "";

  for (let i = 0; i < 6; i++) {
    const div = document.createElement("div");
    div.className = "skeleton skeleton-card";
    container.appendChild(div);
  }
}

// -----------------------------
// 🖼️ Render Products
// -----------------------------
function renderProducts(list) {
  container.innerHTML = "";

  if (!list.length) {
    container.innerHTML = "<h3>No products found</h3>";
    return;
  }

  list.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    // IMAGE (with fallback)
    const img = document.createElement("img");
    img.src = product.image;
    img.loading = "lazy";

    img.onerror = () => {
      img.src = "https://via.placeholder.com/300x200?text=No+Image";
    };

    // TITLE
    const title = document.createElement("h3");
    title.innerText = product.name;

    // PRICE
    const price = document.createElement("p");
    price.innerText = `₹${product.price}`;

    // CLICK EVENT → PRODUCT DETAIL
    card.addEventListener("click", () => {
      localStorage.setItem("selectedProduct", JSON.stringify(product));
      location.hash = "#/product-detail";
    });

    // Append elements
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(price);

    container.appendChild(card);
  });
}

// -----------------------------
// ⚡ Debounce Function (IMPORTANT)
// -----------------------------
function debounce(fn, delay = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// -----------------------------
// 🔍 Search Feature (optimized)
// -----------------------------
const handleSearch = debounce((e) => {
  const value = e.target.value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
}, 300);

// Attach search listener safely
if (searchInput) {
  searchInput.addEventListener("input", handleSearch);
}

// -----------------------------
// 🚀 Init Flow
// -----------------------------
function init() {
  showSkeleton();

  setTimeout(() => {
    renderProducts(products);
  }, 300);
}

init();