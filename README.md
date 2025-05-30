
# 🧩 apbackend (Learning backend)

A simple full-stack project built with **Express.js** for the backend and **React** (via Vite) for the frontend. This project demonstrates how to create a basic API and fetch/display data in a frontend application using Axios.

## 🛠 Tech Stack

- **Frontend**: React.js, Vite  
- **Backend**: Node.js, Express.js  
- **HTTP Client**: Axios  
- **Environment Config**: dotenv

## 🚀 Features

- API endpoint `/api/jokes` returns a static list of jokes.
- Frontend fetches and displays the jokes from the backend.
- Sample routes (`/`, `/ap`, `/github`) to explore server responses.
- Uses environment variables for port configuration.

## 📁 Project Structure

<pre>
apbackend/
├── Backend/          # Contains Express backend
│   └── index.js
├── Frontend/         # React frontend with Vite
│   └── App.jsx
└── .env              # Environment variables
</pre>

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ap0309/apbackend.git
cd apbackend
```

### 2. Backend Setup

```bash
cd Backend
npm install
npm start
```

### 3. Frontend Setup

```bash
cd ../Frontend
npm install
npm run dev
```

## 🔍 Sample API Output

`GET /api/jokes`

```json
[
  {
    "id": 1,
    "title": "Joke 1",
    "content": "this is joke"
  },
  {
    "id": 2,
    "title": "Joke 2",
    "content": "this is joke"
  },
  {
    "id": 3,
    "title": "Joke 3",
    "content": "this is joke"
  }
]
```

## 🌐 Local URLs

- Frontend: [http://localhost:5173](http://localhost:5173)  
- Backend: [http://localhost:3000/api/jokes](http://localhost:3000/api/jokes)

## 👤 Author

**Ayush Patel**  
GitHub: [@ap0309](https://github.com/ap0309)

