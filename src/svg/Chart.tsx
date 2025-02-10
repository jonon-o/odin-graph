import { type SVGProps, useEffect, useRef, useState } from 'react';
import svgPanZoom from 'svg-pan-zoom';

interface Props {
	filter: string | null;
}

type Level = 1 | 2 | 3 | 4 | 5;

type FilterValueType = 'Natural disasters' | 'Inflation' | 'Crises' | 'Geopolitical factors';

const RADIUS_DEFAULT: Record<Level, number> = {
	"1": 50,
	"2": 100,
	"3": 150,
	"4": 200,
	"5": 250
}

const SHRINK_GAP = 20;

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
}

const data: Map<Section, Map<'center' | 'self', Map<1 | 2 | 3 | 4 | 5, Item[][]>>> = new Map([
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
								{ text: 'Financial', filterable: [], x: 766, y: 752, fontSize: 5 },
								{ text: 'literacy', filterable: [], x: 766, y: 757, fontSize: 5 }
							],
							[
								{ text: 'Credit', filterable: [], x: 787, y: 765, fontSize: 5, textAnchor: 'end' },
								{ text: 'score', filterable: [], x: 787, y: 770, fontSize: 5, textAnchor: 'end' }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Savings', filterable: [], x: 762, y: 720, fontSize: 8, textAnchor: 'middle' },
								{ text: 'rate', filterable: [], x: 762, y: 728, fontSize: 8, textAnchor: 'middle' }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Public', filterable: [], x: 700, y: 682, fontSize: 7 },
								{ text: 'infrastructure', filterable: [], x: 700, y: 689, fontSize: 7 },
								{ text: 'investment', filterable: [], x: 700, y: 696, fontSize: 7 }
							],
							[
								{ text: 'Pension', filterable: [], x: 725, y: 676, fontSize: 7 }
							],
							[
								{ text: 'Regional', filterable: [], x: 755, y: 654, fontSize: 7 },
								{ text: 'economic', filterable: [], x: 755, y: 661, fontSize: 7 },
								{ text: 'integration', filterable: [], x: 755, y: 668, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Investment', filterable: [], x: 665, y: 650, fontSize: 6 },
								{ text: 'flows', filterable: [], x: 665, y: 656, fontSize: 6 }
							],
							[
								{ text: 'Public sector', filterable: [], x: 680, y: 630, fontSize: 6 },
								{ text: 'investment', filterable: [], x: 680, y: 636, fontSize: 6 }
							],
							[
								{ text: 'Employment', filterable: [], x: 718, y: 636, fontSize: 6 },
								{ text: 'opportunity', filterable: [], x: 718, y: 642, fontSize: 6 }
							],
							[
								{ text: 'Economic', filterable: [], x: 715, y: 610, fontSize: 6 },
								{ text: 'infrastructure', filterable: [], x: 715, y: 616, fontSize: 6 },
								{ text: 'quality', filterable: [], x: 715, y: 622, fontSize: 6 }
							],
							[
								{ text: 'Economic', filterable: [], x: 757, y: 600, fontSize: 6 },
								{ text: 'opportunity', filterable: [], x: 757, y: 606, fontSize: 6 },
								{ text: 'distribution', filterable: [], x: 757, y: 612, fontSize: 6 }
							],
							[
								{ text: 'Real GDP', filterable: [], x: 757, y: 625, fontSize: 6 },
								{ text: 'growth rate', filterable: [], x: 757, y: 631, fontSize: 6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Research &', filterable: [], x: 630, y: 610, fontSize: 6 },
								{ text: 'development', filterable: [], x: 630, y: 616, fontSize: 6 },
								{ text: 'expenditure', filterable: [], x: 630, y: 622, fontSize: 6 }
							],
							[
								{ text: 'Tax', filterable: [], x: 660, y: 595, fontSize: 6 },
								{ text: 'revenue', filterable: [], x: 660, y: 601, fontSize: 6 }
							],
							[
								{ text: 'National', filterable: [], x: 680, y: 585, fontSize: 6 },
								{ text: 'debt', filterable: [], x: 680, y: 591, fontSize: 6 }
							],
							[
								{ text: 'Currency', filterable: [], x: 700, y: 570, fontSize: 6 },
								{ text: 'stability', filterable: [], x: 700, y: 576, fontSize: 6 }
							],
							[
								{ text: 'Central', filterable: [], x: 734, y: 560, fontSize: 6 },
								{ text: 'bank', filterable: [], x: 734, y: 566, fontSize: 6 },
								{ text: 'interest', filterable: [], x: 734, y: 572, fontSize: 6 },
								{ text: 'rate', filterable: [], x: 734, y: 578, fontSize: 6 }
							],
							[
								{ text: 'Inflation', filterable: [], x: 763, y: 565, fontSize: 6 },
								{ text: 'rate', filterable: [], x: 763, y: 571, fontSize: 6 }
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
								{ text: 'Job quality', filterable: [], x: 788, y: 290, fontSize: 4, textAnchor: 'end' },
								{ text: 'degradation', filterable: [], x: 788, y: 295, fontSize: 4, textAnchor: 'end' }
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
								{ text: 'Debt burden', filterable: [], x: 670, y: 400, fontSize: 7 },
								{ text: 'increase', filterable: [], x: 670, y: 409, fontSize: 7 }
							],
							[
								{ text: 'Industrial', filterable: [], x: 745, y: 420, fontSize: 7 },
								{ text: 'production', filterable: [], x: 745, y: 429, fontSize: 7 },
								{ text: 'decline', filterable: [], x: 745, y: 438, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Unequal', filterable: [], x: 630, y: 423, fontSize: 7 },
								{ text: 'infrastructure', filterable: [], x: 627, y: 430, fontSize: 7 },
								{ text: 'development', filterable: [], x: 627, y: 437, fontSize: 7 }
							],
							[
								{ text: 'Capital', filterable: [], x: 670, y: 447, fontSize: 7 },
								{ text: 'depreciation', filterable: [], x: 670, y: 454, fontSize: 7 },
								{ text: 'rate', filterable: [], x: 670, y: 461, fontSize: 7 }
							],
							[
								{ text: 'Slow Real', filterable: [], x: 700, y: 465, fontSize: 7 },
								{ text: 'State', filterable: [], x: 700, y: 472, fontSize: 7 },
								{ text: 'Market', filterable: [], x: 700, y: 479, fontSize: 7 }
							],
							[
								{ text: 'Boost', filterable: [], x: 730, y: 480, fontSize: 7 },
								{ text: 'Inflation', filterable: [], x: 730, y: 489, fontSize: 7 }
							],
							[
								{ text: 'Real wage', filterable: [], x: 755, y: 470, fontSize: 7 },
								{ text: 'decline', filterable: [], x: 755, y: 477, fontSize: 7 }
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
								{ text: 'Self', filterable: [], x: 750, y: 767, fontSize: 4 },
								{ text: 'expression', filterable: [], x: 747, y: 771, fontSize: 4 }
							],
							[
								{ text: 'Free', filterable: [], x: 747, y: 782, fontSize: 4 },
								{ text: 'thinking', filterable: [], x: 745, y: 786, fontSize: 4 }
							],
							[
								{ text: 'EQ', filterable: [], x: 767, y: 786, fontSize: 7 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Digital', filterable: [], x: 715, y: 740, fontSize: 6 },
								{ text: 'literacy', filterable: [], x: 715, y: 746, fontSize: 6 }
							],
							[
								{ text: 'Parental', filterable: [], x: 710, y: 760, fontSize: 6 },
								{ text: 'engagement', filterable: [], x: 710, y: 766, fontSize: 6 }
							],
							[
								{ text: 'Family', filterable: [], x: 705, y: 779, fontSize: 6 },
								{ text: 'traditions', filterable: [], x: 705, y: 785, fontSize: 6 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Social and', filterable: [], x: 670, y: 710, fontSize: 6 },
								{ text: 'Recreational', filterable: [], x: 670, y: 716, fontSize: 6 },
								{ text: 'opportunities', filterable: [], x: 670, y: 722, fontSize: 6 }
							],
							[
								{ text: 'Community', filterable: [], x: 658, y: 735, fontSize: 6 },
								{ text: 'participation', filterable: [], x: 658, y: 741, fontSize: 6 }
							],
							[
								{ text: 'Community', filterable: [], x: 655, y: 755, fontSize: 6 },
								{ text: 'forums', filterable: [], x: 655, y: 761, fontSize: 6 }
							],
							[
								{ text: 'Language', filterable: [], x: 655, y: 775, fontSize: 6 },
								{ text: 'programs', filterable: [], x: 655, y: 781, fontSize: 6 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Public discourse', filterable: [], x: 630, y: 680, fontSize: 6 },
								{ text: 'quality', filterable: [], x: 630, y: 686, fontSize: 6 }
							],
							[
								{ text: 'Intergenerational', filterable: [], x: 617, y: 705, fontSize: 6 },
								{ text: 'mobility', filterable: [], x: 617, y: 711, fontSize: 6 }
							],
							[
								{ text: 'Civil society', filterable: [], x: 610, y: 725, fontSize: 6 },
								{ text: 'strength', filterable: [], x: 610, y: 731, fontSize: 6 }
							],
							[
								{ text: 'Cultural heritage', filterable: [], x: 600, y: 750, fontSize: 6 },
								{ text: 'preservation', filterable: [], x: 600, y: 756, fontSize: 6 }
							],
							[
								{ text: 'Inclusive', filterable: [], x: 605, y: 775, fontSize: 6 },
								{ text: 'culture', filterable: [], x: 605, y: 781, fontSize: 6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Religion', filterable: [], x: 553, y: 775, fontSize: 7 },
								{ text: 'education', filterable: [], x: 553, y: 782, fontSize: 7 }
							],
							[
								{ text: 'Civic', filterable: [], x: 560, y: 733, fontSize: 7 },
								{ text: 'education', filterable: [], x: 555, y: 740, fontSize: 7 }
							],
							[
								{ text: 'Global', filterable: [], x: 575, y: 690, fontSize: 7 },
								{ text: 'awareness', filterable: [], x: 570, y: 697, fontSize: 7 }
							],
							[
								{ text: 'National', filterable: [], x: 595, y: 650, fontSize: 7 },
								{ text: 'identity', filterable: [], x: 595, y: 657, fontSize: 7 },
								{ text: 'strength', filterable: [], x: 595, y: 664, fontSize: 7 }
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
								{ text: 'Lack of self', filterable: [], x: 273, y: 780, fontSize: 6 },
								{ text: 'identity', filterable: [], x: 278, y: 786, fontSize: 6 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Lack of', filterable: [], x: 310, y: 745, fontSize: 7 },
								{ text: 'parental', filterable: [], x: 310, y: 752, fontSize: 7 },
								{ text: 'participation', filterable: [], x: 310, y: 759, fontSize: 7 }
							],
							[
								{ text: 'Limited', filterable: [], x: 320, y: 778, fontSize: 7 },
								{ text: 'access', filterable: [], x: 320, y: 785, fontSize: 7 }
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
								{ text: 'Generation', filterable: [], x: 395, y: 700, fontSize: 7 },
								{ text: 'differences', filterable: [], x: 395, y: 707, fontSize: 7 }
							],
							[
								{ text: 'School', filterable: [], x: 420, y: 760, fontSize: 7 },
								{ text: 'culture', filterable: [], x: 420, y: 767, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Lack of', filterable: [], x: 420, y: 640, fontSize: 7 },
								{ text: 'long-term', filterable: [], x: 420, y: 647, fontSize: 7 },
								{ text: 'planning', filterable: [], x: 420, y: 654, fontSize: 7 }
							],
							[
								{ text: 'Short', filterable: [], x: 450, y: 685, fontSize: 7 },
								{ text: 'term', filterable: [], x: 450, y: 692, fontSize: 7 },
								{ text: 'solutions', filterable: [], x: 450, y: 699, fontSize: 7 }
							],
							[
								{ text: 'Gaps in', filterable: [], x: 458, y: 725, fontSize: 7 },
								{ text: 'non-direct', filterable: [], x: 458, y: 732, fontSize: 7 },
								{ text: 'educational', filterable: [], x: 458, y: 739, fontSize: 7 },
								{ text: 'skills', filterable: [], x: 465, y: 746, fontSize: 7 }
							],
							[
								{ text: 'Discrimination', filterable: [], x: 463, y: 780, fontSize: 7 }
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
								{ text: 'Learning', filterable: [], x: 743, y: 795, fontSize: 4 },
								{ text: 'progress', filterable: [], x: 743, y: 799, fontSize: 4 }
							],
							[
								{ text: 'Hard vs Soft skills', filterable: [], x: 745, y: 805, fontSize: 4 },
								{ text: 'developments', filterable: [], x: 745, y: 809, fontSize: 4 }
							],
							[
								{ text: 'IQ', filterable: [], x: 770, y: 798, fontSize: 7 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Educational', filterable: [], x: 700, y: 800, fontSize: 6 },
								{ text: 'resources', filterable: [], x: 700, y: 806, fontSize: 6 }
							],
							[
								{ text: 'Home learning', filterable: [], x: 702, y: 817, fontSize: 6 },
								{ text: 'space', filterable: [], x: 702, y: 823, fontSize: 6 }
							],
							[
								{ text: 'Learning', filterable: [], x: 710, y: 833, fontSize: 6 },
								{ text: 'activities', filterable: [], x: 710, y: 839, fontSize: 6 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Education', filterable: [], x: 665, y: 800, fontSize: 6, textAnchor: 'middle' },
								{ text: 'attainment levels', filterable: [], x: 665, y: 806, fontSize: 6, textAnchor: 'middle' }
							],
							[
								{ text: 'Access to', filterable: [], x: 675, y: 830, fontSize: 6, textAnchor: 'middle' },
								{ text: 'educational', filterable: [], x: 675, y: 836, fontSize: 6, textAnchor: 'middle' },
								{ text: 'facilities', filterable: [], x: 675, y: 842, fontSize: 6, textAnchor: 'middle' }
							],
							[
								{ text: 'Access to', filterable: [], x: 685, y: 865, fontSize: 6, textAnchor: 'middle' },
								{ text: 'programs', filterable: [], x: 685, y: 871, fontSize: 6, textAnchor: 'middle' }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Instructional', filterable: [], x: 595, y: 800, fontSize: 7 },
								{ text: 'quality', filterable: [], x: 595, y: 807, fontSize: 7 }
							],
							[
								{ text: 'School', filterable: [], x: 605, y: 840, fontSize: 7 },
								{ text: 'performance', filterable: [], x: 605, y: 847, fontSize: 7 },
								{ text: 'scores', filterable: [], x: 605, y: 854, fontSize: 7 }
							],
							[
								{ text: 'Innovative', filterable: [], x: 625, y: 880, fontSize: 7 },
								{ text: 'methods', filterable: [], x: 625, y: 887, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Educational', filterable: [], x: 550, y: 800, fontSize: 7 },
								{ text: 'expense', filterable: [], x: 550, y: 807, fontSize: 7 }
							],
							[
								{ text: 'Social norm', filterable: [], x: 550, y: 830, fontSize: 7 }
							],
							[
								{ text: 'Сургалтын', filterable: [], x: 555, y: 850, fontSize: 7 },
								{ text: 'чанар', filterable: [], x: 555, y: 857, fontSize: 7 }
							],
							[
								{ text: 'Сургалтын', filterable: [], x: 565, y: 880, fontSize: 7 },
								{ text: 'орчин', filterable: [], x: 565, y: 887, fontSize: 7 }
							],
							[
								{ text: 'Ерөнхий', filterable: [], x: 585, y: 905, fontSize: 7 },
								{ text: 'боловсролын', filterable: [], x: 585, y: 912, fontSize: 7 },
								{ text: 'сургуулийн', filterable: [], x: 585, y: 919, fontSize: 7 },
								{ text: 'тоо', filterable: [], x: 585, y: 926, fontSize: 7 }
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
								{ text: 'Old school', filterable: [], x: 273, y: 798, fontSize: 6 },
								{ text: 'environment', filterable: [], x: 273, y: 804, fontSize: 6 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Traditional-only', filterable: [], x: 312, y: 808, fontSize: 6 },
								{ text: 'learning space', filterable: [], x: 312, y: 814, fontSize: 6 },
								{ text: '& Lack of', filterable: [], x: 312, y: 820, fontSize: 6 },
								{ text: 'accessibility', filterable: [], x: 312, y: 826, fontSize: 6 }
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
								{ text: 'Internet', filterable: [], x: 415, y: 810, fontSize: 7 },
								{ text: 'penetration', filterable: [], x: 415, y: 817, fontSize: 7 }
							],
							[
								{ text: 'Study materials', filterable: [], x: 395, y: 870, fontSize: 7 },
								{ text: 'and content', filterable: [], x: 395, y: 877, fontSize: 7 },
								{ text: 'upgrade', filterable: [], x: 395, y: 884, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Digital', filterable: [], x: 470, y: 800, fontSize: 6 },
								{ text: 'divide in', filterable: [], x: 470, y: 806, fontSize: 6 },
								{ text: 'learning', filterable: [], x: 470, y: 812, fontSize: 6 },
								{ text: 'access', filterable: [], x: 470, y: 818, fontSize: 6 }
							],
							[
								{ text: 'Traditional', filterable: [], x: 462, y: 838, fontSize: 6 },
								{ text: 'teaching', filterable: [], x: 462, y: 844, fontSize: 6 },
								{ text: 'methods', filterable: [], x: 462, y: 850, fontSize: 6 }
							],
							[
								{ text: 'Quality of public', filterable: [], x: 450, y: 865, fontSize: 6 },
								{ text: 'kindergarten', filterable: [], x: 450, y: 871, fontSize: 6 }
							],
							[
								{ text: 'Public vs', filterable: [], x: 440, y: 890, fontSize: 6 },
								{ text: 'Private', filterable: [], x: 440, y: 896, fontSize: 6 },
								{ text: 'contrast', filterable: [], x: 440, y: 902, fontSize: 6 }
							],
							[
								{ text: 'Overcrowded', filterable: [], x: 420, y: 925, fontSize: 6 },
								{ text: 'public', filterable: [], x: 420, y: 931, fontSize: 6 },
								{ text: 'establishment', filterable: [], x: 420, y: 937, fontSize: 6 }
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
								{ text: 'Accessibility', filterable: [], x: 788, y: 819, fontSize: 4, textAnchor: 'end' },
								{ text: 'of Government', filterable: [], x: 788, y: 823, fontSize: 4, textAnchor: 'end' },
								{ text: 'Services', filterable: [], x: 788, y: 827, fontSize: 4, textAnchor: 'end' }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Housing Program', filterable: [], x: 750, y: 848, fontSize: 5 },
								{ text: 'Effectiveness', filterable: [], x: 750, y: 853, fontSize: 5 }
							],
							[
								{ text: 'Equity in social', filterable: [], x: 750, y: 865, fontSize: 5 },
								{ text: 'welfare', filterable: [], x: 750, y: 870, fontSize: 5 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Disaster Preparedness', filterable: [], x: 705, y: 895, fontSize: 6 }
							],
							[
								{ text: 'Local Governance', filterable: [], x: 735, y: 910, fontSize: 6 },
								{ text: 'Transparency', filterable: [], x: 735, y: 916, fontSize: 6 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Inclusivity in National', filterable: [], x: 660, y: 930, fontSize: 6 },
								{ text: 'Decision-Making', filterable: [], x: 660, y: 936, fontSize: 6 }
							],
							[
								{ text: 'Anti-Corruption', filterable: [], x: 690, y: 950, fontSize: 6 },
								{ text: 'Measures', filterable: [], x: 690, y: 956, fontSize: 6 }
							],
							[
								{ text: 'Quality of Legislative', filterable: [], x: 730, y: 965, fontSize: 6 },
								{ text: 'Oversight', filterable: [], x: 730, y: 971, fontSize: 6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Decentralization', filterable: [], x: 630, y: 963, fontSize: 7 },
								{ text: 'Effectiveness', filterable: [], x: 630, y: 970, fontSize: 7 }
							],
							[
								{ text: 'Judicial Independence', filterable: [], x: 650, y: 985, fontSize: 7 },
								{ text: 'and Rule of Law', filterable: [], x: 650, y: 992, fontSize: 7 }
							],
							[
								{ text: 'Fiscal Accountability', filterable: [], x: 720, y: 998, fontSize: 7 },
								{ text: 'and Transparency', filterable: [], x: 720, y: 1005, fontSize: 7 }
							],
							[
								{ text: 'Long-Term', filterable: [], x: 730, y: 1020, fontSize: 7 },
								{ text: 'Strategic Planning', filterable: [], x: 730, y: 1027, fontSize: 7 }
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
								{ text: 'Voters', filterable: [], x: 787, y: 1284, fontSize: 6 },
								{ text: 'suppression', filterable: [], x: 787, y: 1290, fontSize: 6 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Wrongful', filterable: [], x: 740, y: 1256, fontSize: 7 },
								{ text: 'detention', filterable: [], x: 740, y: 1263, fontSize: 7 },
								{ text: 'rates', filterable: [], x: 740, y: 1270, fontSize: 7 }
							],
							[
								{ text: 'Lack of', filterable: [], x: 786, y: 1235, fontSize: 7 },
								{ text: 'representation', filterable: [], x: 786, y: 1242, fontSize: 7 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Funding shortages', filterable: [], x: 702, y: 1222, fontSize: 7 },
								{ text: 'and lack of', filterable: [], x: 702, y: 1229, fontSize: 7 },
								{ text: 'awareness', filterable: [], x: 702, y: 1236, fontSize: 7 }
							],
							[
								{ text: 'Lack of', filterable: [], x: 715, y: 1196, fontSize: 7 },
								{ text: 'emergency', filterable: [], x: 715, y: 1203, fontSize: 7 },
								{ text: 'plan', filterable: [], x: 715, y: 1210, fontSize: 7 }
							],
							[
								{ text: 'Underreporting', filterable: [], x: 787, y: 1185, fontSize: 7 },
								{ text: 'of crimes', filterable: [], x: 787, y: 1192, fontSize: 7 },
								{ text: 'or lack of', filterable: [], x: 787, y: 1199, fontSize: 7 },
								{ text: 'reporting', filterable: [], x: 787, y: 1206, fontSize: 7 },
								{ text: 'channels', filterable: [], x: 787, y: 1213, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Bureaucratic red tape &', filterable: [], x: 657, y: 1180, fontSize: 7 },
								{ text: 'technological gap', filterable: [], x: 657, y: 1187, fontSize: 7 }
							],
							[
								{ text: 'Incompatible systems &', filterable: [], x: 690, y: 1160, fontSize: 7 },
								{ text: 'limited data sharing', filterable: [], x: 690, y: 1167, fontSize: 7 }
							],
							[
								{ text: 'Political influence &', filterable: [], x: 717, y: 1142, fontSize: 7 },
								{ text: 'inequitable distribution', filterable: [], x: 717, y: 1149, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Power concentration', filterable: [], x: 720, y: 1100, fontSize: 7 }
							],
							[
								{ text: 'Fragmented social', filterable: [], x: 670, y: 1115, fontSize: 7 },
								{ text: 'support systems', filterable: [], x: 670, y: 1122, fontSize: 7 }
							],
							[
								{ text: 'Economic', filterable: [], x: 640, y: 1145, fontSize: 7 },
								{ text: 'pressure', filterable: [], x: 640, y: 1152, fontSize: 7 }
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
								{ text: 'Knowledge of', filterable: [], x: 792, y: 825, fontSize: 4 },
								{ text: 'Rights and Legal', filterable: [], x: 792, y: 829, fontSize: 4 },
								{ text: 'Protections', filterable: [], x: 792, y: 833, fontSize: 4 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Local Safety', filterable: [], x: 795, y: 845, fontSize: 5 },
								{ text: 'Measures', filterable: [], x: 795, y: 850, fontSize: 5 }
							],
							[
								{ text: 'Social network', filterable: [], x: 795, y: 860, fontSize: 5 },
								{ text: 'engagement', filterable: [], x: 795, y: 865, fontSize: 5 }
							],
							[
								{ text: 'Social responsibility', filterable: [], x: 795, y: 875, fontSize: 5 },
								{ text: 'awareness', filterable: [], x: 795, y: 880, fontSize: 5 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Community', filterable: [], x: 793, y: 918, fontSize: 7 },
								{ text: 'Infrastructure', filterable: [], x: 793, y: 925, fontSize: 7 },
								{ text: 'Development', filterable: [], x: 793, y: 932, fontSize: 7 }
							],
							[
								{ text: 'Public Participation in', filterable: [], x: 810, y: 900, fontSize: 7 },
								{ text: 'Local Governance', filterable: [], x: 810, y: 907, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Social', filterable: [], x: 795, y: 960, fontSize: 7 },
								{ text: 'cohesion', filterable: [], x: 795, y: 967, fontSize: 7 },
								{ text: 'measures', filterable: [], x: 795, y: 974, fontSize: 7 }
							],
							[
								{ text: 'Collective', filterable: [], x: 830, y: 955, fontSize: 7 },
								{ text: 'action', filterable: [], x: 830, y: 962, fontSize: 7 },
								{ text: 'capacity', filterable: [], x: 830, y: 969, fontSize: 7 }
							],
							[
								{ text: 'Public Trust in', filterable: [], x: 865, y: 940, fontSize: 7 },
								{ text: 'Governance', filterable: [], x: 865, y: 947, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National social', filterable: [], x: 795, y: 1010, fontSize: 7 },
								{ text: 'dialogue', filterable: [], x: 795, y: 1017, fontSize: 7 }
							],
							[
								{ text: 'Minority rights', filterable: [], x: 850, y: 1000, fontSize: 7 },
								{ text: 'protection', filterable: [], x: 850, y: 1007, fontSize: 7 }
							],
							[
								{ text: 'Civil society', filterable: [], x: 890, y: 980, fontSize: 7 },
								{ text: 'engagement', filterable: [], x: 890, y: 987, fontSize: 7 }
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
								{ text: 'Civil rights', filterable: [], x: 792, y: 1285, fontSize: 6 },
								{ text: 'violation', filterable: [], x: 792, y: 1291, fontSize: 6 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Financial', filterable: [], x: 810, y: 1250, fontSize: 7 },
								{ text: 'dependency', filterable: [], x: 810, y: 1257, fontSize: 7 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Resource', filterable: [], x: 800, y: 1208, fontSize: 7 },
								{ text: 'constraints', filterable: [], x: 800, y: 1215, fontSize: 7 }
							],
							[
								{ text: 'Insufficient Accessibility', filterable: [], x: 795, y: 1197, fontSize: 7 }
							],
							[
								{ text: 'High cost and', filterable: [], x: 845, y: 1215, fontSize: 7 },
								{ text: 'shortage of', filterable: [], x: 845, y: 1221, fontSize: 7 },
								{ text: 'resource', filterable: [], x: 845, y: 1227, fontSize: 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Lack of support', filterable: [], x: 810, y: 1145, fontSize: 7 },
								{ text: 'services', filterable: [], x: 810, y: 1152, fontSize: 7 }
							],
							[
								{ text: 'Conflicting', filterable: [], x: 865, y: 1170, fontSize: 7 },
								{ text: 'interest', filterable: [], x: 865, y: 1177, fontSize: 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'Centralized', filterable: [], x: 800, y: 1095, fontSize: 7 },
								{ text: 'Control', filterable: [], x: 800, y: 1102, fontSize: 7 }
							],
							[
								{ text: 'Rural neglects,', filterable: [], x: 850, y: 1110, fontSize: 7 },
								{ text: 'overcrowding', filterable: [], x: 850, y: 1117, fontSize: 7 }
							],
							[
								{ text: 'Corruption', filterable: [], x: 910, y: 1140, fontSize: 7 },
								{ text: 'perception', filterable: [], x: 910, y: 1147, fontSize: 7 }
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
								{ text: 'Personal mobility', filterable: [], x: 805, y: 795, fontSize: 4 },
								{ text: 'access', filterable: [], x: 805, y: 799, fontSize: 4 }
							],
							[
								{ text: 'Home', filterable: [], x: 815, y: 805, fontSize: 4, props: 'Inflation' },
								{ text: 'environment', filterable: [], x: 815, y: 809, fontSize: 4, props: 'Inflation' },
								{ text: 'quality', filterable: [], x: 815, y: 813, fontSize: 4, props: 'Inflation' }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Living conditions', filterable: [], x: 842, y: 800, fontSize: 6 },
								{ text: 'quality', filterable: [], x: 842, y: 805, fontSize: 6 }
							],
							[
								{ text: 'Sustainable', filterable: [], x: 835, y: 820, fontSize: 6 },
								{ text: 'household habits', filterable: [], x: 835, y: 825, fontSize: 6 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Public safety', filterable: [], x: 895, y: 800, fontSize: 6 }
							],
							[
								{ text: 'Local', filterable: [], x: 892, y: 820, fontSize: 6 },
								{ text: 'infrastructure', filterable: [], x: 892, y: 826, fontSize: 6 },
								{ text: 'access', filterable: [], x: 892, y: 832, fontSize: 6 }
							],
							[
								{ text: 'Air and water', filterable: [], x: 868, y: 858, fontSize: 6 },
								{ text: 'quality monitoring', filterable: [], x: 868, y: 864, fontSize: 6 }
							]
						]
					],
					[
						4,
						[
							[
								{ text: 'Management of', filterable: [], x: 945, y: 800, fontSize: 6 },
								{ text: 'pasturelands', filterable: [], x: 945, y: 806, fontSize: 6 }
							],
							[
								{ text: 'Utility grids', filterable: ['Inflation'], x: 940, y: 825, fontSize: 6 }
							],
							[
								{ text: 'Urban planning', filterable: [], x: 935, y: 845, fontSize: 6 }
							],
							[
								{ text: 'Transport', filterable: [], x: 932, y: 865, fontSize: 6 },
								{ text: 'networks', filterable: [], x: 932, y: 871, fontSize: 6 }
							],
							[
								{ text: 'Road condition', filterable: [], x: 915, y: 890, fontSize: 6 },
								{ text: 'monitoring', filterable: [], x: 915, y: 896, fontSize: 6 }
							]
						]
					],
					[
						5,
						[
							[
								{ text: 'National air quality', filterable: [], x: 995, y: 800, fontSize: 5 },
								{ text: 'improvement', filterable: [], x: 995, y: 805, fontSize: 5 },
								{ text: 'measures', filterable: [], x: 995, y: 810, fontSize: 5 }
							],
							[
								{ text: 'Sustainable livestock', filterable: [], x: 990, y: 825, fontSize: 5 },
								{ text: 'management', filterable: [], x: 990, y: 830, fontSize: 5 },
								{ text: 'policies', filterable: [], x: 990, y: 835, fontSize: 5 }
							],
							[
								{ text: 'Climate change', filterable: [], x: 985, y: 850, fontSize: 5 },
								{ text: 'adaptation policies', filterable: [], x: 985, y: 855, fontSize: 5 }
							],
							[
								{ text: 'Expansion of', filterable: [], x: 975, y: 880, fontSize: 5 },
								{ text: 'renewable energy', filterable: [], x: 975, y: 885, fontSize: 5 }
							],
							[
								{ text: 'Хүн амын', filterable: [], x: 965, y: 900, fontSize: 5 },
								{ text: 'нягтрал', filterable: [], x: 965, y: 905, fontSize: 5 }
							],
							[
								{ text: 'Safe and Sustainable Road', filterable: [], x: 942, y: 925, fontSize: 5 },
								{ text: 'Infrastructure', filterable: [], x: 942, y: 930, fontSize: 5 },
								{ text: 'Development', filterable: [], x: 942, y: 935, fontSize: 5 }
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
								{ text: 'Transportation', filterable: [], x: 1275, y: 801, fontSize: 6 },
								{ text: 'problems', filterable: [], x: 1275, y: 807, fontSize: 6 }
							]
						]
					],
					[
						2,
						[
							[
								{ text: 'Poor', filterable: [], x: 1230, y: 805, fontSize: 7 },
								{ text: 'conditions', filterable: [], x: 1230, y: 812, fontSize: 7 }
							],
							[
								{ text: 'Resource', filterable: [], x: 1240, y: 828, fontSize: 7 },
								{ text: 'inefficiency', filterable: [], x: 1240, y: 835, fontSize: 7 }
							]
						]
					],
					[
						3,
						[
							[
								{ text: 'Air quality', filterable: [], x: 1188, y: 840, fontSize: 7, fontWeight: 600 },
								{ text: 'deterioration', filterable: [], x: 1188, y: 847, fontSize: 7, fontWeight: 600 }
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
								{ "text": "Environmental", "filterable": [], "x": 1077, "y": 835, "fontSize": 7 },
								{ "text": "hazards", "filterable": [], "x": 1085, "y": 842, "fontSize": 7 }
							],
							[
								{ "text": "Accident", "filterable": [], "x": 1115, "y": 910, "fontSize": 7 },
								{ "text": "Analysis", "filterable": [], "x": 1115, "y": 917, "fontSize": 7 }
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
								{ "text": "Access to", "filterable": [], "x": 815, "y": 765, "fontSize": 4 },
								{ "text": "preventive", "filterable": [], "x": 815, "y": 769, "fontSize": 4 },
								{ "text": "healthcare", "filterable": [], "x": 815, "y": 773, "fontSize": 4 }
							],
							[
								{ "text": "Basic needs", "filterable": [], "x": 818, "y": 782, "fontSize": 4 },
								{ "text": "accessibility", "filterable": [], "x": 818, "y": 786, "fontSize": 4 }
							],
							[
								{ "text": "Food", "filterable": [], "x": 803, "y": 783, "fontSize": 4 },
								{ "text": "quality", "filterable": [], "x": 803, "y": 787, "fontSize": 4 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Family food", "filterable": [], "x": 845, "y": 745, "fontSize": 5 },
								{ "text": "security", "filterable": [], "x": 845, "y": 750, "fontSize": 5 }
							],
							[
								{ "text": "Family health", "filterable": [], "x": 845, "y": 761, "fontSize": 5 },
								{ "text": "practices", "filterable": [], "x": 845, "y": 766, "fontSize": 5 }
							],
							[
								{ "text": "Household utilities", "filterable": [], "x": 845, "y": 780, "fontSize": 5 },
								{ "text": "access", "filterable": [], "x": 845, "y": 785, "fontSize": 5 }
							]
						]
					],
					[
						3,
						[
							[
								{ "text": "Urgent care", "filterable": [], "x": 880, "y": 725, "fontSize": 7 },
								{ "text": "centres", "filterable": [], "x": 880, "y": 732, "fontSize": 7 }
							],
							[
								{ "text": "Support for", "filterable": [], "x": 895, "y": 760, "fontSize": 7 },
								{ "text": "marginalised", "filterable": [], "x": 895, "y": 767, "fontSize": 7 },
								{ "text": "groups", "filterable": [], "x": 895, "y": 774, "fontSize": 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ "text": "Healthcare", "filterable": [], "x": 915, "y": 680, "fontSize": 7 },
								{ "text": "systems", "filterable": [], "x": 915, "y": 687, "fontSize": 7 }
							],
							[
								{ "text": "Maternal and", "filterable": [], "x": 932, "y": 720, "fontSize": 7 },
								{ "text": "child health", "filterable": [], "x": 932, "y": 727, "fontSize": 7 },
								{ "text": "programs", "filterable": [], "x": 932, "y": 734, "fontSize": 7 }
							],
							[
								{ "text": "Regional", "filterable": [], "x": 945, "y": 755, "fontSize": 7 },
								{ "text": "resource", "filterable": [], "x": 945, "y": 762, "fontSize": 7 },
								{ "text": "distribution", "filterable": [], "x": 945, "y": 769, "fontSize": 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Healthcare", "filterable": [], "x": 950, "y": 645, "fontSize": 7 },
								{ "text": "infrastructure", "filterable": [], "x": 950, "y": 652, "fontSize": 7 },
								{ "text": "quality", "filterable": [], "x": 950, "y": 659, "fontSize": 7 }
							],
							[
								{ "text": "National", "filterable": [], "x": 970, "y": 680, "fontSize": 7 },
								{ "text": "health", "filterable": [], "x": 970, "y": 687, "fontSize": 7 },
								{ "text": "coverage", "filterable": [], "x": 970, "y": 694, "fontSize": 7 }
							],
							[
								{ "text": "Medical", "filterable": [], "x": 990, "y": 725, "fontSize": 7 },
								{ "text": "treatment", "filterable": [], "x": 990, "y": 732, "fontSize": 7 },
								{ "text": "access", "filterable": [], "x": 990, "y": 739, "fontSize": 7 }
							],
							[
								{ "text": "Эмнэлгийн", "filterable": [], "x": 995, "y": 760, "fontSize": 7 },
								{ "text": "ачаалал", "filterable": [], "x": 995, "y": 767, "fontSize": 7 }
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
								{ "text": "Poor", "filterable": [], "x": 1295, "y": 782, "fontSize": 6 },
								{ "text": "health", "filterable": [], "x": 1295, "y": 788, "fontSize": 6 },
								{ "text": "habits", "filterable": [], "x": 1295, "y": 795, "fontSize": 6 }
							],
							[
								{ "text": "Personal", "filterable": [], "x": 1278, "y": 772, "fontSize": 5 },
								{ "text": "health", "filterable": [], "x": 1278, "y": 777, "fontSize": 5 },
								{ "text": "issues", "filterable": [], "x": 1278, "y": 782, "fontSize": 5 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Family health", "filterable": [], "x": 1230, "y": 780, "fontSize": 6 },
								{ "text": "barriers", "filterable": [], "x": 1230, "y": 786, "fontSize": 6 }
							],
							[
								{ "text": "Quality of", "filterable": [], "x": 1238, "y": 750, "fontSize": 7 },
								{ "text": "available food", "filterable": [], "x": 1238, "y": 756, "fontSize": 7 },
								{ "text": "options", "filterable": [], "x": 1238, "y": 762, "fontSize": 7 }
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
								{ "text": "Regional", "filterable": [], "x": 1152, "y": 730, "fontSize": 7, "textAnchor": "middle" },
								{ "text": "development", "filterable": [], "x": 1152, "y": 737, "fontSize": 7, "textAnchor": "middle" },
								{ "text": "gaps", "filterable": [], "x": 1152, "y": 744, "fontSize": 7, "textAnchor": "middle" }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Urban-rural", "filterable": [], "x": 1120, "y": 660, "fontSize": 7 },
								{ "text": "divide", "filterable": [], "x": 1120, "y": 667, "fontSize": 7 }
							],
							[
								{ "text": "Treatment", "filterable": [], "x": 1100, "y": 690, "fontSize": 7 },
								{ "text": "waiting times", "filterable": [], "x": 1100, "y": 697, "fontSize": 7 }
							],
							[
								{ "text": "Financial", "filterable": [], "x": 1085, "y": 740, "fontSize": 7 },
								{ "text": "barriers &", "filterable": [], "x": 1085, "y": 747, "fontSize": 7 },
								{ "text": "resource", "filterable": [], "x": 1085, "y": 754, "fontSize": 7 },
								{ "text": "shortages", "filterable": [], "x": 1085, "y": 761, "fontSize": 7 }
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
								{ "text": "Seasonal", "filterable": [], "x": 792, "y": 748, "fontSize": 4 },
								{ "text": "variation", "filterable": [], "x": 792, "y": 752, "fontSize": 4 },
								{ "text": "in earnings", "filterable": [], "x": 792, "y": 756, "fontSize": 4 }
							],
							[
								{ "text": "Income", "filterable": [], "x": 792, "y": 768, "fontSize": 4 },
								{ "text": "level", "filterable": [], "x": 792, "y": 772, "fontSize": 4 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Emergency", "filterable": [], "x": 793, "y": 700, "fontSize": 6 },
								{ "text": "fund", "filterable": [], "x": 793, "y": 706, "fontSize": 6 },
								{ "text": "status", "filterable": [], "x": 793, "y": 712, "fontSize": 6 }
							],
							[
								{ "text": "Combined", "filterable": [], "x": 793, "y": 725, "fontSize": 6 },
								{ "text": "income", "filterable": [], "x": 793, "y": 731, "fontSize": 6 }
							],
							[
								{ "text": "Insurance", "filterable": [], "x": 818, "y": 710, "fontSize": 6 },
								{ "text": "coverage", "filterable": [], "x": 818, "y": 716, "fontSize": 6 }
							],
							[
								{ "text": "Household", "filterable": [], "x": 825, "y": 723, "fontSize": 6 },
								{ "text": "wealth", "filterable": [], "x": 825, "y": 729, "fontSize": 6 }
							],
							[
								{ "text": "Property", "filterable": [], "x": 817, "y": 737, "fontSize": 6 },
								{ "text": "assets", "filterable": [], "x": 817, "y": 743, "fontSize": 6 }
							]
						]
					],
					[
						3,
						[
							[
								{ "text": "Employment", "filterable": [], "x": 793, "y": 655, "fontSize": 7 },
								{ "text": "rate", "filterable": [], "x": 793, "y": 662, "fontSize": 7 }
							],
							[
								{ "text": "Local market", "filterable": [], "x": 793, "y": 677, "fontSize": 7 },
								{ "text": "vitality", "filterable": [], "x": 793, "y": 684, "fontSize": 7 }
							],
							[
								{ "text": "Urban-rural", "filterable": [], "x": 836, "y": 672, "fontSize": 7 },
								{ "text": "economic", "filterable": [], "x": 836, "y": 678, "fontSize": 7 },
								{ "text": "linkages", "filterable": [], "x": 836, "y": 684, "fontSize": 7 }
							],
							[
								{ "text": "Access to", "filterable": [], "x": 850, "y": 697, "fontSize": 7 },
								{ "text": "loan", "filterable": [], "x": 850, "y": 704, "fontSize": 7 }
							]
						]
					],
					[
						4,
						[
							[
								{ "text": "Industry", "filterable": [], "x": 800, "y": 615, "fontSize": 7 },
								{ "text": "clusters", "filterable": [], "x": 800, "y": 622, "fontSize": 7 }
							],
							[
								{ "text": "Sectoral", "filterable": [], "x": 838, "y": 630, "fontSize": 7 },
								{ "text": "contribution", "filterable": [], "x": 838, "y": 637, "fontSize": 7 }
							],
							[
								{ "text": "Labor", "filterable": [], "x": 885, "y": 650, "fontSize": 7 },
								{ "text": "markets", "filterable": [], "x": 885, "y": 657, "fontSize": 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Foreign", "filterable": [], "x": 795, "y": 555, "fontSize": 6 },
								{ "text": "direct", "filterable": [], "x": 795, "y": 561, "fontSize": 6 },
								{ "text": "investment", "filterable": [], "x": 795, "y": 567, "fontSize": 6 }
							],
							[
								{ "text": "Capital market", "filterable": [], "x": 832, "y": 565, "fontSize": 6 },
								{ "text": "development", "filterable": [], "x": 832, "y": 571, "fontSize": 6 }
							],
							[
								{ "text": "Market", "filterable": [], "x": 850, "y": 584, "fontSize": 6 },
								{ "text": "competition", "filterable": [], "x": 850, "y": 590, "fontSize": 6 }
							],
							[
								{ "text": "Mortgage", "filterable": [], "x": 885, "y": 580, "fontSize": 6 },
								{ "text": "rate", "filterable": [], "x": 885, "y": 586, "fontSize": 6 }
							],
							[
								{ "text": "Export", "filterable": [], "x": 900, "y": 597, "fontSize": 6 },
								{ "text": "Import", "filterable": [], "x": 900, "y": 603, "fontSize": 6 },
								{ "text": "Balance", "filterable": [], "x": 900, "y": 609, "fontSize": 6 }
							],
							[
								{ "text": "Export", "filterable": [], "x": 925, "y": 620, "fontSize": 6 },
								{ "text": "diversity", "filterable": [], "x": 925, "y": 626, "fontSize": 6 },
								{ "text": "index", "filterable": [], "x": 925, "y": 632, "fontSize": 6 }
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
								{ "text": "Debt-to-", "filterable": [], "x": 792, "y": 275, "fontSize": 4 },
								{ "text": "Income", "filterable": [], "x": 792, "y": 280, "fontSize": 4 },
								{ "text": "Ratio", "filterable": [], "x": 792, "y": 285, "fontSize": 4 }
							],
							[
								{ "text": "Income", "filterable": [], "x": 792, "y": 295, "fontSize": 4 },
								{ "text": "mobility", "filterable": [], "x": 792, "y": 300, "fontSize": 4 },
								{ "text": "barriers", "filterable": [], "x": 792, "y": 305, "fontSize": 4 }
							]
						]
					],
					[
						2,
						[
							[
								{ "text": "Dependency", "filterable": [], "x": 794, "y": 335, "fontSize": 5 },
								{ "text": "ratio", "filterable": [], "x": 794, "y": 340, "fontSize": 5 },
								{ "text": "increase", "filterable": [], "x": 794, "y": 345, "fontSize": 5 }
							],
							[
								{ "text": "Household", "filterable": [], "x": 832, "y": 325, "fontSize": 5 },
								{ "text": "debt", "filterable": [], "x": 832, "y": 330, "fontSize": 5 },
								{ "text": "burden", "filterable": [], "x": 832, "y": 335, "fontSize": 5 }
							],
							[
								{ "text": "Declining", "filterable": [], "x": 810, "y": 315, "fontSize": 5 },
								{ "text": "savings", "filterable": [], "x": 810, "y": 320, "fontSize": 5 }
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
								{ "text": "Purchasing", "filterable": [], "x": 800, "y": 432, "fontSize": 7 },
								{ "text": "power erosion", "filterable": [], "x": 800, "y": 439, "fontSize": 7 }
							],
							[
								{ "text": "Wealth", "filterable": [], "x": 870, "y": 400, "fontSize": 7 },
								{ "text": "concentration", "filterable": [], "x": 870, "y": 407, "fontSize": 7 },
								{ "text": "ratio", "filterable": [], "x": 870, "y": 414, "fontSize": 7 }
							]
						]
					],
					[
						5,
						[
							[
								{ "text": "Higher", "filterable": [], "x": 800, "y": 480, "fontSize": 7 },
								{ "text": "taxes", "filterable": [], "x": 800, "y": 487, "fontSize": 7 }
							],
							[
								{ "text": "Underemployment", "filterable": [], "x": 860, "y": 460, "fontSize": 7 },
								{ "text": "rates", "filterable": [], "x": 860, "y": 467, "fontSize": 7 }
							],
							[
								{ "text": "External debt", "filterable": [], "x": 910, "y": 440, "fontSize": 7 },
								{ "text": "exposure", "filterable": [], "x": 910, "y": 447, "fontSize": 7 }
							],
							[
								{ "text": "Trade", "filterable": [], "x": 835, "y": 480, "fontSize": 7 },
								{ "text": "Balance", "filterable": [], "x": 835, "y": 487, "fontSize": 7 }
							]
						]
					],
				])
			]
		])
	]
])

const Chart = ({ filter }: Props) => {

	const ref = useRef<SVGSVGElement | null>(null);
	const [ level, setLevel ] = useState<Level | null>(5);

	const getProps = (type: FilterValueType, sectionId: Section, position: 'self' | 'center', index: number): Partial<SVGProps<SVGTextElement>> => {
		if (!filter) {
			return {  };
		}
		if (type === filter) {
			return {
				fill: '#39a636'
			}
		}
		return {

		}
	}

	useEffect(() => {
		if (ref.current) {
			// svgPanZoom(ref.current, {
			// 	controlIconsEnabled: true
			// });
		}
	}, []);

	const handleLevelChange = (value: typeof level) => {
		if (level === value) {
			setLevel(null);
			return;
		}
		setLevel(value);
	}

	const getCircleRadius = (lvl: Level): number => {
		if (!level) {
			return RADIUS_DEFAULT[lvl];
		}
		if (lvl === level) {
			return 250 - ((5 - lvl) * SHRINK_GAP);
		}
		if (lvl < level) {
			return lvl * SHRINK_GAP;
		}
		return 250 - ((5 - lvl) * SHRINK_GAP);
	};

	return (
		<svg ref={ref} width='100%' height='100%' viewBox='0 0 1580 1580' xmlns='http://www.w3.org/2000/svg' >
			{/*<rect width="1578" height="1578" x={1} y={1} stroke='black' strokeWidth={1} fill='none'/>*/}
			<rect className='rotate' width={760} height={760} x={410} y={410} stroke='black' strokeWidth={3} fill='none'/>

			<rect className='rotate' width={380} height={380} x={600} y={335} fill='red' fillOpacity={.5}/>
			<rect className='rotate' width={380} height={380} x={335} y={600} fill='#8282d8' fillOpacity={.5}/>
			<rect className='rotate' width={380} height={380} x={865} y={600} fill='#8dce8d' fillOpacity={.5}/>
			<rect className='rotate' width={380} height={380} x={600} y={865} fill='orange' fillOpacity={.5}/>
			<line x1="250" y1="790" x2="1330" y2="790" stroke="black" strokeWidth={2}/>
			<line x1="790" y1="250" x2="790" y2="1330" stroke="black" strokeWidth={2}/>

			{/*Top Circle*/}
			<g>
				<circle cx='790' cy='260' r='250' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='200' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='150' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='100' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='50' stroke='black' strokeWidth='1' fill='none' />
			</g>
			{/*Bottom Circle*/}
			<g>
				<circle cx='790' cy='1320' r='250' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='1320' r='200' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='1320' r='150' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='1320' r='100' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='1320' r='50' stroke='black' strokeWidth='1' fill='none' />
				{/*<circle cx='790' cy='1320' r='2' fill='red' />*/}
			</g>
			{/*Left Circle*/}
			<g>
				<circle cx='260' cy='790' r='250' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='260' cy='790' r='200' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='260' cy='790' r='150' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='260' cy='790' r='100' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='260' cy='790' r='50' stroke='black' strokeWidth='1' fill='none' />
			</g>
			{/*Right Circle*/}
			<g>
				<circle cx='1320' cy='790' r='250' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='1320' cy='790' r='200' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='1320' cy='790' r='150' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='1320' cy='790' r='100' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='1320' cy='790' r='50' stroke='black' strokeWidth='1' fill='none' />
			</g>

			{/* State-Top-1 */}
			{/*<g>*/}
			{/*	<text textAnchor='end' x="788" y="290" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Job quality</text>*/}
			{/*	<text textAnchor='end' x="788" y="295" fontSize={4} fontWeight={600} {...getProps('Inflation')}>degradation</text>*/}
			{/*</g>*/}
			{/* State-Top-4 */}
			{/*<g>*/}
			{/*	<text x="670" y="400" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Debt burden</text>*/}
			{/*	<text x="670" y="409" fontSize={7} fontWeight={600} {...getProps('Inflation')}>increase</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="745" y="420" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Industrial</text>*/}
			{/*	<text x="745" y="429" fontSize={7} fontWeight={600} {...getProps('Inflation')}>production</text>*/}
			{/*	<text x="745" y="438" fontSize={7} fontWeight={600} {...getProps('Inflation')}>decline</text>*/}
			{/*</g>*/}
			{/* State-Top-5 */}

			{/*<g>*/}
			{/*	<text x="630" y="423" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Unequal</text>*/}
			{/*	<text x="627" y="430" fontSize={7} fontWeight={600} {...getProps('Inflation')}>infrastructure</text>*/}
			{/*	<text x="627" y="437" fontSize={7} fontWeight={600} {...getProps('Inflation')}>development</text>*/}
			{/*</g>*/}

			{/*<g>*/}
			{/*	<text x="670" y="447" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Capital</text>*/}
			{/*	<text x="670" y="454" fontSize={7} fontWeight={600} {...getProps('Inflation')}>depreciation</text>*/}
			{/*	<text x="670" y="461" fontSize={7} fontWeight={600} {...getProps('Inflation')}>rate</text>*/}
			{/*</g>*/}

			{/*<g>*/}
			{/*	<text x="700" y="465" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Slow Real</text>*/}
			{/*	<text x="700" y="472" fontSize={7} fontWeight={600} {...getProps('Inflation')}>State</text>*/}
			{/*	<text x="700" y="479" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Market</text>*/}
			{/*</g>*/}

			{/*<g>*/}
			{/*	<text x="730" y="480" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Boost</text>*/}
			{/*	<text x="730" y="489" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Inflation</text>*/}
			{/*</g>*/}

			{/*<g>*/}
			{/*	<text x="755" y="470" fontSize={7} fontWeight={600} {...getProps('Inflation')} >Real wage</text>*/}
			{/*	<text x="755" y="477" fontSize={7} fontWeight={600} {...getProps('Inflation')}>decline</text>*/}
			{/*</g>*/}

			<g>
				<text x="600" y="520" fontSize={8} fontWeight={600} {...getProps('Inflation')}>Political influence</text>
				<text x="600" y="528" fontSize={8} fontWeight={600} {...getProps('Inflation')}>disproportionality</text>
			</g>

			{/* State-Center-5 */}
			{
				(level === 5 || level === null) && (
					<g>
						{/*<g>*/}
						{/*	<text x="630" y="610" fontSize={6} fontWeight={600} {...getProps('Inflation', Section.STATE, 'center', 1)}>Research &</text>*/}
						{/*	<text x="630" y="616" fontSize={6} fontWeight={600} {...getProps('Inflation')}>development</text>*/}
						{/*	<text x="630" y="622" fontSize={6} fontWeight={600} {...getProps('Inflation')}>expenditure</text>*/}
						{/*</g>*/}
						{/*<g>*/}
						{/*	<text x="660" y="595" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Tax</text>*/}
						{/*	<text x="660" y="601" fontSize={6} fontWeight={600} {...getProps('Inflation')}>revenue</text>*/}
						{/*</g>*/}
						{/*<g>*/}
						{/*	<text x="680" y="585" fontSize={6} fontWeight={600} {...getProps('Inflation')}>National</text>*/}
						{/*	<text x="680" y="591" fontSize={6} fontWeight={600} {...getProps('Inflation')}>debt</text>*/}
						{/*</g>*/}
						{/*<g>*/}
						{/*	<text x="700" y="570" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Currency</text>*/}
						{/*	<text x="700" y="576" fontSize={6} fontWeight={600} {...getProps('Inflation')}>stability</text>*/}
						{/*</g>*/}
						{/*<g>*/}
						{/*	<text x="734" y="560" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Central</text>*/}
						{/*	<text x="734" y="566" fontSize={6} fontWeight={600} {...getProps('Inflation')}>bank</text>*/}
						{/*	<text x="734" y="572" fontSize={6} fontWeight={600} {...getProps('Inflation')}>interest</text>*/}
						{/*	<text x="734" y="578" fontSize={6} fontWeight={600} {...getProps('Inflation')}>rate</text>*/}
						{/*</g>*/}
						{/*<g>*/}
						{/*	<text x="763" y="565" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Inflation</text>*/}
						{/*	<text x="763" y="571" fontSize={6} fontWeight={600} {...getProps('Inflation')}>rate</text>*/}
						{/*</g>*/}
					</g>
				)
			}

			{/* State-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="665" y="650" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Investment</text>
					// 		<text x="665" y="656" fontSize={6} fontWeight={600} {...getProps('Inflation')}>flows</text>
					// 	</g>
					// 	<g>
					// 		<text x="680" y="630" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Public sector</text>
					// 		<text x="680" y="636" fontSize={6} fontWeight={600} {...getProps('Inflation')}>investment</text>
					// 	</g>
					//
					// 	<g>
					// 		<text x="718" y="636" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Employment</text>
					// 		<text x="718" y="642" fontSize={6} fontWeight={600} {...getProps('Inflation')}>opportunity</text>
					// 	</g>
					// 	<g>
					// 		<text x="715" y="610" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Economic</text>
					// 		<text x="715" y="616" fontSize={6} fontWeight={600} {...getProps('Inflation')}>infrastructure</text>
					// 		<text x="715" y="622" fontSize={6} fontWeight={600} {...getProps('Inflation')}>quality</text>
					// 	</g>
					// 	<g>
					// 		<text x="757" y="600" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Economic</text>
					// 		<text x="757" y="606" fontSize={6} fontWeight={600} {...getProps('Inflation')}>opportunity</text>
					// 		<text x="757" y="612" fontSize={6} fontWeight={600} {...getProps('Inflation')}>distribution</text>
					// 	</g>
					// 	<g>
					// 		<text x="757" y="625" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Real GDP</text>
					// 		<text x="757" y="631" fontSize={6} fontWeight={600} {...getProps('Inflation')}>growth rate</text>
					// 	</g>
					// </g>
				)
			}

			{/* State-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="700" y="682" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Public</text>
					// 		<text x="700" y="689" fontSize={7} fontWeight={600} {...getProps('Inflation')}>infrastructure</text>
					// 		<text x="700" y="696" fontSize={7} fontWeight={600} {...getProps('Inflation')}>investment</text>
					// 	</g>
					// 	<g>
					// 		<text x="725" y="676" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Pension</text>
					// 	</g>
					// 	<g>
					// 		<text x="755" y="654" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Regional</text>
					// 		<text x="755" y="661" fontSize={7} fontWeight={600} {...getProps('Inflation')}>economic</text>
					// 		<text x="755" y="668" fontSize={7} fontWeight={600} {...getProps('Inflation')}>integration</text>
					// 	</g>
					// </g>
				)
			}

			{/* State-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text textAnchor='middle' x="762" y="720" fontSize={8} fontWeight={600} {...getProps('Inflation')}>Savings</text>
					// 		<text textAnchor='middle' x="762" y="728" fontSize={8} fontWeight={600} {...getProps('Inflation')}>rate</text>
					// 	</g>
					// </g>
				)
			}

			{/* State-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="766" y="752" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Financial</text>
					// 		<text x="766" y="757" fontSize={5} fontWeight={600} {...getProps('Inflation')}>literacy</text>
					// 	</g>
					// 	<g>
					// 		<text textAnchor='end' x="787" y="765" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Credit</text>
					// 		<text textAnchor='end' x="787" y="770" fontSize={5} fontWeight={600} {...getProps('Inflation')}>score</text>
					// 	</g>
					// </g>
				)
			}

			{/* Private-Top-1 */}
			{/*<g>*/}
			{/*	<text x="792" y="275" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Debt-to-</text>*/}
			{/*	<text x="792" y="280" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Income</text>*/}
			{/*	<text x="792" y="285" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Ratio</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="792" y="295" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Income</text>*/}
			{/*	<text x="792" y="300" fontSize={4} fontWeight={600} {...getProps('Inflation')}>mobility</text>*/}
			{/*	<text x="792" y="305" fontSize={4} fontWeight={600} {...getProps('Inflation')}>barriers</text>*/}
			{/*</g>*/}
			{/* Private-Top-2 */}
			{/*<g>*/}
			{/*	<text x="794" y="335" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Dependency</text>*/}
			{/*	<text x="794" y="340" fontSize={5} fontWeight={600} {...getProps('Inflation')}>ratio</text>*/}
			{/*	<text x="794" y="345" fontSize={5} fontWeight={600} {...getProps('Inflation')}>increase</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="832" y="325" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Household</text>*/}
			{/*	<text x="832" y="330" fontSize={5} fontWeight={600} {...getProps('Inflation')}>debt</text>*/}
			{/*	<text x="832" y="335" fontSize={5} fontWeight={600} {...getProps('Inflation')}>burden</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="810" y="315" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Declining</text>*/}
			{/*	<text x="810" y="320" fontSize={5} fontWeight={600} {...getProps('Inflation')}>savings</text>*/}
			{/*</g>*/}

			{/* Private-Top-4 */}
			{/*<g>*/}
			{/*	<text x="800" y="432" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Purchasing</text>*/}
			{/*	<text x="800" y="439" fontSize={7} fontWeight={600} {...getProps('Inflation')}>power erosion</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="870" y="400" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Wealth</text>*/}
			{/*	<text x="870" y="407" fontSize={7} fontWeight={600} {...getProps('Inflation')}>concentration</text>*/}
			{/*	<text x="870" y="414" fontSize={7} fontWeight={600} {...getProps('Inflation')}>ratio</text>*/}
			{/*</g>*/}
			{/* Private-Top-5 */}
			{/*<g>*/}
			{/*	<text x="800" y="480" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Higher</text>*/}
			{/*	<text x="800" y="487" fontSize={7} fontWeight={600} {...getProps('Inflation')}>taxes</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="860" y="460" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Underemployment</text>*/}
			{/*	<text x="860" y="467" fontSize={7} fontWeight={600} {...getProps('Inflation')}>rates</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="910" y="440" fontSize={7} fontWeight={600} {...getProps('Inflation')}>External debt</text>*/}
			{/*	<text x="910" y="447" fontSize={7} fontWeight={600} {...getProps('Inflation')}>exposure</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="835" y="480" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Trade</text>*/}
			{/*	<text x="835" y="487" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Balance</text>*/}
			{/*</g>*/}

			{/** MIDDLE TEXT */}
			<g>
				<text textAnchor='middle' x="940" y="530" fontSize={8} fontWeight={600} {...getProps('Inflation')}>Амжиргааны түвшний</text>
				<text textAnchor='middle' x="940" y="537" fontSize={8} fontWeight={600} {...getProps('Inflation')}>өсөлт</text>
			</g>

			{/* Private-Center-5 */}

			{
				(level === 5 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="795" y="555" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Foreign</text>
					// 		<text x="795" y="561" fontSize={6} fontWeight={600} {...getProps('Inflation')}>direct</text>
					// 		<text x="795" y="567" fontSize={6} fontWeight={600} {...getProps('Inflation')}>investment</text>
					// 	</g>
					// 	<g>
					// 		<text x="832" y="565" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Capital market</text>
					// 		<text x="832" y="571" fontSize={6} fontWeight={600} {...getProps('Inflation')}>development</text>
					// 	</g>
					// 	<g>
					// 		<text x="850" y="584" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Market</text>
					// 		<text x="850" y="590" fontSize={6} fontWeight={600} {...getProps('Inflation')}>competition</text>
					// 	</g>
					// 	<g>
					// 		<text x="885" y="580" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Mortgage</text>
					// 		<text x="885" y="586" fontSize={6} fontWeight={600} {...getProps('Inflation')}>rate</text>
					// 	</g>
					// 	<g>
					// 		<text x="900" y="597" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Export</text>
					// 		<text x="900" y="603" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Import</text>
					// 		<text x="900" y="609" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Balance</text>
					// 	</g>
					// 	<g>
					// 		<text x="925" y="620" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Export</text>
					// 		<text x="925" y="626" fontSize={6} fontWeight={600} {...getProps('Inflation')}>diversity</text>
					// 		<text x="925" y="632" fontSize={6} fontWeight={600} {...getProps('Inflation')}>index</text>
					// 	</g>
					// </g>
				)
			}

			{/* Private-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="800" y="615" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Industry</text>
					// 		<text x="800" y="622" fontSize={7} fontWeight={600} {...getProps('Inflation')}>clusters</text>
					// 	</g>
					// 	<g>
					// 		<text x="838" y="630" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Sectoral</text>
					// 		<text x="838" y="637" fontSize={7} fontWeight={600} {...getProps('Inflation')}>contribution</text>
					// 	</g>
					// 	<g>
					// 		<text x="885" y="650" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Labor</text>
					// 		<text x="885" y="657" fontSize={7} fontWeight={600} {...getProps('Inflation')}>markets</text>
					// 	</g>
					// </g>
				)
			}

			{/* Private-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="793" y="655" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Employment</text>
					// 		<text x="793" y="662" fontSize={7} fontWeight={600} {...getProps('Inflation')}>rate</text>
					// 	</g>
					// 	<g>
					// 		<text x="793" y="677" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Local market</text>
					// 		<text x="793" y="684" fontSize={7} fontWeight={600} {...getProps('Inflation')}>vitality</text>
					// 	</g>
					// 	<g>
					// 		<text x="836" y="672" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Urban-rural</text>
					// 		<text x="836" y="678" fontSize={7} fontWeight={600} {...getProps('Inflation')}>economic</text>
					// 		<text x="836" y="684" fontSize={7} fontWeight={600} {...getProps('Inflation')}>linkages</text>
					// 	</g>
					// 	<g>
					// 		<text x="850" y="697" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Access to</text>
					// 		<text x="850" y="704" fontSize={7} fontWeight={600} {...getProps('Inflation')}>loan</text>
					// 	</g>
					// </g>
				)
			}

			{/* Private-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="793" y="700" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Emergency</text>
					// 		<text x="793" y="706" fontSize={6} fontWeight={600} {...getProps('Inflation')}>fund</text>
					// 		<text x="793" y="712" fontSize={6} fontWeight={600} {...getProps('Inflation')}>status</text>
					// 	</g>
					// 	<g>
					// 		<text x="793" y="725" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Combined</text>
					// 		<text x="793" y="731" fontSize={6} fontWeight={600} {...getProps('Inflation')}>income</text>
					// 	</g>
					// 	<g>
					// 		<text x="818" y="710" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Insurance</text>
					// 		<text x="818" y="716" fontSize={6} fontWeight={600} {...getProps('Inflation')}>coverage</text>
					// 	</g>
					// 	<g>
					// 		<text x="825" y="723" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Household</text>
					// 		<text x="825" y="729" fontSize={6} fontWeight={600} {...getProps('Inflation')}>wealth</text>
					// 	</g>
					// 	<g>
					// 		<text x="817" y="737" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Property</text>
					// 		<text x="817" y="743" fontSize={6} fontWeight={600} {...getProps('Inflation')}>assets</text>
					// 	</g>
					// </g>
				)
			}
			{/* Private-Center-1 */}

			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="792" y="748" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Seasonal</text>
					// 		<text x="792" y="752" fontSize={4} fontWeight={600} {...getProps('Inflation')}>variation</text>
					// 		<text x="792" y="756" fontSize={4} fontWeight={600} {...getProps('Inflation')}>in earnings</text>
					// 	</g>
					// 	<g>
					// 		<text x="792" y="768" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Income</text>
					// 		<text x="792" y="772" fontSize={4} fontWeight={600} {...getProps('Inflation')}>level</text>
					// 	</g>
					// </g>
				)
			}

			{/* Social-Left-1 */}
			{/*<g>*/}
			{/*	<text x="273" y="780" fontSize={6} fontWeight={600}>Lack of self</text>*/}
			{/*	<text x="278" y="786" fontSize={6} fontWeight={600}>identity</text>*/}
			{/*</g>*/}
			{/* Social-Left-2 */}
			{/*<g>*/}
			{/*	<text x="310" y="745" fontSize={7} fontWeight={600}>Lack of</text>*/}
			{/*	<text x="310" y="752" fontSize={7} fontWeight={600}>parental</text>*/}
			{/*	<text x="310" y="759" fontSize={7} fontWeight={600}>participation</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="320" y="778" fontSize={7} fontWeight={600}>Limited</text>*/}
			{/*	<text x="320" y="785" fontSize={7} fontWeight={600}>access</text>*/}
			{/*</g>*/}
			{/* Social-Left-3 */}
			{/*<g>*/}
			{/*	<text x="350" y="710" fontSize={7} fontWeight={600}>Cost</text>*/}
			{/*	<text x="350" y="717" fontSize={7} fontWeight={600}>barriers</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="360" y="740" fontSize={7} fontWeight={600}>Limited</text>*/}
			{/*	<text x="360" y="747" fontSize={7} fontWeight={600}>access</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="365" y="770" fontSize={7} fontWeight={600}>Lack of</text>*/}
			{/*	<text x="365" y="777" fontSize={7} fontWeight={600}>participation</text>*/}
			{/*</g>*/}
			{/* Social-Left-4 */}
			{/*<g>*/}
			{/*	<text x="395" y="700" fontSize={7} fontWeight={600}>Generation</text>*/}
			{/*	<text x="395" y="707" fontSize={7} fontWeight={600}>differences</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="420" y="760" fontSize={7} fontWeight={600}>School</text>*/}
			{/*	<text x="420" y="767" fontSize={7} fontWeight={600}>culture</text>*/}
			{/*</g>*/}
			{/* Social-Left-5 */}
			{/*<g>*/}
			{/*	<text x="420" y="640" fontSize={7} fontWeight={600}>Lack of</text>*/}
			{/*	<text x="420" y="647" fontSize={7} fontWeight={600}>long-term</text>*/}
			{/*	<text x="420" y="654" fontSize={7} fontWeight={600}>planning</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="450" y="685" fontSize={7} fontWeight={600}>Short</text>*/}
			{/*	<text x="450" y="692" fontSize={7} fontWeight={600}>term</text>*/}
			{/*	<text x="450" y="699" fontSize={7} fontWeight={600}>solutions</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="458" y="725" fontSize={7} fontWeight={600}>Gaps in</text>*/}
			{/*	<text x="458" y="732" fontSize={7} fontWeight={600}>non-direct</text>*/}
			{/*	<text x="458" y="739" fontSize={7} fontWeight={600}>educational</text>*/}
			{/*	<text x="465" y="746" fontSize={7} fontWeight={600}>skills</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="463" y="780" fontSize={7} fontWeight={600}>Discrimination</text>*/}
			{/*</g>*/}
			{/* Social-Center-5 */}
			{
				(level === 5 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="553" y="775" fontSize={7} fontWeight={600}>Religion</text>
					// 		<text x="553" y="782" fontSize={7} fontWeight={600}>education</text>
					// 	</g>
					// 	<g>
					// 		<text x="560" y="733" fontSize={7} fontWeight={600}>Civic</text>
					// 		<text x="555" y="740" fontSize={7} fontWeight={600}>education</text>
					// 	</g>
					// 	<g>
					// 		<text x="575" y="690" fontSize={7} fontWeight={600}>Global</text>
					// 		<text x="570" y="697" fontSize={7} fontWeight={600}>awareness</text>
					// 	</g>
					// 	<g>
					// 		<text x="595" y="650" fontSize={7} fontWeight={600}>National</text>
					// 		<text x="595" y="657" fontSize={7} fontWeight={600}>identity</text>
					// 		<text x="595" y="664" fontSize={7} fontWeight={600}>strength</text>
					// 	</g>
					// </g>
				)
			}
			{/* Social-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="630" y="680" fontSize={6} fontWeight={600}>Public discourse</text>
					// 		<text x="630" y="686" fontSize={6} fontWeight={600}>quality</text>
					// 	</g>
					// 	<g>
					// 		<text x="617" y="705" fontSize={6} fontWeight={600}>Intergenerational</text>
					// 		<text x="617" y="711" fontSize={6} fontWeight={600}>mobility</text>
					// 	</g>
					// 	<g>
					// 		<text x="610" y="725" fontSize={6} fontWeight={600}>Civil society</text>
					// 		<text x="610" y="731" fontSize={6} fontWeight={600}>strength</text>
					// 	</g>
					// 	<g>
					// 		<text x="600" y="750" fontSize={6} fontWeight={600}>Cultural heritage</text>
					// 		<text x="600" y="756" fontSize={6} fontWeight={600}>preservation</text>
					// 	</g>
					// 	<g>
					// 		<text x="605" y="775" fontSize={6} fontWeight={600}>Inclusive</text>
					// 		<text x="605" y="781" fontSize={6} fontWeight={600}>culture</text>
					// 	</g>
					// </g>
				)
			}

			{/* Social-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="670" y="710" fontSize={6} fontWeight={600}>Social and</text>
					// 		<text x="670" y="716" fontSize={6} fontWeight={600}>Recreational</text>
					// 		<text x="670" y="722" fontSize={6} fontWeight={600}>opportunities</text>
					// 	</g>
					// 	<g>
					// 		<text x="658" y="735" fontSize={6} fontWeight={600}>Community</text>
					// 		<text x="658" y="741" fontSize={6} fontWeight={600}>participation</text>
					// 	</g>
					// 	<g>
					// 		<text x="655" y="755" fontSize={6} fontWeight={600}>Community</text>
					// 		<text x="655" y="761" fontSize={6} fontWeight={600}>forums</text>
					// 	</g>
					// 	<g>
					// 		<text x="655" y="775" fontSize={6} fontWeight={600}>Language</text>
					// 		<text x="655" y="781" fontSize={6} fontWeight={600}>programs</text>
					// 	</g>
					// </g>
				)
			}

			{/* Social-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="715" y="740" fontSize={6} fontWeight={600}>Digital</text>
					// 		<text x="715" y="746" fontSize={6} fontWeight={600}>literacy</text>
					// 	</g>
					// 	<g>
					// 		<text x="710" y="760" fontSize={6} fontWeight={600}>Parental</text>
					// 		<text x="710" y="766" fontSize={6} fontWeight={600}>engagement</text>
					// 	</g>
					// 	<g>
					// 		<text x="705" y="779" fontSize={6} fontWeight={600}>Family</text>
					// 		<text x="705" y="785" fontSize={6} fontWeight={600}>traditions</text>
					// 	</g>
					// </g>
				)
			}

			{/* Social-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="750" y="767" fontSize={4} fontWeight={600}>Self</text>
					// 		<text x="747" y="771" fontSize={4} fontWeight={600}>expression</text>
					// 	</g>
					// 	<g>
					// 		<text x="747" y="782" fontSize={4} fontWeight={600}>Free</text>
					// 		<text x="745" y="786" fontSize={4} fontWeight={600}>thinking</text>
					// 	</g>
					// 	<g>
					// 		<text x="767" y="786" fontSize={7} fontWeight={600}>EQ</text>
					// 	</g>
					// </g>
				)
			}

			{/* Education-Left-1 */}
			{/*<g>*/}
			{/*	<text x="273" y="798" fontSize={6} fontWeight={600}>Old school</text>*/}
			{/*	<text x="273" y="804" fontSize={6} fontWeight={600}>environment</text>*/}
			{/*</g>*/}
			{/* Education-Left-2 */}
			{/*<g>*/}
			{/*	<text x="312" y="808" fontSize={6} fontWeight={600}>Traditional-only</text>*/}
			{/*	<text x="312" y="814" fontSize={6} fontWeight={600}>learning space</text>*/}
			{/*	<text x="312" y="820" fontSize={6} fontWeight={600}>& Lack of</text>*/}
			{/*	<text x="312" y="826" fontSize={6} fontWeight={600}>accessibility</text>*/}
			{/*</g>*/}
			{/* Education-Left-3 */}
			{/*<g>*/}
			{/*	<text x="362" y="815" fontSize={7} fontWeight={600}>Dropout rate</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="350" y="850" fontSize={7} fontWeight={600}>Limited access</text>*/}
			{/*</g>*/}
			{/* Education-Left-4 */}
			{/*<g>*/}
			{/*	<text x="415" y="810" fontSize={7} fontWeight={600}>Internet</text>*/}
			{/*	<text x="415" y="817" fontSize={7} fontWeight={600}>penetration</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="395" y="870" fontSize={7} fontWeight={600}>Study materials</text>*/}
			{/*	<text x="395" y="877" fontSize={7} fontWeight={600}>and content</text>*/}
			{/*	<text x="395" y="884" fontSize={7} fontWeight={600}>upgrade</text>*/}
			{/*</g>*/}
			{/* Education-Left-5 */}
			{/*<g>*/}
			{/*	<text x="470" y="800" fontSize={6} fontWeight={600}>Digital</text>*/}
			{/*	<text x="470" y="806" fontSize={6} fontWeight={600}>divide in</text>*/}
			{/*	<text x="470" y="812" fontSize={6} fontWeight={600}>learning</text>*/}
			{/*	<text x="470" y="818" fontSize={6} fontWeight={600}>access</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="462" y="838" fontSize={6} fontWeight={600}>Traditional</text>*/}
			{/*	<text x="462" y="844" fontSize={6} fontWeight={600}>teaching</text>*/}
			{/*	<text x="462" y="850" fontSize={6} fontWeight={600}>methods</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="450" y="865" fontSize={6} fontWeight={600}>Quality of public</text>*/}
			{/*	<text x="450" y="871" fontSize={6} fontWeight={600}>kindergarten</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="440" y="890" fontSize={6} fontWeight={600}>Public vs</text>*/}
			{/*	<text x="440" y="896" fontSize={6} fontWeight={600}>Private</text>*/}
			{/*	<text x="440" y="902" fontSize={6} fontWeight={600}>contrast</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="420" y="925" fontSize={6} fontWeight={600}>Overcrowded</text>*/}
			{/*	<text x="420" y="931" fontSize={6} fontWeight={600}>public</text>*/}
			{/*	<text x="420" y="937" fontSize={6} fontWeight={600}>establishment</text>*/}
			{/*</g>*/}

			{/* Education-Center-5 */}
			{
				(level === 5 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="550" y="800" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Educational</text>
					// 		<text x="550" y="807" fontSize={7} fontWeight={600} {...getProps('Inflation')}>expense</text>
					// 	</g>
					// 	<g>
					// 		<text x="550" y="830" fontSize={7} fontWeight={600}>Social norm</text>
					// 	</g>
					// 	<g>
					// 		<text x="555" y="850" fontSize={7} fontWeight={600}>Сургалтын</text>
					// 		<text x="555" y="857" fontSize={7} fontWeight={600}>чанар</text>
					// 	</g>
					// 	<g>
					// 		<text x="565" y="880" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Сургалтын</text>
					// 		<text x="565" y="887" fontSize={7} fontWeight={600} {...getProps('Inflation')}>орчин</text>
					// 	</g>
					// 	<g>
					// 		<text x="585" y="905" fontSize={7} fontWeight={600}>Ерөнхий</text>
					// 		<text x="585" y="912" fontSize={7} fontWeight={600}>боловсролын</text>
					// 		<text x="585" y="919" fontSize={7} fontWeight={600}>сургуулийн</text>
					// 		<text x="585" y="926" fontSize={7} fontWeight={600}>тоо</text>
					// 	</g>
					// </g>
				)
			}

			{/* Education-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="595" y="800" fontSize={7} fontWeight={600}>Instructional</text>
					// 		<text x="595" y="807" fontSize={7} fontWeight={600}>quality</text>
					// 	</g>
					// 	<g>
					// 		<text x="605" y="840" fontSize={7} fontWeight={600}>School</text>
					// 		<text x="605" y="847" fontSize={7} fontWeight={600}>performance</text>
					// 		<text x="605" y="854" fontSize={7} fontWeight={600}>scores</text>
					// 	</g>
					// 	<g>
					// 		<text x="625" y="880" fontSize={7} fontWeight={600}>Innovative</text>
					// 		<text x="625" y="887" fontSize={7} fontWeight={600}>methods</text>
					// 	</g>
					// </g>
				)
			}

			{/* Education-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text textAnchor='middle' x="665" y="800" fontSize={6} fontWeight={600}>Education</text>
					// 		<text textAnchor='middle' x="665" y="806" fontSize={6} fontWeight={600}>attainment levels</text>
					// 	</g>
					// 	<g>
					// 		<text textAnchor='middle' x="675" y="830" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Access to</text>
					// 		<text textAnchor='middle' x="675" y="836" fontSize={6} fontWeight={600} {...getProps('Inflation')}>educational</text>
					// 		<text textAnchor='middle' x="675" y="842" fontSize={6} fontWeight={600} {...getProps('Inflation')}>facilities</text>
					// 	</g>
					// 	<g>
					// 		<text textAnchor='middle' x="685" y="865" fontSize={6} fontWeight={600}>Access to</text>
					// 		<text textAnchor='middle' x="685" y="871" fontSize={6} fontWeight={600}>programs</text>
					// 	</g>
					// </g>
				)
			}

			{/* Education-Center-2 */}
			{
				(level === 2 || level === null) && (
					<g>
						<g>
							<text x="700" y="800" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Educational</text>
							<text x="700" y="806" fontSize={6} fontWeight={600} {...getProps('Inflation')}>resources</text>
						</g>
						<g>
							<text x="702" y="817" fontSize={6} fontWeight={600}>Home learning</text>
							<text x="702" y="823" fontSize={6} fontWeight={600}>space</text>
						</g>
						<g>
							<text x="710" y="833" fontSize={6} fontWeight={600}>Learning</text>
							<text x="710" y="839" fontSize={6} fontWeight={600}>activities</text>
						</g>
					</g>
				)
			}

			{/* Education-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="743" y="795" fontSize={4} fontWeight={600}>Learning</text>
					// 		<text x="743" y="799" fontSize={4} fontWeight={600}>progress</text>
					// 	</g>
					// 	<g>
					// 		<text x="745" y="805" fontSize={4} fontWeight={600}>Hard vs Soft skills</text>
					// 		<text x="745" y="809" fontSize={4} fontWeight={600}>developments</text>
					// 	</g>
					// 	<g>
					// 		<text x="770" y="798" fontSize={7} fontWeight={600}>IQ</text>
					// 	</g>
					// </g>
				)
			}

			{/* Government-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text textAnchor='end' x="788" y="819" fontSize={4} fontWeight={600}>Accessibility</text>
					// 		<text textAnchor='end' x="788" y="823" fontSize={4} fontWeight={600}>of Government</text>
					// 		<text textAnchor='end' x="788" y="827" fontSize={4} fontWeight={600}>Services</text>
					// 	</g>
					// </g>
				)
			}
			{/* Government-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="750" y="848" fontSize={5} fontWeight={600}>Housing Program</text>
					// 		<text x="750" y="853" fontSize={5} fontWeight={600}>Effectiveness</text>
					// 	</g>
					// 	<g>
					// 		<text x="750" y="865" fontSize={5} fontWeight={600}>Equity in social</text>
					// 		<text x="750" y="870" fontSize={5} fontWeight={600}>welfare</text>
					// 	</g>
					// </g>
				)
			}

			{/* Government-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="705" y="895" fontSize={6} fontWeight={600}>Disaster Preparedness</text>
					// 	</g>
					// 	<g>
					// 		<text x="735" y="910" fontSize={6} fontWeight={600}>Local Governance</text>
					// 		<text x="735" y="916" fontSize={6} fontWeight={600}>Transparency</text>
					// 	</g>
					// </g>
				)
			}

			{/* Government-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="660" y="930" fontSize={6} fontWeight={600}>Inclusivity in National</text>
					// 		<text x="660" y="936" fontSize={6} fontWeight={600}>Decision-Making</text>
					// 	</g>
					// 	<g>
					// 		<text x="690" y="950" fontSize={6} fontWeight={600}>Anti-Corruption</text>
					// 		<text x="690" y="956" fontSize={6} fontWeight={600}>Measures</text>
					// 	</g>
					// 	<g>
					// 		<text x="730" y="965" fontSize={6} fontWeight={600}>Quality of Legislative</text>
					// 		<text x="730" y="971" fontSize={6} fontWeight={600}>Oversight</text>
					// 	</g>
					// </g>
				)
			}


			{/** MIDDLE TEXT */}
			<g>
				<text textAnchor='middle' x="630" y="1030" fontSize={8} fontWeight={600}>Weak implementation</text>
				<text textAnchor='middle' x="630" y="1038" fontSize={8} fontWeight={600}>and control</text>
			</g>
			<g>
				<text textAnchor='middle' x="630" y="1080" fontSize={8} fontWeight={600}>Judicial system</text>
				<text textAnchor='middle' x="630" y="1088" fontSize={8} fontWeight={600}>corruption</text>
			</g>
			<g>
				<text textAnchor='middle' x="745" y="1055" fontSize={8} fontWeight={600}>Crisis management</text>
				<text textAnchor='middle' x="745" y="1063" fontSize={8} fontWeight={600}>Systems</text>
			</g>


			{/* Government-Center-5 */}

			{
				(level === 5 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="630" y="963" fontSize={7} fontWeight={600}>Decentralization</text>
					// 		<text x="630" y="970" fontSize={7} fontWeight={600}>Effectiveness</text>
					// 	</g>
					// 	<g>
					// 		<text x="650" y="985" fontSize={7} fontWeight={600}>Judicial Independence</text>
					// 		<text x="650" y="992" fontSize={7} fontWeight={600}>and Rule of Law</text>
					// 	</g>
					// 	<g>
					// 		<text x="720" y="998" fontSize={7} fontWeight={600}>Fiscal Accountability</text>
					// 		<text x="720" y="1005" fontSize={7} fontWeight={600}>and Transparency</text>
					// 	</g>
					// 	<g>
					// 		<text x="730" y="1020" fontSize={7} fontWeight={600}>Long-Term</text>
					// 		<text x="730" y="1027" fontSize={7} fontWeight={600}>Strategic Planning</text>
					// 	</g>
					// </g>
				)
			}

			{/* Government-Bottom-5 */}
			{/*<g>*/}
			{/*	<text x="720" y="1100" fontSize={7} fontWeight={600}>Power concentration</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="670" y="1115" fontSize={7} fontWeight={600}>Fragmented social</text>*/}
			{/*	<text x="670" y="1122" fontSize={7} fontWeight={600}>support systems</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="640" y="1145" fontSize={7} fontWeight={600}>Economic</text>*/}
			{/*	<text x="640" y="1152" fontSize={7} fontWeight={600}>pressure</text>*/}
			{/*</g>*/}
			{/* Government-Bottom-4 */}

			{/*<g>*/}
			{/*	<text x="657" y="1180" fontSize={7} fontWeight={600}>Bureaucratic red tape &</text>*/}
			{/*	<text x="657" y="1187" fontSize={7} fontWeight={600}>technological gap</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="690" y="1160" fontSize={7} fontWeight={600}>Incompatible systems &</text>*/}
			{/*	<text x="690" y="1167" fontSize={7} fontWeight={600}>limited data sharing</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="717" y="1142" fontSize={7} fontWeight={600}>Political influence &</text>*/}
			{/*	<text x="717" y="1149" fontSize={7} fontWeight={600}>inequitable distribution</text>*/}
			{/*</g>*/}

			{/* Government-Bottom-3 */}
			{/*<g>*/}
			{/*	<text x="702" y="1222" fontSize={7} fontWeight={600}>Funding shortages</text>*/}
			{/*	<text x="702" y="1229" fontSize={7} fontWeight={600}>and lack of</text>*/}
			{/*	<text x="702" y="1236" fontSize={7} fontWeight={600}>awareness</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="715" y="1196" fontSize={7} fontWeight={600}>Lack of</text>*/}
			{/*	<text x="715" y="1203" fontSize={7} fontWeight={600}>emergency</text>*/}
			{/*	<text x="715" y="1210" fontSize={7} fontWeight={600}>plan</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text textAnchor='end' x="787" y="1185" fontSize={7} fontWeight={600}>Underreporting</text>*/}
			{/*	<text textAnchor='end' x="787" y="1192" fontSize={7} fontWeight={600}>of crimes</text>*/}
			{/*	<text textAnchor='end' x="787" y="1199" fontSize={7} fontWeight={600}>or lack of</text>*/}
			{/*	<text textAnchor='end' x="787" y="1206" fontSize={7} fontWeight={600}>reporting</text>*/}
			{/*	<text textAnchor='end' x="787" y="1213" fontSize={7} fontWeight={600}>channels</text>*/}
			{/*</g>*/}

			{/* Government-Bottom-2 */}
			{/*<g>*/}
			{/*	<text x="740" y="1256" fontSize={7} fontWeight={600}>Wrongful</text>*/}
			{/*	<text x="740" y="1263" fontSize={7} fontWeight={600}>detention</text>*/}
			{/*	<text x="740" y="1270" fontSize={7} fontWeight={600}>rates</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text textAnchor='end' x="786" y="1235" fontSize={7} fontWeight={600}>Lack of</text>*/}
			{/*	<text textAnchor='end' x="786" y="1242" fontSize={7} fontWeight={600}>representation</text>*/}
			{/*</g>*/}

			{/* Government-Bottom-1 */}
			{/*<g>*/}
			{/*	<text textAnchor='end' x="787" y="1284" fontSize={6} fontWeight={600}>Voters</text>*/}
			{/*	<text textAnchor='end' x="787" y="1290" fontSize={6} fontWeight={600}>suppression</text>*/}
			{/*</g>*/}


			{/* Social-Bottom-1 */}
			{/*<g>*/}
			{/*	<text x="792" y="1285" fontSize={6} fontWeight={600}>Civil rights</text>*/}
			{/*	<text x="792" y="1291" fontSize={6} fontWeight={600}>violation</text>*/}
			{/*</g>*/}

			{/* Social-Bottom-2 */}
			{/*<g>*/}
			{/*	<text x="810" y="1250" fontSize={7} fontWeight={600}>Financial</text>*/}
			{/*	<text x="810" y="1257" fontSize={7} fontWeight={600}>dependency</text>*/}
			{/*</g>*/}

			{/* Social-Bottom-3 */}
			{/*<g>*/}
			{/*	<text x="800" y="1208" fontSize={7} fontWeight={600}>Resource</text>*/}
			{/*	<text x="800" y="1215" fontSize={7} fontWeight={600}>constraints</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="795" y="1197" fontSize={7} fontWeight={600}>Insufficient Accessibility</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="845" y="1215" fontSize={7} fontWeight={600}>High cost and</text>*/}
			{/*	<text x="845" y="1221" fontSize={7} fontWeight={600}>shortage of</text>*/}
			{/*	<text x="845" y="1227" fontSize={7} fontWeight={600}>resource</text>*/}
			{/*</g>*/}
			{/* Social-Bottom-4 */}
			{/*<g>*/}
			{/*	<text x="810" y="1145" fontSize={7} fontWeight={600}>Lack of support</text>*/}
			{/*	<text x="810" y="1152" fontSize={7} fontWeight={600}>services</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="865" y="1170" fontSize={7} fontWeight={600}>Conflicting</text>*/}
			{/*	<text x="865" y="1177" fontSize={7} fontWeight={600}>interest</text>*/}
			{/*</g>*/}

			{/* Social-Bottom-5 */}
			{/*<g>*/}
			{/*	<text x="800" y="1095" fontSize={7} fontWeight={600}>Centralized</text>*/}
			{/*	<text x="800" y="1102" fontSize={7} fontWeight={600}>Control</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="850" y="1110" fontSize={7} fontWeight={600}>Rural neglects,</text>*/}
			{/*	<text x="850" y="1117" fontSize={7} fontWeight={600}>overcrowding</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="910" y="1140" fontSize={7} fontWeight={600}>Corruption</text>*/}
			{/*	<text x="910" y="1147" fontSize={7} fontWeight={600}>perception</text>*/}
			{/*</g>*/}

			{/* Social-Center-5 */}

			{
				(level === 5 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="795" y="1010" fontSize={7} fontWeight={600}>National social</text>
					// 		<text x="795" y="1017" fontSize={7} fontWeight={600}>dialogue</text>
					// 	</g>
					// 	<g>
					// 		<text x="850" y="1000" fontSize={7} fontWeight={600}>Minority rights</text>
					// 		<text x="850" y="1007" fontSize={7} fontWeight={600}>protection</text>
					// 	</g>
					// 	<g>
					// 		<text x="890" y="980" fontSize={7} fontWeight={600}>Civil society</text>
					// 		<text x="890" y="987" fontSize={7} fontWeight={600}>engagement</text>
					// 	</g>
					// </g>
				)
			}

			<g>
				<text x="937" y="962" transform={(level !== null && level !== 5) ? "translate(11 11)" : undefined} fontSize={18} fontWeight={600}>V</text>
			</g>
			{/* Social-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="795" y="960" fontSize={7} fontWeight={600}>Social</text>
					// 		<text x="795" y="967" fontSize={7} fontWeight={600}>cohesion</text>
					// 		<text x="795" y="974" fontSize={7} fontWeight={600}>measures</text>
					// 	</g>
					// 	<g>
					// 		<text x="830" y="955" fontSize={7} fontWeight={600}>Collective</text>
					// 		<text x="830" y="962" fontSize={7} fontWeight={600}>action</text>
					// 		<text x="830" y="969" fontSize={7} fontWeight={600}>capacity</text>
					// 	</g>
					// 	<g>
					// 		<text x="865" y="940" fontSize={7} fontWeight={600}>Public Trust in</text>
					// 		<text x="865" y="947" fontSize={7} fontWeight={600}>Governance</text>
					// 	</g>
					// 	<g>
					// 		<text x="900" y="925" fontSize={18} fontWeight={600}>IV</text>
					// 	</g>
					// </g>
				)
			}

			{/* Social-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="793" y="918" fontSize={7} fontWeight={600}>Community</text>
					// 		<text x="793" y="925" fontSize={7} fontWeight={600}>Infrastructure</text>
					// 		<text x="793" y="932" fontSize={7} fontWeight={600}>Development</text>
					// 	</g>
					// 	<g>
					// 		<text x="810" y="900" fontSize={7} fontWeight={600}>Public Participation in</text>
					// 		<text x="810" y="907" fontSize={7} fontWeight={600}>Local Governance</text>
					// 	</g>
						<g>
							<text x="865" y="890" fontSize={18} fontWeight={600}>III</text>
						</g>
					// </g>
				)
			}

			{/* Social-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="795" y="845" fontSize={5} fontWeight={600}>Local Safety</text>
					// 		<text x="795" y="850" fontSize={5} fontWeight={600}>Measures</text>
					// 	</g>
					// 	<g>
					// 		<text x="795" y="860" fontSize={5} fontWeight={600}>Social network</text>
					// 		<text x="795" y="865" fontSize={5} fontWeight={600}>engagement</text>
					// 	</g>
					// 	<g>
					// 		<text x="795" y="875" fontSize={5} fontWeight={600}>Social responsibility</text>
					// 		<text x="795" y="880" fontSize={5} fontWeight={600}>awareness</text>
					// 	</g>
						<g>
							<text x="832" y="853" fontSize={18} fontWeight={600}>II</text>
						</g>
					// </g>
				)
			}

			{/* Social-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="792" y="825" fontSize={4} fontWeight={600}>Knowledge of</text>
					// 		<text x="792" y="829" fontSize={4} fontWeight={600}>Rights and Legal</text>
					// 		<text x="792" y="833" fontSize={4} fontWeight={600}>Protections</text>
					// 	</g>
					// </g>
				)
			}

			{/* External-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="805" y="795" fontSize={4} fontWeight={600}>Personal mobility</text>
					// 		<text x="805" y="799" fontSize={4} fontWeight={600}>access</text>
					// 	</g>
					// 	<g>
					// 		<text x="815" y="805" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Home</text>
					// 		<text x="815" y="809" fontSize={4} fontWeight={600} {...getProps('Inflation')}>environment</text>
					// 		<text x="815" y="813" fontSize={4} fontWeight={600} {...getProps('Inflation')}>quality</text>
					// 	</g>
					// </g>
				)
			}

			{/* External-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="842" y="800" fontSize={6} fontWeight={600}>Living conditions</text>
					// 		<text x="842" y="805" fontSize={6} fontWeight={600}>quality</text>
					// 	</g>
					// 	<g>
					// 		<text x="835" y="820" fontSize={6} fontWeight={600}>Sustainable</text>
					// 		<text x="835" y="825" fontSize={6} fontWeight={600}>household habits</text>
					// 	</g>
					// </g>
				)
			}

			{/* External-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="895" y="800" fontSize={6} fontWeight={600}>Public safety</text>
					// 	</g>
					// 	<g>
					// 		<text x="892" y="820" fontSize={6} fontWeight={600}>Local</text>
					// 		<text x="892" y="826" fontSize={6} fontWeight={600}>infrastructure</text>
					// 		<text x="892" y="832" fontSize={6} fontWeight={600}>access</text>
					// 	</g>
					// 	<g>
					// 		<text x="868" y="858" fontSize={6} fontWeight={600}>Air and water</text>
					// 		<text x="868" y="864" fontSize={6} fontWeight={600}>quality monitoring</text>
					// 	</g>
					// </g>
				)
			}

			{/* External-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="945" y="800" fontSize={6} fontWeight={600}>Management of</text>
					// 		<text x="945" y="806" fontSize={6} fontWeight={600}>pasturelands</text>
					// 	</g>
					// 	<g>
					// 		<text x="940" y="825" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Utility grids</text>
					// 	</g>
					// 	<g>
					// 		<text x="935" y="845" fontSize={6} fontWeight={600}>Urban planning</text>
					// 	</g>
					// 	<g>
					// 		<text x="932" y="865" fontSize={6} fontWeight={600}>Transport</text>
					// 		<text x="932" y="871" fontSize={6} fontWeight={600}>networks</text>
					// 	</g>
					// 	<g>
					// 		<text x="915" y="890" fontSize={6} fontWeight={600}>Road condition</text>
					// 		<text x="915" y="896" fontSize={6} fontWeight={600}>monitoring</text>
					// 	</g>
					// </g>
				)
			}

			{/* External-Center-5 */}
			{
				(level === 5 || level === null) && (
					<g>
						<g>
							<text x="995" y="800" fontSize={5} fontWeight={600}>National air quality</text>
							<text x="995" y="805" fontSize={5} fontWeight={600}>improvement</text>
							<text x="995" y="810" fontSize={5} fontWeight={600}>measures</text>
						</g>
						<g>
							<text x="990" y="825" fontSize={5} fontWeight={600}>Sustainable livestock</text>
							<text x="990" y="830" fontSize={5} fontWeight={600}>management</text>
							<text x="990" y="835" fontSize={5} fontWeight={600}>policies</text>
						</g>
						<g>
							<text x="985" y="850" fontSize={5} fontWeight={600}>Climate change</text>
							<text x="985" y="855" fontSize={5} fontWeight={600}>adaptation policies</text>
						</g>
						<g>
							<text x="975" y="880" fontSize={5} fontWeight={600}>Expansion of</text>
							<text x="975" y="885" fontSize={5} fontWeight={600}>renewable energy</text>
						</g>
						<g>
							<text x="965" y="900" fontSize={5} fontWeight={600}>Хүн амын</text>
							<text x="965" y="905" fontSize={5} fontWeight={600}>нягтрал</text>
						</g>
						<g>
							<text x="942" y="925" fontSize={5} fontWeight={600}>Safe and Sustainable Road</text>
							<text x="942" y="930" fontSize={5} fontWeight={600}>Infrastructure</text>
							<text x="942" y="935" fontSize={5} fontWeight={600}>Development</text>
						</g>
					</g>
				)
			}

			{/* External-Right-5 */}
			{/*<g>*/}
			{/*	<text x="1077" y="835" fontSize={7} fontWeight={600}>Environmental</text>*/}
			{/*	<text x="1085" y="842" fontSize={7} fontWeight={600}>hazards</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="1115" y="910" fontSize={7} fontWeight={600}>Accident</text>*/}
			{/*	<text x="1115" y="917" fontSize={7} fontWeight={600}>Analysis</text>*/}
			{/*</g>*/}

			{/* External-Right-3 */}
			{/*<g>*/}
			{/*	<text x="1188" y="840" fontSize={7} fontWeight={600}>Air quality</text>*/}
			{/*	<text x="1188" y="847" fontSize={7} fontWeight={600}>deterioration</text>*/}
			{/*</g>*/}

			{/* External-Right-2 */}
			{/*<g>*/}
			{/*	<text x="1230" y="805" fontSize={7} fontWeight={600}>Poor</text>*/}
			{/*	<text x="1230" y="812" fontSize={7} fontWeight={600}>conditions</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="1240" y="828" fontSize={7} fontWeight={600}>Resource</text>*/}
			{/*	<text x="1240" y="835" fontSize={7} fontWeight={600}>inefficiency</text>*/}
			{/*</g>*/}

			{/* External-Right-1 */}
			{/*<g>*/}
			{/*	<text x="1275" y="801" fontSize={6} fontWeight={600}>Transportation</text>*/}
			{/*	<text x="1275" y="807" fontSize={6} fontWeight={600}>problems</text>*/}
			{/*</g>*/}

			{/* Internal-Right-1 */}
			{/*<g>*/}
			{/*	<text x="1295" y="782" fontSize={6} fontWeight={600}>Poor</text>*/}
			{/*	<text x="1295" y="788" fontSize={6} fontWeight={600}>health</text>*/}
			{/*	<text x="1295" y="795" fontSize={6} fontWeight={600}>habits</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="1278" y="772" fontSize={5} fontWeight={600}>Personal</text>*/}
			{/*	<text x="1278" y="777" fontSize={5} fontWeight={600}>health</text>*/}
			{/*	<text x="1278" y="782" fontSize={5} fontWeight={600}>issues</text>*/}
			{/*</g>*/}

			{/* Internal-Right-2 */}
			{/*<g>*/}
			{/*	<text x="1230" y="780" fontSize={6} fontWeight={600}>Family health</text>*/}
			{/*	<text x="1230" y="786" fontSize={6} fontWeight={600}>barriers</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="1238" y="750" fontSize={7} fontWeight={600}>Quality of</text>*/}
			{/*	<text x="1238" y="756" fontSize={7} fontWeight={600}>available food</text>*/}
			{/*	<text x="1238" y="762" fontSize={7} fontWeight={600}>options</text>*/}
			{/*</g>*/}

			{/* Internal-Right-4 */}
			{/*<g>*/}
			{/*	<text textAnchor='middle' x="1152" y="730" fontSize={7} fontWeight={600}>Regional</text>*/}
			{/*	<text textAnchor='middle' x="1152" y="737" fontSize={7} fontWeight={600}>development</text>*/}
			{/*	<text textAnchor='middle' x="1152" y="744" fontSize={7} fontWeight={600}>gaps</text>*/}
			{/*</g>*/}

			{/* Internal-Right-5 */}
			{/*<g>*/}
			{/*	<text x="1120" y="660" fontSize={7} fontWeight={600}>Urban-rural</text>*/}
			{/*	<text x="1120" y="667" fontSize={7} fontWeight={600}>divide</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="1100" y="690" fontSize={7} fontWeight={600}>Treatment</text>*/}
			{/*	<text x="1100" y="697" fontSize={7} fontWeight={600}>waiting times</text>*/}
			{/*</g>*/}
			{/*<g>*/}
			{/*	<text x="1085" y="740" fontSize={7} fontWeight={600}>Financial</text>*/}
			{/*	<text x="1085" y="747" fontSize={7} fontWeight={600}>barriers &</text>*/}
			{/*	<text x="1085" y="754" fontSize={7} fontWeight={600}>resource</text>*/}
			{/*	<text x="1085" y="761" fontSize={7} fontWeight={600}>shortages</text>*/}
			{/*</g>*/}

			{/* Internal-Center-5 */}
			{
				(level === 5 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="950" y="645" fontSize={7} fontWeight={600}>Healthcare</text>
					// 		<text x="950" y="652" fontSize={7} fontWeight={600}>infrastructure</text>
					// 		<text x="950" y="659" fontSize={7} fontWeight={600}>quality</text>
					// 	</g>
					// 	<g>
					// 		<text x="970" y="680" fontSize={7} fontWeight={600}>National</text>
					// 		<text x="970" y="687" fontSize={7} fontWeight={600}>health</text>
					// 		<text x="970" y="694" fontSize={7} fontWeight={600}>coverage</text>
					// 	</g>
					// 	<g>
					// 		<text x="990" y="725" fontSize={7} fontWeight={600}>Medical</text>
					// 		<text x="990" y="732" fontSize={7} fontWeight={600}>treatment</text>
					// 		<text x="990" y="739" fontSize={7} fontWeight={600}>access</text>
					// 	</g>
					// 	<g>
					// 		<text x="995" y="760" fontSize={7} fontWeight={600}>Эмнэлгийн</text>
					// 		<text x="995" y="767" fontSize={7} fontWeight={600}>ачаалал</text>
					// 	</g>
					// </g>
				)
			}

			{/* Internal-Center-4 */}
			{
				(level === 4 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="915" y="680" fontSize={7} fontWeight={600}>Healthcare</text>
					// 		<text x="915" y="687" fontSize={7} fontWeight={600}>systems</text>
					// 	</g>
					// 	<g>
					// 		<text x="932" y="720" fontSize={7} fontWeight={600}>Maternal and</text>
					// 		<text x="932" y="727" fontSize={7} fontWeight={600}>child health</text>
					// 		<text x="932" y="734" fontSize={7} fontWeight={600}>programs</text>
					// 	</g>
					// 	<g>
					// 		<text x="945" y="755" fontSize={7} fontWeight={600}>Regional</text>
					// 		<text x="945" y="762" fontSize={7} fontWeight={600}>resource</text>
					// 		<text x="945" y="769" fontSize={7} fontWeight={600}>distribution</text>
					// 	</g>
					// </g>
				)
			}

			{/* Internal-Center-3 */}
			{
				(level === 3 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="880" y="725" fontSize={7} fontWeight={600}>Urgent care</text>
					// 		<text x="880" y="732" fontSize={7} fontWeight={600}>centres</text>
					// 	</g>
					// 	<g>
					// 		<text x="895" y="760" fontSize={7} fontWeight={600}>Support for</text>
					// 		<text x="895" y="767" fontSize={7} fontWeight={600}>marginalised</text>
					// 		<text x="895" y="774" fontSize={7} fontWeight={600}>groups</text>
					// 	</g>
					// </g>
				)
			}

			{/* Internal-Center-2 */}
			{
				(level === 2 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="845" y="745" fontSize={5} fontWeight={600}>Family food</text>
					// 		<text x="845" y="750" fontSize={5} fontWeight={600}>security</text>
					// 	</g>
					// 	<g>
					// 		<text x="845" y="761" fontSize={5} fontWeight={600}>Family health</text>
					// 		<text x="845" y="766" fontSize={5} fontWeight={600}>practices</text>
					// 	</g>
					// 	<g>
					// 		<text x="845" y="780" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Household utilities</text>
					// 		<text x="845" y="785" fontSize={5} fontWeight={600} {...getProps('Inflation')}>access</text>
					// 	</g>
					// </g>
				)
			}

			{/* Internal-Center-1 */}
			{
				(level === 1 || level === null) && (
					// <g>
					// 	<g>
					// 		<text x="815" y="765" fontSize={4} fontWeight={600}>Access to</text>
					// 		<text x="815" y="769" fontSize={4} fontWeight={600}>preventive</text>
					// 		<text x="815" y="773" fontSize={4} fontWeight={600}>healthcare</text>
					// 	</g>
					// 	<g>
					// 		<text x="818" y="782" fontSize={4} fontWeight={600}>Basic needs</text>
					// 		<text x="818" y="786" fontSize={4} fontWeight={600}>accessibility</text>
					// 	</g>
					// 	<g>
					// 		<text x="803" y="783" fontSize={4} fontWeight={600}>Food</text>
					// 		<text x="803" y="787" fontSize={4} fontWeight={600}>quality</text>
					// 	</g>
					// </g>
				)
			}

			<text transform="translate(620, 410) rotate(-45)" fontSize={25} fontWeight={900}>State</text>
			<text transform="translate(370, 660) rotate(-45)" fontSize={25} fontWeight={900}>Social</text>

			<text transform="translate(910, 360) rotate(45)" fontSize={25} fontWeight={900}>Private</text>
			<text transform="translate(1160, 610) rotate(45)" fontSize={25} fontWeight={900}>Internal</text>

			<text transform="translate(340, 910) rotate(45)" fontSize={25} fontWeight={900}>Education</text>
			<text transform="translate(580, 1150) rotate(45)" fontSize={25} fontWeight={900}>Government</text>

			<text transform="translate(920, 1230) rotate(-45)" fontSize={25} fontWeight={900}>Social</text>
			<text transform="translate(1170, 980) rotate(-45)" fontSize={25} fontWeight={900}>External</text>


			{/*Middle Circle*/}
			<g>
				<circle cx='790' cy='790' r={getCircleRadius(5)} stroke='red' strokeWidth='1' fill='transparent' className='level' onClick={() => handleLevelChange(5)} />
				<circle cx='790' cy='790' r={getCircleRadius(4)} stroke='blue' strokeWidth='1' fill='transparent' className='level' onClick={() => handleLevelChange(4)} />
				<circle cx='790' cy='790' r={getCircleRadius(3)} stroke='green' strokeWidth='1' fill='transparent' className='level' onClick={() => handleLevelChange(3)} />
				<circle cx='790' cy='790' r={getCircleRadius(2)} stroke='orange' strokeWidth='1' fill='transparent' className='level' onClick={() => handleLevelChange(2)} />
				<circle cx='790' cy='790' r={getCircleRadius(1)} stroke='pink' strokeWidth='1' fill='transparent' className='level' onClick={() => handleLevelChange(1)} />
			</g>
		</svg>
	)
};

export default Chart;