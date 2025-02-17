// @ts-nocheck

import type { FilterValueType } from '../types';

enum Section {
	STATE = 1,
	SOCIAL = 2,
	EDU = 3,
	GOV = 4,
	SOC_1 = 5,
	EXT = 6,
	INT = 7,
	PRIVATE = 8
}

interface Item {
	text: string;
	filterable: FilterValueType[];
	x: number;
	y: number;
	fontSize: number;
	fontWeight?: number;
	expandedX?: number;
	expandedY?: number;
	textAnchor?: 'start' | 'middle' | 'end';
}

export const data: Map<Section, Map<'center' | 'self', Map<1 | 2 | 3 | 4 | 5, Item[][]>>> = new Map([
	[
		Section.STATE,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Seasonal', filterable: ['Inflation'], x: 770, y: 750, fontSize: 4, expandedX: -50, expandedY: -80 },
								{ text: 'variation', filterable: ['Inflation'], x: 770, y: 754, fontSize: 4, expandedX: -50, expandedY: -76 },
								{ text: 'in earnings', filterable: ['Inflation'], x: 765, y: 758, fontSize: 4, expandedX: -50, expandedY: -76 }
							],
							[
								{ text: 'Credit', filterable: ['Inflation'], x: 787, y: 766, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: -60 },
								{ text: 'score', filterable: ['Inflation'], x: 787, y: 770, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: -56 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'State', filterable: ['Inflation'], x: 740, y: 720, fontSize: 6, expandedX: -25, expandedY: -55 },
								{ text: 'Support', filterable: ['Inflation'], x: 740, y: 726, fontSize: 6, expandedX: -25, expandedY: -51 },
								{ text: 'Benefits', filterable: ['Inflation'], x: 740, y: 732, fontSize: 6, expandedX: -25, expandedY: -51 }
							],
							[
								{ text: 'Social', filterable: ['Inflation'], x: 769, y: 700, fontSize: 6, expandedX: -25, expandedY: -55 },
								{ text: 'Security', filterable: ['Inflation'], x: 763, y: 706, fontSize: 6, expandedX: -25, expandedY: -51 },
								{ text: 'Coverage', filterable: ['Inflation'], x: 760, y: 712, fontSize: 6, expandedX: -25, expandedY: -51 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Public', filterable: ['Inflation'], x: 705, y: 695, fontSize: 5, expandedX: 20, expandedY: 10 },
								{ text: 'Infrastructure', filterable: ['Inflation'], x: 705, y: 700, fontSize: 5, expandedX: 20, expandedY: 14 },
								{ text: 'Development', filterable: ['Inflation'], x: 705, y: 705, fontSize: 5, expandedX: 20, expandedY: 18 }
							],
							[
								{ text: 'Regional', filterable: ['Inflation'], x: 757, y: 675, fontSize: 5, expandedX: -25, expandedY: -40 },
								{ text: 'Development', filterable: ['Inflation'], x: 757, y: 680, fontSize: 5, expandedX: -25, expandedY: -36 },
								{ text: 'Balance', filterable: ['Inflation'], x: 757, y: 685, fontSize: 5, expandedX: -25, expandedY: -32 }
							],
							[
								{ text: 'State', filterable: ['Inflation'], x: 730, y: 670, fontSize: 5, expandedX: -25, expandedY: -40 },
								{ text: 'Support', filterable: ['Inflation'], x: 730, y: 675, fontSize: 5, expandedX: -25, expandedY: -36 },
								{ text: 'System', filterable: ['Inflation'], x: 730, y: 680, fontSize: 5, expandedX: -25, expandedY: -32 }
							],
							[
								{ text: 'Public', filterable: ['Inflation'], x: 700, y: 675, fontSize: 5, expandedX: -25, expandedY: -40 },
								{ text: 'Service', filterable: ['Inflation'], x: 700, y: 680, fontSize: 5, expandedX: -25, expandedY: -36 },
								{ text: 'Delivery', filterable: ['Inflation'], x: 700, y: 685, fontSize: 5, expandedX: -25, expandedY: -32 }
							],
							[
								{ text: 'Local', filterable: ['Inflation'], x: 760, y: 650, fontSize: 5, expandedX: -25, expandedY: -40 },
								{ text: 'Ergonomic', filterable: ['Inflation'], x: 760, y: 655, fontSize: 5, expandedX: -25, expandedY: -36 },
								{ text: 'Programs', filterable: ['Inflation'], x: 760, y: 660, fontSize: 5, expandedX: -25, expandedY: -32 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'State', filterable: ['Inflation'], x: 665, y: 650, fontSize: 6, expandedX: -15, expandedY: -30 },
								{ text: 'Resource', filterable: ['Inflation'], x: 665, y: 656, fontSize: 6, expandedX: -15, expandedY: -26 },
								{ text: 'Management', filterable: ['Inflation'], x: 665, y: 662, fontSize: 6, expandedX: -15, expandedY: -26 }
							],
							[
								{ text: 'Economic', filterable: ['Inflation'], x: 690, y: 630, fontSize: 6, expandedX: -15, expandedY: -30 },
								{ text: 'Regulation', filterable: ['Inflation'], x: 690, y: 636, fontSize: 6, expandedX: -15, expandedY: -26 },
								{ text: 'Quality', filterable: ['Inflation'], x: 690, y: 642, fontSize: 6, expandedX: -15, expandedY: -26 }
							],
							[
								{ text: 'Public', filterable: ['Inflation'], x: 730, y: 615, fontSize: 6, expandedX: -15, expandedY: -30 },
								{ text: 'Sector', filterable: ['Inflation'], x: 730, y: 621, fontSize: 6, expandedX: -15, expandedY: -26 },
								{ text: 'Efficiency', filterable: ['Inflation'], x: 730, y: 627, fontSize: 6, expandedX: -15, expandedY: -26 }
							],
							[
								{ text: 'Real', filterable: ['Inflation'], x: 770, y: 610, fontSize: 6, expandedX: -15, expandedY: -30 },
								{ text: 'GDP', filterable: ['Inflation'], x: 770, y: 616, fontSize: 6, expandedX: -15, expandedY: -26 },
								{ text: 'rate', filterable: ['Inflation'], x: 770, y: 622, fontSize: 6, expandedX: -15, expandedY: -26 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'State', filterable: ['Inflation'], x: 630, y: 610, fontSize: 6, expandedX: 5, expandedY: 0 },
								{ text: 'Budget', filterable: ['Inflation'], x: 630, y: 616, fontSize: 6, expandedX: 5, expandedY: 5 },
								{ text: 'Balance', filterable: ['Inflation'], x: 630, y: 622, fontSize: 6, expandedX: 5, expandedY: 10 }
							],
							[
								{ text: 'Fiscal', filterable: ['Inflation'], x: 655, y: 595, fontSize: 6, expandedX: 25, expandedY: -10 },
								{ text: 'Policy', filterable: ['Inflation'], x: 655, y: 601, fontSize: 6, expandedX: 25, expandedY: -5 },
								{ text: 'Effectiveness', filterable: ['Inflation'], x: 655, y: 607, fontSize: 6, expandedX: 25, expandedY: -5 }
							],
							[
								{ text: 'Economic', filterable: ['Inflation'], x: 675, y: 585, fontSize: 6, expandedX: 50, expandedY: -10 },
								{ text: 'Policy', filterable: ['Inflation'], x: 677, y: 591, fontSize: 6, expandedX: 50, expandedY: -5 },
								{ text: 'Framework', filterable: ['Inflation'], x: 680, y: 597, fontSize: 6, expandedX: 50, expandedY: -5 }
							],
							[
								{ text: 'State', filterable: ['Inflation'], x: 705, y: 570, fontSize: 6, expandedX: -20, expandedY: 80 },
								{ text: 'Revenue', filterable: ['Inflation'], x: 705, y: 576, fontSize: 6, expandedX: -20, expandedY: 85 },
								{ text: 'Performance', filterable: ['Inflation'], x: 705, y: 582, fontSize: 6, expandedX: -20, expandedY: 85 }
							],
							[
								{ text: 'Debt', filterable: ['Inflation'], x: 734, y: 560, fontSize: 6, expandedX: 10, expandedY: 70 },
								{ text: 'Manage', filterable: ['Inflation'], x: 734, y: 566, fontSize: 6, expandedX: 10, expandedY: 75 },
								{ text: 'ment', filterable: ['Inflation'], x: 734, y: 572, fontSize: 6, expandedX: 10, expandedY: 75 }
							],
							[
								{ text: 'Central', filterable: ['Inflation'], x: 763, y: 555, fontSize: 6, expandedX: -25, expandedY: 130 },
								{ text: 'Bank', filterable: ['Inflation'], x: 763, y: 561, fontSize: 6, expandedX: -25, expandedY: 135 },
								{ text: 'Interest', filterable: ['Inflation'], x: 763, y: 567, fontSize: 6, expandedX: -25, expandedY: 135 },
								{ text: 'Rate', filterable: ['Inflation'], x: 763, y: 573, fontSize: 6, expandedX: -25, expandedY: 135 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Opportunity', filterable: ['Inflation'], x: 788, y: 283, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: 70 },
								{ text: 'Barriers', filterable: ['Inflation'], x: 788, y: 287, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: 74 }
							],
							[
								{ text: 'Job quality', filterable: ['Inflation'], x: 788, y: 295, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: 70 },
								{ text: 'degradation', filterable: ['Inflation'], x: 788, y: 299, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: 74 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Protection', filterable: ['Inflation'], x: 770, y: 318, fontSize: 6, textAnchor: 'end', expandedX: -20, expandedY: 70 },
								{ text: 'System Gaps', filterable: ['Inflation'], x: 770, y: 324, fontSize: 6, textAnchor: 'end', expandedX: -20, expandedY: 74 }
							],
							[
								{ text: 'Benefit', filterable: ['Inflation'], x: 786, y: 336, fontSize: 6, textAnchor: 'end', expandedX: -20, expandedY: 70 },
								{ text: 'Distribution', filterable: ['Inflation'], x: 786, y: 342, fontSize: 6, textAnchor: 'end', expandedX: -20, expandedY: 74 },
								{ text: 'Failure', filterable: ['Inflation'], x: 786, y: 348, fontSize: 6, textAnchor: 'end', expandedX: -20, expandedY: 74 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Regional', filterable: ['Inflation'], x: 706, y: 345, fontSize: 6, expandedX: -20, expandedY: 70 },
								{ text: 'Imbalance', filterable: ['Inflation'], x: 705, y: 351, fontSize: 6, expandedX: -20, expandedY: 74 }
							],
							[
								{ text: 'Infrastructure Gaps', filterable: ['Inflation'], x: 700, y: 365, fontSize: 6, expandedX: -20, expandedY: 70 },
							],
							[
								{ text: 'Service', filterable: ['Inflation'], x: 765, y: 366, fontSize: 6, expandedX: -20, expandedY: 70 },
								{ text: 'Delivery', filterable: ['Inflation'], x: 765, y: 372, fontSize: 6, expandedX: -20, expandedY: 70 },
								{ text: 'Failure', filterable: ['Inflation'], x: 765, y: 378, fontSize: 6, expandedX: -20, expandedY: 70 },
							],
							[
								{ text: 'Support System', filterable: ['Inflation'], x: 710, y: 375, fontSize: 6, expandedX: -20, expandedY: 70 },
								{ text: 'Breakdown', filterable: ['Inflation'], x: 710, y: 381, fontSize: 6, expandedX: -20, expandedY: 70 },
							],
							[
								{ text: 'Program', filterable: ['Inflation'], x: 763, y: 390, fontSize: 6, expandedX: -20, expandedY: 70 },
								{ text: 'Implementation', filterable: ['Inflation'], x: 744, y: 396, fontSize: 6, expandedX: -20, expandedY: 70 },
								{ text: 'Gaps', filterable: ['Inflation'], x: 773, y: 402, fontSize: 6, expandedX: -20, expandedY: 70 },
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Resource', filterable: ['Inflation'], x: 670, y: 385, fontSize: 6, expandedX: 30, expandedY: 30 },
								{ text: 'Mismanagement', filterable: ['Inflation'], x: 660, y: 391, fontSize: 6, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Regulatory', filterable: ['Inflation'], x: 680, y: 410, fontSize: 6, expandedX: 30, expandedY: 30 },
								{ text: 'Dysfunction', filterable: ['Inflation'], x: 680, y: 416, fontSize: 6, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Debt', filterable: ['Inflation'], x: 720, y: 420, fontSize: 6, expandedX: 30, expandedY: 30 },
								{ text: 'burden', filterable: ['Inflation'], x: 720, y: 426, fontSize: 6, expandedX: 30, expandedY: 30 },
								{ text: 'increase', filterable: ['Inflation'], x: 720, y: 432, fontSize: 6, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Inefficiency', filterable: ['Inflation'], x: 750, y: 440, fontSize: 6, expandedX: 30, expandedY: 34 }
							]
							// [
							// 	{ text: 'Industrial', filterable: ['Inflation'], x: 745, y: 420, fontSize: 7, expandedX: -20, expandedY: -70 },
							// 	{ text: 'production', filterable: ['Inflation'], x: 745, y: 429, fontSize: 7, expandedX: -20, expandedY: -66 },
							// 	{ text: 'decline', filterable: ['Inflation'], x: 745, y: 438, fontSize: 7, expandedX: -20, expandedY: -62 }
							// ]
						]
					],
					[
						5,
						[
							[
								{ text: 'Budget', filterable: ['Inflation'], x: 635, y: 420, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Deficit', filterable: ['Inflation'], x: 635, y: 426, fontSize: 6, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Fiscal', filterable: ['Inflation'], x: 640, y: 440, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Policy', filterable: ['Inflation'], x: 640, y: 446, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Failure', filterable: ['Inflation'], x: 640, y: 452, fontSize: 6, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Policy', filterable: ['Inflation'], x: 665, y: 450, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Framework', filterable: ['Inflation'], x: 665, y: 456, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Weakness', filterable: ['Inflation'], x: 665, y: 462, fontSize: 6, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Revenue', filterable: ['Inflation'], x: 695, y: 470, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Shortfall', filterable: ['Inflation'], x: 695, y: 476, fontSize: 6, expandedX: 30, expandedY: 34 },
							],
							[
								{ text: 'National', filterable: ['Inflation'], x: 730, y: 480, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Debt', filterable: ['Inflation'], x: 730, y: 486, fontSize: 6, expandedX: 30, expandedY: 34 },
							],
							[
								{ text: 'Currency', filterable: ['Inflation'], x: 760, y: 485, fontSize: 6, expandedX: 30, expandedY: 34 },
								{ text: 'Stability', filterable: ['Inflation'], x: 760, y: 491, fontSize: 6, expandedX: 30, expandedY: 34 },
							],
							// [
							// 	{ text: 'Unequal', filterable: ['Inflation'], x: 630, y: 423, fontSize: 7, expandedX: 10, expandedY: 5 },
							// 	{ text: 'infrastructure', filterable: ['Inflation'], x: 627, y: 430, fontSize: 7, expandedX: 10, expandedY: 9 },
							// 	{ text: 'development', filterable: ['Inflation'], x: 627, y: 437, fontSize: 7, expandedX: 10, expandedY: 13 }
							// ],
							// [
							// 	{ text: 'Capital', filterable: ['Inflation'], x: 670, y: 447, fontSize: 7, expandedX: 40, expandedY: -25 },
							// 	{ text: 'depreciation', filterable: ['Inflation'], x: 670, y: 454, fontSize: 7, expandedX: 40, expandedY: -22 },
							// 	{ text: 'rate', filterable: ['Inflation'], x: 670, y: 461, fontSize: 7, expandedX: 40, expandedY: -18 }
							// ],
							// [
							// 	{ text: 'Slow Real', filterable: ['Inflation'], x: 700, y: 465, fontSize: 7, expandedX: 40, expandedY: 0 },
							// 	{ text: 'State', filterable: ['Inflation'], x: 700, y: 472, fontSize: 7, expandedX: 40, expandedY: 4 },
							// 	{ text: 'Market', filterable: ['Inflation'], x: 700, y: 479, fontSize: 7, expandedX: 40, expandedY: 8 }
							// ],
							// [
							// 	{ text: 'Boost', filterable: ['Inflation'], x: 730, y: 480, fontSize: 7, expandedX: 10, expandedY: -90 },
							// 	{ text: 'Inflation', filterable: ['Inflation'], x: 730, y: 489, fontSize: 7, expandedX: 10, expandedY: -89 }
							// ],
							// [
							// 	{ text: 'Real wage', filterable: ['Inflation'], x: 755, y: 470, fontSize: 7, expandedX: -45, expandedY: -120 },
							// 	{ text: 'decline', filterable: ['Inflation'], x: 755, y: 477, fontSize: 7, expandedX: -45, expandedY: -116 }
							// ]
						]
					]
				])
			]
		])
	],
	[
		Section.SOCIAL,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Self', filterable: [], x: 750, y: 767, fontSize: 4, expandedX: -90, expandedY: -50 },
								{ text: 'expression', filterable: [], x: 747, y: 771, fontSize: 4, expandedX: -90, expandedY: -46 }
							],
							[
								{ text: 'Free', filterable: [], x: 747, y: 782, fontSize: 4, expandedX: -100, expandedY: -25 },
								{ text: 'thinking', filterable: [], x: 745, y: 786, fontSize: 4, expandedX: -100, expandedY: -21 }
							],
							[
								{ text: 'EQ', filterable: [], x: 767, y: 786, fontSize: 7, expandedX: -30, expandedY: -10 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Digital', filterable: [], x: 715, y: 740, fontSize: 6, expandedX: -70, expandedY: -30 },
								{ text: 'literacy', filterable: [], x: 715, y: 746, fontSize: 6, expandedX: -70, expandedY: -26 }
							],
							[
								{ text: 'Parental', filterable: [], x: 710, y: 760, fontSize: 6, expandedX: -15, expandedY: -5 },
								{ text: 'engagement', filterable: [], x: 710, y: 766, fontSize: 6, expandedX: -15, expandedY: -1 }
							],
							[
								{ text: 'Family', filterable: [], x: 705, y: 779, fontSize: 6, expandedX: -80, expandedY: -20 },
								{ text: 'traditions', filterable: [], x: 705, y: 785, fontSize: 6, expandedX: -80, expandedY: -16 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social and', filterable: [], x: 670, y: 710, fontSize: 6, expandedX: -45, expandedY: -15 },
								{ text: 'Recreational', filterable: [], x: 670, y: 716, fontSize: 6, expandedX: -45, expandedY: -11 },
								{ text: 'opportunities', filterable: [], x: 670, y: 722, fontSize: 6, expandedX: -45, expandedY: -7 }
							],
							[
								{ text: 'Community', filterable: [], x: 658, y: 735, fontSize: 6, expandedX: 5, expandedY: 5 },
								{ text: 'participation', filterable: [], x: 658, y: 741, fontSize: 6, expandedX: 5, expandedY: 9 }
							],
							[
								{ text: 'Community', filterable: [], x: 655, y: 755, fontSize: 6, expandedX: -55, expandedY: 5 },
								{ text: 'forums', filterable: [], x: 655, y: 761, fontSize: 6, expandedX: -55, expandedY: 9 }
							],
							[
								{ text: 'Social', filterable: [], x: 655, y: 775, fontSize: 6, expandedX: 25, expandedY: -5 },
								{ text: 'Integration', filterable: [], x: 650, y: 781, fontSize: 6, expandedX: 25, expandedY: -1 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'General', filterable: [], x: 630, y: 690, fontSize: 6, expandedX: -35, expandedY: 20 },
								{ text: 'Connection', filterable: [], x: 630, y: 696, fontSize: 6, expandedX: -35, expandedY: 24 }
							],
							[
								{ text: 'Civil society', filterable: [], x: 620, y: 715, fontSize: 6, expandedX: 50, expandedY: 10 },
								{ text: 'strength', filterable: [], x: 620, y: 721, fontSize: 6, expandedX: 50, expandedY: 14 }
							],
							[
								{ text: 'Cultural heritage', filterable: [], x: 600, y: 740, fontSize: 6, expandedX: -20, expandedY: 15 },
								{ text: 'preservation', filterable: [], x: 600, y: 746, fontSize: 6, expandedX: -20, expandedY: 19 }
							],
							[
								{ text: 'Inclusive', filterable: [], x: 605, y: 765, fontSize: 6, expandedX: 70, expandedY: -5 },
								{ text: 'culture', filterable: [], x: 605, y: 771, fontSize: 6, expandedX: 70, expandedY: -1 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Social', filterable: [], x: 555, y: 760, fontSize: 7, expandedX: 85, expandedY: -15 },
								{ text: 'Development', filterable: [], x: 545, y: 767, fontSize: 7, expandedX: 85, expandedY: -11 },
								{ text: 'Balance', filterable: [], x: 553, y: 774, fontSize: 7, expandedX: 85, expandedY: -11 }
							],
							[
								{ text: 'Social', filterable: [], x: 565, y: 705, fontSize: 7, expandedX: 10, expandedY: 10 },
								{ text: 'Cohesion', filterable: [], x: 560, y: 712, fontSize: 7, expandedX: 10, expandedY: 14 },
								{ text: 'Framework', filterable: [], x: 560, y: 719, fontSize: 7, expandedX: 10, expandedY: 14 }
							],
							[
								{ text: 'National', filterable: [], x: 595, y: 650, fontSize: 7, expandedX: -5, expandedY: 20 },
								{ text: 'identity', filterable: [], x: 595, y: 657, fontSize: 7, expandedX: -5, expandedY: 24 },
								{ text: 'strength', filterable: [], x: 595, y: 664, fontSize: 7, expandedX: -5, expandedY: 29 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Lack of self', filterable: [], x: 273, y: 780, fontSize: 6, expandedX: 60, expandedY: -30 },
								{ text: 'identity', filterable: [], x: 278, y: 786, fontSize: 6, expandedX: 60, expandedY: -26 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Lack of', filterable: [], x: 310, y: 745, fontSize: 7, expandedX: 40, expandedY: -30 },
								{ text: 'parental', filterable: [], x: 310, y: 752, fontSize: 7, expandedX: 40, expandedY: -26 },
								{ text: 'participation', filterable: [], x: 310, y: 759, fontSize: 7, expandedX: 40, expandedY: -22 }
							],
							[
								{ text: 'Limited', filterable: [], x: 320, y: 778, fontSize: 7, expandedX: 40, expandedY: -20 },
								{ text: 'access', filterable: [], x: 320, y: 785, fontSize: 7, expandedX: 40, expandedY: -16 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social', filterable: [], x: 345, y: 710, fontSize: 7 },
								{ text: 'participation', filterable: [], x: 345, y: 717, fontSize: 7 },
								{ text: 'decline', filterable: [], x: 345, y: 724, fontSize: 7 }
							],
							[
								{ text: 'Community', filterable: [], x: 356, y: 740, fontSize: 7 },
								{ text: 'program', filterable: [], x: 360, y: 747, fontSize: 7 },
								{ text: 'volume', filterable: [], x: 360, y: 754, fontSize: 7 }
							],
							[
								{ text: 'Social', filterable: [], x: 365, y: 770, fontSize: 7 },
								{ text: 'integration', filterable: [], x: 365, y: 777, fontSize: 7 },
								{ text: 'barriers', filterable: [], x: 365, y: 784, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Generation', filterable: [], x: 385, y: 690, fontSize: 7, expandedX: -10, expandedY: 0 },
								{ text: 'differences', filterable: [], x: 385, y: 697, fontSize: 7, expandedX: -10, expandedY: 4 }
							],
							[
								{ text: 'Social', filterable: [], x: 410, y: 730, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'Mobility', filterable: [], x: 410, y: 737, fontSize: 7, expandedX: -20, expandedY: -6 },
								{ text: 'Systems', filterable: [], x: 410, y: 744, fontSize: 7, expandedX: -20, expandedY: -6 }
							],
							[
								{ text: 'Community', filterable: [], x: 415, y: 765, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'bond', filterable: [], x: 415, y: 772, fontSize: 7, expandedX: -20, expandedY: -6 },
								{ text: 'deterioration', filterable: [], x: 415, y: 779, fontSize: 7, expandedX: -20, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Cultural', filterable: [], x: 425, y: 650, fontSize: 7, expandedX: -20, expandedY: 20 },
								{ text: 'identity', filterable: [], x: 425, y: 657, fontSize: 7, expandedX: -20, expandedY: 24 },
								{ text: 'erosion', filterable: [], x: 425, y: 664, fontSize: 7, expandedX: -20, expandedY: 28 }
							],
							[
								{ text: 'Social', filterable: [], x: 458, y: 706, fontSize: 7, expandedX: -110, expandedY: 50 },
								{ text: 'cohesion', filterable: [], x: 458, y: 713, fontSize: 7, expandedX: -110, expandedY: 54 },
								{ text: 'weakening', filterable: [], x: 458, y: 720, fontSize: 7, expandedX: -110, expandedY: 58 }
							],
							[
								{ text: 'Social', filterable: [], x: 470, y: 756, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'development', filterable: [], x: 463, y: 763, fontSize: 7, expandedX: -20, expandedY: -7 },
								{ text: 'imbalance', filterable: [], x: 465, y: 770, fontSize: 7, expandedX: -20, expandedY: -4 },
							]
						]
					],
				])
			]
		])
	],
	[
		Section.EDU,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Learning', filterable: [], x: 743, y: 795, fontSize: 4, expandedX: -100, expandedY: 10 },
								{ text: 'progress', filterable: [], x: 743, y: 799, fontSize: 4, expandedX: -100, expandedY: 14 }
							],
							[
								{ text: 'Hard vs Soft skills', filterable: [], x: 745, y: 805, fontSize: 4, expandedX: -105, expandedY: 40 },
								{ text: 'developments', filterable: [], x: 745, y: 809, fontSize: 4, expandedX: -105, expandedY: 44 }
							],
							[
								{ text: 'IQ', filterable: [], x: 770, y: 798, fontSize: 7, expandedX: -30, expandedY: 10 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 700, y: 800, fontSize: 6, expandedX: -75, expandedY: 15 },
								{ text: 'resources', filterable: ['Inflation'], x: 700, y: 806, fontSize: 6, expandedX: -75, expandedY: 19 }
							],
							[
								{ text: 'Home learning', filterable: [], x: 702, y: 817, fontSize: 6, expandedX: -75, expandedY: 40 },
								{ text: 'space', filterable: [], x: 702, y: 823, fontSize: 6, expandedX: -75, expandedY: 44 }
							],
							[
								{ text: 'Learning', filterable: [], x: 710, y: 833, fontSize: 6, expandedX: -5, expandedY: -25 },
								{ text: 'activities', filterable: [], x: 710, y: 839, fontSize: 6, expandedX: -5, expandedY: -21 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Education', filterable: [], x: 665, y: 800, fontSize: 6, textAnchor: 'middle', expandedX: -30, expandedY: 10 },
								{ text: 'attainment levels', filterable: [], x: 665, y: 806, fontSize: 6, textAnchor: 'middle', expandedX: -30, expandedY: 14 }
							],
							[
								{ text: 'Access to', filterable: ['Inflation'], x: 675, y: 830, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -15 },
								{ text: 'educational', filterable: ['Inflation'], x: 675, y: 836, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -11 },
								{ text: 'facilities', filterable: ['Inflation'], x: 675, y: 842, fontSize: 6, textAnchor: 'middle', expandedX: 35, expandedY: -7 }
							],
							[
								{ text: 'Technology', filterable: [], x: 685, y: 865, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 0 },
								{ text: 'Integration', filterable: [], x: 685, y: 871, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 4 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Instructional', filterable: [], x: 595, y: 800, fontSize: 7, expandedX: -10, expandedY: 20 },
								{ text: 'quality', filterable: [], x: 595, y: 807, fontSize: 7, expandedX: -10, expandedY: 24 }
							],
							[
								{ text: 'Assessment', filterable: [], x: 600, y: 830, fontSize: 7, expandedX: 60, expandedY: -20 },
								{ text: 'Standards', filterable: [], x: 600, y: 837, fontSize: 7, expandedX: 60, expandedY: -16 }
							],
							[
								{ text: 'Curriculum', filterable: [], x: 610, y: 860, fontSize: 7, expandedX: 60, expandedY: -20 },
								{ text: 'Development', filterable: [], x: 610, y: 867, fontSize: 7, expandedX: 60, expandedY: -16 }
							],
							[
								{ text: 'Innovative', filterable: [], x: 630, y: 890, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'methods', filterable: [], x: 635, y: 897, fontSize: 7, expandedX: -20, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 547, y: 800, fontSize: 7, expandedX: 90, expandedY: 5 },
								{ text: 'expense', filterable: ['Inflation'], x: 550, y: 807, fontSize: 7, expandedX: 90, expandedY: 9 }
							],
							[
								{ text: 'Social norm', filterable: [], x: 550, y: 830, fontSize: 7, expandedX: 5, expandedY: -10 }
							],
							[
								{ text: 'Сургалтын', filterable: [], x: 555, y: 850, fontSize: 7, expandedX: 10, expandedY: 10 },
								{ text: 'чанар', filterable: [], x: 555, y: 857, fontSize: 7, expandedX: 15, expandedY: 14 }
							],
							[
								{ text: 'Сургалтын', filterable: ['Inflation'], x: 565, y: 880, fontSize: 7, expandedX: 25, expandedY: 30 },
								{ text: 'орчин', filterable: ['Inflation'], x: 565, y: 887, fontSize: 7, expandedX: 25, expandedY: 34 }
							],
							[
								{ text: 'Ерөнхий', filterable: [], x: 585, y: 910, fontSize: 7, expandedX: 60, expandedY: -65 },
								{ text: 'боловсролын', filterable: [], x: 580, y: 917, fontSize: 7, expandedX: 60, expandedY: -61 },
								{ text: 'сургуулийн', filterable: [], x: 585, y: 923, fontSize: 7, expandedX: 60, expandedY: -57 },
								{ text: 'тоо', filterable: [], x: 600, y: 930, fontSize: 7, expandedX: 60, expandedY: -53 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Old school', filterable: [], x: 273, y: 798, fontSize: 6, expandedX: 60, expandedY: 20 },
								{ text: 'environment', filterable: [], x: 273, y: 804, fontSize: 6, expandedX: 60, expandedY: 24 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: [], x: 315, y: 800, fontSize: 6, expandedX: 20, expandedY: 10 },
								{ text: 'resource', filterable: [], x: 315, y: 806, fontSize: 6, expandedX: 20, expandedY: 14 },
								{ text: 'scarcity', filterable: [], x: 315, y: 812, fontSize: 6, expandedX: 20, expandedY: 14 },
							],
							[

								{ text: 'Learning', filterable: [], x: 310, y: 830, fontSize: 6, expandedX: 20, expandedY: 18 },
								{ text: 'support', filterable: [], x: 310, y: 836, fontSize: 6, expandedX: 20, expandedY: 18 },
								{ text: 'inadequacy', filterable: [], x: 310, y: 842, fontSize: 6, expandedX: 20, expandedY: 22 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Dropout rate', filterable: [], x: 362, y: 800, fontSize: 7 }
							],
							[
								{ text: 'Technology', filterable: [], x: 362, y: 815, fontSize: 7 },
								{ text: 'integration', filterable: [], x: 362, y: 822, fontSize: 7 },
								{ text: 'barriers', filterable: [], x: 362, y: 829, fontSize: 7 }
							],
							[
								{ text: 'Limited access', filterable: [], x: 345, y: 850, fontSize: 7 }
							],
							[
								{ text: 'Educational', filterable: [], x: 340, y: 865, fontSize: 7 },
								{ text: 'infrastructure', filterable: [], x: 340, y: 872, fontSize: 7 },
								{ text: 'gaps', filterable: [], x: 350, y: 879, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Quality', filterable: [], x: 425, y: 810, fontSize: 7, expandedX: -20, expandedY: 0 },
								{ text: 'gaps', filterable: [], x: 425, y: 817, fontSize: 7, expandedX: -20, expandedY: 4 }
							],
							[
								{ text: 'Assessment', filterable: [], x: 405, y: 850, fontSize: 7, expandedX: -30, expandedY: -20 },
								{ text: 'system flaws', filterable: [], x: 400, y: 857, fontSize: 7, expandedX: -30, expandedY: -16 },
							],
							[
								{ text: 'Curriculum', filterable: [], x: 385, y: 890, fontSize: 7, expandedX: -30, expandedY: -20 },
								{ text: 'outdatedness', filterable: [], x: 380, y: 897, fontSize: 7, expandedX: -30, expandedY: -16 },
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Digital', filterable: [], x: 470, y: 800, fontSize: 6, expandedX: -30, expandedY: 5 },
								{ text: 'divide in', filterable: [], x: 470, y: 806, fontSize: 6, expandedX: -30, expandedY: 9 },
								{ text: 'learning', filterable: [], x: 470, y: 812, fontSize: 6, expandedX: -30, expandedY: 13 },
								{ text: 'access', filterable: [], x: 470, y: 818, fontSize: 6, expandedX: -30, expandedY: 17 }
							],
							[
								{ text: 'Traditional', filterable: [], x: 462, y: 838, fontSize: 6, expandedX: -30, expandedY: 20 },
								{ text: 'teaching', filterable: [], x: 462, y: 844, fontSize: 6, expandedX: -30, expandedY: 24 },
								{ text: 'methods', filterable: [], x: 462, y: 850, fontSize: 6, expandedX: -30, expandedY: 28 }
							],
							[
								{ text: 'Quality of public', filterable: [], x: 450, y: 865, fontSize: 6, expandedX: -110, expandedY: -10 },
								{ text: 'kindergarten', filterable: [], x: 450, y: 871, fontSize: 6, expandedX: -110, expandedY: -6 }
							],
							[
								{ text: 'Public vs', filterable: [], x: 440, y: 890, fontSize: 6, expandedX: -90, expandedY: -80 },
								{ text: 'Private', filterable: [], x: 440, y: 896, fontSize: 6, expandedX: -90, expandedY: -76 },
								{ text: 'contrast', filterable: [], x: 440, y: 902, fontSize: 6, expandedX: -90, expandedY: -72 }
							],
							[
								{ text: 'Overcrowded', filterable: [], x: 420, y: 925, fontSize: 6, expandedX: -30, expandedY: -30 },
								{ text: 'public', filterable: [], x: 420, y: 931, fontSize: 6, expandedX: -30, expandedY: -26 },
								{ text: 'establishment', filterable: [], x: 420, y: 937, fontSize: 6, expandedX: -30, expandedY: -22 }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.GOV,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Civil', filterable: [], x: 788, y: 810, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 60 },
								{ text: 'Rights', filterable: [], x: 788, y: 814, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 65 },
								{ text: 'Protection', filterable: [], x: 788, y: 818, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 70 }
							],
							[
								{ text: 'Public Service', filterable: [], x: 788, y: 829, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 60 },
								{ text: 'Access', filterable: [], x: 788, y: 833, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 65 },
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Administrative', filterable: [], x: 753, y: 844, fontSize: 5, expandedX: -55, expandedY: 80 },
								{ text: 'Support', filterable: [], x: 768, y: 848, fontSize: 5, expandedX: -55, expandedY: 85 }
							],
							[
								{ text: 'Legal', filterable: [], x: 760, y: 855, fontSize: 5, expandedX: -35, expandedY: 15 },
								{ text: 'Protection', filterable: [], x: 760, y: 860, fontSize: 5, expandedX: -35, expandedY: 19 },
								{ text: 'Systems', filterable: [], x: 760, y: 865, fontSize: 5, expandedX: -35, expandedY: 19 }
							],
							[
								{ text: 'Public', filterable: [], x: 732, y: 858, fontSize: 5, expandedX: -35, expandedY: 15 },
								{ text: 'Service', filterable: [], x: 732, y: 863, fontSize: 5, expandedX: -35, expandedY: 19 },
								{ text: 'Access', filterable: [], x: 732, y: 868, fontSize: 5, expandedX: -35, expandedY: 19 }
							],
							[
								{ text: 'Service', filterable: [], x: 760, y: 875, fontSize: 5, expandedX: -35, expandedY: 15 },
								{ text: 'Integration', filterable: [], x: 760, y: 880, fontSize: 5, expandedX: -35, expandedY: 19 },
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Emergency', filterable: [], x: 705, y: 882, fontSize: 6, expandedX: -30, expandedY: 55 },
								{ text: 'Management', filterable: [], x: 705, y: 888, fontSize: 6, expandedX: -30, expandedY: 55 },
								{ text: 'Systems', filterable: [], x: 705, y: 894, fontSize: 6, expandedX: -30, expandedY: 55 }
							],
							[
								{ text: 'Local', filterable: [], x: 771, y: 895, fontSize: 6, expandedX: -35, expandedY: -10 },
								{ text: 'Governance', filterable: [], x: 752, y: 901, fontSize: 6, expandedX: -35, expandedY: -7 },
								{ text: 'Transparency', filterable: [], x: 748, y: 907, fontSize: 6, expandedX: -35, expandedY: -7 }
							],
							[
								{ text: 'Local', filterable: [], x: 715, y: 905, fontSize: 6, expandedX: -35, expandedY: -10 },
								{ text: 'Resource', filterable: [], x: 715, y: 911, fontSize: 6, expandedX: -35, expandedY: -7 },
								{ text: 'Management', filterable: [], x: 715, y: 917, fontSize: 6, expandedX: -35, expandedY: -7 }
							],
							[
								{ text: 'Public', filterable: [], x: 765, y: 920, fontSize: 6, expandedX: -35, expandedY: -10 },
								{ text: 'Service', filterable: [], x: 765, y: 926, fontSize: 6, expandedX: -35, expandedY: -7 },
								{ text: 'Delivery', filterable: [], x: 765, y: 932, fontSize: 6, expandedX: -35, expandedY: -7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Policy', filterable: [], x: 670, y: 920, fontSize: 6, expandedX: 15, expandedY: 0 },
								{ text: 'Implementation', filterable: [], x: 670, y: 926, fontSize: 6, expandedX: 15, expandedY: 4 },
								{ text: 'Systems', filterable: [], x: 670, y: 932, fontSize: 6, expandedX: 15, expandedY: 4 }
							],
							[
								{ text: 'Anti-Corruption', filterable: [], x: 680, y: 945, fontSize: 6, expandedX: 15, expandedY: -60 },
								{ text: 'Measures', filterable: [], x: 680, y: 951, fontSize: 6, expandedX: 15, expandedY: -56 }
							],
							[
								{ text: 'Administrative', filterable: [], x: 710, y: 955, fontSize: 6, expandedX: -50, expandedY: 10 },
								{ text: 'Efficiency', filterable: [], x: 710, y: 961, fontSize: 6, expandedX: -30, expandedY: 14 }
							],
							[
								{ text: 'Decentralization', filterable: [], x: 740, y: 970, fontSize: 6, expandedX: -50, expandedY: 10 },
								{ text: 'Effectiveness', filterable: [], x: 740, y: 976, fontSize: 6, expandedX: -30, expandedY: 14 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Quality of', filterable: [], x: 630, y: 963, fontSize: 7, expandedX: 80, expandedY: -80 },
								{ text: 'Legislative', filterable: [], x: 630, y: 970, fontSize: 7, expandedX: 80, expandedY: -76 },
								{ text: 'Oversight', filterable: [], x: 630, y: 977, fontSize: 7, expandedX: 80, expandedY: -76 }
							],
							[
								{ text: 'Judicial Independence', filterable: [], x: 650, y: 988, fontSize: 7, expandedX: 30, expandedY: -70 },
								{ text: 'and Rule of Law', filterable: [], x: 650, y: 995, fontSize: 7, expandedX: 30, expandedY: -66 }
							],
							[
								{ text: 'Fiscal Accountability', filterable: [], x: 715, y: 998, fontSize: 7, expandedX: -70, expandedY: -40 },
								{ text: 'and Transparency', filterable: [], x: 715, y: 1005, fontSize: 7, expandedX: -70, expandedY: -36 }
							],
							[
								{ text: 'Long-Term', filterable: [], x: 725, y: 1020, fontSize: 7, expandedX: -20, expandedY: -20 },
								{ text: 'Strategic Planning', filterable: [], x: 725, y: 1027, fontSize: 7, expandedX: -40, expandedY: -16 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Rights', filterable: [], x: 767, y: 1297, fontSize: 5, expandedX: -40, expandedY: -70 },
								{ text: 'Violation', filterable: [], x: 767, y: 1302, fontSize: 5, expandedX: -40, expandedY: -66 }
							],
							[
								{ text: 'Civic Rights', filterable: [], x: 760, y: 1284, fontSize: 5, expandedX: -40, expandedY: -70 },
								{ text: 'Suppression', filterable: [], x: 760, y: 1289, fontSize: 5, expandedX: -40, expandedY: -66 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Service', filterable: [], x: 735, y: 1264, fontSize: 6, expandedX: -40, expandedY: -80 },
								{ text: 'Fragmentation', filterable: [], x: 735, y: 1270, fontSize: 6, expandedX: -40, expandedY: -76 },
							],
							[
								{ text: 'Legal', filterable: [], x: 737, y: 1242, fontSize: 6, expandedX: -70, expandedY: -10 },
								{ text: 'Protection', filterable: [], x: 737, y: 1248, fontSize: 6, expandedX: -70, expandedY: -6 },
								{ text: 'Failures', filterable: [], x: 737, y: 1254, fontSize: 6, expandedX: -70, expandedY: -6 }
							],
							[
								{ text: 'Service', filterable: [], x: 766, y: 1230, fontSize: 6, expandedX: -70, expandedY: -10 },
								{ text: 'Access', filterable: [], x: 766, y: 1236, fontSize: 6, expandedX: -70, expandedY: -6 },
								{ text: 'Barriers', filterable: [], x: 766, y: 1242, fontSize: 6, expandedX: -70, expandedY: -6 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Resource', filterable: [], x: 695, y: 1220, fontSize: 7, expandedX: -10, expandedY: -20 },
								{ text: 'Mismanagement', filterable: [], x: 695, y: 1227, fontSize: 7, expandedX: -10, expandedY: -17 }
							],
							[
								{ text: 'Emergency', filterable: [], x: 715, y: 1196, fontSize: 7, expandedX: 20, expandedY: 45 },
								{ text: 'Response', filterable: [], x: 715, y: 1203, fontSize: 7, expandedX: 20, expandedY: 48 },
								{ text: 'problems', filterable: [], x: 715, y: 1210, fontSize: 7, expandedX: 20, expandedY: 51 }
							],
							[
								{ text: 'Service', filterable: [], x: 757, y: 1185, fontSize: 7, expandedX: -40, expandedY: -40 },
								{ text: 'Delivery', filterable: [], x: 757, y: 1192, fontSize: 7, expandedX: -30, expandedY: -37 },
								{ text: 'Failures', filterable: [], x: 757, y: 1199, fontSize: 7, expandedX: -30, expandedY: -34 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Bureaucratic', filterable: [], x: 657, y: 1180, fontSize: 7, expandedX: 15, expandedY: 20 },
								{ text: 'Inefficiency', filterable: [], x: 657, y: 1187, fontSize: 7, expandedX: 30, expandedY: 24 }
							],
							[
								{ text: 'Implementation', filterable: [], x: 690, y: 1160, fontSize: 7, expandedX: -30, expandedY: 0 },
								{ text: 'Gaps', filterable: [], x: 690, y: 1167, fontSize: 7, expandedX: -30, expandedY: 4 }
							],
							[
								{ text: 'Power', filterable: [], x: 735, y: 1142, fontSize: 7, expandedX: -25, expandedY: -20 },
								{ text: 'Concentration', filterable: [], x: 735, y: 1149, fontSize: 7, expandedX: -40, expandedY: -16 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Injustice and', filterable: [], x: 735, y: 1100, fontSize: 7, expandedX: -50, expandedY: 20 },
								{ text: 'Corruption', filterable: [], x: 735, y: 1107, fontSize: 7, expandedX: -50, expandedY: 20 }
							],
							[
								{ text: 'Fiscal', filterable: [], x: 685, y: 1115, fontSize: 7, expandedX: 0, expandedY: 50 },
								{ text: 'Opacity', filterable: [], x: 685, y: 1122, fontSize: 7, expandedX: 0, expandedY: 54 }
							],
							[
								{ text: 'Short term', filterable: [], x: 640, y: 1145, fontSize: 7, expandedX: 70, expandedY: 70 },
								{ text: 'solutions', filterable: [], x: 640, y: 1152, fontSize: 7, expandedX: 70, expandedY: 74 }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.SOC_1,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Voter', filterable: [], x: 792, y: 816, fontSize: 4, expandedX: 15, expandedY: 85 },
								{ text: 'Participation', filterable: [], x: 792, y: 820, fontSize: 4, expandedX: 15, expandedY: 91 }
							],
							[
								{ text: 'Social', filterable: [], x: 792, y: 827, fontSize: 4, expandedX: 5, expandedY: 65 },
								{ text: 'responsibility', filterable: [], x: 792, y: 831, fontSize: 4, expandedX: 5, expandedY: 69 },
								{ text: 'awareness', filterable: [], x: 792, y: 835, fontSize: 4, expandedX: 5, expandedY: 69 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Family Support', filterable: [], x: 792, y: 850, fontSize: 5, expandedX: 0, expandedY: 20 },
								{ text: 'Systems', filterable: [], x: 792, y: 855, fontSize: 5, expandedX: 0, expandedY: 24 }
							],
							[
								{ text: 'Social', filterable: [], x: 795, y: 870, fontSize: 5, expandedX: 5, expandedY: 42 },
								{ text: 'Welfare', filterable: [], x: 795, y: 875, fontSize: 5, expandedX: 5, expandedY: 46 },
								{ text: 'Access', filterable: [], x: 795, y: 880, fontSize: 5, expandedX: 5, expandedY: 46 }
							],
							[
								{ text: 'Social', filterable: [], x: 825, y: 860, fontSize: 5, expandedX: 5, expandedY: 42 },
								{ text: 'Protection', filterable: [], x: 825, y: 865, fontSize: 5, expandedX: 5, expandedY: 46 },
								{ text: 'Coverage', filterable: [], x: 825, y: 870, fontSize: 5, expandedX: 5, expandedY: 46 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Community', filterable: [], x: 793, y: 922, fontSize: 5, expandedX: 5, expandedY: -20 },
								{ text: 'Infrastructure', filterable: [], x: 793, y: 927, fontSize: 5, expandedX: 5, expandedY: -16 },
								{ text: 'Development', filterable: [], x: 793, y: 932, fontSize: 5, expandedX: 5, expandedY: -12 }
							],
							[
								{ text: 'Public Participation in', filterable: [], x: 792, y: 900, fontSize: 5, expandedX: -10, expandedY: 50 },
								{ text: 'Local Governance', filterable: [], x: 792, y: 905, fontSize: 5, expandedX: -10, expandedY: 54 }
							],
							[
								{ text: 'Collective', filterable: [], x: 850, y: 900, fontSize: 5, expandedX: -10, expandedY: 50 },
								{ text: 'action', filterable: [], x: 850, y: 905, fontSize: 5, expandedX: -10, expandedY: 54 },
								{ text: 'capacity', filterable: [], x: 850, y: 910, fontSize: 5, expandedX: -10, expandedY: 54 }
							],
							[
								{ text: 'Social', filterable: [], x: 827, y: 913, fontSize: 5, expandedX: -10, expandedY: 50 },
								{ text: 'network', filterable: [], x: 827, y: 918, fontSize: 5, expandedX: -10, expandedY: 54 },
								{ text: 'engagement', filterable: [], x: 827, y: 923, fontSize: 5, expandedX: -10, expandedY: 54 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 793, y: 960, fontSize: 6, expandedX: 10, expandedY: -70 },
								{ text: 'cohesion', filterable: [], x: 793, y: 966, fontSize: 6, expandedX: 10, expandedY: -66 },
								{ text: 'measures', filterable: [], x: 793, y: 972, fontSize: 6, expandedX: 10, expandedY: -62 }
							],
							[
								{ text: 'Minority', filterable: [], x: 826, y: 955, fontSize: 6, expandedX: -30, expandedY: 10 },
								{ text: 'rights', filterable: [], x: 826, y: 961, fontSize: 6, expandedX: -30, expandedY: 14 },
								{ text: 'protection', filterable: [], x: 826, y: 967, fontSize: 6, expandedX: -30, expandedY: 18 }
							],
							[
								{ text: 'Public', filterable: [], x: 854, y: 940, fontSize: 6, expandedX: -10, expandedY: 5 },
								{ text: 'Trust in', filterable: [], x: 854, y: 947, fontSize: 6, expandedX: -10, expandedY: 5 },
								{ text: 'Governance', filterable: [], x: 854, y: 954, fontSize: 6, expandedX: -10, expandedY: 9 }
							],
							[
								{ text: 'Civil', filterable: [], x: 883, y: 930, fontSize: 6, expandedX: -10, expandedY: 5 },
								{ text: 'society', filterable: [], x: 883, y: 936, fontSize: 6, expandedX: -10, expandedY: 5 },
								{ text: 'engagement', filterable: [], x: 883, y: 942, fontSize: 6, expandedX: -10, expandedY: 9 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National', filterable: [], x: 795, y: 1010, fontSize: 6, expandedX: 0, expandedY: -100 },
								{ text: 'social', filterable: [], x: 795, y: 1016, fontSize: 6, expandedX: 0, expandedY: -96 },
								{ text: 'dialogue', filterable: [], x: 795, y: 1022, fontSize: 6, expandedX: 0, expandedY: -96 }
							],
							[
								{ text: 'Inclusivity in', filterable: [], x: 830, y: 1005, fontSize: 6, expandedX: -40, expandedY: 0 },
								{ text: 'National', filterable: [], x: 830, y: 1011, fontSize: 6, expandedX: -40, expandedY: 4 },
								{ text: 'Decision-Making', filterable: [], x: 830, y: 1017, fontSize: 6, expandedX: -40, expandedY: 4 }
							],
							[
								{ text: 'Social', filterable: [], x: 870, y: 990, fontSize: 6, expandedX: -50, expandedY: -30 },
								{ text: 'Development', filterable: [], x: 870, y: 997, fontSize: 6, expandedX: -50, expandedY: -26 },
								{ text: 'Framework', filterable: [], x: 870, y: 1004, fontSize: 6, expandedX: -50, expandedY: -26 }
							],
							[
								{ text: 'National', filterable: [], x: 910, y: 970, fontSize: 6, expandedX: -50, expandedY: -30 },
								{ text: 'Integration', filterable: [], x: 910, y: 977, fontSize: 6, expandedX: -50, expandedY: -26 },
								{ text: 'Policy', filterable: [], x: 910, y: 984, fontSize: 6, expandedX: -50, expandedY: -26 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Voter', filterable: [], x: 792, y: 1278, fontSize: 5, expandedX: 10, expandedY: -70 },
								{ text: 'suppression', filterable: [], x: 792, y: 1283, fontSize: 5, expandedX: 10, expandedY: -66 }
							],
							[
								{ text: 'Social', filterable: [], x: 792, y: 1292, fontSize: 5, expandedX: 10, expandedY: -70 },
								{ text: 'Respon', filterable: [], x: 792, y: 1297, fontSize: 5, expandedX: 10, expandedY: -66 },
								{ text: 'sibility', filterable: [], x: 792, y: 1302, fontSize: 5, expandedX: 10, expandedY: -66 },
								{ text: 'Gaps', filterable: [], x: 792, y: 1307, fontSize: 5, expandedX: 10, expandedY: -66 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Welfare', filterable: [], x: 795, y: 1230, fontSize: 5, expandedX: 0, expandedY: -60 },
								{ text: 'Access', filterable: [], x: 795, y: 1235, fontSize: 5, expandedX: 0, expandedY: -56 },
								{ text: 'Barriers', filterable: [], x: 795, y: 1240, fontSize: 5, expandedX: 0, expandedY: -56 }
							],
							[
								{ text: 'Housing', filterable: [], x: 795, y: 1255, fontSize: 5, expandedX: 0, expandedY: -60 },
								{ text: 'Program', filterable: [], x: 795, y: 1260, fontSize: 5, expandedX: 0, expandedY: -56 },
								{ text: 'Failures', filterable: [], x: 795, y: 1265, fontSize: 5, expandedX: 0, expandedY: -56 }
							],
							[
								{ text: 'Family', filterable: [], x: 825, y: 1250, fontSize: 5, expandedX: 0, expandedY: -60 },
								{ text: 'Support', filterable: [], x: 825, y: 1255, fontSize: 5, expandedX: 0, expandedY: -56 },
								{ text: 'Breakdown', filterable: [], x: 825	, y: 1260, fontSize: 5, expandedX: 0, expandedY: -56 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Infrastructure', filterable: [], x: 795, y: 1190, fontSize: 7, expandedX: 20, expandedY: -20 },
								{ text: 'Development', filterable: [], x: 795, y: 1197, fontSize: 7, expandedX: 20, expandedY: -16 },
								{ text: 'Gaps', filterable: [], x: 795, y: 1204, fontSize: 7, expandedX: 20, expandedY: -16 }
							],
							[
								{ text: 'Participation', filterable: [], x: 825, y: 1210, fontSize: 7, expandedX: 0, expandedY: -40 },
								{ text: 'Barriers', filterable: [], x: 825, y: 1217, fontSize: 7, expandedX: 0, expandedY: -40 }
							],
							[
								{ text: 'Collective', filterable: [], x: 855, y: 1220, fontSize: 7, expandedX: -50, expandedY: 10 },
								{ text: 'Action', filterable: [], x: 855, y: 1227, fontSize: 7, expandedX: -50, expandedY: 14 },
								{ text: 'Failure', filterable: [], x: 855, y: 1234, fontSize: 7, expandedX: -50, expandedY: 18 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 795, y: 1134, fontSize: 6, expandedX: 0, expandedY: 0 },
								{ text: 'Fragmentation', filterable: [], x: 795, y: 1140, fontSize: 6, expandedX: 0, expandedY: 4 }
							],
							[
								{ text: 'Minority', filterable: [], x: 815, y: 1155, fontSize: 6, expandedX: -50, expandedY: 30 },
								{ text: 'Rights', filterable: [], x: 815, y: 1161, fontSize: 6, expandedX: -50, expandedY: 34 },
								{ text: 'Violations', filterable: [], x: 815, y: 1167, fontSize: 6, expandedX: -50, expandedY: 34 }
							],
							[
								{ text: 'Public', filterable: [], x: 855, y: 1150, fontSize: 6, expandedX: -50, expandedY: 30 },
								{ text: 'Trust', filterable: [], x: 855, y: 1157, fontSize: 6, expandedX: -50, expandedY: 34 },
								{ text: 'Deficit', filterable: [], x: 855, y: 1164, fontSize: 6, expandedX: -50, expandedY: 34 }
							],
							[
								{ text: 'Civil', filterable: [], x: 880, y: 1175, fontSize: 6, expandedX: -50, expandedY: 30 },
								{ text: 'Society', filterable: [], x: 880, y: 1181, fontSize: 6, expandedX: -50, expandedY: 34 },
								{ text: 'Disengagement', filterable: [], x: 880, y: 1187, fontSize: 6, expandedX: -50, expandedY: 34 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Social', filterable: [], x: 800, y: 1095, fontSize: 7, expandedX: 0, expandedY: 110 },
								{ text: 'Dialogue', filterable: [], x: 800, y: 1102, fontSize: 7, expandedX: 0, expandedY: 114 },
								{ text: 'Breakdown', filterable: [], x: 800, y: 1109, fontSize: 7, expandedX: 0, expandedY: 114 }
							],
							[
								{ text: 'Exclusionary,', filterable: [], x: 845, y: 1100, fontSize: 7, expandedX: -50, expandedY: -10 },
								{ text: 'Decision-', filterable: [], x: 845, y: 1107, fontSize: 7, expandedX: -50, expandedY: -6 },
								{ text: 'Making', filterable: [], x: 845, y: 1114, fontSize: 7, expandedX: -50, expandedY: -6 }
							],
							[
								{ text: 'Development', filterable: [], x: 880, y: 1120, fontSize: 7, expandedX: -80, expandedY: 20 },
								{ text: 'Framework', filterable: [], x: 880, y: 1127, fontSize: 7, expandedX: -80, expandedY: 24 },
								{ text: 'Failure', filterable: [], x: 880, y: 1134, fontSize: 7, expandedX: -80, expandedY: 24 }
							],
							[
								{ text: 'Integration', filterable: [], x: 910, y: 1140, fontSize: 7, expandedX: -80, expandedY: 20 },
								{ text: 'Policy', filterable: [], x: 910, y: 1147, fontSize: 7, expandedX: -80, expandedY: 24 },
								{ text: 'Gaps', filterable: [], x: 910, y: 11454, fontSize: 7, expandedX: -80, expandedY: 24 }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.EXT,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ text: 'Healthcare', filterable: [], x: 800, y: 795, fontSize: 4, expandedX: 55, expandedY: 10 },
								{ text: 'Accessibility', filterable: [], x: 800, y: 799, fontSize: 4, expandedX: 55, expandedY: 15 }
							],
							[
								{ text: 'Clean', filterable: ['Inflation'], x: 825, y: 795, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 30 },
								{ text: 'Water', filterable: ['Inflation'], x: 825, y: 799, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 35 },
								{ text: 'Access', filterable: ['Inflation'], x: 825, y: 803, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 35 }
							],
							[
								{ text: 'Air Quality', filterable: ['Inflation'], x: 815, y: 808, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 30 },
								{ text: 'Exposure', filterable: ['Inflation'], x: 815, y: 812, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 35 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Health emergency', filterable: [], x: 842, y: 796, fontSize: 5, expandedX: 20, expandedY: 5 },
								{ text: 'support', filterable: [], x: 842, y: 801, fontSize: 5, expandedX: 20, expandedY: 9 }
							],
							[
								{ text: 'Environmental', filterable: [], x: 842, y: 810, fontSize: 5, expandedX: 40, expandedY: 20 },
								{ text: 'Safety', filterable: [], x: 842, y: 815, fontSize: 5, expandedX: 40, expandedY: 24 }
							],
							[
								{ text: 'Local Air Quality', filterable: [], x: 835, y: 823, fontSize: 5, expandedX: 40, expandedY: 20 },
							],
							[
								{ text: 'Healthcare', filterable: [], x: 840, y: 832, fontSize: 5, expandedX: 40, expandedY: 20 },
								{ text: 'Service Access', filterable: [], x: 840, y: 837, fontSize: 5, expandedX: 40, expandedY: 24 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Local Healthcare', filterable: [], x: 895, y: 800, fontSize: 5, expandedX: -55, expandedY: 15 },
								{ text: 'Access', filterable: [], x: 895, y: 805, fontSize: 5, expandedX: -55, expandedY: 15 }
							],
							[
								{ text: 'Environmental', filterable: [], x: 892, y: 820, fontSize: 5, expandedX: 25, expandedY: -10 },
								{ text: 'Monitoring', filterable: [], x: 896, y: 825, fontSize: 5, expandedX: 25, expandedY: -6 },
							],
							[
								{ text: 'Waste Management', filterable: [], x: 882, y: 840, fontSize: 5, expandedX: 30, expandedY: 10 },
								{ text: 'Systems', filterable: [], x: 895, y: 845, fontSize: 5, expandedX: 20, expandedY: 14 }
							],
							[
								{ text: 'Public Health', filterable: [], x: 880, y: 858, fontSize: 5, expandedX: 30, expandedY: 10 },
								{ text: 'Facilities', filterable: [], x: 884, y: 864, fontSize: 5, expandedX: 20, expandedY: 14 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Climate Change', filterable: [], x: 942, y: 800, fontSize: 6, expandedX: -10, expandedY: 10 },
								{ text: 'Adaptation', filterable: [], x: 945, y: 806, fontSize: 6, expandedX: -10, expandedY: 14 }
							],
							[
								{ text: 'Pasturelands', filterable: ['Inflation'], x: 943, y: 820, fontSize: 6, expandedX: -80, expandedY: -20 },
								{ text: 'care', filterable: ['Inflation'], x: 952, y: 826, fontSize: 6, expandedX: -80, expandedY: -20 }
							],
							[
								{ text: 'Environmental', filterable: [], x: 935, y: 838, fontSize: 6, expandedX: -20, expandedY: 5 },
								{ text: 'Protection', filterable: [], x: 935, y: 844, fontSize: 6, expandedX: -20, expandedY: 5 },
								{ text: 'Measures', filterable: [], x: 935, y: 850, fontSize: 6, expandedX: -20, expandedY: 5 }
							],
							[
								{ text: 'Healthcare', filterable: [], x: 930, y: 864, fontSize: 6, expandedX: -80, expandedY: -35 },
								{ text: 'System Quality', filterable: [], x: 922, y: 870, fontSize: 6, expandedX: -80, expandedY: -31 }
							],
							[
								{ text: 'Public Health', filterable: [], x: 915, y: 882, fontSize: 6, expandedX: -10, expandedY: -10 },
								{ text: 'Coverage', filterable: [], x: 915, y: 888, fontSize: 6, expandedX: -10, expandedY: -6 }
							],
							[
								{ text: 'Road Condition', filterable: [], x: 910, y: 900, fontSize: 6, expandedX: -10, expandedY: -10 },
								{ text: 'Monitoring', filterable: [], x: 915, y: 906, fontSize: 6, expandedX: -10, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Environmental', filterable: [], x: 995, y: 800, fontSize: 5, expandedX: -115, expandedY: 2 },
								{ text: 'Policy', filterable: [], x: 995, y: 805, fontSize: 5, expandedX: -115, expandedY: 6 },
								{ text: 'Framework', filterable: [], x: 995, y: 810, fontSize: 5, expandedX: -115, expandedY: 10 }
							],
							[
								{ text: 'Sustainable', filterable: [], x: 995, y: 825, fontSize: 5, expandedX: -70, expandedY: 65 },
								{ text: 'livestock', filterable: [], x: 995, y: 830, fontSize: 5, expandedX: -70, expandedY: 69 },
								{ text: 'management', filterable: [], x: 995, y: 835, fontSize: 5, expandedX: -70, expandedY: 69 },
								{ text: 'policies', filterable: [], x: 995, y: 840, fontSize: 5, expandedX: -70, expandedY: 73 }
							],
							[
								{ text: 'Climate change', filterable: [], x: 985, y: 860, fontSize: 5, expandedX: -45, expandedY: 10 },
								{ text: 'adaptation policies', filterable: [], x: 980, y: 865, fontSize: 5, expandedX: -45, expandedY: 14 }
							],
							[
								{ text: 'National Health', filterable: [], x: 975, y: 880, fontSize: 5, expandedX: -20, expandedY: -65 },
								{ text: 'Infrastructure', filterable: [], x: 975, y: 885, fontSize: 5, expandedX: -20, expandedY: -61 }
							],
							[
								{ text: 'Хүн амын', filterable: [], x: 965, y: 900, fontSize: 5, expandedX: -20, expandedY: 25 },
								{ text: 'нягтрал', filterable: [], x: 965, y: 905, fontSize: 5, expandedX: -20, expandedY: 29 }
							],
							[
								{ text: 'Safe and Sustainable', filterable: [], x: 942, y: 925, fontSize: 5, expandedX: -75, expandedY: -85 },
								{ text: 'Road Infrastructure', filterable: [], x: 942, y: 930, fontSize: 5, expandedX: -75, expandedY: -80 },
								{ text: 'Development', filterable: [], x: 942, y: 935, fontSize: 5, expandedX: -75, expandedY: -75 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ text: 'Poor Air Quality', filterable: [], x: 1275, y: 796, fontSize: 5, expandedX: -90, expandedY: 20 },
								{ text: 'Exposure', filterable: [], x: 1275, y: 801, fontSize: 5, expandedX: -90, expandedY: 24 }
							],
							[
								{ text: 'Access', filterable: [], x: 1280, y: 808, fontSize: 5, expandedX: -90, expandedY: 20 },
								{ text: 'Difficulties', filterable: [], x: 1278, y: 813, fontSize: 5, expandedX: -90, expandedY: 24 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Poor', filterable: [], x: 1235, y: 815, fontSize: 7, expandedX: -56, expandedY: 5 },
								{ text: 'conditions', filterable: [], x: 1235, y: 822, fontSize: 7, expandedX: -56, expandedY: 9 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Access', filterable: [], x: 1180, y: 800, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'inequalities', filterable: [], x: 1180, y: 806, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'Monitoring', filterable: [], x: 1180, y: 820, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Failures', filterable: [], x: 1180, y: 827, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'System', filterable: [], x: 1190, y: 840, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Failures', filterable: [], x: 1190, y: 847, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'Facility', filterable: [], x: 1200, y: 860, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Shortages', filterable: [], x: 1200, y: 867, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Adaptation', filterable: [], x: 1130, y: 800, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Failures', filterable: [], x: 1135, y: 806, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'Pastureland', filterable: [], x: 1130, y: 820, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'degradation', filterable: [], x: 1130, y: 826, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 },
								{ text: 'factors', filterable: [], x: 1135, y: 832, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'Protection', filterable: [], x: 1135, y: 845, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Failures', filterable: [], x: 1140, y: 851, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'System', filterable: [], x: 1150, y: 865, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Inadequacies', filterable: [], x: 1145, y: 871, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							],
							[
								{ text: 'Regional', filterable: [], x: 1160, y: 895, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'Development', filterable: [], x: 1160, y: 901, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 },
								{ text: 'Gaps', filterable: [], x: 1168, y: 907, fontSize: 6, fontWeight: 600, expandedX: -30, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Environmental", "filterable": [], "x": 1077, "y": 810, "fontSize": 6, expandedX: 10, expandedY: -10 },
								{ "text": "degradation", "filterable": [], "x": 1080, "y": 816, "fontSize": 6, expandedX: 10, expandedY: -6 }
							],
							[
								{ "text": "Environmental", "filterable": [], "x": 1080, "y": 840, "fontSize": 6, expandedX: 10, expandedY: -10 },
								{ "text": "Hazards", "filterable": [], "x": 1090, "y": 846, "fontSize": 6, expandedX: 10, expandedY: -6 }
							],
							[
								{ "text": "Infrastructure", "filterable": [], "x": 1090, "y": 875, "fontSize": 6, expandedX: 10, expandedY: -10 },
								{ "text": "Deficits", "filterable": [], "x": 1095, "y": 881, "fontSize": 6, expandedX: 10, expandedY: -6 }
							],
							[
								{ "text": "Accident", "filterable": [], "x": 1115, "y": 910, "fontSize": 7, expandedX: 20, expandedY: -20 },
								{ "text": "Analysis", "filterable": [], "x": 1115, "y": 917, "fontSize": 7, expandedX: 20, expandedY: -16 }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.INT,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ "text": "Personal", "filterable": [], "x": 805, "y": 782, "fontSize": 5, expandedX: 25, expandedY: -15 },
								{ "text": "Health Habits", "filterable": [], "x": 805, "y": 787, "fontSize": 5, expandedX: 25, expandedY: -10 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Family food", "filterable": [], "x": 845, "y": 745, "fontSize": 5, expandedX: 0, expandedY: 0 },
								{ "text": "security", "filterable": [], "x": 845, "y": 750, "fontSize": 5, expandedX: 0, expandedY: 4 }
							],
							[
								{ "text": "Family health", "filterable": [], "x": 845, "y": 761, "fontSize": 5, expandedX: 40, expandedY: -40 },
								{ "text": "practices", "filterable": [], "x": 845, "y": 766, "fontSize": 5, expandedX: 40, expandedY: -36 }
							],
							[
								{ "text": "Household utilities", "filterable": ['Inflation'], "x": 845, "y": 780, "fontSize": 5, expandedX: 35, expandedY: -10 },
								{ "text": "access", "filterable": ['Inflation'], "x": 845, "y": 785, "fontSize": 5, expandedX: 35, expandedY: -6 }
							]
						]
					],
					[
						3,
						[
							[
								{ "text": "Urgent care", "filterable": [], "x": 880, "y": 725, "fontSize": 7, expandedX: 10, expandedY: -10 },
								{ "text": "centres", "filterable": [], "x": 880, "y": 732, "fontSize": 7, expandedX: 10, expandedY: -6 }
							],
							[
								{ "text": "Support for", "filterable": [], "x": 895, "y": 760, "fontSize": 7, expandedX: 0, expandedY: -10 },
								{ "text": "marginalised", "filterable": [], "x": 895, "y": 767, "fontSize": 7, expandedX: 0, expandedY: -6 },
								{ "text": "groups", "filterable": [], "x": 895, "y": 774, "fontSize": 7, expandedX: 0, expandedY: -2 }
							]
						]
					],
					[
						4,
						[
							[
								{ "text": "Healthcare", "filterable": [], "x": 915, "y": 680, "fontSize": 7, expandedX: -10, expandedY: 10 },
								{ "text": "systems", "filterable": [], "x": 915, "y": 687, "fontSize": 7, expandedX: -10, expandedY: 14 }
							],
							[
								{ "text": "Maternal and", "filterable": [], "x": 932, "y": 720, "fontSize": 7, expandedX: 5, expandedY: 15 },
								{ "text": "child health", "filterable": [], "x": 932, "y": 727, "fontSize": 7, expandedX: 5, expandedY: 19 },
								{ "text": "programs", "filterable": [], "x": 932, "y": 734, "fontSize": 7, expandedX: 5, expandedY: 23 }
							],
							[
								{ "text": "Regional", "filterable": [], "x": 945, "y": 755, "fontSize": 7, expandedX: -80, expandedY: -10 },
								{ "text": "resource", "filterable": [], "x": 945, "y": 762, "fontSize": 7, expandedX: -80, expandedY: -6 },
								{ "text": "distribution", "filterable": [], "x": 945, "y": 769, "fontSize": 7, expandedX: -80, expandedY: -2 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Healthcare", "filterable": [], "x": 950, "y": 645, "fontSize": 7, expandedX: -65, expandedY: 65 },
								{ "text": "infrastructure", "filterable": [], "x": 950, "y": 652, "fontSize": 7, expandedX: -65, expandedY: 69 },
								{ "text": "quality", "filterable": [], "x": 950, "y": 659, "fontSize": 7, expandedX: -65, expandedY: 73 }
							],
							[
								{ "text": "National", "filterable": [], "x": 970, "y": 680, "fontSize": 7, expandedX: -35, expandedY: -20 },
								{ "text": "health", "filterable": [], "x": 970, "y": 687, "fontSize": 7, expandedX: -35, expandedY: -16 },
								{ "text": "coverage", "filterable": [], "x": 970, "y": 694, "fontSize": 7, expandedX: -35, expandedY: -12 }
							],
							[
								{ "text": "Medical", "filterable": [], "x": 990, "y": 725, "fontSize": 7, expandedX: -20, expandedY: 10 },
								{ "text": "treatment", "filterable": [], "x": 990, "y": 732, "fontSize": 7, expandedX: -20, expandedY: 14 },
								{ "text": "access", "filterable": [], "x": 990, "y": 739, "fontSize": 7, expandedX: -20, expandedY: 18 }
							],
							[
								{ "text": "Эмнэлгийн", "filterable": [], "x": 995, "y": 760, "fontSize": 7, expandedX: -115, expandedY: 5 },
								{ "text": "ачаалал", "filterable": [], "x": 995, "y": 767, "fontSize": 7, expandedX: -115, expandedY: 9 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ "text": "Poor", "filterable": [], "x": 1295, "y": 782, "fontSize": 6, expandedX: -40, expandedY: -20 },
								{ "text": "health", "filterable": [], "x": 1295, "y": 788, "fontSize": 6, expandedX: -40, expandedY: -16 },
								{ "text": "habits", "filterable": [], "x": 1295, "y": 795, "fontSize": 6, expandedX: -40, expandedY: -12 }
							],
							[
								{ "text": "Personal", "filterable": [], "x": 1278, "y": 772, "fontSize": 5, expandedX: -80, expandedY: -40 },
								{ "text": "health", "filterable": [], "x": 1278, "y": 777, "fontSize": 5, expandedX: -80, expandedY: -36 },
								{ "text": "issues", "filterable": [], "x": 1278, "y": 782, "fontSize": 5, expandedX: -80, expandedY: -32 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Family health", "filterable": [], "x": 1230, "y": 780, "fontSize": 6, expandedX: -70, expandedY: -20 },
								{ "text": "barriers", "filterable": [], "x": 1230, "y": 786, "fontSize": 6, expandedX: -70, expandedY: -16 }
							],
							[
								{ "text": "Quality of", "filterable": [], "x": 1238, "y": 750, "fontSize": 7, expandedX: -60, expandedY: -40 },
								{ "text": "available food", "filterable": [], "x": 1238, "y": 756, "fontSize": 7, expandedX: -60, expandedY: -36 },
								{ "text": "options", "filterable": [], "x": 1238, "y": 762, "fontSize": 7, expandedX: -60, expandedY: -32 }
							]
						]
					],
					[
						3,
						[

						]
					],
					[
						4,
						[
							[
								{ "text": "Regional", "filterable": [], "x": 1152, "y": 730, "fontSize": 7, "textAnchor": "middle", expandedX: 20, expandedY: -10 },
								{ "text": "development", "filterable": [], "x": 1152, "y": 737, "fontSize": 7, "textAnchor": "middle", expandedX: 20, expandedY: -6 },
								{ "text": "gaps", "filterable": [], "x": 1152, "y": 744, "fontSize": 7, "textAnchor": "middle", expandedX: 20, expandedY: -2 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Urban-rural", "filterable": [], "x": 1120, "y": 660, "fontSize": 7, expandedX: -10, expandedY: 20 },
								{ "text": "divide", "filterable": [], "x": 1120, "y": 667, "fontSize": 7, expandedX: -10, expandedY: 24 }
							],
							[
								{ "text": "Treatment", "filterable": [], "x": 1100, "y": 690, "fontSize": 7, expandedX: 70, expandedY: 40 },
								{ "text": "waiting times", "filterable": [], "x": 1100, "y": 697, "fontSize": 7, expandedX: 70, expandedY: 44 }
							],
							[
								{ "text": "Financial", "filterable": [], "x": 1085, "y": 740, "fontSize": 7, expandedX: 10, expandedY: -10 },
								{ "text": "barriers &", "filterable": [], "x": 1085, "y": 747, "fontSize": 7, expandedX: 10, expandedY: -6 },
								{ "text": "resource", "filterable": [], "x": 1085, "y": 754, "fontSize": 7, expandedX: 10, expandedY: -2 },
								{ "text": "shortages", "filterable": [], "x": 1085, "y": 761, "fontSize": 7, expandedX: 10, expandedY: 2 }
							]
						]
					],
				])
			]
		])
	],
	[
		Section.PRIVATE,
		new Map([
			[
				'center',
				new Map([
					[
						1,
						[
							[
								{ "text": "Seasonal", "filterable": ['Inflation'], "x": 792, "y": 748, "fontSize": 4, expandedX: 25, expandedY: -90 },
								{ "text": "variation", "filterable": ['Inflation'], "x": 792, "y": 752, "fontSize": 4, expandedX: 25, expandedY: -86 },
								{ "text": "in earnings", "filterable": ['Inflation'], "x": 792, "y": 756, "fontSize": 4, expandedX: 25, expandedY: -82 }
							],
							[
								{ "text": "Income", "filterable": ['Inflation'], "x": 792, "y": 768, "fontSize": 4, expandedX: 15, expandedY: -60 },
								{ "text": "level", "filterable": ['Inflation'], "x": 792, "y": 772, "fontSize": 4, expandedX: 15, expandedY: -56 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Emergency", "filterable": ['Inflation'], "x": 793, "y": 700, "fontSize": 6, expandedX: 5, expandedY: -75 },
								{ "text": "fund", "filterable": ['Inflation'], "x": 793, "y": 706, "fontSize": 6, expandedX: 5, expandedY: -71 },
								{ "text": "status", "filterable": ['Inflation'], "x": 793, "y": 712, "fontSize": 6, expandedX: 5, expandedY: -67 }
							],
							[
								{ "text": "Combined", "filterable": ['Inflation'], "x": 793, "y": 725, "fontSize": 6, expandedX: 5, expandedY: -45 },
								{ "text": "income", "filterable": ['Inflation'], "x": 793, "y": 731, "fontSize": 6, expandedX: 5, expandedY: -41 }
							],
							[
								{ "text": "Insurance", "filterable": ['Inflation'], "x": 818, "y": 710, "fontSize": 6, expandedX: 35, expandedY: -55 },
								{ "text": "coverage", "filterable": ['Inflation'], "x": 818, "y": 716, "fontSize": 6, expandedX: 35, expandedY: -51 }
							],
							[
								{ "text": "Household", "filterable": ['Inflation'], "x": 825, "y": 723, "fontSize": 6, expandedX: -15, expandedY: -15 },
								{ "text": "wealth", "filterable": ['Inflation'], "x": 825, "y": 729, "fontSize": 6, expandedX: -15, expandedY: -11 }
							],
							[
								{ "text": "Property", "filterable": ['Inflation'], "x": 817, "y": 737, "fontSize": 6, expandedX: -20, expandedY: 0 },
								{ "text": "assets", "filterable": ['Inflation'], "x": 817, "y": 743, "fontSize": 6, expandedX: -20, expandedY: 4 }
							]
						]
					],
					[
						3,
						[
							[
								{ "text": "Employment", "filterable": ['Inflation'], "x": 793, "y": 655, "fontSize": 7, expandedX: 5, expandedY: -40 },
								{ "text": "rate", "filterable": ['Inflation'], "x": 793, "y": 662, "fontSize": 7, expandedX: 5, expandedY: -36 }
							],
							[
								{ "text": "Local market", "filterable": ['Inflation'], "x": 793, "y": 677, "fontSize": 7, expandedX: 5, expandedY: 0 },
								{ "text": "vitality", "filterable": ['Inflation'], "x": 793, "y": 684, "fontSize": 7, expandedX: 5, expandedY: 4 }
							],
							[
								{ "text": "Urban-rural", "filterable": ['Inflation'], "x": 836, "y": 672, "fontSize": 7, expandedX: 15, expandedY: -35 },
								{ "text": "economic", "filterable": ['Inflation'], "x": 836, "y": 678, "fontSize": 7, expandedX: 15, expandedY: -31 },
								{ "text": "linkages", "filterable": ['Inflation'], "x": 836, "y": 684, "fontSize": 7, expandedX: 15, expandedY: -27 }
							],
							[
								{ "text": "Access to", "filterable": ['Inflation'], "x": 850, "y": 697, "fontSize": 7, expandedX: -50, expandedY: 30 },
								{ "text": "loan", "filterable": ['Inflation'], "x": 850, "y": 704, "fontSize": 7, expandedX: -50, expandedY: 34 }
							]
						]
					],
					[
						4,
						[
							[
								{ "text": "Industry", "filterable": ['Inflation'], "x": 800, "y": 615, "fontSize": 7, expandedX: 10, expandedY: -10 },
								{ "text": "clusters", "filterable": ['Inflation'], "x": 800, "y": 622, "fontSize": 7, expandedX: 10, expandedY: -6 }
							],
							[
								{ "text": "Sectoral", "filterable": ['Inflation'], "x": 838, "y": 630, "fontSize": 7, expandedX: -25, expandedY: 40 },
								{ "text": "contribution", "filterable": ['Inflation'], "x": 838, "y": 637, "fontSize": 7, expandedX: -25, expandedY: 44 }
							],
							[
								{ "text": "Labor", "filterable": ['Inflation'], "x": 885, "y": 650, "fontSize": 7, expandedX: -10, expandedY: -20 },
								{ "text": "markets", "filterable": ['Inflation'], "x": 885, "y": 657, "fontSize": 7, expandedX: -10, expandedY: -16 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Foreign", "filterable": ['Inflation'], "x": 795, "y": 555, "fontSize": 6, expandedX: 0, expandedY: 10 },
								{ "text": "direct", "filterable": ['Inflation'], "x": 795, "y": 561, "fontSize": 6, expandedX: 0, expandedY: 15 },
								{ "text": "investment", "filterable": ['Inflation'], "x": 795, "y": 567, "fontSize": 6, expandedX: 0, expandedY: 20 }
							],
							[
								{ "text": "Capital market", "filterable": ['Inflation'], "x": 832, "y": 565, "fontSize": 6, expandedX: 40, expandedY: 60 },
								{ "text": "development", "filterable": ['Inflation'], "x": 832, "y": 571, "fontSize": 6, expandedX: 40, expandedY: 65 }
							],
							[
								{ "text": "Market", "filterable": ['Inflation'], "x": 850, "y": 584, "fontSize": 6, expandedX: -55, expandedY: 40 },
								{ "text": "competition", "filterable": ['Inflation'], "x": 850, "y": 590, "fontSize": 6, expandedX: -55, expandedY: 45 }
							],
							[
								{ "text": "Mortgage", "filterable": ['Inflation'], "x": 885, "y": 580, "fontSize": 6, expandedX: -20, expandedY: 5 },
								{ "text": "rate", "filterable": ['Inflation'], "x": 885, "y": 586, "fontSize": 6, expandedX: -20, expandedY: 10 }
							],
							[
								{ "text": "Export", "filterable": ['Inflation'], "x": 900, "y": 597, "fontSize": 6, expandedX: -105, expandedY: 75 },
								{ "text": "Import", "filterable": ['Inflation'], "x": 900, "y": 603, "fontSize": 6, expandedX: -105, expandedY: 80 },
								{ "text": "Balance", "filterable": ['Inflation'], "x": 900, "y": 609, "fontSize": 6, expandedX: -105, expandedY: 85 }
							],
							[
								{ "text": "Export", "filterable": ['Inflation'], "x": 925, "y": 620, "fontSize": 6, expandedX: -75, expandedY: 40 },
								{ "text": "diversity", "filterable": ['Inflation'], "x": 925, "y": 626, "fontSize": 6, expandedX: -75, expandedY: 45 },
								{ "text": "index", "filterable": ['Inflation'], "x": 925, "y": 632, "fontSize": 6, expandedX: -75, expandedY: 50 }
							]
						]
					],
				])
			],
			[
				'self',
				new Map([
					[
						1,
						[
							[
								{ "text": "Debt-to-", "filterable": ['Inflation'], "x": 792, "y": 275, "fontSize": 4, expandedX: 5, expandedY: 50 },
								{ "text": "Income", "filterable": ['Inflation'], "x": 792, "y": 280, "fontSize": 4, expandedX: 5, expandedY: 54 },
								{ "text": "Ratio", "filterable": ['Inflation'], "x": 792, "y": 285, "fontSize": 4, expandedX: 5, expandedY: 58 }
							],
							[
								{ "text": "Income", "filterable": ['Inflation'], "x": 792, "y": 295, "fontSize": 4, expandedX: 25, expandedY: 70 },
								{ "text": "mobility", "filterable": ['Inflation'], "x": 792, "y": 300, "fontSize": 4, expandedX: 25, expandedY: 74 },
								{ "text": "barriers", "filterable": ['Inflation'], "x": 792, "y": 305, "fontSize": 4, expandedX: 25, expandedY: 78 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Dependency", "filterable": ['Inflation'], "x": 794, "y": 335, "fontSize": 5, expandedX: 5, expandedY: 70 },
								{ "text": "ratio", "filterable": ['Inflation'], "x": 794, "y": 340, "fontSize": 5, expandedX: 5, expandedY: 74 },
								{ "text": "increase", "filterable": ['Inflation'], "x": 794, "y": 345, "fontSize": 5, expandedX: 5, expandedY: 78 }
							],
							[
								{ "text": "Household", "filterable": [], "x": 832, "y": 325, "fontSize": 5, expandedX: -10, expandedY: 40 },
								{ "text": "debt", "filterable": ['Inflation'], "x": 832, "y": 330, "fontSize": 5, expandedX: -10, expandedY: 44 },
								{ "text": "burden", "filterable": ['Inflation'], "x": 832, "y": 335, "fontSize": 5, expandedX: -10, expandedY: 48 }
							],
							[
								{ "text": "Declining", "filterable": ['Inflation'], "x": 810, "y": 315, "fontSize": 5, expandedX: -10, expandedY: 10 },
								{ "text": "savings", "filterable": ['Inflation'], "x": 810, "y": 320, "fontSize": 5, expandedX: -10, expandedY: 14 }
							]
						]
					],
					[
						3,
						[]
					],
					[
						4,
						[
							[
								{ "text": "Purchasing", "filterable": ['Inflation'], "x": 800, "y": 432, "fontSize": 7, expandedX: 0, expandedY: -60 },
								{ "text": "power erosion", "filterable": ['Inflation'], "x": 800, "y": 439, "fontSize": 7, expandedX: 0, expandedY: -56 }
							],
							[
								{ "text": "Wealth", "filterable": ['Inflation'], "x": 870, "y": 400, "fontSize": 7, expandedX: -40, expandedY: 30 },
								{ "text": "concentration", "filterable": ['Inflation'], "x": 870, "y": 407, "fontSize": 7, expandedX: -40, expandedY: 34 },
								{ "text": "ratio", "filterable": ['Inflation'], "x": 870, "y": 414, "fontSize": 7, expandedX: -40, expandedY: 38 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Higher", "filterable": ['Inflation'], "x": 800, "y": 480, "fontSize": 7, expandedX: -5, expandedY: -120 },
								{ "text": "taxes", "filterable": ['Inflation'], "x": 800, "y": 487, "fontSize": 7, expandedX: -5, expandedY: -116 }
							],
							[
								{ "text": "Underemployment", "filterable": ['Inflation'], "x": 860, "y": 460, "fontSize": 7, expandedX: -60, expandedY: 10 },
								{ "text": "rates", "filterable": ['Inflation'], "x": 860, "y": 467, "fontSize": 7, expandedX: -60, expandedY: 14 }
							],
							[
								{ "text": "External debt", "filterable": ['Inflation'], "x": 910, "y": 440, "fontSize": 7, expandedX: -50, expandedY: -20 },
								{ "text": "exposure", "filterable": ['Inflation'], "x": 910, "y": 447, "fontSize": 7, expandedX: -50, expandedY: -16 }
							],
							[
								{ "text": "Trade", "filterable": ['Inflation'], "x": 835, "y": 480, "fontSize": 7, expandedX: 10, expandedY: -110 },
								{ "text": "Balance", "filterable": ['Inflation'], "x": 835, "y": 487, "fontSize": 7, expandedX: 10, expandedY: -106 }
							]
						]
					],
				])
			]
		])
	]
])