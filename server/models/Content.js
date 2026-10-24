import mongoose from 'mongoose'

const contentSchema = new mongoose.Schema({
  hero: {
    title: String,
    subtitle: String,
    bullets: [String],
    ctaText: String,
    imageAlt: String
  },
  about: {
    title: String,
    subtitle: String,
    heading1: String,
    paragraph1: String,
    heading2: String,
    bullets: [String]
  },
  services: {
    title: String,
    subtitle: String,
    description: String,
    items: [{
      title: String,
      description: String,
      keywords: String
    }]
  },
  contact: {
    title: String,
    subtitle: String,
    phone: String,
    email: String,
    address: String,
    city: String,
    hours: String
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

const Content = mongoose.model('Content', contentSchema)

export default Content
