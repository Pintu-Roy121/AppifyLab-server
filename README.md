# AppifyLab Task Server

A REST API built with **Node.js**, **Express.js**, **TypeScript**, **MongoDB**, and **Mongoose**.

## Tech Stack

- Node.js
- Express.js
- TypeScript
- MongoDB
- Mongoose
- Zod
- JWT Authentication

## Prerequisites

Make sure you have installed:

- Node.js (v18 or later)
- MongoDB (Local or MongoDB Atlas)
- npm

## Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd appifylab-task-server
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Create a `.env` file in the project root and add the following variables:

```env
PORT=5000

DATABASE_URL=your_mongodb_connection_string

JWT_ACCESS_SECRET=your_jwt_secret
JWT_ACCESS_EXPIRES_IN=7d
```

## Run the project

Start the development server:

```bash
npm run dev
```

The server will run at:

```
http://localhost:5000
```

## Project Structure

```
src/
│── app/
│   ├── modules/
│   ├── middleware/
│   ├── routes/
│   ├── utils/
│   └── config/
│
├── app.ts
└── server.ts
```

## Features

- User Authentication (JWT)
- CRUD Operations
- MongoDB with Mongoose
- Request Validation using Zod
- Environment Configuration
- Error Handling
- Modular Folder Structure

## API Base URL

```
http://localhost:5000/api/v1
```

## Available Scripts

Run development server:

```bash
npm run dev
```

## Author

Pintu Roy

## License

This project is licensed under the ISC License.
