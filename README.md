# SZTANGA STUDIO - Trener Personalny Online

Profesjonalna strona internetowa trenera personalnego z panelem administracyjnym (localStorage).

---

## 🚀 Quick Start

### 1. Instalacja:

```bash
npm install
```

### 2. Uruchom aplikację:

```bash
npm run dev
```

Strona będzie dostępna pod: **http://localhost:5173**

### 3. Zaloguj się do panelu:

**URL:** `http://localhost:5173/login`

**Dane logowania:**
- Username: `admin`
- Password: `sztanga2024`

---

## 📋 Funkcje

### ✅ Strona Główna
- Hero section z neonowym designem (niebieski/cyan)
- Sekcja "O mnie" z doświadczeniem trenera
- 6 pakietów usług treningowych z cenami
- Formularz kontaktowy + dane kontaktowe
- Responsywny footer ze social media
- Logo Sztanga Studio

### ✅ Panel Admina
- Prosty login (localStorage)
- Edycja wszystkich tekstów strony
- 4 zakładki: Hero, O Mnie, Oferta, Kontakt
- Zapis do localStorage
- Podgląd zmian w czasie rzeczywistym
- Reset do domyślnych wartości

### ✅ Design
- **Kolory:** Neonowy niebieski (#00d4ff) i cyan (#00ffff)
- **Logo:** Sztanga Studio (neonowe logo ze sztangą)
- **Fonty:** Rajdhani (headings), Montserrat (body)
- **Animacje:** Glow effects, floating elements, gradient animations
- **Tło:** Czarne z gradientami i efektami świecenia
- **Fully responsive**

---

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool + dev server
- **React Router v6** - Routing (/login, /admin)
- **Tailwind CSS** - Styling (custom neon theme)
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **localStorage** - Content persistence

---

## 📁 Struktura Projektu

```
.
├── src/
│   ├── components/          
│   │   ├── Header.jsx       # Navigation z logo Sztanga Studio
│   │   ├── Hero.jsx         # Hero z neonowym designem
│   │   ├── Services.jsx     # O mnie + cechy trenera
│   │   ├── Projects.jsx     # Oferta 6 pakietów treningowych
│   │   └── Contact.jsx      # Kontakt + footer z social media
│   ├── pages/               
│   │   ├── Login.jsx        # Prosty login (localStorage)
│   │   └── AdminPanel.jsx   # Panel edycji treści
│   ├── context/             
│   │   └── ContentContext.jsx  # State management (localStorage)
│   ├── data/
│   │   └── content.json     # Domyślna treść strony
│   ├── App.jsx              # Routing
│   └── main.jsx             # Entry point
├── public/
│   └── logo-sztanga.jpg     # Logo Sztanga Studio
├── tailwind.config.js       # Konfiguracja neonowych kolorów
├── index.html               # HTML + SEO meta tags
└── README.md                # Ta dokumentacja
```

---

## 🎨 Design System

### Kolory

```css
/* Neon Blue Theme */
--neon-blue: #00d4ff;     /* Main brand color */
--neon-cyan: #00ffff;     /* Accent color */
--neon-dark: #0a0e27;     /* Dark background */
--black: #000000;         /* Pure black backgrounds */
```

### Typografia

- **Headings (Sport/Tech):** Rajdhani (waga: 500, 600, 700)
- **Body (Clean):** Montserrat (waga: 300-900)
- **Base size:** 16px
- **Scale:** Fluid responsive

### Animacje

- **Glow effects** - Pulsating neon shadows (`animate-pulse-glow`)
- **Float** - Smooth up/down movement (`animate-float`)
- **Hover scales** - Interactive elements (`transform hover:scale-105`)
- **Gradient animations** - Dynamic backgrounds

---

## 📝 Edycja Treści

### Przez Panel Admin (Rekomendowane):

1. Otwórz `/login`
2. Zaloguj się (`admin` / `sztanga2024`)
3. Edytuj teksty w zakładkach:
   - **Hero** - tytuł, opis, bullet points, CTA
   - **O Mnie** - bio, doświadczenie, filozofia treningu
   - **Oferta** - 6 pakietów treningowych z opisami i cenami
   - **Kontakt** - dane kontaktowe, godziny, social media
4. Kliknij "Zapisz Zmiany"
5. Zmiany zapisują się do localStorage

### Przez Kod:

Edytuj `src/data/content.json` - domyślne wartości używane przy pierwszym uruchomieniu.

### Reset do domyślnych:

W panelu admina kliknij przycisk "Reset" - przywróci treści z `content.json`.

---

## 🎯 Zawartość Strony

### Hero Section
- Tytuł: "SZTANGA STUDIO"
- Podtytuł: "Trener Personalny Online"
- 4 bullet points (USP)
- Statystyki: 8+ lat, 500+ podopiecznych, 100% zaangażowania

### O Mnie
- Doświadczenie: 8+ lat w branży fitness
- 500+ udanych transformacji
- Wiedza naukowa + praktyka

### Oferta (6 pakietów):

1. **Prowadzenie Treningowe Online** - od 327 zł/mies
2. **Prowadzenie Dietetyczno-Treningowe** - od 427 zł/mies
3. **Plan Treningowy Jednorazowy** - 217 zł
4. **Plan Dietetyczny** - 147 zł
5. **Pakiet: Plan Treningowy + Dieta** - 317 zł
6. **Konsultacja Online** - 150 zł/60 min

### Kontakt
- Email: kontakt@sztangastudio.pl
- Telefon: +48 123 456 789
- Adres: ul. Sportowa 15, 00-001 Warszawa
- Social: Instagram, YouTube, TikTok

---

## 📦 Build & Deploy

### Build produkcyjny:

```bash
npm run build
```

Output: `dist/` folder

### Preview build:

```bash
npm run preview
```

### Deploy options:

- **Vercel** (Polecane) - `vercel deploy`
- **Netlify** - Connect GitHub repo
- **GitHub Pages** - gh-pages branch
- **Firebase Hosting**

### Deploy na Vercel:

```bash
npm install -g vercel
vercel
```

---

## 🧪 Development

### Uruchomienie dev servera:

```bash
npm run dev
```

Strona: `http://localhost:5173`

---

## 🔒 Bezpieczeństwo

### ⚠️ Obecna wersja (localStorage):

- Hasło zapisane w kodzie (plain text)
- Dane w localStorage przeglądarki
- Brak sesji po stronie serwera
- **Tylko do demo/development**

### ✅ Dla produkcji dodaj:

1. Backend API (Node.js/Express) z prawdziwą bazą danych
2. JWT authentication
3. Bcrypt do hashowania haseł
4. HTTPS
5. Rate limiting
6. Input validation

---

## 📞 Kontakt

**Studio:** SZTANGA STUDIO  
**Email:** kontakt@sztangastudio.pl  
**Telefon:** +48 123 456 789  
**Adres:** ul. Sportowa 15, 00-001 Warszawa

**Social Media:**
- Instagram: @sztangastudio
- YouTube: Sztanga Studio
- TikTok: @sztangastudio

---

## 📄 Licencja

© 2026 SZTANGA STUDIO. Wszelkie prawa zastrzeżone.

---

**Made with 💪 for fitness professionals**
