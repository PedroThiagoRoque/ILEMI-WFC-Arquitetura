const express = require('express');
const router = express.Router();
const path = require('path');

//exportador
router.get('/', (req, res) => {
    res.render('exportador/exportador');
});

module.exports = router;