# 🍅 Tomato - Full Stack Food Ordering System (MERN)

A complete food ordering platform with:
- **Customer Frontend** (React.js)
- **Admin Dashboard** (React.js)
- **Backend API** (Node.js + Express + MongoDB)

## 🔗 Live Demos
- **Customer Frontend**: https://tomato-frontend-urya.onrender.com
- **Admin Dashboard**: https://tomato-admin-1lu2.onrender.com
- **Backend API**: https://tomato-backend-8yug.onrender.com

## 🛠️ Tech Stack
| Component       | Technology              |
|----------------|--------------------------|
| Frontend       | React.js, Vite, CSS      |
| Admin Panel    | React.js, Vite, CSS      |
| Backend        | Node.js, Express.js      |
| Database       | MongoDB (Mongoose)       |
| Authentication | JWT Tokens               |
| Deployment     | Render.com               |

## ✨ Key Features

Customer Side:
- Sign up and login
- Browse food menu with categories
- Add items to cart
- Secure checkout process
- Order history tracking

Admin Side:
- Add/Edit/Delete food items
- Manage orders

## 🚀 Local Setup

# 1. Clone the repository
git clone https://github.com/SubhamSaha0/Tomato.git
cd Tomato

# 2. Backend Setup
cd backend
npm install

# Create a .env file in the backend directory with the following content:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Optional:
CLOUDINARY_URL=your_cloudinary_credentials

npm start

# 3. Frontend Setup
cd ../frontend
npm install
npm run dev

# 4. Admin Panel Setup
cd ../admin
npm install
npm run dev

## ⚙️ Configuration

# Environment variables required in /backend/.env:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Optional:
CLOUDINARY_URL=your_cloudinary_credentials

## 📜 License

MIT © Subham Saha
