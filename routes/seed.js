const { Router } = require('express');
const { seedDB } = require('../controllers/seed');

const router = Router();
router.get('/', seedDB);

module.exports = router;
