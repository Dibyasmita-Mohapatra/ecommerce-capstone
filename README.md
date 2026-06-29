# 🛒 E-Commerce Product Catalog

A modern **Single Page Application (SPA)** built using **HTML5, CSS3, and Vanilla JavaScript**. This project demonstrates modular frontend architecture, client-side routing, dynamic product rendering, shopping cart functionality, and responsive design.

It was developed as a Web Development Capstone Project to showcase industry-standard frontend development practices.

---

## 🌐 Live Demo

🔗 **Website:** https://ecommerce-capstone-ten.vercel.app/

---

## 📸 Project Preview

### Home Page
<img width="1907" height="916" alt="Screenshot 2026-06-29 161601" src="https://github.com/user-attachments/assets/ccfe7a19-5a39-486e-a65a-a4b8fa61b9fc" />


### Product Page
<img width="1902" height="912" alt="Screenshot 2026-06-29 161642" src="https://github.com/user-attachments/assets/c05e6796-2578-4596-9e3d-a8d2f0a16f26" />


### Shopping Cart
<img width="1906" height="912" alt="Screenshot 2026-06-29 161703" src="https://github.com/user-attachments/assets/f9c6d962-7ff8-4792-9d44-3c1a0bbc0aa5" />

---

# ✨ Features

- Modern Responsive UI
- Single Page Application (SPA)
- Client-Side Routing
- Dynamic Product Catalog
- Product Detail Page
- Shopping Cart
- Product Search
- Local Storage Persistence
- Modular JavaScript Architecture
- Responsive Layout
- Clean Folder Structure
- Interactive User Experience

---

# 🛠 Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript (ES6 Modules)

### Browser APIs

- DOM API
- Fetch API
- Local Storage

### Deployment

- Vercel

---

# 📂 Project Structure

```text
ecommerce-capstone/
│
├── frontend/
│   │
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── router.js
│   │   ├── products.js
│   │   ├── productDetail.js
│   │   ├── cart.js
│   │   └── data/
│   │       └── products.js
│   │
│   ├── pages/
│   │   ├── home.html
│   │   ├── product.html
│   │   ├── product-detail.html
│   │   └── cart.html
│   │
│   └── index.html
│
├── README.md
├── LICENSE
└── .gitignore
```

---

# 🚀 Getting Started

## Clone the Repository

```bash
git clone https://github.com/your-username/ecommerce-capstone.git
```

---

## Navigate to the Project

```bash
cd ecommerce-capstone
```

---

## Open in VS Code

```bash
code .
```

---

## Run the Application

Install **Live Server** extension in VS Code.

Right-click on **frontend/index.html**

Click

```
Open with Live Server
```

The application will start in your browser.

---

# 🧩 Application Architecture

The application follows a modular frontend architecture.

```
User
   │
   ▼
index.html
   │
   ▼
router.js
   │
   ├──────────────┐
   ▼              ▼
home.html     product.html
                   │
                   ▼
             products.js
                   │
                   ▼
          product-detail.html
                   │
                   ▼
             productDetail.js
                   │
                   ▼
                cart.js
```

---

# 📌 Core Modules

### app.js

Initializes the application and loads the router.

---

### router.js

Implements client-side routing using URL hash navigation.

Routes include:

- Home
- Products
- Product Detail
- Cart

---

### products.js

Responsible for

- Rendering products
- Product search
- Product listing
- Dynamic UI generation

---

### productDetail.js

Displays

- Product information
- Description
- Price
- Add to Cart functionality

---

### cart.js

Handles

- Cart rendering
- Quantity management
- Remove item
- Total calculation
- Local Storage

---

### products.js (Data)

Acts as a mock product database.

---

# 💾 Local Storage

The project stores user data locally.

Stored Items

- Shopping Cart
- Selected Product

This allows the application to retain state after page refresh.

---

# 🎨 UI Features

- Responsive Layout
- Modern Product Cards
- Hover Effects
- Card Shadows
- Clean Navigation
- Mobile Friendly Design

---

# ⚡ Performance Optimizations

- Modular JavaScript Files
- Client-Side Routing
- Lazy DOM Rendering
- Efficient Event Listeners
- Optimized CSS Structure
- Local Storage State Management

---

# 📚 Learning Outcomes

This project demonstrates understanding of

- HTML5 Semantic Structure
- CSS3 Layout Techniques
- JavaScript ES6 Modules
- SPA Architecture
- Client-Side Routing
- DOM Manipulation
- Event Handling
- Local Storage
- Modular Code Organization
- Responsive Web Design
- Frontend Deployment

---

# 🔮 Future Improvements

- Product Categories
- Product Filters
- Sorting Options
- Wishlist
- User Authentication
- Backend Integration
- Payment Gateway
- Product Reviews
- Order History
- Admin Dashboard
- Progressive Web App (PWA)

---

# 🤝 Contributing

Contributions are welcome.

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Create a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👩‍💻 Author

**Dibyasmita Mohapatra**

GitHub:
https://github.com/Dibyasmita-Mohapatra
---

# ⭐ If you found this project useful, please consider giving it a Star!
