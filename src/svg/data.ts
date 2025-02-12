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
								{ text: 'Financial', filterable: ['Inflation'], x: 766, y: 752, fontSize: 5, expandedX: -50, expandedY: -80 },
								{ text: 'literacy', filterable: ['Inflation'], x: 766, y: 757, fontSize: 5, expandedX: -50, expandedY: -76 }
							],
							[
								{ text: 'Credit', filterable: ['Inflation'], x: 787, y: 765, fontSize: 5, textAnchor: 'end', expandedX: -20, expandedY: -60 },
								{ text: 'score', filterable: ['Inflation'], x: 787, y: 770, fontSize: 5, textAnchor: 'end', expandedX: -20, expandedY: -56 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Savings', filterable: ['Inflation'], x: 762, y: 720, fontSize: 8, textAnchor: 'middle', expandedX: -25, expandedY: -55 },
								{ text: 'rate', filterable: ['Inflation'], x: 762, y: 728, fontSize: 8, textAnchor: 'middle', expandedX: -25, expandedY: -51 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Public', filterable: ['Inflation'], x: 700, y: 682, fontSize: 7, expandedX: 20, expandedY: 10 },
								{ text: 'infrastructure', filterable: ['Inflation'], x: 700, y: 689, fontSize: 7, expandedX: 20, expandedY: 14 },
								{ text: 'investment', filterable: ['Inflation'], x: 700, y: 696, fontSize: 7, expandedX: 20, expandedY: 18 }
							],
							[
								{ text: 'Pension', filterable: ['Inflation'], x: 725, y: 676, fontSize: 7, expandedX: -30, expandedY: -10 }
							],
							[
								{ text: 'Regional', filterable: ['Inflation'], x: 755, y: 654, fontSize: 7, expandedX: -25, expandedY: -40 },
								{ text: 'economic', filterable: ['Inflation'], x: 755, y: 661, fontSize: 7, expandedX: -25, expandedY: -36 },
								{ text: 'integration', filterable: ['Inflation'], x: 755, y: 668, fontSize: 7, expandedX: -25, expandedY: -32 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Investment', filterable: ['Inflation'], x: 665, y: 650, fontSize: 6, expandedX: -15, expandedY: -30 },
								{ text: 'flows', filterable: ['Inflation'], x: 665, y: 656, fontSize: 6, expandedX: -15, expandedY: -26 }
							],
							[
								{ text: 'Public sector', filterable: ['Inflation'], x: 680, y: 630, fontSize: 6, expandedX: -15, expandedY: 20 },
								{ text: 'investment', filterable: ['Inflation'], x: 680, y: 636, fontSize: 6, expandedX: -15, expandedY: 24 }
							],
							[
								{ text: 'Employment', filterable: ['Inflation'], x: 718, y: 636, fontSize: 6, expandedX: 5, expandedY: -10 },
								{ text: 'opportunity', filterable: ['Inflation'], x: 718, y: 642, fontSize: 6, expandedX: 5, expandedY: -6 }
							],
							[
								{ text: 'Economic', filterable: ['Inflation'], x: 715, y: 610, fontSize: 6, expandedX: 0, expandedY: -25 },
								{ text: 'infrastructure', filterable: ['Inflation'], x: 715, y: 616, fontSize: 6, expandedX: 0, expandedY: -21 },
								{ text: 'quality', filterable: ['Inflation'], x: 715, y: 622, fontSize: 6, expandedX: 0, expandedY: -17 }
							],
							[
								{ text: 'Economic', filterable: ['Inflation'], x: 757, y: 600, fontSize: 6, expandedX: -30, expandedY: 65 },
								{ text: 'opportunity', filterable: ['Inflation'], x: 757, y: 606, fontSize: 6, expandedX: -30, expandedY: 69 },
								{ text: 'distribution', filterable: ['Inflation'], x: 757, y: 612, fontSize: 6, expandedX: -30, expandedY: 73 }
							],
							[
								{ text: 'Real GDP', filterable: ['Inflation'], x: 757, y: 625, fontSize: 6, expandedX: -25, expandedY: 85 },
								{ text: 'growth rate', filterable: ['Inflation'], x: 757, y: 631, fontSize: 6, expandedX: -25, expandedY: 89 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Research &', filterable: ['Inflation'], x: 630, y: 610, fontSize: 6, expandedX: 5, expandedY: 0 },
								{ text: 'development', filterable: ['Inflation'], x: 630, y: 616, fontSize: 6, expandedX: 5, expandedY: 5 },
								{ text: 'expenditure', filterable: ['Inflation'], x: 630, y: 622, fontSize: 6, expandedX: 5, expandedY: 10 }
							],
							[
								{ text: 'Tax', filterable: ['Inflation'], x: 660, y: 595, fontSize: 6, expandedX: 25, expandedY: -10 },
								{ text: 'revenue', filterable: ['Inflation'], x: 660, y: 601, fontSize: 6, expandedX: 25, expandedY: -5 }
							],
							[
								{ text: 'National', filterable: ['Inflation'], x: 680, y: 585, fontSize: 6, expandedX: 50, expandedY: -10 },
								{ text: 'debt', filterable: ['Inflation'], x: 680, y: 591, fontSize: 6, expandedX: 50, expandedY: -5 }
							],
							[
								{ text: 'Currency', filterable: ['Inflation'], x: 700, y: 570, fontSize: 6, expandedX: -20, expandedY: 80 },
								{ text: 'stability', filterable: ['Inflation'], x: 700, y: 576, fontSize: 6, expandedX: -20, expandedY: 85 }
							],
							[
								{ text: 'Central', filterable: ['Inflation'], x: 734, y: 560, fontSize: 6, expandedX: 10, expandedY: 70 },
								{ text: 'bank', filterable: ['Inflation'], x: 734, y: 566, fontSize: 6, expandedX: 10, expandedY: 75 },
								{ text: 'interest', filterable: ['Inflation'], x: 734, y: 572, fontSize: 6, expandedX: 10, expandedY: 80 },
								{ text: 'rate', filterable: ['Inflation'], x: 734, y: 578, fontSize: 6, expandedX: 10, expandedY: 85 }
							],
							[
								{ text: 'Inflation', filterable: ['Inflation'], x: 763, y: 565, fontSize: 6, expandedX: -25, expandedY: 130 },
								{ text: 'rate', filterable: ['Inflation'], x: 763, y: 571, fontSize: 6, expandedX: -25, expandedY: 135 }
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
								{ text: 'Job quality', filterable: ['Inflation'], x: 788, y: 290, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: 70 },
								{ text: 'degradation', filterable: ['Inflation'], x: 788, y: 295, fontSize: 4, textAnchor: 'end', expandedX: -20, expandedY: 74 }
							]
						]
					],
					[
						2,
						[]
					],
					[
						3,
						[]
					],
					[
						4,
						[
							[
								{ text: 'Debt burden', filterable: ['Inflation'], x: 670, y: 400, fontSize: 7, expandedX: 30, expandedY: 30 },
								{ text: 'increase', filterable: ['Inflation'], x: 670, y: 409, fontSize: 7, expandedX: 30, expandedY: 34 }
							],
							[
								{ text: 'Industrial', filterable: ['Inflation'], x: 745, y: 420, fontSize: 7, expandedX: -20, expandedY: -70 },
								{ text: 'production', filterable: ['Inflation'], x: 745, y: 429, fontSize: 7, expandedX: -20, expandedY: -66 },
								{ text: 'decline', filterable: ['Inflation'], x: 745, y: 438, fontSize: 7, expandedX: -20, expandedY: -62 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Unequal', filterable: ['Inflation'], x: 630, y: 423, fontSize: 7, expandedX: 10, expandedY: 5 },
								{ text: 'infrastructure', filterable: ['Inflation'], x: 627, y: 430, fontSize: 7, expandedX: 10, expandedY: 9 },
								{ text: 'development', filterable: ['Inflation'], x: 627, y: 437, fontSize: 7, expandedX: 10, expandedY: 13 }
							],
							[
								{ text: 'Capital', filterable: ['Inflation'], x: 670, y: 447, fontSize: 7, expandedX: 40, expandedY: -25 },
								{ text: 'depreciation', filterable: ['Inflation'], x: 670, y: 454, fontSize: 7, expandedX: 40, expandedY: -22 },
								{ text: 'rate', filterable: ['Inflation'], x: 670, y: 461, fontSize: 7, expandedX: 40, expandedY: -18 }
							],
							[
								{ text: 'Slow Real', filterable: ['Inflation'], x: 700, y: 465, fontSize: 7, expandedX: 40, expandedY: 0 },
								{ text: 'State', filterable: ['Inflation'], x: 700, y: 472, fontSize: 7, expandedX: 40, expandedY: 4 },
								{ text: 'Market', filterable: ['Inflation'], x: 700, y: 479, fontSize: 7, expandedX: 40, expandedY: 8 }
							],
							[
								{ text: 'Boost', filterable: ['Inflation'], x: 730, y: 480, fontSize: 7, expandedX: 10, expandedY: -90 },
								{ text: 'Inflation', filterable: ['Inflation'], x: 730, y: 489, fontSize: 7, expandedX: 10, expandedY: -89 }
							],
							[
								{ text: 'Real wage', filterable: ['Inflation'], x: 755, y: 470, fontSize: 7, expandedX: -45, expandedY: -120 },
								{ text: 'decline', filterable: ['Inflation'], x: 755, y: 477, fontSize: 7, expandedX: -45, expandedY: -116 }
							]
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
								{ text: 'Language', filterable: [], x: 655, y: 775, fontSize: 6, expandedX: 25, expandedY: -5 },
								{ text: 'programs', filterable: [], x: 655, y: 781, fontSize: 6, expandedX: 25, expandedY: -1 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Public discourse', filterable: [], x: 630, y: 680, fontSize: 6, expandedX: -30, expandedY: 10 },
								{ text: 'quality', filterable: [], x: 630, y: 686, fontSize: 6, expandedX: -30, expandedY: 14 }
							],
							[
								{ text: 'Intergenerational', filterable: [], x: 617, y: 705, fontSize: 6, expandedX: -35, expandedY: 20 },
								{ text: 'mobility', filterable: [], x: 617, y: 711, fontSize: 6, expandedX: -35, expandedY: 24 }
							],
							[
								{ text: 'Civil society', filterable: [], x: 610, y: 725, fontSize: 6, expandedX: 50, expandedY: 10 },
								{ text: 'strength', filterable: [], x: 610, y: 731, fontSize: 6, expandedX: 50, expandedY: 14 }
							],
							[
								{ text: 'Cultural heritage', filterable: [], x: 600, y: 750, fontSize: 6, expandedX: -20, expandedY: 15 },
								{ text: 'preservation', filterable: [], x: 600, y: 756, fontSize: 6, expandedX: -20, expandedY: 19 }
							],
							[
								{ text: 'Inclusive', filterable: [], x: 605, y: 775, fontSize: 6, expandedX: 70, expandedY: -5 },
								{ text: 'culture', filterable: [], x: 605, y: 781, fontSize: 6, expandedX: 70, expandedY: -1 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Religion', filterable: [], x: 553, y: 775, fontSize: 7, expandedX: 85, expandedY: -15 },
								{ text: 'education', filterable: [], x: 553, y: 782, fontSize: 7, expandedX: 85, expandedY: -11 }
							],
							[
								{ text: 'Civic', filterable: [], x: 560, y: 733, fontSize: 7, expandedX: 10, expandedY: 10 },
								{ text: 'education', filterable: [], x: 555, y: 740, fontSize: 7, expandedX: 10, expandedY: 14 }
							],
							[
								{ text: 'Global', filterable: [], x: 575, y: 690, fontSize: 7, expandedX: 85, expandedY: 20 },
								{ text: 'awareness', filterable: [], x: 570, y: 697, fontSize: 7, expandedX: 85, expandedY: 24 }
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
								{ text: 'Cost', filterable: [], x: 350, y: 710, fontSize: 7 },
								{ text: 'barriers', filterable: [], x: 350, y: 717, fontSize: 7 }
							],
							[
								{ text: 'Limited', filterable: [], x: 360, y: 740, fontSize: 7 },
								{ text: 'access', filterable: [], x: 360, y: 747, fontSize: 7 }
							],
							[
								{ text: 'Lack of', filterable: [], x: 365, y: 770, fontSize: 7 },
								{ text: 'participation', filterable: [], x: 365, y: 777, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Generation', filterable: [], x: 395, y: 700, fontSize: 7, expandedX: -10, expandedY: 0 },
								{ text: 'differences', filterable: [], x: 395, y: 707, fontSize: 7, expandedX: -10, expandedY: 4 }
							],
							[
								{ text: 'School', filterable: [], x: 420, y: 760, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'culture', filterable: [], x: 420, y: 767, fontSize: 7, expandedX: -20, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Lack of', filterable: [], x: 420, y: 640, fontSize: 7, expandedX: -20, expandedY: 20 },
								{ text: 'long-term', filterable: [], x: 420, y: 647, fontSize: 7, expandedX: -20, expandedY: 24 },
								{ text: 'planning', filterable: [], x: 420, y: 654, fontSize: 7, expandedX: -20, expandedY: 28 }
							],
							[
								{ text: 'Short', filterable: [], x: 450, y: 685, fontSize: 7, expandedX: -110, expandedY: 50 },
								{ text: 'term', filterable: [], x: 450, y: 692, fontSize: 7, expandedX: -110, expandedY: 54 },
								{ text: 'solutions', filterable: [], x: 450, y: 699, fontSize: 7, expandedX: -110, expandedY: 58 }
							],
							[
								{ text: 'Gaps in', filterable: [], x: 458, y: 725, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'non-direct', filterable: [], x: 458, y: 732, fontSize: 7, expandedX: -20, expandedY: -7 },
								{ text: 'educational', filterable: [], x: 458, y: 739, fontSize: 7, expandedX: -20, expandedY: -4 },
								{ text: 'skills', filterable: [], x: 465, y: 746, fontSize: 7, expandedX: -20, expandedY: -1 }
							],
							[
								{ text: 'Discrimination', filterable: [], x: 463, y: 780, fontSize: 7, expandedX: -40, expandedY: 0 }
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
								{ text: 'Access to', filterable: [], x: 685, y: 865, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 0 },
								{ text: 'programs', filterable: [], x: 685, y: 871, fontSize: 6, textAnchor: 'middle', expandedX: -40, expandedY: 4 }
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
								{ text: 'School', filterable: [], x: 605, y: 840, fontSize: 7, expandedX: 60, expandedY: -20 },
								{ text: 'performance', filterable: [], x: 605, y: 847, fontSize: 7, expandedX: 60, expandedY: -16 },
								{ text: 'scores', filterable: [], x: 605, y: 854, fontSize: 7, expandedX: 60, expandedY: -12 }
							],
							[
								{ text: 'Innovative', filterable: [], x: 625, y: 880, fontSize: 7, expandedX: -20, expandedY: -10 },
								{ text: 'methods', filterable: [], x: 625, y: 887, fontSize: 7, expandedX: -20, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Educational', filterable: ['Inflation'], x: 550, y: 800, fontSize: 7, expandedX: 90, expandedY: 5 },
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
								{ text: 'Ерөнхий', filterable: [], x: 585, y: 905, fontSize: 7, expandedX: 60, expandedY: -65 },
								{ text: 'боловсролын', filterable: [], x: 585, y: 912, fontSize: 7, expandedX: 60, expandedY: -61 },
								{ text: 'сургуулийн', filterable: [], x: 585, y: 919, fontSize: 7, expandedX: 60, expandedY: -57 },
								{ text: 'тоо', filterable: [], x: 585, y: 926, fontSize: 7, expandedX: 60, expandedY: -53 }
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
								{ text: 'Traditional-only', filterable: [], x: 312, y: 808, fontSize: 6, expandedX: 20, expandedY: 10 },
								{ text: 'learning space', filterable: [], x: 312, y: 814, fontSize: 6, expandedX: 20, expandedY: 14 },
								{ text: '& Lack of', filterable: [], x: 312, y: 820, fontSize: 6, expandedX: 20, expandedY: 18 },
								{ text: 'accessibility', filterable: [], x: 312, y: 826, fontSize: 6, expandedX: 20, expandedY: 22 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Dropout rate', filterable: [], x: 362, y: 815, fontSize: 7 }
							],
							[
								{ text: 'Limited access', filterable: [], x: 350, y: 850, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Internet', filterable: [], x: 415, y: 810, fontSize: 7, expandedX: -20, expandedY: 0 },
								{ text: 'penetration', filterable: [], x: 415, y: 817, fontSize: 7, expandedX: -20, expandedY: 4 }
							],
							[
								{ text: 'Study materials', filterable: [], x: 395, y: 870, fontSize: 7, expandedX: -30, expandedY: -20 },
								{ text: 'and content', filterable: [], x: 395, y: 877, fontSize: 7, expandedX: -30, expandedY: -16 },
								{ text: 'upgrade', filterable: [], x: 395, y: 884, fontSize: 7, expandedX: -30, expandedY: -12 }
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
								{ text: 'Accessibility', filterable: [], x: 788, y: 819, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 60 },
								{ text: 'of Government', filterable: [], x: 788, y: 823, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 65 },
								{ text: 'Services', filterable: [], x: 788, y: 827, fontSize: 4, textAnchor: 'end', expandedX: -10, expandedY: 70 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Housing Program', filterable: [], x: 750, y: 848, fontSize: 5, expandedX: -55, expandedY: 80 },
								{ text: 'Effectiveness', filterable: [], x: 750, y: 853, fontSize: 5, expandedX: -55, expandedY: 85 }
							],
							[
								{ text: 'Equity in social', filterable: [], x: 750, y: 865, fontSize: 5, expandedX: -35, expandedY: 15 },
								{ text: 'welfare', filterable: [], x: 750, y: 870, fontSize: 5, expandedX: -35, expandedY: 19 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Disaster Preparedness', filterable: [], x: 705, y: 895, fontSize: 6, expandedX: -30, expandedY: 55 }
							],
							[
								{ text: 'Local Governance', filterable: [], x: 735, y: 910, fontSize: 6, expandedX: -35, expandedY: -10 },
								{ text: 'Transparency', filterable: [], x: 735, y: 916, fontSize: 6, expandedX: -35, expandedY: -7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Inclusivity in National', filterable: [], x: 660, y: 930, fontSize: 6, expandedX: 15, expandedY: 0 },
								{ text: 'Decision-Making', filterable: [], x: 660, y: 936, fontSize: 6, expandedX: 15, expandedY: 4 }
							],
							[
								{ text: 'Anti-Corruption', filterable: [], x: 690, y: 950, fontSize: 6, expandedX: 15, expandedY: -60 },
								{ text: 'Measures', filterable: [], x: 690, y: 956, fontSize: 6, expandedX: 15, expandedY: -56 }
							],
							[
								{ text: 'Quality of Legislative', filterable: [], x: 730, y: 965, fontSize: 6, expandedX: -50, expandedY: 10 },
								{ text: 'Oversight', filterable: [], x: 730, y: 971, fontSize: 6, expandedX: -30, expandedY: 14 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Decentralization', filterable: [], x: 630, y: 963, fontSize: 7, expandedX: 80, expandedY: -80 },
								{ text: 'Effectiveness', filterable: [], x: 630, y: 970, fontSize: 7, expandedX: 80, expandedY: -76 }
							],
							[
								{ text: 'Judicial Independence', filterable: [], x: 650, y: 985, fontSize: 7, expandedX: 30, expandedY: -70 },
								{ text: 'and Rule of Law', filterable: [], x: 650, y: 992, fontSize: 7, expandedX: 30, expandedY: -66 }
							],
							[
								{ text: 'Fiscal Accountability', filterable: [], x: 720, y: 998, fontSize: 7, expandedX: -70, expandedY: -40 },
								{ text: 'and Transparency', filterable: [], x: 720, y: 1005, fontSize: 7, expandedX: -70, expandedY: -36 }
							],
							[
								{ text: 'Long-Term', filterable: [], x: 730, y: 1020, fontSize: 7, expandedX: -20, expandedY: -20 },
								{ text: 'Strategic Planning', filterable: [], x: 730, y: 1027, fontSize: 7, expandedX: -40, expandedY: -16 }
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
								{ text: 'Voters', filterable: [], x: 767, y: 1284, fontSize: 6, expandedX: -40, expandedY: -70 },
								{ text: 'suppression', filterable: [], x: 754, y: 1290, fontSize: 6, expandedX: -40, expandedY: -66 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Wrongful', filterable: [], x: 740, y: 1256, fontSize: 7, expandedX: -40, expandedY: -80 },
								{ text: 'detention', filterable: [], x: 740, y: 1263, fontSize: 7, expandedX: -40, expandedY: -76 },
								{ text: 'rates', filterable: [], x: 740, y: 1270, fontSize: 7, expandedX: -40, expandedY: -72 }
							],
							[
								{ text: 'Lack of', filterable: [], x: 786, y: 1235, fontSize: 7, expandedX: -70, expandedY: -10 },
								{ text: 'representation', filterable: [], x: 786, y: 1242, fontSize: 7, expandedX: -70, expandedY: -6 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Funding shortages', filterable: [], x: 702, y: 1222, fontSize: 7, expandedX: -10, expandedY: -20 },
								{ text: 'and lack of', filterable: [], x: 702, y: 1229, fontSize: 7, expandedX: -10, expandedY: -17 },
								{ text: 'awareness', filterable: [], x: 702, y: 1236, fontSize: 7, expandedX: -10, expandedY: -14 }
							],
							[
								{ text: 'Lack of', filterable: [], x: 715, y: 1196, fontSize: 7, expandedX: 20, expandedY: 45 },
								{ text: 'emergency', filterable: [], x: 715, y: 1203, fontSize: 7, expandedX: 20, expandedY: 48 },
								{ text: 'plan', filterable: [], x: 715, y: 1210, fontSize: 7, expandedX: 20, expandedY: 51 }
							],
							[
								{ text: 'Underreporting', filterable: [], x: 737, y: 1185, fontSize: 7, expandedX: -40, expandedY: -40 },
								{ text: 'of crimes', filterable: [], x: 757, y: 1192, fontSize: 7, expandedX: -30, expandedY: -37 },
								{ text: 'or lack of', filterable: [], x: 757, y: 1199, fontSize: 7, expandedX: -30, expandedY: -34 },
								{ text: 'reporting', filterable: [], x: 757, y: 1206, fontSize: 7, expandedX: -30, expandedY: -31 },
								{ text: 'channels', filterable: [], x: 757, y: 1213, fontSize: 7, expandedX: -30, expandedY: -28 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Bureaucratic red tape &', filterable: [], x: 657, y: 1180, fontSize: 7, expandedX: 15, expandedY: 20 },
								{ text: 'technological gap', filterable: [], x: 657, y: 1187, fontSize: 7, expandedX: 30, expandedY: 24 }
							],
							[
								{ text: 'Incompatible systems &', filterable: [], x: 690, y: 1160, fontSize: 7, expandedX: -30, expandedY: 0 },
								{ text: 'limited data sharing', filterable: [], x: 690, y: 1167, fontSize: 7, expandedX: -30, expandedY: 4 }
							],
							[
								{ text: 'Political influence &', filterable: [], x: 717, y: 1142, fontSize: 7, expandedX: -25, expandedY: -20 },
								{ text: 'inequitable distribution', filterable: [], x: 717, y: 1149, fontSize: 7, expandedX: -40, expandedY: -16 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Power concentration', filterable: [], x: 720, y: 1100, fontSize: 7, expandedX: -50, expandedY: 20 }
							],
							[
								{ text: 'Fragmented social', filterable: [], x: 670, y: 1115, fontSize: 7, expandedX: 0, expandedY: 50 },
								{ text: 'support systems', filterable: [], x: 670, y: 1122, fontSize: 7, expandedX: 0, expandedY: 54 }
							],
							[
								{ text: 'Economic', filterable: [], x: 640, y: 1145, fontSize: 7, expandedX: 70, expandedY: 70 },
								{ text: 'pressure', filterable: [], x: 640, y: 1152, fontSize: 7, expandedX: 70, expandedY: 74 }
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
								{ text: 'Knowledge of', filterable: [], x: 792, y: 825, fontSize: 4, expandedX: 15, expandedY: 85 },
								{ text: 'Rights and Legal', filterable: [], x: 792, y: 829, fontSize: 4, expandedX: 15, expandedY: 91 },
								{ text: 'Protections', filterable: [], x: 792, y: 833, fontSize: 4, expandedX: 15, expandedY: 97 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Local Safety', filterable: [], x: 795, y: 845, fontSize: 5, expandedX: 0, expandedY: 20 },
								{ text: 'Measures', filterable: [], x: 795, y: 850, fontSize: 5, expandedX: 0, expandedY: 24 }
							],
							[
								{ text: 'Social network', filterable: [], x: 795, y: 860, fontSize: 5, expandedX: 5, expandedY: 42 },
								{ text: 'engagement', filterable: [], x: 795, y: 865, fontSize: 5, expandedX: 5, expandedY: 46 }
							],
							[
								{ text: 'Social responsibility', filterable: [], x: 795, y: 875, fontSize: 5, expandedX: 5, expandedY: 65 },
								{ text: 'awareness', filterable: [], x: 795, y: 880, fontSize: 5, expandedX: 5, expandedY: 69 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Community', filterable: [], x: 793, y: 918, fontSize: 7, expandedX: 5, expandedY: -20 },
								{ text: 'Infrastructure', filterable: [], x: 793, y: 925, fontSize: 7, expandedX: 5, expandedY: -16 },
								{ text: 'Development', filterable: [], x: 793, y: 932, fontSize: 7, expandedX: 5, expandedY: -12 }
							],
							[
								{ text: 'Public Participation in', filterable: [], x: 810, y: 900, fontSize: 7, expandedX: -10, expandedY: 50 },
								{ text: 'Local Governance', filterable: [], x: 810, y: 907, fontSize: 7, expandedX: -10, expandedY: 54 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 795, y: 960, fontSize: 7, expandedX: 10, expandedY: -70 },
								{ text: 'cohesion', filterable: [], x: 795, y: 967, fontSize: 7, expandedX: 10, expandedY: -66 },
								{ text: 'measures', filterable: [], x: 795, y: 974, fontSize: 7, expandedX: 10, expandedY: -62 }
							],
							[
								{ text: 'Collective', filterable: [], x: 830, y: 955, fontSize: 7, expandedX: -30, expandedY: 10 },
								{ text: 'action', filterable: [], x: 830, y: 962, fontSize: 7, expandedX: -30, expandedY: 14 },
								{ text: 'capacity', filterable: [], x: 830, y: 969, fontSize: 7, expandedX: -30, expandedY: 18 }
							],
							[
								{ text: 'Public Trust in', filterable: [], x: 865, y: 940, fontSize: 7, expandedX: -10, expandedY: 5 },
								{ text: 'Governance', filterable: [], x: 865, y: 947, fontSize: 7, expandedX: -10, expandedY: 9 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National social', filterable: [], x: 795, y: 1010, fontSize: 7, expandedX: 0, expandedY: -100 },
								{ text: 'dialogue', filterable: [], x: 795, y: 1017, fontSize: 7, expandedX: 0, expandedY: -96 }
							],
							[
								{ text: 'Minority rights', filterable: [], x: 850, y: 1000, fontSize: 7, expandedX: -40, expandedY: 0 },
								{ text: 'protection', filterable: [], x: 850, y: 1007, fontSize: 7, expandedX: -40, expandedY: 4 }
							],
							[
								{ text: 'Civil society', filterable: [], x: 890, y: 980, fontSize: 7, expandedX: -50, expandedY: -30 },
								{ text: 'engagement', filterable: [], x: 890, y: 987, fontSize: 7, expandedX: -50, expandedY: -26 }
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
								{ text: 'Civil rights', filterable: [], x: 792, y: 1285, fontSize: 6, expandedX: 10, expandedY: -70 },
								{ text: 'violation', filterable: [], x: 792, y: 1291, fontSize: 6, expandedX: 10, expandedY: -66 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Financial', filterable: [], x: 810, y: 1250, fontSize: 7, expandedX: 0, expandedY: -60 },
								{ text: 'dependency', filterable: [], x: 810, y: 1257, fontSize: 7, expandedX: 0, expandedY: -56 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Resource', filterable: [], x: 800, y: 1208, fontSize: 7, expandedX: 20, expandedY: -20 },
								{ text: 'constraints', filterable: [], x: 800, y: 1215, fontSize: 7, expandedX: 20, expandedY: -16 }
							],
							[
								{ text: 'Insufficient Accessibility', filterable: [], x: 795, y: 1197, fontSize: 7, expandedX: 0, expandedY: -40 }
							],
							[
								{ text: 'High cost and', filterable: [], x: 845, y: 1215, fontSize: 7, expandedX: -50, expandedY: 10 },
								{ text: 'shortage of', filterable: [], x: 845, y: 1221, fontSize: 7, expandedX: -50, expandedY: 14 },
								{ text: 'resource', filterable: [], x: 845, y: 1227, fontSize: 7, expandedX: -50, expandedY: 18 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Lack of support', filterable: [], x: 810, y: 1145, fontSize: 7, expandedX: 0, expandedY: 0 },
								{ text: 'services', filterable: [], x: 810, y: 1152, fontSize: 7, expandedX: 0, expandedY: 4 }
							],
							[
								{ text: 'Conflicting', filterable: [], x: 865, y: 1170, fontSize: 7, expandedX: -50, expandedY: 30 },
								{ text: 'interest', filterable: [], x: 865, y: 1177, fontSize: 7, expandedX: -50, expandedY: 34 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Centralized', filterable: [], x: 800, y: 1095, fontSize: 7, expandedX: 0, expandedY: 110 },
								{ text: 'Control', filterable: [], x: 800, y: 1102, fontSize: 7, expandedX: 0, expandedY: 114 }
							],
							[
								{ text: 'Rural neglects,', filterable: [], x: 850, y: 1110, fontSize: 7, expandedX: -50, expandedY: -10 },
								{ text: 'overcrowding', filterable: [], x: 850, y: 1117, fontSize: 7, expandedX: -50, expandedY: -6 }
							],
							[
								{ text: 'Corruption', filterable: [], x: 910, y: 1140, fontSize: 7, expandedX: -80, expandedY: 20 },
								{ text: 'perception', filterable: [], x: 910, y: 1147, fontSize: 7, expandedX: -80, expandedY: 24 }
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
								{ text: 'Personal mobility', filterable: [], x: 805, y: 795, fontSize: 4, expandedX: 55, expandedY: 10 },
								{ text: 'access', filterable: [], x: 805, y: 799, fontSize: 4, expandedX: 55, expandedY: 15 }
							],
							[
								{ text: 'Home', filterable: ['Inflation'], x: 815, y: 805, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 30 },
								{ text: 'environment', filterable: ['Inflation'], x: 815, y: 809, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 35 },
								{ text: 'quality', filterable: ['Inflation'], x: 815, y: 813, fontSize: 4, props: 'Inflation', expandedX: 65, expandedY: 40 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Living conditions', filterable: [], x: 842, y: 800, fontSize: 6, expandedX: 20, expandedY: 5 },
								{ text: 'quality', filterable: [], x: 842, y: 805, fontSize: 6, expandedX: 20, expandedY: 9 }
							],
							[
								{ text: 'Sustainable', filterable: [], x: 835, y: 820, fontSize: 6, expandedX: 40, expandedY: 20 },
								{ text: 'household habits', filterable: [], x: 835, y: 825, fontSize: 6, expandedX: 40, expandedY: 24 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Public safety', filterable: [], x: 895, y: 800, fontSize: 6, expandedX: -55, expandedY: 15 }
							],
							[
								{ text: 'Local', filterable: [], x: 892, y: 820, fontSize: 6, expandedX: 25, expandedY: -10 },
								{ text: 'infrastructure', filterable: [], x: 892, y: 826, fontSize: 6, expandedX: 25, expandedY: -6 },
								{ text: 'access', filterable: [], x: 892, y: 832, fontSize: 6, expandedX: 25, expandedY: -2 }
							],
							[
								{ text: 'Air and water', filterable: [], x: 868, y: 858, fontSize: 6, expandedX: 30, expandedY: 10 },
								{ text: 'quality monitoring', filterable: [], x: 868, y: 864, fontSize: 6, expandedX: 20, expandedY: 14 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Management of', filterable: [], x: 945, y: 800, fontSize: 6, expandedX: -10, expandedY: 10 },
								{ text: 'pasturelands', filterable: [], x: 945, y: 806, fontSize: 6, expandedX: -10, expandedY: 14 }
							],
							[
								{ text: 'Utility grids', filterable: ['Inflation'], x: 940, y: 825, fontSize: 6, expandedX: -80, expandedY: -20 }
							],
							[
								{ text: 'Urban planning', filterable: [], x: 935, y: 845, fontSize: 6, expandedX: -20, expandedY: 5 }
							],
							[
								{ text: 'Transport', filterable: [], x: 932, y: 865, fontSize: 6, expandedX: -80, expandedY: -35 },
								{ text: 'networks', filterable: [], x: 932, y: 871, fontSize: 6, expandedX: -80, expandedY: -31 }
							],
							[
								{ text: 'Road condition', filterable: [], x: 915, y: 890, fontSize: 6, expandedX: -10, expandedY: -10 },
								{ text: 'monitoring', filterable: [], x: 915, y: 896, fontSize: 6, expandedX: -10, expandedY: -6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National air quality', filterable: [], x: 995, y: 800, fontSize: 5, expandedX: -115, expandedY: 2 },
								{ text: 'improvement', filterable: [], x: 995, y: 805, fontSize: 5, expandedX: -115, expandedY: 6 },
								{ text: 'measures', filterable: [], x: 995, y: 810, fontSize: 5, expandedX: -115, expandedY: 10 }
							],
							[
								{ text: 'Sustainable livestock', filterable: [], x: 990, y: 825, fontSize: 5, expandedX: -70, expandedY: 65 },
								{ text: 'management', filterable: [], x: 990, y: 830, fontSize: 5, expandedX: -70, expandedY: 69 },
								{ text: 'policies', filterable: [], x: 990, y: 835, fontSize: 5, expandedX: -70, expandedY: 73 }
							],
							[
								{ text: 'Climate change', filterable: [], x: 985, y: 850, fontSize: 5, expandedX: -45, expandedY: 10 },
								{ text: 'adaptation policies', filterable: [], x: 985, y: 855, fontSize: 5, expandedX: -45, expandedY: 14 }
							],
							[
								{ text: 'Expansion of', filterable: [], x: 975, y: 880, fontSize: 5, expandedX: -20, expandedY: -65 },
								{ text: 'renewable energy', filterable: [], x: 975, y: 885, fontSize: 5, expandedX: -20, expandedY: -61 }
							],
							[
								{ text: 'Хүн амын', filterable: [], x: 965, y: 900, fontSize: 5, expandedX: -20, expandedY: 25 },
								{ text: 'нягтрал', filterable: [], x: 965, y: 905, fontSize: 5, expandedX: -20, expandedY: 29 }
							],
							[
								{ text: 'Safe and Sustainable Road', filterable: [], x: 942, y: 925, fontSize: 5, expandedX: -75, expandedY: -85 },
								{ text: 'Infrastructure', filterable: [], x: 942, y: 930, fontSize: 5, expandedX: -75, expandedY: -80 },
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
								{ text: 'Transportation', filterable: [], x: 1275, y: 801, fontSize: 6, expandedX: -90, expandedY: 20 },
								{ text: 'problems', filterable: [], x: 1275, y: 807, fontSize: 6, expandedX: -90, expandedY: 24 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Poor', filterable: [], x: 1230, y: 805, fontSize: 7, expandedX: -56, expandedY: 5 },
								{ text: 'conditions', filterable: [], x: 1230, y: 812, fontSize: 7, expandedX: -56, expandedY: 9 }
							],
							[
								{ text: 'Resource', filterable: [], x: 1240, y: 828, fontSize: 7, expandedX: -70, expandedY: 30 },
								{ text: 'inefficiency', filterable: [], x: 1240, y: 835, fontSize: 7, expandedX: -70, expandedY: 34 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Air quality', filterable: [], x: 1188, y: 840, fontSize: 7, fontWeight: 600, expandedX: -30, expandedY: -10 },
								{ text: 'deterioration', filterable: [], x: 1188, y: 847, fontSize: 7, fontWeight: 600, expandedX: -30, expandedY: -6 }
							]
						]
					],
					[
						4,
						[]
					],
					[
						5,
						[
							[
								{ "text": "Environmental", "filterable": [], "x": 1077, "y": 835, "fontSize": 7, expandedX: 10, expandedY: -10 },
								{ "text": "hazards", "filterable": [], "x": 1085, "y": 842, "fontSize": 7, expandedX: 10, expandedY: -6 }
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
								{ "text": "Access to", "filterable": [], "x": 815, "y": 765, "fontSize": 4, expandedX: 65, expandedY: -44 },
								{ "text": "preventive", "filterable": [], "x": 815, "y": 769, "fontSize": 4, expandedX: 65, expandedY: -39 },
								{ "text": "healthcare", "filterable": [], "x": 815, "y": 773, "fontSize": 4, expandedX: 65, expandedY: -34 }
							],
							[
								{ "text": "Basic needs", "filterable": [], "x": 818, "y": 782, "fontSize": 4, expandedX: 70, expandedY: -15 },
								{ "text": "accessibility", "filterable": [], "x": 818, "y": 786, "fontSize": 4, expandedX: 70, expandedY: -10 }
							],
							[
								{ "text": "Food", "filterable": [], "x": 803, "y": 783, "fontSize": 4, expandedX: 25, expandedY: -15 },
								{ "text": "quality", "filterable": [], "x": 803, "y": 787, "fontSize": 4, expandedX: 25, expandedY: -10 }
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