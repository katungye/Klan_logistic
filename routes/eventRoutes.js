const express = require('express');
const { renderEventsPage, saveAction } = require('../controllers/eventController');
const router = express.Router();

// routes
router.get('/', renderEventsPage);
router.post('/save-action', saveAction);

module.exports = router;