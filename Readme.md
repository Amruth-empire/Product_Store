
# 🛍️ Product Store App

A full-stack product management application with modern frontend and backend technologies.  
Built using **Next.js** and **Tailwind CSS** for the frontend, and **Node.js** with **Express.js** for the backend API.  
Users can view, edit, and delete products through a clean, responsive interface.

---

## 📦 Tech Stack

### 🔹 Frontend
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- React Hooks (`useState`, `useEffect`)
- Toast notifications via [`react-toastify`](https://fkhadra.github.io/react-toastify/)

### 🔹 Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- RESTful API with full CRUD operations
- MongoDB with Mongoose (if using a database)

---

## 📁 Folder Structure

```
Product_Store/
│
├── backend/               # Express API Server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
│
├── frontend/              # Next.js Frontend
│   ├── app/ or pages/
│   ├── components/
│   ├── context/
│   ├── lib/
│   └── tailwind.config.js
│
├── .env
└── README.md
```

---

🚀 Getting Started

## 🧩 Backend Setup (Node.js + Express)

### 🔧 Install dependencies

```bash
cd backend
npm install
```

### ▶️ Start the backend server

```bash
npm run dev
```

API runs on: `http://localhost:5000/api/products`

---

## 🎨 Frontend Setup (Next.js + Tailwind CSS)

### 🔧 Install dependencies

```bash
cd frontend
npm install
```

### ⚙️ Environment setup (`.env.local`)

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### ▶️ Start the frontend dev server

```bash
npm run dev
```

App runs on: `http://localhost:3000`

---

## 🧪 Features

- ✅ View product list with images
- ✏️ Edit product details inline
- 🗑️ Delete products with confirmation
- 🔄 Live update UI using React Context API (or internal state)
- 🔔 Toast notifications for success and error actions
- 🌙 Dark mode support via Tailwind CSS

---

## 🛠️ Future Enhancements

- 🔒 Add user authentication (JWT)
- 🗃️ Paginate product listings
- 📦 Product category filters
- ☁️ Deploy on Vercel (Frontend) & Render/Heroku (Backend)

---

