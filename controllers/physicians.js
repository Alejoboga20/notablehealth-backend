const { response } = require('express');
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

module.exports = { getPhyisicians };
