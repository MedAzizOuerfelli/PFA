# Freelance Platform

A full-stack freelance platform built with the MEAN stack (MongoDB, Express.js, Angular, Node.js), allowing freelancers and clients to connect, manage projects, and handle payments.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 🌟 Features

- **User Authentication**
  - Secure login and registration
  - Role-based access control (Freelancer/Client)
  - Profile management

- **Project Management**
  - Create and manage projects
  - Submit and review proposals
  - Track project progress
  - Real-time notifications

- **Payment System**
  - Secure payment processing
  - Transaction history
  - Payment status tracking

## 🛠️ Tech Stack

### Frontend
- Angular 17
- TypeScript
- SCSS/CSS
- Angular Material
- RxJS

### Backend (MEAN Stack)
- MongoDB - Database
- Express.js - Web Framework
- Angular - Frontend Framework
- Node.js - Runtime Environment
- JWT Authentication
- Multer (File Upload)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB
- Angular CLI
  ```bash
  npm install -g @angular/cli
  ```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/MedAzizOuerfelli/PFA.git
cd PFA
```

### 2. Backend Setup
```bash
cd Back-end
npm install
```

Create a `.env` file in the Back-end directory with the following variables:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the backend server:
```bash
npm start
```
The backend will run at `http://localhost:3000`

### 3. Frontend Setup
Open a new terminal:
```bash
cd Front-end
npm install
```

Start the development server:
```bash
ng serve
```
The frontend will be available at `http://localhost:4200`

## 📁 Project Structure

```
project/
├── Front-end/          # Angular frontend
│   ├── src/           # Source code
│   │   ├── app/       # Application components
│   │   ├── assets/    # Static assets
│   │   └── ...
│   └── ...
└── Back-end/          # Node.js backend
    ├── config/        # Configuration files
    ├── controllers/   # Route controllers
    ├── models/        # Database models
    ├── routes/        # API routes
    ├── public/        # Public assets
    └── ...
```

## 🔒 Environment Variables

Create a `.env` file in the Back-end directory with the following variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## 📝 API Documentation

The API documentation is available at `http://localhost:3000/api-docs` when the backend server is running.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Med Aziz Ouerfelli** - *Initial work* - [GitHub](https://github.com/MedAzizOuerfelli)

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this project
- Special thanks to the open-source community for their amazing tools and libraries