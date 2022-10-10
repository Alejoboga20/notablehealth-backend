const { Router } = require('express');
const { getPhyisicians, getPhysicianAppointments } = require('../controllers/physicians');

const router = Router();

router.get('/', getPhyisicians);
router.get('/:id', getPhysicianAppointments);

module.exports = router;
