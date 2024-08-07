const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

const app = express();
const port = process.env.APP_PORT

// Configuration des vues
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Chargement des routes
const pageRouter = require('./routes/page.routes')
app.use('/', pageRouter)

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur lancé correctement sur http://localhost:${port}`);

  connectDB()
});
