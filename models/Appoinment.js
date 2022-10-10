const { Schema, model } = require('mongoose');

const AppoinmentSchema = Schema({
	patientName: {
		type: String,
		required: true,
	},
	time: {
		type: String,
		required: true,
	},
	kind: {
		type: String,
		required: true,
	},
	physicianId: {
		type: Number,
		required: true,
	},
});

module.exports = model('Appoinment', AppoinmentSchema);
