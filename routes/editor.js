const express = require('express');
const router = express.Router();
const path = require('path');

//editor
router.get('/', (req, res) => {
    res.render('editor/editor');
});

module.exports = router;