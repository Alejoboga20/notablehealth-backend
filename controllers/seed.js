const seedDB = async (req, res) => {
	/* Seed DB is not available in production */
	if (process.env.NODE_ENV === 'production')
		return res.status(401).json({ ok: false, message: 'Not access to this service' });

	/* 
	TODO: instructions to seed DB 
	*/

	return res.status(201).json({ ok: true, message: 'Seed DB' });
};

module.exports = { seedDB };
