# Backend Setup - Express + MongoDB

## 🚀 Quick Start

### 1. Zainstaluj MongoDB

**Opcja A: MongoDB Community (Lokalnie)**
```bash
# Windows - pobierz z:
https://www.mongodb.com/try/download/community

# Lub użyj Chocolatey:
choco install mongodb

# Uruchom MongoDB:
mongod
```

**Opcja B: MongoDB Atlas (Cloud - Darmowy)**
1. Zarejestruj się: https://www.mongodb.com/cloud/atlas/register
2. Utwórz darmowy cluster (M0)
3. Pobierz connection string
4. Zaktualizuj `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/prestigebud
```

---

### 2. Skonfiguruj zmienne środowiskowe

Plik `.env` jest już utworzony. Sprawdź i zmień jeśli potrzeba:

```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/prestigebud

# JWT Secret (ZMIEŃ NA PRODUKCJI!)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production-12345

# Server
PORT=3001
NODE_ENV=development
```

---

### 3. Utwórz konto admina

```bash
node server/scripts/createAdmin.js
```

To stworzy użytkownika:
- **Username:** `admin`
- **Password:** `prestige2024`
- **Role:** `admin`

---

### 4. Uruchom aplikację

```bash
npm run dev
```

To uruchomi **równocześnie**:
- ✅ Vite dev server (frontend) → `http://localhost:5174`
- ✅ Express API (backend) → `http://localhost:3001`

---

## 📁 Struktura Backendu

```
server/
├── config/
│   └── db.js              # MongoDB connection
├── models/
│   ├── User.js            # User model (admin)
│   └── Content.js         # Content model (strona)
├── routes/
│   ├── auth.js            # Authentication routes
│   └── content.js         # Content CRUD routes
├── middleware/
│   └── auth.js            # JWT middleware
├── scripts/
│   └── createAdmin.js     # Helper script
└── server.js              # Express app
```

---

## 🔌 API Endpoints

### Authentication

**POST `/api/auth/register`**
- Rejestracja nowego admina
- Body: `{ username, password }`
- Response: `{ _id, username, role, token }`

**POST `/api/auth/login`**
- Logowanie
- Body: `{ username, password }`
- Response: `{ _id, username, role, token }`

**GET `/api/auth/me`**
- Sprawdź aktualnego użytkownika
- Headers: `Authorization: Bearer <token>`
- Response: `{ _id, username, role }`

### Content Management

**GET `/api/content`**
- Pobierz aktualną treść strony
- Public (no auth)
- Response: `{ hero, about, services, contact }`

**PUT `/api/content`**
- Zaktualizuj treść strony
- Headers: `Authorization: Bearer <token>`
- Body: `{ hero, about, services, contact }`
- Response: Updated content

**POST `/api/content/reset`**
- Reset treści do domyślnych
- Headers: `Authorization: Bearer <token>`
- Response: `{ message: "Content reset to default" }`

---

## 🔐 Authentication Flow

### 1. Login
```javascript
const response = await fetch('/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ username: 'admin', password: 'prestige2024' })
})

const data = await response.json()
// { _id, username, role, token }

localStorage.setItem('token', data.token)
```

### 2. Protected Request
```javascript
const token = localStorage.getItem('token')

const response = await fetch('/api/content', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify(newContent)
})
```

---

## 🧪 Test API (Postman/Thunder Client)

### 1. Rejestracja admina
```http
POST http://localhost:3001/api/auth/register
Content-Type: application/json

{
  "username": "admin",
  "password": "prestige2024"
}
```

### 2. Login
```http
POST http://localhost:3001/api/auth/login
Content-Type: application/json

{
  "username": "admin",
  "password": "prestige2024"
}
```

### 3. Pobierz content
```http
GET http://localhost:3001/api/content
```

### 4. Zaktualizuj content (authenticated)
```http
PUT http://localhost:3001/api/content
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json

{
  "hero": {
    "title": "Nowy Tytuł",
    "subtitle": "Nowy podtytuł"
  }
}
```

---

## 🐛 Troubleshooting

### Problem: `MongoNetworkError: connect ECONNREFUSED`

**Rozwiązanie:**
- MongoDB nie działa. Uruchom: `mongod`
- Lub zmień na MongoDB Atlas w `.env`

### Problem: `JsonWebTokenError: invalid signature`

**Rozwiązanie:**
- Token wygasł lub jest nieprawidłowy
- Zaloguj się ponownie

### Problem: `User already exists`

**Rozwiązanie:**
- Admin już istnieje w bazie
- Użyj `/api/auth/login` zamiast `/register`

### Problem: Port 3001 zajęty

**Rozwiązanie:**
- Zmień `PORT` w `.env`
- Lub zamknij proces na porcie 3001:
```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

---

## 📊 MongoDB GUI Tools (Opcjonalne)

- **MongoDB Compass** (Oficjalny): https://www.mongodb.com/products/compass
- **Robo 3T**: https://robomongo.org/
- **Studio 3T**: https://studio3t.com/

---

## 🔒 Security Best Practices (Produkcja)

### 1. Zmień JWT Secret
```env
JWT_SECRET=$(openssl rand -base64 32)
```

### 2. Używaj HTTPS
- Tylko secure cookies
- `SameSite` i `HttpOnly` flags

### 3. Rate Limiting
```bash
npm install express-rate-limit
```

### 4. Helmet.js
```bash
npm install helmet
```

### 5. Walidacja Input
```bash
npm install express-validator
```

### 6. CORS Configuration
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}))
```

---

## 📦 Deployment

### Heroku
```bash
heroku create prestigebud-api
heroku config:set MONGODB_URI=your_atlas_uri
heroku config:set JWT_SECRET=your_secret
git push heroku main
```

### Railway
1. Push to GitHub
2. Connect Railway to repo
3. Add environment variables
4. Deploy automatically

### Vercel (Serverless)
- Konwertuj Express routes na Vercel Serverless Functions
- Wymaga refactoringu

---

## 🔄 Scripts

```json
{
  "dev": "concurrently \"npm run server\" \"npm run client\"",
  "client": "vite",
  "server": "nodemon server/server.js",
  "build": "vite build",
  "create-admin": "node server/scripts/createAdmin.js"
}
```

---

## 📝 TODO (Optional Enhancements)

- [ ] Refresh token mechanism
- [ ] Password reset via email
- [ ] Multi-user support with roles
- [ ] Content version history
- [ ] Image upload to S3/Cloudinary
- [ ] Audit log
- [ ] Rate limiting per user
- [ ] 2FA authentication

---

**Status:** ✅ Backend Ready

**Tech Stack:** Express + MongoDB + JWT + bcrypt

**Last Updated:** 2026-02-09
