const container = document.getElementById("cartContainer");
const totalPriceEl = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Add quantity support
function groupCartItems() {
  const map = {};

  cart.forEach(item => {
    if (map[item.id]) {
      map[item.id].quantity += 1;
    } else {
      map[item.id] = { ...item, quantity: 1 };
    }
  });

  return Object.values(map);
}

function saveCart(items) {
  let flat = [];

  items.forEach(item => {
    for (let i = 0; i < item.quantity; i++) {
      flat.push(item);
    }
  });

  localStorage.setItem("cart", JSON.stringify(flat));
  cart = flat;
  renderCart();
}

// Render cart
function renderCart() {
  const items = groupCartItems();
  container.innerHTML = "";

  let total = 0;

  items.forEach(item => {
    total += item.price * item.quantity;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" />
      <div>
        <h3>${item.name}</h3>
        <p>₹${item.price}</p>
      </div>

      <div class="cart-actions">
        <button id="dec-${item.id}">-</button>
        <span>${item.quantity}</span>
        <button id="inc-${item.id}">+</button>
        <button id="remove-${item.id}">Remove</button>
      </div>
    `;

    container.appendChild(div);

    // Increase quantity
    div.querySelector(`#inc-${item.id}`).addEventListener("click", () => {
      cart.push(item);
      saveCart(groupCartItems());
    });

    // Decrease quantity
    div.querySelector(`#dec-${item.id}`).addEventListener("click", () => {
      const index = cart.findIndex(p => p.id === item.id);
      if (index !== -1) cart.splice(index, 1);
      saveCart(groupCartItems());
    });

    // Remove item completely
    div.querySelector(`#remove-${item.id}`).addEventListener("click", () => {
      cart = cart.filter(p => p.id !== item.id);
      saveCart(groupCartItems());
    });
  });

  totalPriceEl.innerText = `Total: ₹${total}`;
}

renderCart();