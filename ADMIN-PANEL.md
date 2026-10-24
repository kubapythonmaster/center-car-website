# Panel Administracyjny - PRESTIGE BUD

## Dostęp do Panelu

### 🔐 Logowanie

**URL:** `http://localhost:5174/login`

**Dane dostępowe:**
- **Username:** `admin`
- **Password:** `prestige2024`

---

## Funkcje Panelu

### ✅ Edycja Treści Strony

Panel admina pozwala na edycję wszystkich tekstów strony bez potrzeby ingerencji w kod:

#### 1. **Hero Section (Strona Główna)**
- Tytuł (H1)
- Podtytuł
- 3 punkty USP (Unique Selling Points)
- Tekst przycisku CTA

#### 2. **O Firmie**
- Tytuł i podtytuł
- 2 nagłówki H3
- Paragraf główny
- 5 punktów wyróżniających firmę

#### 3. **Usługi**
- Tytuł sekcji
- Podtytuł i opis
- **6 kart usług**, każda zawiera:
  - Tytuł usługi
  - Opis (może zawierać długi tekst)
  - Keywords SEO

#### 4. **Kontakt**
- Tytuł i podtytuł sekcji
- Telefon
- Email
- Adres (ulica + miasto)
- Godziny otwarcia

---

## Jak To Działa?

### Architektura

1. **LocalStorage** - treści są zapisywane lokalnie w przeglądarce
2. **React Context** - centralne zarządzanie stanem treści
3. **Content.json** - domyślne wartości (źródło prawdy)

### Przepływ danych:

```
content.json (default)
      ↓
ContentContext (state management)
      ↓
Components (Hero, Services, Projects, Contact)
```

### Gdy edytujesz treść:

```
AdminPanel → updateContent() → ContentContext → localStorage
                                        ↓
                                   Components (auto-update)
```

---

## Zarządzanie Treścią

### Zapisywanie Zmian

1. Przejdź do panelu admin: `/admin`
2. Wybierz zakładkę (Hero / O Firmie / Usługi / Kontakt)
3. Edytuj pola tekstowe
4. Kliknij **"Zapisz Zmiany"** (na górze lub na dole)

✅ Zmiany są widoczne **natychmiast** na stronie głównej.

### Resetowanie do Domyślnych

Kliknij przycisk **"Reset"** w panelu:
- Przywraca oryginalne teksty z `content.json`
- Usuwa customowe zmiany z localStorage
- Wymaga potwierdzenia

---

## Bezpieczeństwo

### ⚠️ Uwaga - To wersja demo!

Panel admina w obecnej formie jest **tylko do developmentu/demo**.

### W wersji produkcyjnej potrzebne:

1. **Backend API** - endpoint do zapisu treści
2. **Baza danych** - przechowywanie treści na serwerze
3. **JWT Authentication** - prawdziwe tokeny zamiast localStorage
4. **Hashing haseł** - bcrypt, nie plain text
5. **HTTPS** - bezpieczna komunikacja
6. **CORS** - ochrona przed nieautoryzowanym dostępem
7. **Rate limiting** - ochrona przed brute force
8. **Walidacja danych** - sanityzacja inputów

### Obecne ograniczenia:

- ❌ Hasło w kodzie (nie używać na produkcji!)
- ❌ Brak sesji po stronie serwera
- ❌ localStorage łatwy do edycji w devtools
- ❌ Brak historii zmian
- ❌ Brak multi-user support

---

## Roadmap (Opcjonalne Rozszerzenia)

### Faza 1: Podstawy (✅ Zrobione)
- [x] Routing (/login, /admin)
- [x] Logowanie z hasłem
- [x] Panel z zakładkami
- [x] Edycja wszystkich sekcji
- [x] Zapis do localStorage
- [x] Reset do domyślnych

### Faza 2: Backend (Produkcja)
- [ ] Node.js/Express API
- [ ] MongoDB/PostgreSQL baza danych
- [ ] JWT authentication
- [ ] Endpoint: `POST /api/content`
- [ ] Endpoint: `GET /api/content`

### Faza 3: Zaawansowane
- [ ] Wylogowanie po bezczynności
- [ ] Historia zmian (version control)
- [ ] Multiple users (role: admin, editor)
- [ ] Upload zdjęć (do Hero, Services, About)
- [ ] Podgląd przed publikacją
- [ ] SEO meta tags editor

### Faza 4: CMS Features
- [ ] Media library
- [ ] Drag & drop content builder
- [ ] A/B testing content
- [ ] Analytics dashboard

---

## Struktura Plików

```
src/
├── context/
│   └── ContentContext.jsx    # State management + localStorage
├── data/
│   └── content.json          # Domyślne treści strony
├── pages/
│   ├── Login.jsx             # Strona logowania
│   └── AdminPanel.jsx        # Panel edycji treści
├── components/
│   ├── Hero.jsx              # Używa content.hero
│   ├── Services.jsx          # Używa content.about
│   ├── Projects.jsx          # Używa content.services
│   └── Contact.jsx           # Używa content.contact
├── App.jsx                   # Routing (/, /login, /admin)
└── main.jsx                  # BrowserRouter + ContentProvider
```

---

## FAQ

### Q: Czy zmiany są trwałe?
**A:** Tak, ale tylko w localStorage przeglądarki. Jeśli wyczyszczysz cache przeglądarki, zmiany zostaną utracone. W wersji produkcyjnej musisz dodać backend.

### Q: Czy mogę dodać nowe usługi?
**A:** Obecnie panel obsługuje edycję 6 istniejących usług. Aby dodać nowe, musisz zmodyfikować `content.json` i `AdminPanel.jsx`.

### Q: Co się stanie po wylogowaniu?
**A:** Treści pozostają zapisane w localStorage. Następne logowanie pokaże aktualne treści.

### Q: Czy mogę zmienić hasło?
**A:** Tak, edytuj wartości `ADMIN_USERNAME` i `ADMIN_PASSWORD` w `Login.jsx`. W produkcji użyj haszowania i bazy danych.

### Q: Jak wdrożyć to na produkcję?
**A:** 
1. Stwórz backend API (Node.js + Express)
2. Dodaj bazę danych (MongoDB/PostgreSQL)
3. Zaimplementuj JWT authentication
4. Zastąp localStorage wywołaniami API
5. Deploy backend + frontend osobno (np. Vercel + Railway)

---

## Kontakt / Support

W razie pytań technicznych:
- Sprawdź kod źródłowy w `src/pages/AdminPanel.jsx`
- Otwórz DevTools → Console, żeby zobaczyć błędy
- Sprawdź dokumentację React Router i Context API

---

**Status:** ✅ Działający system CMS (wersja demo/development)

**Ostatnia aktualizacja:** 2026-02-09
