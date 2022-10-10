const { Router } = require('express');
const { getPhyisicians } = require('../controllers/physicians');

const router = Router();

router.get('/', getPhyisicians);

module.exports = router;
