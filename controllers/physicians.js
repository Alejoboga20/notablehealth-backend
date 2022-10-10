const { response, request } = require('express');
const Appoinment = require('../models/Appoinment');
const Physician = require('../models/Physician');

const getPhyisicians = async (req, res = response) => {
	try {
		const physicians = await Physician.find();

		res.status(200).json({ ok: true, physicians });
	} catch (error) {
		console.log(error);

		res.status(500).json({ ok: false, message: 'Internal Server Error' });
	}
};

const getPhysicianAppointments = async (req = request, res = response) => {
	let physician;
	const physicianId = req.params.id;

	try {
		physician = await Physician.findOne({ id: physicianId });

		if (!physician) {
			return res.status(404).json({ ok: false, message: 'Physician Not Found' });
		}

		const appoinments = await Appoinment.find({ physicianId });

		res.status(200).json({ ok: true, physician, appoinments });
	} catch (error) {
		console.log(error);

		res.status(500).json({ ok: false, message: 'Internal Server Error' });
	}
};

module.exports = { getPhyisicians, getPhysicianAppointments };
