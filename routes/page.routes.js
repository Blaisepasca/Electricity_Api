const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log(req.url);

  const products = [
    { name: 'Laptop', description: 'This is an awesome laptop' },
    { name: 'Phone', description: 'This is an awesome phone' },
    { name: 'Tablet', description: 'This is an awesome tablet' },
    { name: 'Monitor', description: 'This is an awesome monitor' }
  ]

  res.render('index', {
    title: 'Welcome to SNEL APP API',
    listProducts: products
  })
})

router.get('/inscription', (req, res) => {
  res.render('inscription')
})

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', (req, res) => {
  // Traitement de connexion

  res.redirect('/')
})

module.exports = router