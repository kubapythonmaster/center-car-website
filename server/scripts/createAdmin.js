import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/User.js'

dotenv.config()

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/prestigebud')
    
    console.log('📡 Connected to MongoDB')

    // Check if admin already exists
    const existingAdmin = await User.findOne({ username: 'admin' })
    
    if (existingAdmin) {
      console.log('⚠️  Admin user already exists!')
      process.exit(0)
    }

    // Create admin user
    const admin = await User.create({
      username: 'admin',
      password: 'prestige2024', // Will be hashed automatically by pre-save hook
      role: 'admin'
    })

    console.log('✅ Admin user created successfully!')
    console.log(`   Username: ${admin.username}`)
    console.log(`   Password: prestige2024`)
    console.log(`   Role: ${admin.role}`)
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error:', error.message)
    process.exit(1)
  }
}

createAdmin()
