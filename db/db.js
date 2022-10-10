const mongoose = require('mongoose');

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
	isConnected: 0,
};

const connect = async () => {
	if (mongoConnection.isConnected) {
		console.log('Connected');
		return;
	}

	if (mongoose.connections.length > 0) {
		mongoConnection.isConnected = mongoose.connections[0].readyState;

		if (mongoConnection.isConnected === 1) {
			console.log('Using Previous Connection');
			return;
		}

		await mongoose.disconnect();
	}

	await mongoose.connect(process.env.MONGO_URL || '');
	mongoConnection.isConnected = 1;
	console.log('Connected to MongoDB:', process.env.MONGO_URL);
};

const disconnect = async () => {
	if (process.env.NODE_ENV === 'development') return;

	if (mongoConnection.isConnected === 0) return;

	await mongoose.disconnect();
	mongoConnection.isConnected = 0;

	console.log('Disconnected from MongoDB');
};

module.exports = { connect, disconnect };
