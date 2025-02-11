import { type ReactNode, type SVGProps, useEffect, useRef, useState } from 'react';
import svgPanZoom from 'svg-pan-zoom';
import type { FilterValueType } from '../types';
import { data } from './data';

interface Props {
	filter: FilterValueType | null;
}

type Level = 1 | 2 | 3 | 4 | 5;


const RADIUS_DEFAULT: Record<Level, number> = {
	"1": 50,
	"2": 100,
	"3": 150,
	"4": 200,
	"5": 250
}

const SHRINK_GAP = 20;

const Chart = ({ filter }: Props) => {

	const ref = useRef<SVGSVGElement | null>(null);
	const [ selectedLevel, setSelectedLevel ] = useState<Level | null>(1);

	const getProps = (type: FilterValueType): Partial<SVGProps<SVGTextElement>> => {
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

	const handleLevelChange = (value: typeof selectedLevel) => {
		if (selectedLevel === value) {
			setSelectedLevel(null);
			return;
		}
		setSelectedLevel(value);
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
						if (selectedLevel && selectedLevel !== levelKey && placementKey === 'center') {
							continue;
						}
						const groupText = level[textGroupIndex];
						for (let lineIndex = 0; lineIndex < groupText.length; lineIndex++) {
							const textLine = groupText[lineIndex];
							const { text, filterable, expandedY, expandedX, ...rest } = textLine;
							let fill = '#000';
							if (filter && filterable.includes(filter)) {
								fill = '#39a636';
							}
							const props: Partial<SVGProps<SVGTextElement>> = {
								...rest,
								fill,
								fontWeight: 600,
							};
							if (selectedLevel && placementKey === 'center') {
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
	}

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

			{renderTexts()}

			<g>
				<text x="600" y="520" fontSize={8} fontWeight={600} {...getProps('Inflation')}>Political influence</text>
				<text x="600" y="528" fontSize={8} fontWeight={600} {...getProps('Inflation')}>disproportionality</text>
			</g>



			{/** MIDDLE TEXT */}
			<g>
				<text textAnchor='middle' x="940" y="530" fontSize={8} fontWeight={600} {...getProps('Inflation')}>Амжиргааны түвшний</text>
				<text textAnchor='middle' x="940" y="537" fontSize={8} fontWeight={600} {...getProps('Inflation')}>өсөлт</text>
			</g>


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

			<g>
				<text x="937" y="962" transform={(selectedLevel !== null && selectedLevel !== 5) ? "translate(11 11)" : undefined} fontSize={18} fontWeight={600}>V</text>
			</g>

			<g>
				<text x="865" y="890" fontSize={18} fontWeight={600}>III</text>
			</g>

			<g>
				<text x="832" y="853" fontSize={18} fontWeight={600}>II</text>
			</g>

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