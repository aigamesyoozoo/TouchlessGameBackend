const express = require('express');
const router = express.Router();

var move = -1;

router.get('/', (req, res, next) => {
    res.status(200).json({
        move: move
    });
});

router.get('/:m', (req, res, next) => {
    move = req.params.m;

    res.status(200).json({
        message: 'You changed move',
        move: move
    });
});

module.exports = router;