🌐 Fullstack Social Media App

A complete social media platform built with **React** (frontend), **Node.js** and **Express** (backend), and **MySQL** (database). This project demonstrates a real-world implementation of user authentication, posting, and interaction features in a fullstack architecture, with **JWT authentication** for secure login and **Sequelize** for ORM-based database management.

---

🚀 Features

- 🔐 **JWT Authentication** for secure login and registration
- 📝 **Create, Edit, Delete Posts**
- ❤️ **Like** and **Comment** on posts
- 📸 **Upload Posts**
- 🌐 **Responsive UI** built with React
- 📊 **RESTful API architecture** using Express and Node.js
- 🗄️ **MySQL Database** with Sequelize ORM for data management

---

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-%2320232a.svg?&style=flat-square&logo=react&logoColor=%2361DAFB)
![Node.js](https://img.shields.io/badge/Node.js-%23339933.svg?&style=flat-square&logo=node.js&logoColor=%23ffffff)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?&style=flat-square&logo=express&logoColor=%23ffffff)
![MySQL](https://img.shields.io/badge/MySQL-%234479A1.svg?&style=flat-square&logo=mysql&logoColor=%23ffffff)
![JWT](https://img.shields.io/badge/JWT-%23000000.svg?&style=flat-square&logo=json-web-tokens&logoColor=%23ffffff)


## 🛠️ Tech Stack

| Layer         | Technology            |
|---------------|-----------------------|
| Frontend      | React.js, Axios, Bootstrap, CSS |
| Backend       | Node.js, Express.js   |
| Authentication| JWT (JSON Web Token)  |
| Database      | MySQL, Sequelize ORM  |
| Version Control| Git + GitHub          |

---

## 🗂️ Project Structure

/fullstack
│
├── /client # React Frontend
│ ├── /src
│ ├── /public
│ └── package.json
│
├── /server # Node.js Backend
│ ├── /config # Database connection, JWT secret
│ ├── /controllers # API routes for posts, users, authentication
│ ├── /models # Sequelize models
│ ├── /routes # API routes
│ ├── /middleware # JWT authentication middleware
│ ├── /utils # Helper functions
│ └── server.js # Server entry point
│
├── .gitignore # Git ignore file
├── README.md # Project documentation
└── package.json # Project dependencies and scripts



---

## 🛠️ Setup & Installation

### 1. Clone the Repository
git clone https://github.com/NandhikaaNarayaniG/Social-media.git

2. Install Backend Dependencies
Navigate to the backend folder (server/) and install dependencies:
cd server
npm install

4. Configure MySQL
Make sure you have MySQL installed. Create a database and add your database credentials to the .env file in the server/ folder:

DB_HOST=localhost
DB_USER=your-username
DB_PASSWORD=your-password
DB_NAME=social_media

4. Run Migrations (Sequelize)
Run the Sequelize migrations to set up the database:
npx sequelize-cli db:migrate

6. Install Frontend Dependencies
Navigate to the frontend folder (client/) and install dependencies:
cd ../client
npm install

6. Run the Project
To start the backend and frontend:

Backend:
cd server
npm start

Frontend:
cd client
npm start

Your app will be available at http://localhost:3000 for the frontend and http://localhost:5000 for the backend.

🔑 Authentication
This app uses JWT (JSON Web Token) for user authentication. Upon login or registration, a JWT token is generated and returned to the user. This token is required for accessing protected routes (e.g., posting, liking, etc.).

To authenticate a user:

Send a POST request to /auth/login with email and password.

If the credentials are correct, a token will be returned for further requests.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

---

### ✍️ Description:

- **JWT Authentication**: Ensures that users are securely authenticated via token-based authentication.
- **Sequelize ORM**: Manages the database interactions (MySQL) for creating and managing user profiles, posts, and comments.
  
You can use this as a template to present your **fullstack social media app** in a more structured manner. Let me know if you'd like to customize anything!







