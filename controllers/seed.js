const initialData = require('../db/initialData');
const Appoinment = require('../models/Appoinment');
const Physician = require('../models/Physician');

const seedDB = async (req, res) => {
	/* Seed DB is not available in production */
	if (process.env.NODE_ENV === 'production')
		return res.status(401).json({ ok: false, message: 'Not access to this service' });

	await Physician.deleteMany();
	await Physician.insertMany(initialData.physicians);

	await Appoinment.deleteMany();
	await Appoinment.insertMany(initialData.appointments);

	return res.status(201).json({ ok: true, message: 'Seed DB' });
};

module.exports = { seedDB };
