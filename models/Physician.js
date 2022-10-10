const { Schema, model } = require('mongoose');

const PhysiciansSchema = Schema({
	name: {
		type: String,
		required: true,
	},
	id: {
		type: Number,
		required: true,
	},
});

module.exports = model('Physician', PhysiciansSchema);
