# 🛍️ Store App (React & Express)

Welcome to the **Store App**, a simple e-commerce web application built using **React.js** for the frontend and **Express.js** for the backend. 🚀

## 📌 Features
- 🖥️ **Frontend (React)** to display and manage products
- ⚡ **Backend (Express)** with local storage for products
- 🔄 **Fetch products** from the backend
- ➕ **Add new products** dynamically
- ❌ **Delete products** from the list
- 🔄 **Update product price**

---


## 🛠️ Installation & Setup

### 1️⃣ Clone the repository
```sh
git clone https://github.com/AlaaSa3di/-Store-App.git

```

### 2️⃣ Setup Backend (Express.js)
```sh
cd store-backend
npm install
node server.js
```
✅ Server running at: `http://localhost:8000`

### 3️⃣ Setup Frontend (React.js)
```sh
cd ../store-frontend
npm install
npm start
```
✅ React app running at: `http://localhost:5173`

---

## 🚀 Usage
- Open `http://localhost:5173` in your browser
- View, add, update, and delete products easily 🎉

---

## 📜 API Endpoints
| Method | Endpoint        | Description |
|--------|---------------|-------------|
| GET    | `/products`    | Fetch all products |
| POST   | `/products`    | Add a new product |
| DELETE | `/products/:id` | Delete a product by ID |
| PUT    | `/products/:id` | Update product price by ID |

---

## 🏗️ Tech Stack
- **Frontend**: React.js ⚛️
- **Backend**: Node.js + Express.js 🛠️
- **HTTP Client**: Axios 🔄

---

