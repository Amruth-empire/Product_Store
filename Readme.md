# 🛍️ Product Store App

A full-stack product management application using modern frontend and backend technologies.  
Built using **Next.js** and **Tailwind CSS** for the frontend, and **Node.js** with **Express.js** for the backend API.  
Users can view, add, edit, and delete products through a clean, responsive interface — all running on a single port.

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
- MongoDB with Mongoose (optional for DB persistence)

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
├── .env                   # Environment config
├── server.js              # Single entry for fullstack app
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Install dependencies

```bash
# From root folder
pnpm install
```

### ⚙️ Setup environment variables

In the root `.env` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
PORT=5000
```

> Ensure both the frontend and backend share the same `.env` and use the same port.

---

### ▶️ Run the app (frontend + backend)

```bash
pnpm dev
```

App and API run together at:  
**Frontend:** `http://localhost:5000`  
**API Base URL:** `http://localhost:5000/api/products`

---

## 🧪 Features

- ✅ View product list with images
- ➕ Add new product
- ✏️ Edit product details inline
- 🗑️ Delete products with confirmation
- 🔄 Live update UI using React Context API
- 🔔 Toast notifications for success/error
- 🌙 Dark mode with Tailwind CSS

---

## 🛠️ Future Enhancements

- 🔒 Add authentication with JWT
- 🗃️ Paginate product listings
- 📦 Add category filters
- 📤 Deploy on:
  - Vercel (Frontend)
  - Render/Heroku (Backend API)

---

## 📸 UI Snapshot

![App UI](./frontend/public/preview.png)
> Add your UI screenshot here if needed

---

## 📬 Feedback

If you have feedback or find a bug, feel free to open an issue or submit a PR.

---
