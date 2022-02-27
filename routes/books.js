const express = require('express')
const router = express.Router();

// ROUTES
//get - get info
//post -  eg submit a form (give info)
//delete - delete data
//patch - update a resource
//first parameter = route

router.get('/', (req, res) => {
    res.json('it works?')
})

module.exports = router;