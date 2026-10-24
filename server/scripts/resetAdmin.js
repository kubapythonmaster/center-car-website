import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User.js'

dotenv.config()

const resetAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    
    console.log('📡 Connected to MongoDB')

    // Find and update admin user
    const admin = await User.findOne({ username: 'admin' })
    
    if (!admin) {
      console.log('⚠️  Admin user not found!')
      console.log('Run: npm run create-admin')
      process.exit(1)
    }

    // Update password (will be hashed by pre-save hook)
    admin.password = 'prestige2024'
    await admin.save()

    console.log('✅ Admin password reset successfully!')
    console.log(`   Username: ${admin.username}`)
    console.log(`   New Password: prestige2024`)
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

resetAdmin()
