const express = require('express');
const router = express.Router();

// GET all students
router.get('/', (req, res) => {
    res.send('Get all students');
});

// GET a student by ID
router.get('/:id', (req, res) => {
    res.send(`Get student with ID ${req.params.id}`);
});

module.exports = router;
