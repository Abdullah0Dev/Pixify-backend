const express = require('express');
const {
    Modal1Controller,
    Modal2Controller,
    Modal3Controller,
} = require('../controllers/generateimgController'); // Correct import

const router = express.Router();

// Define the routes
router.post('/modal-1', Modal1Controller);
router.post('/modal-2', Modal2Controller);
router.post('/modal-3', Modal3Controller);

module.exports = router;
