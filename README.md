# CMS Backend (Content Management System API)

A Node.js + Express + MongoDB based backend API for a **Content Management System (CMS)**.
This project provides authentication, product/content management, search functionality, file upload handling, and structured API architecture using MVC pattern.

---

## 🚀 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB (Mongoose)**
* **JWT Authentication**
* **Multer (File Uploads)**
* **Socket.io (Real-time features - partial)**
* **MVC Architecture**

---

## 📁 Project Structure

```
CMS-Backend
│
├── config/          → Database configuration
├── controller/      → Route controllers (Auth, Product, Artifact, etc.)
├── middleware/      → Auth, Error handling, Upload middleware
├── models/          → Mongoose database schemas
├── routes/          → API routes
├── service/         → Business logic layer
├── utils/           → Helper utilities
│
├── app.js           → Express app configuration
├── server.js        → Server startup file
└── package.json
```

The project follows a **layered architecture**:

Route → Controller → Service → Model → Database

---

## 🔄 Available Features

✔ User Registration
✔ User Login (JWT Authentication)
✔ Protected Routes
✔ Product CRUD (partial)
✔ File Upload Handling
✔ Error Handling Middleware
✔ MVC Architecture

---

## 🚧 Features In Progress

* Chat / Socket.io real-time communication
* Artifact management improvements
* Role-based authorization (Admin/User)
* Frontend integration

---

## 📌 Notes

* Make sure MongoDB is running.
* Protected routes require JWT token.
* Some routes may still be under development.

---

## 👩‍💻 Author

**Gaurika Bhatt**
Computer Science Student

GitHub: https://github.com/Gaurikabhatt27

---

## ⭐ Contributing

Pull requests are welcome.
For major changes, please open an issue first to discuss what you would like to change.

---

## 📜 License

This project is for learning and academic purposes.
