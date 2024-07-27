const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)

    console.log('🎉 Connexion à la base de données réussie !')
  } catch (err) {
    console.error('😫 Connexion à la base de données échouée !', err)
  }
}

module.exports = connectDB