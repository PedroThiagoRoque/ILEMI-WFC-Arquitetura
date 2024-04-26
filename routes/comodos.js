const express = require('express');
const router = express.Router();
const path = require('path');

//comodos
router.get('/', (req, res) => {
    res.render('comodos/comodos');
});

module.exports = router;