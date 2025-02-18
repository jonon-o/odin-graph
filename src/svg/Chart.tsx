import { type ReactNode, type SVGProps } from 'react';
import type { FilterValueType, Level } from '../types';
import { data } from './data';

interface Props {
	filter: FilterValueType | null;
	selectedLevel: Level | null;
	onLevelChange: (level: Level | null) => void;
}

const RADIUS_DEFAULT: Record<Level, number> = {
	"1": 50,
	"2": 100,
	"3": 150,
	"4": 200,
	"5": 250
}

const SHRINK_GAP = 20;

const levelCircleProps: SVGProps<SVGCircleElement> = {
	strokeWidth: 1,
	stroke: 'black',
	fill: 'transparent',
	className: 'level'
}

const Chart = ({ filter, selectedLevel, onLevelChange }: Props) => {


	const getProps = (type: FilterValueType): Partial<SVGProps<SVGTextElement>> => {
		if (!filter) {
			return {  };
		}
		if (type === filter) {
			return {
				fill: '#07ad44'
			}
		}
		return {

		}
	}

	const handleLevelChange = (value: typeof selectedLevel) => {
		if (selectedLevel === value) {
			onLevelChange(null);
			return;
		}
		onLevelChange(value);
	}

	const getCircleRadius = (lvl: Level): number => {
		if (!selectedLevel) {
			return RADIUS_DEFAULT[lvl];
		}
		if (lvl === selectedLevel) {
			return 250 - ((5 - lvl) * SHRINK_GAP);
		}
		if (lvl < selectedLevel) {
			return lvl * SHRINK_GAP;
		}
		return 250 - ((5 - lvl) * SHRINK_GAP);
	};

	const renderTexts = () => {
		const texts: ReactNode[] = [];
		for (const [ sectionKey, section ] of data) {
			for (const [ placementKey, placement ] of section) {
				for (const [ levelKey, level ] of placement) {
					for (let textGroupIndex = 0; textGroupIndex < level.length; textGroupIndex++) {
						if (selectedLevel && selectedLevel !== levelKey) {
							continue;
						}
						const groupText = level[textGroupIndex];
						for (let lineIndex = 0; lineIndex < groupText.length; lineIndex++) {
							const textLine = groupText[lineIndex];
							const { text, filterable, expandedY, expandedX, ...rest } = textLine;
							let fill = '#000';
							if (filter && filterable.includes(filter)) {
								fill = '#07ad44';
							}
							const props: Partial<SVGProps<SVGTextElement>> = {
								...rest,
								fill,
								fontWeight: 600,
							};
							if (selectedLevel) {
								props.transform = `translate(${expandedX ?? 0} ${expandedY ?? 0})`;
								props.fontSize = 11;
							}
							texts.push(
								<text key={`${sectionKey}-${placementKey}-${levelKey}-${textGroupIndex}-${lineIndex}`} {...props}>
									{text}
								</text>
							)
						}
					}
				}
			}
		}
		return texts;
	};

	const getLevelLabelTransform = (level: Level): string | undefined => {
		if (!selectedLevel || level === selectedLevel) {
			return undefined;
		}
		switch (level) {
			case 1: {
				if (level > selectedLevel) {
					return undefined;
				}
				return 'translate(-8 -8)';
			}
			case 2: {
				if (level > selectedLevel) {
					return 'translate(67 78)';
				}
				return 'translate(-35 -30)';
			}
			case 3: {
				if (level > selectedLevel) {
					return 'translate(45 55)';
				}
				return 'translate(-60 -52)';
			}
			case 4: {
				if (level > selectedLevel) {
					return 'translate(32 35)';
				}
				return 'translate(-75 -70)';
			}
			case 5: {
				if (level > selectedLevel) {
					return 'translate(11 11)';
				}
				return undefined;
			}
		}
	}

	return (
		<svg width='100%' height='100%' viewBox='0 0 1580 1580' xmlns='http://www.w3.org/2000/svg' >
			{/*<rect width="1578" height="1578" x={1} y={1} stroke='black' strokeWidth={1} fill='none'/>*/}
			<rect className='rotate' width={760} height={760} x={410} y={410} stroke='black' strokeWidth={3} fill='none'/>

			<rect className='rotate' width={380} height={380} x={600} y={335} fill='#FFDADA'/>
			<rect className='rotate' width={380} height={380} x={335} y={600} fill='#DADAFF'/>
			<rect className='rotate' width={380} height={380} x={865} y={600} fill='#DAFFDA'/>
			<rect className='rotate' width={380} height={380} x={600} y={865} fill='#FFFFDA'/>
			<line x1="250" y1="790" x2="1330" y2="790" stroke="black" strokeWidth={2}/>
			<line x1="790" y1="250" x2="790" y2="1330" stroke="black" strokeWidth={2}/>

			{renderTexts()}

			<g>
				<text x="800" y="815" fontSize={20} fontWeight={600} transform={getLevelLabelTransform(1)}>I</text>
				<text x="832" y="853" fontSize={20} fontWeight={600} transform={getLevelLabelTransform(2)}>II</text>
				<text x="865" y="890" fontSize={20} fontWeight={600} transform={getLevelLabelTransform(3)}>III</text>
				<text x="895" y="925" fontSize={20} fontWeight={600} transform={getLevelLabelTransform(4)}>IV</text>
				<text x="937" y="962" transform={getLevelLabelTransform(5)} fontSize={20} fontWeight={600}>V</text>
			</g>

			<text transform="translate(620, 410) rotate(-45)" fontSize={25} fontWeight={900}>State</text>
			<text transform="translate(370, 660) rotate(-45)" fontSize={25} fontWeight={900}>Social</text>

			<text transform="translate(910, 360) rotate(45)" fontSize={25} fontWeight={900}>Private</text>
			<text transform="translate(1160, 610) rotate(45)" fontSize={25} fontWeight={900}>Internal</text>

			<text transform="translate(340, 910) rotate(45)" fontSize={25} fontWeight={900}>Education</text>
			<text transform="translate(580, 1150) rotate(45)" fontSize={25} fontWeight={900}>Government</text>

			<text transform="translate(920, 1230) rotate(-45)" fontSize={25} fontWeight={900}>Social</text>
			<text transform="translate(1170, 980) rotate(-45)" fontSize={25} fontWeight={900}>External</text>


			{/*Top Circle*/}
			<g>
				<circle {...levelCircleProps} cx='790' cy='260' r={getCircleRadius(5)} />
				<circle {...levelCircleProps} cx='790' cy='260' r={getCircleRadius(4)} />
				<circle {...levelCircleProps} cx='790' cy='260' r={getCircleRadius(3)} />
				<circle {...levelCircleProps} cx='790' cy='260' r={getCircleRadius(2)} />
				<circle {...levelCircleProps} cx='790' cy='260' r={getCircleRadius(1)} />
			</g>
			{/*Bottom Circle*/}
			<g>
				<circle {...levelCircleProps} cx='790' cy='1320' r={getCircleRadius(5)} />
				<circle {...levelCircleProps} cx='790' cy='1320' r={getCircleRadius(4)} />
				<circle {...levelCircleProps} cx='790' cy='1320' r={getCircleRadius(3)} />
				<circle {...levelCircleProps} cx='790' cy='1320' r={getCircleRadius(2)} />
				<circle {...levelCircleProps} cx='790' cy='1320' r={getCircleRadius(1)} />
			</g>
			{/*Left Circle*/}
			<g>
				<circle {...levelCircleProps} cx='260' cy='790' r={getCircleRadius(5)} />
				<circle {...levelCircleProps} cx='260' cy='790' r={getCircleRadius(4)} />
				<circle {...levelCircleProps} cx='260' cy='790' r={getCircleRadius(3)} />
				<circle {...levelCircleProps} cx='260' cy='790' r={getCircleRadius(2)} />
				<circle {...levelCircleProps} cx='260' cy='790' r={getCircleRadius(1)} />
			</g>
			{/*Right Circle*/}
			<g>
				<circle {...levelCircleProps} cx='1320' cy='790' r={getCircleRadius(5)} />
				<circle {...levelCircleProps} cx='1320' cy='790' r={getCircleRadius(4)} />
				<circle {...levelCircleProps} cx='1320' cy='790' r={getCircleRadius(3)} />
				<circle {...levelCircleProps} cx='1320' cy='790' r={getCircleRadius(2)} />
				<circle {...levelCircleProps} cx='1320' cy='790' r={getCircleRadius(1)} />
			</g>


			{/*Middle Circle*/}
			<g>
				<circle {...levelCircleProps} cx='790' cy='790' r={getCircleRadius(5)} onClick={() => handleLevelChange(5)} />
				<circle {...levelCircleProps} cx='790' cy='790' r={getCircleRadius(4)} onClick={() => handleLevelChange(4)} />
				<circle {...levelCircleProps} cx='790' cy='790' r={getCircleRadius(3)} onClick={() => handleLevelChange(3)} />
				<circle {...levelCircleProps} cx='790' cy='790' r={getCircleRadius(2)} onClick={() => handleLevelChange(2)} />
				<circle {...levelCircleProps} cx='790' cy='790' r={getCircleRadius(1)} onClick={() => handleLevelChange(1)} />
			</g>
		</svg>
	)
};

export default Chart;