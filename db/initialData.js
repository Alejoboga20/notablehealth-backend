const initialData = {
	physicians: [
		{
			name: 'Hibbert, Julius',
			email: 'physician@email.com',
			id: 1,
		},
		{
			name: 'Krieger, Algernop',
			email: 'physician@email.com',
			id: 2,
		},
		{
			name: 'Riviera, Nick',
			email: 'physician@email.com',
			id: 3,
		},
		{
			name: 'Physician With No Appoinments',
			email: 'physician@email.com',
			id: 4,
		},
	],
	appointments: [
		{
			patientName: 'New Patient 1',
			time: '8:00AM',
			kind: 'New Patient',
			physicianId: 1,
		},
		{
			patientName: 'New Patient 2',
			time: '8:30AM',
			kind: 'New Patient',
			physicianId: 1,
		},
		{
			patientName: 'Follow-up Patient',
			time: '9:00AM',
			kind: 'Follow-up',
			physicianId: 1,
		},
		{
			patientName: 'Follow-up Patient 2',
			time: '10:00AM',
			kind: 'Follow-up',
			physicianId: 1,
		},
		{
			patientName: 'New Patient 5',
			time: '8:30AM',
			kind: 'New Patient',
			physicianId: 2,
		},
		{
			patientName: 'Follow-up Patient',
			time: '9:00AM',
			kind: 'Follow-up',
			physicianId: 3,
		},
		{
			patientName: 'New Patient',
			time: '11:00AM',
			kind: 'New Patient',
			physicianId: 3,
		},
	],
};

module.exports = initialData;
