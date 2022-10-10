const initialData = {
	physicians: [
		{
			name: 'Hibbert, Julius',
			id: 1,
		},
		{
			name: 'Krieger, Algernop',
			id: 2,
		},
		{
			name: 'Riviera, Nick',
			id: 3,
		},
	],
	appointments: [
		{
			patientName: 'New Patient 1',
			time: '8:00AM',
			kind: 'New Patient',
			physiciansId: 1,
		},
		{
			patientName: 'New Patient 2',
			time: '8:30AM',
			kind: 'New Patient',
			physiciansId: 1,
		},
		{
			patientName: 'Follow-up Patient',
			time: '9:00AM',
			kind: 'Follow-up',
			physiciansId: 1,
		},
		{
			patientName: 'Follow-up Patient 2',
			time: '10:00AM',
			kind: 'Follow-up',
			physiciansId: 1,
		},
		{
			patientName: 'New Patient 5',
			time: '8:30AM',
			kind: 'New Patient',
			physiciansId: 2,
		},
		{
			patientName: 'Follow-up Patient',
			time: '9:00AM',
			kind: 'Follow-up',
			physiciansId: 3,
		},
		{
			patientName: 'New Patient',
			time: '11:00AM',
			kind: 'New Patient',
			physiciansId: 3,
		},
	],
};

module.exports = initialData;
