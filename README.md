# 🍬 Sweet Shop Management System

A full-stack **Sweet Shop Management System** built as part of a TDD-focused kata. The project covers backend API development, database design, authentication, frontend integration, testing, and transparent AI-assisted development.

---

## 🚀 Project Overview

This application allows users to:

* Register and log in securely
* View available sweets
* Search sweets by name, category, or price range
* Purchase sweets (inventory is updated automatically)

Admin users can additionally:

* Add new sweets
* Update existing sweets
* Delete sweets
* Restock sweets

The system follows **REST principles**, uses **JWT-based authentication**, and is built with **clean code and test-driven development** in mind.

---

## 🧱 Tech Stack

### Backend

* **FastAPI** (Python)
* **PostgreSQL**
* **SQLAlchemy / SQLModel** (ORM)
* **JWT Authentication**
* **pytest** for testing

### Frontend

* **React** or **Next.js** (SPA)
* Fetch/Axios for API communication

### Tooling & Workflow

* Git & GitHub
* TDD (Red → Green → Refactor)
* AI-assisted development (documented below)

---

## 🔐 Authentication

* Users can **register** and **log in**
* JWT tokens are issued on login
* Protected routes require a valid token
* Role-based access control (Admin / User)

---

## 📡 API Endpoints

### Auth

* `POST /api/auth/register` – Register a new user
* `POST /api/auth/login` – Login and receive JWT

### Sweets (Protected)

* `POST /api/sweets` – Add a new sweet (Admin only)
* `GET /api/sweets` – Get all sweets
* `GET /api/sweets/search` – Search sweets by name, category, or price range
* `PUT /api/sweets/{id}` – Update a sweet (Admin only)
* `DELETE /api/sweets/{id}` – Delete a sweet (Admin only)

### Inventory (Protected)

* `POST /api/sweets/{id}/purchase` – Purchase a sweet (decreases quantity)
* `POST /api/sweets/{id}/restock` – Restock a sweet (Admin only)

Each sweet contains:

* `id`
* `name`
* `category`
* `price`
* `quantity`

---

## 🗄️ Database Design

### User

* id
* email
* hashed_password
* role (admin / user)

### Sweet

* id
* name
* category
* price
* quantity

PostgreSQL is used to ensure strong consistency and reliable inventory operations.

---

## 🧪 Testing (TDD)

The backend follows **Test-Driven Development**:

* Tests are written before implementation
* Clear Red → Green → Refactor cycle

### Covered Tests

* User registration
* User login
* JWT-protected routes
* CRUD operations on sweets
* Purchase and restock logic

Run tests:

```bash
pytest
```

A test report is included via terminal output and CI logs.

---

## 🖥️ Frontend Features

* Login & Registration forms
* Dashboard listing all sweets
* Search & filter functionality
* Purchase button (disabled when quantity = 0)
* Admin-only UI for managing sweets

The frontend communicates with the backend using JWT-secured API calls.

---

## ⚙️ Setup Instructions

### Backend

```bash
# create virtual environment
python -m venv venv
source venv/bin/activate

# install dependencies
pip install -r requirements.txt

# run migrations / create tables
alembic upgrade head

# start server
uvicorn main:app --reload
```

### Frontend

```bash
npm install
npm run dev
```

Make sure to set environment variables for:

* Database URL
* JWT Secret
* API base URL (frontend)

---

## 🤖 My AI Usage

### Tools Used

* **ChatGPT**

### How I Used AI

* To clarify project requirements and break them into actionable steps
* To scaffold FastAPI structure and understand best practices
* To help design database models and API flows
* To debug errors and improve test coverage

### Reflection

AI significantly sped up development by acting as a senior reviewer and brainstorming partner. All AI-generated suggestions were reviewed, adapted, and manually implemented to ensure correctness, learning, and ownership of the final codebase.

For every commit where AI assistance was used, proper **co-authorship** was added as required.

---
## 🌐 Deployment 

* Backend: Render  link[https://sweetshop-backend-1xjx.onrender.com]
go to the /docs endpoint to see all the specs
* Frontend: Not deployed



---

## 📦 Deliverables

* Public GitHub repository
* Fully working backend and frontend
* Comprehensive README
* Test suite & test report
* Transparent AI usage disclosure

---

## ✅ Status

🚧 Backend: Done
🚧 Frontend: In progress

---

**Author:** Jagdeep Singh
