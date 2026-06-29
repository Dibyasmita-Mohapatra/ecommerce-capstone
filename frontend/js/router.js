const routes = {
  "/": "./pages/home.html",
  "/product": "./pages/product.html",
  "/cart": "./pages/cart.html",
  "/product-detail": "./pages/product-detail.html"
};

export async function router() {
  const path = location.hash.replace("#", "") || "/";

  const route = routes[path] || routes["/"];

  const res = await fetch(route);
  document.getElementById("app").innerHTML = await res.text();

  // Load product logic ONLY on product page
  if (path === "/product") {
    const module = await import("./products.js");
  }

  // Load detail page logic
  if (path === "/product-detail") {
    const module = await import("./productDetail.js");
  }

  if (path === "/cart") {
    await import("./cart.js");
  }

  window.scrollTo(0, 0);
}