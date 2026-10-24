# 🚀 Kompletny Setup Guide - Backend + Frontend

## Status: ✅ Backend gotowy, wymaga MongoDB

---

## Krok 1: Zainstaluj MongoDB

### Opcja A: MongoDB Lokalnie (Windows)

**Pobierz i zainstaluj:**
```
https://www.mongodb.com/try/download/community
```

**Po instalacji uruchom MongoDB:**
```powershell
# Metoda 1: MongoDB jako serwis (automatycznie)
# Po instalacji MongoDB działa jako Windows Service

# Metoda 2: Ręcznie
mongod
```

**Sprawdź czy działa:**
```powershell
# W nowym terminalu
mongosh
# Jeśli połączy się - działa!
```

### Opcja B: MongoDB Atlas (Cloud - Darmowy)

1. **Zarejestruj się:** https://www.mongodb.com/cloud/atlas/register
2. **Utwórz cluster:**
   - Wybierz M0 (FREE)
   - Wybierz region (np. Frankfurt)
3. **Stwórz użytkownika:**
   - Database Access → Add New Database User
   - Username: `prestigebud`
   - Password: (wygeneruj hasło)
4. **Dodaj IP do whitelisty:**
   - Network Access → Add IP Address
   - Wybierz "Allow Access from Anywhere" (0.0.0.0/0)
5. **Pobierz connection string:**
   - Clusters → Connect → Connect your application
   - Skopiuj string (wygląda tak):
   ```
   mongodb+srv://prestigebud:<password>@cluster.mongodb.net/prestigebud?retryWrites=true&w=majority
   ```
6. **Zaktualizuj `.env`:**
   ```env
   MONGODB_URI=mongodb+srv://prestigebud:TWOJE_HASLO@cluster.mongodb.net/prestigebud
   ```

---

## Krok 2: Utwórz Konto Admina

Po uruchomieniu MongoDB:

```bash
npm run create-admin
```

**Output:**
```
✅ Admin user created successfully!
   Username: admin
   Password: prestige2024
   Role: admin
```

---

## Krok 3: Uruchom Aplikację

```bash
npm run dev
```

To uruchomi:
- ✅ Express API → `http://localhost:3001`
- ✅ Vite Frontend → `http://localhost:5174`

**Logi które zobaczysz:**
```
[0] 🚀 Server running on port 3001
[0] 📡 API available at http://localhost:3001/api
[0] ✅ MongoDB Connected: localhost:27017 (lub Atlas)
[1] VITE v5.4.21  ready in 800 ms
[1] ➜  Local:   http://localhost:5174/
```

---

## Krok 4: Zaloguj się do Panelu

1. Otwórz: `http://localhost:5174/login`
2. Zaloguj się:
   - **Username:** `admin`
   - **Password:** `prestige2024`
3. Zostaniesz przekierowany do `/admin`

---

## 🔍 Testowanie API

### 1. Health Check
```bash
curl http://localhost:3001/api/health
```

**Response:**
```json
{"status":"OK","message":"Server is running"}
```

### 2. Pobierz content (public)
```bash
curl http://localhost:3001/api/content
```

### 3. Login
```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","password":"prestige2024"}'
```

**Response:**
```json
{
  "_id": "...",
  "username": "admin",
  "role": "admin",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 4. Zaktualizuj content (protected)
```bash
curl -X PUT http://localhost:3001/api/content \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{"hero":{"title":"Nowy Tytuł"}}'
```

---

## 🐛 Troubleshooting

### Problem: `MongoNetworkError: connect ECONNREFUSED`

**Przyczyna:** MongoDB nie działa

**Rozwiązanie:**
```powershell
# Sprawdź czy MongoDB service działa:
net start | findstr MongoDB

# Jeśli nie ma, uruchom:
mongod

# LUB użyj MongoDB Atlas (opcja B)
```

### Problem: Script `create-admin` wisi

**Przyczyna:** Czeka na MongoDB

**Rozwiązanie:**
1. Zatrzymaj script: `Ctrl+C`
2. Uruchom MongoDB (patrz wyżej)
3. Spróbuj ponownie: `npm run create-admin`

### Problem: Port 3001 lub 5174 zajęty

**Rozwiązanie:**
```powershell
# Znajdź proces:
netstat -ano | findstr :3001

# Zabij proces:
taskkill /PID <PID> /F
```

### Problem: `User already exists`

**To jest OK!** Admin już istnieje w bazie.

Możesz zalogować się używając:
- Username: `admin`
- Password: `prestige2024`

---

## 📊 Struktura Bazy Danych

### Collections (MongoDB):

**users:**
```javascript
{
  _id: ObjectId,
  username: "admin",
  password: "$2a$10$hash...", // bcrypt hashed
  role: "admin",
  createdAt: Date
}
```

**contents:**
```javascript
{
  _id: ObjectId,
  hero: { title, subtitle, bullets, ctaText, imageAlt },
  about: { title, subtitle, heading1, paragraph1, heading2, bullets },
  services: { title, subtitle, description, items: [...] },
  contact: { title, subtitle, phone, email, address, city, hours },
  updatedBy: ObjectId (ref: User),
  updatedAt: Date
}
```

---

## 🔐 Security Checklist

### Development (Obecne):
- [x] JWT authentication
- [x] Bcrypt password hashing
- [x] Protected API routes
- [x] CORS configured
- [x] Environment variables

### Production (TODO):
- [ ] Zmień `JWT_SECRET` w `.env`
- [ ] MongoDB Atlas (nie lokalne)
- [ ] Rate limiting
- [ ] Helmet.js
- [ ] Input validation
- [ ] HTTPS
- [ ] Secure cookies
- [ ] Backup strategy

---

## 🚀 Next Steps

1. ✅ **Zainstaluj MongoDB** (lokalne lub Atlas)
2. ✅ **Uruchom** `npm run create-admin`
3. ✅ **Start app** `npm run dev`
4. ✅ **Zaloguj się** na `/login`
5. ✅ **Edytuj treści** w panelu admina
6. ✅ **Zobacz zmiany** na stronie głównej

---

## 📚 Dodatkowe Zasoby

- [Backend Setup](./BACKEND-SETUP.md) - Szczegółowa dokumentacja API
- [Admin Panel](./ADMIN-PANEL.md) - Jak używać panelu
- [MongoDB Docs](https://www.mongodb.com/docs/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [JWT.io](https://jwt.io/) - Debugowanie tokenów

---

**Status:** ✅ Backend ready, czeka na MongoDB

**Last Updated:** 2026-02-09
