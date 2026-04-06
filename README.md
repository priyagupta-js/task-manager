# Task Manager Application

A full-stack **Task Management System** built using the MERN stack with **authentication, role-based access control, and task CRUD operations**.

This project demonstrates real-world backend architecture, secure authentication using JWT, and a responsive frontend using React + Tailwind CSS.

---

**GitHub Repository:** https://github.com/priyagupta-js/task-manager

---

# Features

## Authentication

* User Registration & Login
* Password hashing using bcrypt
* JWT-based authentication

## Roles
* **User**
  * Create, update, delete own tasks

* **Admin**
  * View all users
  * View all tasks

## Task Management
* Create tasks
* View tasks
* Update tasks (mark complete)
* Delete tasks

## Filters & Pagination
* Filter by completed status
* Pagination for task list

## Security
* Protected routes using JWT
* Role-based authorization
* Secure password storage

---
# Tech Stack

## Frontend

* React.js (Vite)
* Tailwind CSS
* Axios
* React Router DOM

## Backend

* Node.js
* Express.js
* MongoDB
* JWT (Authentication)
* bcrypt.js (Password hashing)

---
# Project Structure
```

task-manager/
│
├── frontend/        # React frontend
│
├── backend/        # Node backend
│
└── README.md
```
---

# Screenshots of UI

## Login Page

![Login](frontend\src\assets\login.png)

## Register Page

![Register](frontend\src\assets\register.png)

## Dashboard

![Dashboard](frontend\src\assets\dashboard.png)

## Admin Panel

![Admin](frontend\src\assets\Admin_panel.png)

---

# Setup Instructions (Run Locally)

## Clone the Repository

```bash
git clone https://github.com/priyagupta-js/task-manager.git
cd task-manager
```
---

## Backend Setup

```bash
cd backend
npm install
```

### Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run backend:

```bash
npm run dev
```
---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```
---

# API Endpoints

## Auth

* POST `/auth/register`
* POST `/auth/login`

## Tasks

* POST `/tasks`
* GET `/tasks`
* PUT `/tasks/:id`
* DELETE `/tasks/:id`

## Admin

* GET `/admin/users`
* GET `/admin/tasks`

---

# Key Concepts Implemented

* JWT Authentication
* Role-based access control
* RESTful API design
* MongoDB relationships using ObjectId
* Middleware for authentication & authorization
* Pagination & filtering logic

---

# Future Improvements

* Edit task UI
* Search functionality
* Toast notifications
* Dark mode
* Deployment with CI/CD

---

# Author

* GitHub: https://github.com/priyagupta-js

---
