import express from 'express'
import Content from '../models/Content.js'
import { protect, admin } from '../middleware/auth.js'

const router = express.Router()

// @route   GET /api/content
// @desc    Get current content
// @access  Public
router.get('/', async (req, res) => {
  try {
    let content = await Content.findOne().sort({ updatedAt: -1 })
    
    // If no content exists, return default
    if (!content) {
      // Import default content
      const defaultContent = {
        hero: {
          title: "Firma Budowlana\nWarszawa",
          subtitle: "Realizujemy projekty budowlane pod klucz od 2010 roku. Specjalizacja: budowa domów jednorodzinnych, remonty mieszkań, ocieplenia budynków, elewacje.",
          bullets: [
            "Doświadczony zespół z uprawnieniami budowlanymi",
            "Terminowe realizacje z gwarancją jakości",
            "Bezpłatna wycena w 24h + nadzór budowlany"
          ],
          ctaText: "Bezpłatna Wycena",
          imageAlt: "Budowa domu jednorodzinnego Warszawa - realizacja firmy budowlanej PRESTIGE BUD"
        },
        about: {
          title: "PRESTIGE BUD",
          subtitle: "Firma Budowlana Warszawa",
          heading1: "Czym się zajmujemy?",
          paragraph1: "PRESTIGE BUD to firma budowlana działająca na terenie Warszawy i okolic od 2010 roku. Wykonujemy prace budowlane od A do Z: od projektu po odbiór końcowy.",
          heading2: "Dlaczego klienci wybierają nas?",
          bullets: [
            "15 lat doświadczenia w budownictwie mieszkaniowym",
            "Zespół z uprawnieniami budowlanymi i certyfikatami",
            "150+ zrealizowanych projektów w Warszawie",
            "Gwarancja do 5 lat na wykonane prace",
            "Umowy z jasno określonymi terminami i kosztami"
          ]
        },
        services: {
          title: "Usługi Budowlane Warszawa",
          subtitle: "Kompleksowe usługi budowlane dla klientów indywidualnych i firm. Od projektu po odbiór końcowy - wszystko w ramach jednej umowy.",
          description: "Działamy na terenie Warszawy i w promieniu 50 km. Bezpłatna wycena. Gwarancja na wykonane prace.",
          items: [
            {
              title: "Budowa Domów Jednorodzinnych",
              description: "Kompleksowa budowa domów pod klucz. Realizujemy projekty w technologii tradycyjnej i szkieletowej. Od fundamentów po dach - wszystko w jednej firmie.",
              keywords: "budowa domu, dom pod klucz, budowa domu jednorodzinnego"
            },
            {
              title: "Remonty Mieszkań i Domów",
              description: "Remonty od A do Z: wyburzenia, instalacje, posadzki, malowanie. Remonty mieszkań, kawalerki, całego domu. Prace elektryczne, hydrauliczne, wykończeniowe.",
              keywords: "remont mieszkania, remont domu, remont łazienki, remont kuchni"
            },
            {
              title: "Ocieplenia i Elewacje",
              description: "Docieplenie budynku metodą lekką mokrą (styropian, wełna mineralna). Elewacje: tynk, kamień, klinkier. Poprawa izolacyjności termicznej do 40%.",
              keywords: "ocieplenie domu, docieplenie budynku, elewacja, termomodernizacja"
            },
            {
              title: "Roboty Ziemne i Fundamenty",
              description: "Wykopy pod fundamenty, niwelacja terenu, odwodnienie. Wykonujemy fundamenty płytowe, ławy fundamentowe, ściany fundamentowe. Sprzęt własny.",
              keywords: "fundamenty, wykopy, roboty ziemne, wykop pod dom"
            },
            {
              title: "Rozbudowa i Nadbudowa",
              description: "Powiększenie domu: dobudówki, przybudówki, nadbudowa piętra. Realizacja z zachowaniem spójności architektonicznej. Projekty indywidualne.",
              keywords: "rozbudowa domu, nadbudowa, dobudówka, powiększenie domu"
            },
            {
              title: "Dachy i Konstrukcje Dachowe",
              description: "Budowa więźby dachowej, pokrycia dachowe (dachówka, blachodachówka). Rynny, obróbki blacharskie. Docieplenie poddaszy. Naprawa dachów.",
              keywords: "budowa dachu, więźba dachowa, wymiana dachu, naprawa dachu"
            }
          ]
        },
        contact: {
          title: "Skontaktuj Się Z Nami",
          subtitle: "Masz pytania? Potrzebujesz wyceny? Skontaktuj się z nami - odpowiemy najszybciej jak to możliwe.",
          phone: "+48 123 456 789",
          email: "biuro@prestigebud.pl",
          address: "ul. Budowlana 25",
          city: "00-001 Warszawa",
          hours: "Pon-Pt: 8:00 - 18:00\nSob: 9:00 - 14:00"
        }
      }
      
      content = await Content.create(defaultContent)
    }
    
    res.json(content)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// @route   PUT /api/content
// @desc    Update content
// @access  Private (Admin only)
router.put('/', protect, admin, async (req, res) => {
  try {
    const { hero, about, services, contact } = req.body

    // Find existing content or create new
    let content = await Content.findOne()

    if (content) {
      // Update existing
      content.hero = hero || content.hero
      content.about = about || content.about
      content.services = services || content.services
      content.contact = contact || content.contact
      content.updatedBy = req.user._id
      content.updatedAt = Date.now()

      const updatedContent = await content.save()
      res.json(updatedContent)
    } else {
      // Create new
      const newContent = await Content.create({
        hero,
        about,
        services,
        contact,
        updatedBy: req.user._id
      })
      res.status(201).json(newContent)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// @route   POST /api/content/reset
// @desc    Reset content to default
// @access  Private (Admin only)
router.post('/reset', protect, admin, async (req, res) => {
  try {
    await Content.deleteMany({})
    res.json({ message: 'Content reset to default' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

export default router
