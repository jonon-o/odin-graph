export interface LevelLayer {
	label: string;
	level: 1 | 2 | 3 | 4 | 5;
	items: Map<'blue' | 'red' | 'green' | 'yellow', string[]>;
}

// edu & social: blue - individual
// state & private: red - economy
// internal & external: green - Health, environment
// Gov & social: yellow - Governance

export const tableData: LevelLayer[] = [
	{
		label: 'Individual Layer',
		level: 1,
		items: new Map([
			[
				'blue',
				[ 'Personal Identifiers', 'Education Background', 'Online Presence', 'Survey Responses', 'Behavioral Data']
			],
			[
				'red',
				[ 'Employment History', 'Income Details', 'Personal Financial Data', 'Consumer Behavior']
			],
			[
				'green',
				[ 'Medical History', 'Personal Health Data', 'Individual Carbon Footprint', 'Health Habits']
			],
			[
				'yellow',
				[ 'Voter Registration', 'Civic Participation', 'Legal Status', 'Personal Documentation']
			]
		])
	},
	{
		label: 'Family Layer',
		level: 2,
		items: new Map([
			[
				'blue',
				[ 'Family Relationships', 'Language Spoken at Home', 'Family Education Level', 'Parent-School Interaction']
			],
			[
				'red',
				[ 'Household Income', 'Family Assets', 'Family Business', 'Household Expenses']
			],
			[
				'green',
				[ 'Family Health Practices', 'Household Resource Usage', 'Family Living Environment', 'Home Energy Consumption']
			],
			[
				'yellow',
				[ 'Household Registration', 'Family Legal Status', 'Property Rights', 'Family Benefits']
			]
		])
	},
	{
		label: 'Community Layer',
		level: 3,
		items: new Map([
			[
				'blue',
				[ 'School Enrollment', 'Local Cultural Events', 'Community Facilities', 'Social Network Connections']
			],
			[
				'red',
				[ 'Local Businesses', 'Market Activity', 'Local Employment', 'Community Commerce']
			],
			[
				'green',
				[ 'Local Air Quality', 'Community Health Facilities', 'Local Environmental Initiatives', 'Neighborhood Green Spaces']
			],
			[
				'yellow',
				[ 'Local Governance', 'Community Councils', 'District Administration', 'Local Services']
			]
		])
	},
	{
		label: 'Society Layer',
		level: 4,
		items: new Map([
			[
				'blue',
				[ 'Educational Institutions', 'Social Media Platforms', 'Cultural Institutions', 'Public Education Access']
			],
			[
				'red',
				[ 'Industry Distribution', 'Market Trends', 'Business Establishments', 'Consumer Markets']
			],
			[
				'green',
				[ 'Regional Health Systems', 'Environmental Protection', 'Public Health Programs', 'Urban Planning']
			],
			[
				'yellow',
				[ 'Regional Administration', 'Public Services', 'Civil Society Organizations', 'Social Protection Systems']
			]
		])
	},
	{
		label: 'National Layer',
		level: 5,
		items: new Map([
			[
				'blue',
				[ 'Education System Data', 'National Education Standards', 'Graduation Rates', 'Cultural Heritage Programs']
			],
			[
				'red',
				[ 'GDP', 'Economic Growth Rate', 'National Employment Rate', 'Trade Statistics']
			],
			[
				'green',
				[ 'National Health Policy', 'Environmental Standards', 'Conservation Programs', 'Climate Change Policies']
			],
			[
				'yellow',
				[ 'State Laws', 'National Policies', 'Government Institutions', 'Regulatory Framework']
			]
		])
	}
]