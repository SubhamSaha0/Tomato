# 🍅 Tomato - Full Stack Food Ordering System (MERN)

A complete food ordering platform with:
- **Customer Frontend** (React.js)
- **Admin Dashboard** (React.js)
- **Backend API** (Node.js + Express + MongoDB)

## 🔗 Live Demos
- **Customer Frontend**: <a href="https://tomato-frontend-urya.onrender.com" target="_blank">https://tomato-frontend-urya.onrender.com</a>
- **Admin Dashboard**: <a href="https://tomato-admin-1lu2.onrender.com" target="_blank">https://tomato-admin-1lu2.onrender.com</a>
- **Backend API**: <a href="https://tomato-backend-8yug.onrender.com" target="_blank">https://tomato-backend-8yug.onrender.com</a>

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
**Customer Side:**
- Sign up and login
- Browse food menu with categories
- Add items to cart
- Secure checkout process
- Order history tracking

**Admin Side:**
- Add/Edit/Delete food items
- Manage orders
- View sales analytics
- User management

## 🚀 Local Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/SubhamSaha0/Tomato.git
   cd Tomato
2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create .env file with:
   # MONGO_URI=your_connection_string
   # JWT_SECRET=your_secret_key
2. **Backend Setup**
   ```bash
   cd backend
   npm install
   # Create .env file with:
   # MONGO_URI=your_connection_string
   # JWT_SECRET=your_secret_key
3. **Frontend Setup**
   ```bash
   cd ../Frontend
   npm install
   npm run dev
4. **Admin Panel Setup**
   ```bash
   cd ../admin
   npm install
   npm run dev

⚙️ **Configuration**
Create .env in Backend with:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
# Optional:
CLOUDINARY_URL=your_cloudinary_credentials

📜 License
MIT © Subham Saha
