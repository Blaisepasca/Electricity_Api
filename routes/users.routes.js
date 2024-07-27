const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Alice' },
    { id: 4, name: 'Bob' }
  ])
})

module.exports = router