const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({success: true, msg: 'Show all bootcamps'});
});

router.post('/:id', (req, res) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}`});
});

module.exports = router;