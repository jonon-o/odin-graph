import { type SVGProps, useEffect, useRef } from 'react';
import svgPanZoom from 'svg-pan-zoom';

interface Props {
	filter: string | null;
}

type FilterValueType = 'Natural disasters' | 'Inflation' | 'Crises' | 'Geopolitical factors';

const Chart = ({ filter }: Props) => {

	const ref = useRef<SVGSVGElement | null>(null);

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
			svgPanZoom(ref.current, {
				controlIconsEnabled: true
			});
		}
	}, [])

	return (
		<svg ref={ref} width='900' height='900' viewBox='0 0 1580 1580' xmlns='http://www.w3.org/2000/svg' >
			{/*<rect width="1578" height="1578" x={1} y={1} stroke='black' strokeWidth={1} fill='none'/>*/}
			{/*Top Circle*/}
			<g>
				<circle cx='790' cy='260' r='250' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='200' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='150' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='100' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='260' r='50' stroke='black' strokeWidth='1' fill='none' />
			</g>
			{/*Top Middle*/}
			<g>
				<circle cx='790' cy='790' r='250' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='790' r='200' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='790' r='150' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='790' r='100' stroke='black' strokeWidth='1' fill='none' />
				<circle cx='790' cy='790' r='50' stroke='black' strokeWidth='1' fill='none' />
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

			<rect className='rotate' width={760} height={760} x={410} y={410} stroke='black' strokeWidth={3} fill='none'/>

			<rect className='rotate' width={380} height={380} x={600} y={335} fill='red' fillOpacity={.5}/>
			<rect className='rotate' width={380} height={380} x={335} y={600} fill='#8282d8' fillOpacity={.5}/>
			<rect className='rotate' width={380} height={380} x={865} y={600} fill='#8dce8d' fillOpacity={.5}/>
			<rect className='rotate' width={380} height={380} x={600} y={865} fill='orange' fillOpacity={.5}/>
			<line x1="250" y1="790" x2="1330" y2="790" stroke="black" strokeWidth={2}/>
			<line x1="790" y1="250" x2="790" y2="1330" stroke="black" strokeWidth={2}/>

			{/* State-Top-1 */}
			<g>
				<text textAnchor='end' x="788" y="290" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Job quality</text>
				<text textAnchor='end' x="788" y="295" fontSize={4} fontWeight={600} {...getProps('Inflation')}>degradation</text>
			</g>
			{/* State-Top-4 */}
			<g>
				<text x="670" y="400" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Debt burden</text>
				<text x="670" y="409" fontSize={7} fontWeight={600} {...getProps('Inflation')}>increase</text>
			</g>
			<g>
				<text x="745" y="420" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Industrial</text>
				<text x="745" y="429" fontSize={7} fontWeight={600} {...getProps('Inflation')}>production</text>
				<text x="745" y="438" fontSize={7} fontWeight={600} {...getProps('Inflation')}>decline</text>
			</g>
			{/* State-Top-5 */}

			<g>
				<text x="630" y="423" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Unequal</text>
				<text x="627" y="430" fontSize={7} fontWeight={600} {...getProps('Inflation')}>infrastructure</text>
				<text x="627" y="437" fontSize={7} fontWeight={600} {...getProps('Inflation')}>development</text>
			</g>

			<g>
				<text x="670" y="447" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Capital</text>
				<text x="670" y="454" fontSize={7} fontWeight={600} {...getProps('Inflation')}>depreciation</text>
				<text x="670" y="461" fontSize={7} fontWeight={600} {...getProps('Inflation')}>rate</text>
			</g>

			<g>
				<text x="700" y="465" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Slow Real</text>
				<text x="700" y="472" fontSize={7} fontWeight={600} {...getProps('Inflation')}>State</text>
				<text x="700" y="479" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Market</text>
			</g>

			<g>
				<text x="730" y="480" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Boost</text>
				<text x="730" y="489" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Inflation</text>
			</g>

			<g

			>
				<text x="755" y="470" fontSize={7} fontWeight={600} {...getProps('Inflation')} >Real wage</text>
				<text x="755" y="477" fontSize={7} fontWeight={600} {...getProps('Inflation')}>decline</text>
			</g>

			<g>
				<text x="600" y="520" fontSize={8} fontWeight={600} {...getProps('Inflation')}>Political influence</text>
				<text x="600" y="528" fontSize={8} fontWeight={600} {...getProps('Inflation')}>disproportionality</text>
			</g>

			{/* State-Center-5 */}
			<g>
				<text x="630" y="610" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Research &</text>
				<text x="630" y="616" fontSize={6} fontWeight={600} {...getProps('Inflation')}>development</text>
				<text x="630" y="622" fontSize={6} fontWeight={600} {...getProps('Inflation')}>expenditure</text>
			</g>
			<g>
				<text x="655" y="590" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Capital market</text>
				<text x="655" y="596" fontSize={6} fontWeight={600} {...getProps('Inflation')}>development</text>
			</g>
			<g>
				<text x="685" y="575" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Mortgage</text>
				<text x="685" y="581" fontSize={6} fontWeight={600} {...getProps('Inflation')}>rate</text>
			</g>
			<g>
				<text x="715" y="560" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Currency</text>
				<text x="715" y="566" fontSize={6} fontWeight={600} {...getProps('Inflation')}>stability</text>
			</g>
			<g>
				<text x="725" y="580" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Central bank</text>
				<text x="725" y="586" fontSize={6} fontWeight={600} {...getProps('Inflation')}>interest rate</text>
			</g>
			<g>
				<text x="755" y="555" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Foreign</text>
				<text x="755" y="561" fontSize={6} fontWeight={600} {...getProps('Inflation')}>direct</text>
				<text x="755" y="567" fontSize={6} fontWeight={600} {...getProps('Inflation')}>investment</text>
			</g>
			{/* State-Center-4 */}
			<g>
				<text x="670" y="647" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Real GDP</text>
				<text x="670" y="653" fontSize={6} fontWeight={600} {...getProps('Inflation')}>growth rate</text>
			</g>
			<g>
				<text x="705" y="625" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Industry</text>
				<text x="705" y="631" fontSize={6} fontWeight={600} {...getProps('Inflation')}>clusters</text>
			</g>
			<g>
				<text x="745" y="615" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Economic</text>
				<text x="745" y="621" fontSize={6} fontWeight={600} {...getProps('Inflation')}>infrastructure</text>
				<text x="745" y="627" fontSize={6} fontWeight={600} {...getProps('Inflation')}>quality</text>
			</g>
			{/* State-Center-3 */}
			<g>
				<text x="700" y="682" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Urban-rural</text>
				<text x="700" y="688" fontSize={6} fontWeight={600} {...getProps('Inflation')}>economic</text>
				<text x="700" y="694" fontSize={6} fontWeight={600} {...getProps('Inflation')}>linkages</text>
			</g>
			<g>
				<text x="760" y="654" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Regional</text>
				<text x="760" y="660" fontSize={6} fontWeight={600} {...getProps('Inflation')}>economic</text>
				<text x="760" y="666" fontSize={6} fontWeight={600} {...getProps('Inflation')}>integration</text>
			</g>
			<g>
				<text x="745" y="680" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Local</text>
				<text x="745" y="686" fontSize={6} fontWeight={600} {...getProps('Inflation')}>market vitality</text>
			</g>
			{/* State-Center-2 */}
			<g>
				<text x="760" y="710" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Insurance</text>
				<text x="760" y="716" fontSize={6} fontWeight={600} {...getProps('Inflation')}>coverage</text>
			</g>
			<g>
				<text x="745" y="730" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Property</text>
				<text x="745" y="736" fontSize={6} fontWeight={600} {...getProps('Inflation')}>assets</text>
			</g>
			{/* State-Center-1 */}
			<g>
				<text x="760" y="755" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Financial</text>
				<text x="760" y="759" fontSize={4} fontWeight={600} {...getProps('Inflation')}>literacy</text>
			</g>

			{/* Private-Top-1 */}
			<g>
				<text x="792" y="275" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Debt-to-</text>
				<text x="792" y="280" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Income</text>
				<text x="792" y="285" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Ratio</text>
			</g>
			<g>
				<text x="792" y="295" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Income</text>
				<text x="792" y="300" fontSize={4} fontWeight={600} {...getProps('Inflation')}>mobility</text>
				<text x="792" y="305" fontSize={4} fontWeight={600} {...getProps('Inflation')}>barriers</text>
			</g>
			{/* Private-Top-2 */}
			<g>
				<text x="794" y="335" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Dependency</text>
				<text x="794" y="340" fontSize={4} fontWeight={600} {...getProps('Inflation')}>ratio</text>
				<text x="794" y="345" fontSize={4} fontWeight={600} {...getProps('Inflation')}>increase</text>
			</g>
			<g>
				<text x="835" y="325" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Household</text>
				<text x="835" y="330" fontSize={4} fontWeight={600} {...getProps('Inflation')}>debt</text>
				<text x="835" y="335" fontSize={4} fontWeight={600} {...getProps('Inflation')}>burden</text>
			</g>
			<g>
				<text x="810" y="315" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Declining</text>
				<text x="810" y="320" fontSize={4} fontWeight={600} {...getProps('Inflation')}>savings</text>
			</g>

			{/* Private-Top-4 */}
			<g>
				<text x="800" y="432" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Purchasing</text>
				<text x="800" y="439" fontSize={7} fontWeight={600} {...getProps('Inflation')}>power erosion</text>
			</g>
			<g>
				<text x="870" y="400" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Wealth</text>
				<text x="870" y="407" fontSize={7} fontWeight={600} {...getProps('Inflation')}>concentration</text>
				<text x="870" y="414" fontSize={7} fontWeight={600} {...getProps('Inflation')}>ratio</text>
			</g>
			{/* Private-Top-5 */}
			<g>
				<text x="800" y="480" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Higher</text>
				<text x="800" y="487" fontSize={7} fontWeight={600} {...getProps('Inflation')}>taxes</text>
			</g>
			<g>
				<text x="850" y="465" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Underemployment</text>
				<text x="850" y="472" fontSize={7} fontWeight={600} {...getProps('Inflation')}>rates</text>
			</g>
			<g>
				<text x="910" y="440" fontSize={7} fontWeight={600} {...getProps('Inflation')}>External debt</text>
				<text x="910" y="447" fontSize={7} fontWeight={600} {...getProps('Inflation')}>exposure</text>
			</g>

			{/* Private-Center-5 */}
			<g>
				<text x="793" y="555" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Inflation</text>
				<text x="793" y="561" fontSize={6} fontWeight={600} {...getProps('Inflation')}>rate</text>
			</g>
			<g>
				<text x="805" y="575" fontSize={6} fontWeight={600} {...getProps('Inflation')}>National</text>
				<text x="805" y="581" fontSize={6} fontWeight={600} {...getProps('Inflation')}>debt</text>
			</g>
			<g>
				<text x="825" y="553" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Tax</text>
				<text x="825" y="559" fontSize={6} fontWeight={600} {...getProps('Inflation')}>revenue</text>
			</g>
			<g>
				<text x="840" y="570" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Амьжиргааны</text>
				<text x="840" y="576" fontSize={6} fontWeight={600} {...getProps('Inflation')}>түвшний</text>
				<text x="840" y="582" fontSize={6} fontWeight={600} {...getProps('Inflation')}>өсөлт</text>
			</g>
			<g>
				<text x="865" y="595" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Market</text>
				<text x="865" y="601" fontSize={6} fontWeight={600} {...getProps('Inflation')}>competition</text>
			</g>
			<g>
				<text x="885" y="575" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Export</text>
				<text x="885" y="581" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Import</text>
				<text x="885" y="587" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Balance</text>
			</g>
			<g>
				<text x="910" y="590" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Trade</text>
				<text x="910" y="597" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Balance</text>
			</g>
			<g>
				<text x="925" y="610" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Export</text>
				<text x="925" y="616" fontSize={6} fontWeight={600} {...getProps('Inflation')}>diversity</text>
				<text x="925" y="622" fontSize={6} fontWeight={600} {...getProps('Inflation')}>index</text>
			</g>
			{/* Private-Center-4 */}
			<g>
				<text x="793" y="600" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Economic</text>
				<text x="793" y="606" fontSize={6} fontWeight={600} {...getProps('Inflation')}>opportunity</text>
				<text x="793" y="612" fontSize={6} fontWeight={600} {...getProps('Inflation')}>distribution</text>
			</g>
			<g>
				<text x="793" y="628" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Employment</text>
				<text x="793" y="634" fontSize={6} fontWeight={600} {...getProps('Inflation')}>opportunity</text>
			</g>
			<g>
				<text x="830" y="615" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Investment</text>
				<text x="830" y="621" fontSize={6} fontWeight={600} {...getProps('Inflation')}>flows</text>
			</g>
			<g>
				<text x="850" y="630" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Sectoral</text>
				<text x="850" y="636" fontSize={6} fontWeight={600} {...getProps('Inflation')}>contribution</text>
			</g>
			<g>
				<text x="885" y="650" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Labor</text>
				<text x="885" y="656" fontSize={6} fontWeight={600} {...getProps('Inflation')}>markets</text>
			</g>
			{/* Private-Center-3 */}
			<g>
				<text x="795" y="660" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Employment</text>
				<text x="795" y="667" fontSize={7} fontWeight={600} {...getProps('Inflation')}>rate</text>
			</g>
			<g>
				<text x="822" y="675" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Pension</text>
			</g>
			<g>
				<text x="850" y="685" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Access to</text>
				<text x="850" y="692" fontSize={7} fontWeight={600} {...getProps('Inflation')}>loan</text>
			</g>
			{/* Private-Center-2 */}
			<g>
				<text x="793" y="703" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Emergency</text>
				<text x="793" y="709" fontSize={6} fontWeight={600} {...getProps('Inflation')}>fund status</text>
			</g>
			<g>
				<text x="793" y="725" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Combined</text>
				<text x="793" y="731" fontSize={6} fontWeight={600} {...getProps('Inflation')}>income</text>
			</g>
			<g>
				<text x="825" y="720" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Household</text>
				<text x="825" y="726" fontSize={6} fontWeight={600} {...getProps('Inflation')}>wealth</text>
			</g>
			{/* Private-Center-1 */}

			<g>
				<text textAnchor='middle' x="790" y="747" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Seasonal variation</text>
				<text textAnchor='middle' x="790" y="751" fontSize={4} fontWeight={600} {...getProps('Inflation')}>in earnings</text>
			</g>
			<g>
				<text textAnchor='middle' x="790" y="760" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Savings</text>
				<text textAnchor='middle' x="790" y="764" fontSize={4} fontWeight={600} {...getProps('Inflation')}>rate</text>
			</g>
			<g>
				<text textAnchor='middle' x="790" y="770" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Income</text>
				<text textAnchor='middle' x="790" y="774" fontSize={4} fontWeight={600} {...getProps('Inflation')}>level</text>
			</g>
			<g>
				<text textAnchor='middle' x="810" y="755" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Credit</text>
				<text textAnchor='middle' x="810" y="759" fontSize={4} fontWeight={600} {...getProps('Inflation')}>score</text>
			</g>

			{/* Social-Left-1 */}
			<g>
				<text x="273" y="780" fontSize={6} fontWeight={600}>Lack of self</text>
				<text x="278" y="786" fontSize={6} fontWeight={600}>identity</text>
			</g>
			{/* Social-Left-2 */}
			<g>
				<text x="310" y="745" fontSize={7} fontWeight={600}>Lack of</text>
				<text x="310" y="752" fontSize={7} fontWeight={600}>parental</text>
				<text x="310" y="759" fontSize={7} fontWeight={600}>participation</text>
			</g>
			<g>
				<text x="320" y="778" fontSize={7} fontWeight={600}>Limited</text>
				<text x="320" y="785" fontSize={7} fontWeight={600}>access</text>
			</g>
			{/* Social-Left-3 */}
			<g>
				<text x="350" y="710" fontSize={7} fontWeight={600}>Cost</text>
				<text x="350" y="717" fontSize={7} fontWeight={600}>barriers</text>
			</g>
			<g>
				<text x="360" y="740" fontSize={7} fontWeight={600}>Limited</text>
				<text x="360" y="747" fontSize={7} fontWeight={600}>access</text>
			</g>
			<g>
				<text x="365" y="770" fontSize={7} fontWeight={600}>Lack of</text>
				<text x="365" y="777" fontSize={7} fontWeight={600}>participation</text>
			</g>
			{/* Social-Left-4 */}
			<g>
				<text x="395" y="700" fontSize={7} fontWeight={600}>Generation</text>
				<text x="395" y="707" fontSize={7} fontWeight={600}>differences</text>
			</g>
			<g>
				<text x="420" y="760" fontSize={7} fontWeight={600}>School</text>
				<text x="420" y="767" fontSize={7} fontWeight={600}>culture</text>
			</g>
			{/* Social-Left-5 */}
			<g>
				<text x="420" y="640" fontSize={7} fontWeight={600}>Lack of</text>
				<text x="420" y="647" fontSize={7} fontWeight={600}>long-term</text>
				<text x="420" y="654" fontSize={7} fontWeight={600}>planning</text>
			</g>
			<g>
				<text x="450" y="685" fontSize={7} fontWeight={600}>Short</text>
				<text x="450" y="692" fontSize={7} fontWeight={600}>term</text>
				<text x="450" y="699" fontSize={7} fontWeight={600}>solutions</text>
			</g>
			<g>
				<text x="458" y="725" fontSize={7} fontWeight={600}>Gaps in</text>
				<text x="458" y="732" fontSize={7} fontWeight={600}>non-direct</text>
				<text x="458" y="739" fontSize={7} fontWeight={600}>educational</text>
				<text x="465" y="746" fontSize={7} fontWeight={600}>skills</text>
			</g>
			<g>
				<text x="463" y="780" fontSize={7} fontWeight={600}>Discrimination</text>
			</g>
			{/* Social-Center-5 */}
			<g>
				<text x="553" y="775" fontSize={7} fontWeight={600}>Religion</text>
				<text x="553" y="782" fontSize={7} fontWeight={600}>education</text>
			</g>
			<g>
				<text x="560" y="733" fontSize={7} fontWeight={600}>Civic</text>
				<text x="555" y="740" fontSize={7} fontWeight={600}>education</text>
			</g>
			<g>
				<text x="575" y="690" fontSize={7} fontWeight={600}>Global</text>
				<text x="570" y="697" fontSize={7} fontWeight={600}>awareness</text>
			</g>
			<g>
				<text x="595" y="650" fontSize={7} fontWeight={600}>National</text>
				<text x="595" y="657" fontSize={7} fontWeight={600}>identity</text>
				<text x="595" y="664" fontSize={7} fontWeight={600}>strength</text>
			</g>
			{/* Social-Center-4 */}
			<g>
				<text x="630" y="680" fontSize={6} fontWeight={600}>Public discourse</text>
				<text x="630" y="686" fontSize={6} fontWeight={600}>quality</text>
			</g>
			<g>
				<text x="617" y="705" fontSize={6} fontWeight={600}>Intergenerational</text>
				<text x="617" y="711" fontSize={6} fontWeight={600}>mobility</text>
			</g>
			<g>
				<text x="610" y="725" fontSize={6} fontWeight={600}>Civil society</text>
				<text x="610" y="731" fontSize={6} fontWeight={600}>strength</text>
			</g>
			<g>
				<text x="600" y="750" fontSize={6} fontWeight={600}>Cultural heritage</text>
				<text x="600" y="756" fontSize={6} fontWeight={600}>preservation</text>
			</g>
			<g>
				<text x="605" y="775" fontSize={6} fontWeight={600}>Inclusive</text>
				<text x="605" y="781" fontSize={6} fontWeight={600}>culture</text>
			</g>
			{/* Social-Center-3 */}
			<g>
				<text x="670" y="710" fontSize={6} fontWeight={600}>Social and</text>
				<text x="670" y="716" fontSize={6} fontWeight={600}>Recreational</text>
				<text x="670" y="722" fontSize={6} fontWeight={600}>opportunities</text>
			</g>
			<g>
				<text x="658" y="735" fontSize={6} fontWeight={600}>Community</text>
				<text x="658" y="741" fontSize={6} fontWeight={600}>participation</text>
			</g>
			<g>
				<text x="655" y="755" fontSize={6} fontWeight={600}>Community</text>
				<text x="655" y="761" fontSize={6} fontWeight={600}>forums</text>
			</g>
			<g>
				<text x="655" y="775" fontSize={6} fontWeight={600}>Language</text>
				<text x="655" y="781" fontSize={6} fontWeight={600}>programs</text>
			</g>
			{/* Social-Center-2 */}
			<g>
				<text x="715" y="740" fontSize={6} fontWeight={600}>Digital</text>
				<text x="715" y="746" fontSize={6} fontWeight={600}>literacy</text>
			</g>
			<g>
				<text x="710" y="760" fontSize={6} fontWeight={600}>Parental</text>
				<text x="710" y="766" fontSize={6} fontWeight={600}>engagement</text>
			</g>
			<g>
				<text x="705" y="779" fontSize={6} fontWeight={600}>Family</text>
				<text x="705" y="785" fontSize={6} fontWeight={600}>traditions</text>
			</g>
			{/* Social-Center-1 */}
			<g>
				<text x="750" y="767" fontSize={4} fontWeight={600}>Self</text>
				<text x="747" y="771" fontSize={4} fontWeight={600}>expression</text>
			</g>
			<g>
				<text x="747" y="782" fontSize={4} fontWeight={600}>Free</text>
				<text x="745" y="786" fontSize={4} fontWeight={600}>thinking</text>
			</g>
			<g>
				<text x="767" y="786" fontSize={7} fontWeight={600}>EQ</text>
			</g>

			{/* Education-Left-1 */}
			<g>
				<text x="273" y="798" fontSize={6} fontWeight={600}>Old school</text>
				<text x="273" y="804" fontSize={6} fontWeight={600}>environment</text>
			</g>
			{/* Education-Left-2 */}
			<g>
				<text x="312" y="808" fontSize={6} fontWeight={600}>Traditional-only</text>
				<text x="312" y="814" fontSize={6} fontWeight={600}>learning space</text>
				<text x="312" y="820" fontSize={6} fontWeight={600}>& Lack of</text>
				<text x="312" y="826" fontSize={6} fontWeight={600}>accessibility</text>
			</g>
			{/* Education-Left-3 */}
			<g>
				<text x="362" y="815" fontSize={7} fontWeight={600}>Dropout rate</text>
			</g>
			<g>
				<text x="350" y="850" fontSize={7} fontWeight={600}>Limited access</text>
			</g>
			{/* Education-Left-4 */}
			<g>
				<text x="415" y="810" fontSize={7} fontWeight={600}>Internet</text>
				<text x="415" y="817" fontSize={7} fontWeight={600}>penetration</text>
			</g>
			<g>
				<text x="395" y="870" fontSize={7} fontWeight={600}>Study materials</text>
				<text x="395" y="877" fontSize={7} fontWeight={600}>and content</text>
				<text x="395" y="884" fontSize={7} fontWeight={600}>upgrade</text>
			</g>
			{/* Education-Left-5 */}
			<g>
				<text x="470" y="800" fontSize={6} fontWeight={600}>Digital</text>
				<text x="470" y="806" fontSize={6} fontWeight={600}>divide in</text>
				<text x="470" y="812" fontSize={6} fontWeight={600}>learning</text>
				<text x="470" y="818" fontSize={6} fontWeight={600}>access</text>
			</g>
			<g>
				<text x="462" y="838" fontSize={6} fontWeight={600}>Traditional</text>
				<text x="462" y="844" fontSize={6} fontWeight={600}>teaching</text>
				<text x="462" y="850" fontSize={6} fontWeight={600}>methods</text>
			</g>
			<g>
				<text x="450" y="865" fontSize={6} fontWeight={600}>Quality of public</text>
				<text x="450" y="871" fontSize={6} fontWeight={600}>kindergarten</text>
			</g>
			<g>
				<text x="440" y="890" fontSize={6} fontWeight={600}>Public vs</text>
				<text x="440" y="896" fontSize={6} fontWeight={600}>Private</text>
				<text x="440" y="902" fontSize={6} fontWeight={600}>contrast</text>
			</g>
			<g>
				<text x="420" y="925" fontSize={6} fontWeight={600}>Overcrowded</text>
				<text x="420" y="931" fontSize={6} fontWeight={600}>public</text>
				<text x="420" y="937" fontSize={6} fontWeight={600}>establishment</text>
			</g>

			{/* Education-Center-5 */}
			<g>
				<text x="550" y="800" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Educational</text>
				<text x="550" y="807" fontSize={7} fontWeight={600} {...getProps('Inflation')}>expense</text>
			</g>
			<g>
				<text x="550" y="830" fontSize={7} fontWeight={600}>Social norm</text>
			</g>
			<g>
				<text x="555" y="850" fontSize={7} fontWeight={600}>Сургалтын</text>
				<text x="555" y="857" fontSize={7} fontWeight={600}>чанар</text>
			</g>
			<g>
				<text x="565" y="880" fontSize={7} fontWeight={600} {...getProps('Inflation')}>Сургалтын</text>
				<text x="565" y="887" fontSize={7} fontWeight={600} {...getProps('Inflation')}>орчин</text>
			</g>
			<g>
				<text x="585" y="905" fontSize={7} fontWeight={600}>Ерөнхий</text>
				<text x="585" y="912" fontSize={7} fontWeight={600}>боловсролын</text>
				<text x="585" y="919" fontSize={7} fontWeight={600}>сургуулийн</text>
				<text x="585" y="926" fontSize={7} fontWeight={600}>тоо</text>
			</g>
			{/* Education-Center-4 */}
			<g>
				<text x="595" y="800" fontSize={7} fontWeight={600}>Instructional</text>
				<text x="595" y="807" fontSize={7} fontWeight={600}>quality</text>
			</g>
			<g>
				<text x="605" y="840" fontSize={7} fontWeight={600}>School</text>
				<text x="605" y="847" fontSize={7} fontWeight={600}>performance</text>
				<text x="605" y="854" fontSize={7} fontWeight={600}>scores</text>
			</g>
			<g>
				<text x="625" y="880" fontSize={7} fontWeight={600}>Innovative</text>
				<text x="625" y="887" fontSize={7} fontWeight={600}>methods</text>
			</g>
			{/* Education-Center-3 */}
			<g>
				<text textAnchor='middle' x="665" y="800" fontSize={6} fontWeight={600}>Education</text>
				<text textAnchor='middle' x="665" y="806" fontSize={6} fontWeight={600}>attainment levels</text>
			</g>
			<g>
				<text textAnchor='middle' x="675" y="830" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Access to</text>
				<text textAnchor='middle' x="675" y="836" fontSize={6} fontWeight={600} {...getProps('Inflation')}>educational</text>
				<text textAnchor='middle' x="675" y="842" fontSize={6} fontWeight={600} {...getProps('Inflation')}>facilities</text>
			</g>
			<g>
				<text textAnchor='middle' x="685" y="865" fontSize={6} fontWeight={600}>Access to</text>
				<text textAnchor='middle' x="685" y="871" fontSize={6} fontWeight={600}>programs</text>
			</g>
			{/* Education-Center-2 */}
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
			{/* Education-Center-1 */}
			<g>
				<text x="743" y="795" fontSize={4} fontWeight={600}>Learning</text>
				<text x="743" y="799" fontSize={4} fontWeight={600}>progress</text>
			</g>
			<g>
				<text x="745" y="805" fontSize={4} fontWeight={600}>Hard vs Soft skills</text>
				<text x="745" y="809" fontSize={4} fontWeight={600}>developments</text>
			</g>
			<g>
				<text x="770" y="798" fontSize={7} fontWeight={600}>IQ</text>
			</g>

			{/* Засаг-Center-1 */}
			<g>
				<text textAnchor='end' x="788" y="819" fontSize={4} fontWeight={600}>Accessibility</text>
				<text textAnchor='end' x="788" y="823" fontSize={4} fontWeight={600}>of Government</text>
				<text textAnchor='end' x="788" y="827" fontSize={4} fontWeight={600}>Services</text>
			</g>
			{/* Засаг-Center-2 */}
			<g>
				<text x="750" y="848" fontSize={5} fontWeight={600}>Housing Program</text>
				<text x="750" y="853" fontSize={5} fontWeight={600}>Effectiveness</text>
			</g>
			<g>
				<text x="750" y="865" fontSize={5} fontWeight={600}>Equity in social</text>
				<text x="750" y="870" fontSize={5} fontWeight={600}>welfare</text>
			</g>
			{/* Засаг-Center-3 */}
			<g>
				<text x="705" y="895" fontSize={6} fontWeight={600}>Disaster Preparedness</text>
			</g>
			<g>
				<text x="735" y="910" fontSize={6} fontWeight={600}>Local Governance</text>
				<text x="735" y="916" fontSize={6} fontWeight={600}>Transparency</text>
			</g>
			{/* Засаг-Center-4 */}
			<g>
				<text x="660" y="930" fontSize={6} fontWeight={600}>Inclusivity in National</text>
				<text x="660" y="936" fontSize={6} fontWeight={600}>Decision-Making</text>
			</g>
			<g>
				<text x="690" y="950" fontSize={6} fontWeight={600}>Anti-Corruption</text>
				<text x="690" y="956" fontSize={6} fontWeight={600}>Measures</text>
			</g>
			<g>
				<text x="730" y="965" fontSize={6} fontWeight={600}>Quality of Legislative</text>
				<text x="730" y="971" fontSize={6} fontWeight={600}>Oversight</text>
			</g>
			{/* Засаг-Center-5 */}
			<g>
				<text x="630" y="963" fontSize={7} fontWeight={600}>Decentralization</text>
				<text x="630" y="970" fontSize={7} fontWeight={600}>Effectiveness</text>
			</g>
			<g>
				<text x="650" y="985" fontSize={7} fontWeight={600}>Judicial Independence</text>
				<text x="650" y="992" fontSize={7} fontWeight={600}>and Rule of Law</text>
			</g>
			<g>
				<text x="695" y="1010" fontSize={7} fontWeight={600}>Fiscal Accountability</text>
				<text x="695" y="1017" fontSize={7} fontWeight={600}>and Transparency</text>
			</g>
			<g>
				<text textAnchor='middle' x="790" y="1010" fontSize={7} fontWeight={600}>Long-Term</text>
				<text textAnchor='middle' x="790" y="1018" fontSize={7} fontWeight={600}>Strategic Planning</text>
			</g>

			{/* Засаг-Bottom-5 */}
			<g>
				<text x="720" y="1100" fontSize={7} fontWeight={600}>Power concentration</text>
			</g>
			<g>
				<text x="670" y="1115" fontSize={7} fontWeight={600}>Fragmented social</text>
				<text x="670" y="1122" fontSize={7} fontWeight={600}>support systems</text>
			</g>
			<g>
				<text x="640" y="1145" fontSize={7} fontWeight={600}>Economic</text>
				<text x="640" y="1152" fontSize={7} fontWeight={600}>pressure</text>
			</g>
			{/* Засаг-Bottom-4 */}

			<g>
				<text x="690" y="1155" fontSize={7} fontWeight={600}>Incompatible systems &</text>
				<text x="690" y="1162" fontSize={7} fontWeight={600}>limited data sharing</text>
			</g>
			<g>
				<text x="657" y="1180" fontSize={7} fontWeight={600}>Bureaucratic red tape &</text>
				<text x="657" y="1187" fontSize={7} fontWeight={600}>technological gap</text>
			</g>
			<g>
				<text x="760" y="1135" fontSize={7} fontWeight={600}>Political influence &</text>
				<text x="760" y="1142" fontSize={7} fontWeight={600}>inequitable distribution</text>
			</g>

			{/* Засаг-Bottom-3 */}
			<g>
				<text x="695" y="1215" fontSize={7} fontWeight={600}>Funding shortages</text>
				<text x="695" y="1222" fontSize={7} fontWeight={600}>and lack of</text>
				<text x="695" y="1229" fontSize={7} fontWeight={600}>awareness</text>
			</g>
			<g>
				<text x="730" y="1190" fontSize={7} fontWeight={600}>Lack of</text>
				<text x="730" y="1197" fontSize={7} fontWeight={600}>emergency</text>
				<text x="730" y="1204" fontSize={7} fontWeight={600}>plan</text>
			</g>
			<g>
				<text x="770" y="1180" fontSize={7} fontWeight={600}>Underreporting of</text>
				<text x="770" y="1187" fontSize={7} fontWeight={600}>crimes or lack of</text>
				<text x="770" y="1194" fontSize={7} fontWeight={600}>reporting channels</text>
			</g>
			<g>
				<text x="775" y="1208" fontSize={7} fontWeight={600}>Resource</text>
				<text x="775" y="1215" fontSize={7} fontWeight={600}>constraints</text>
			</g>

			{/* Засаг-Bottom-2 */}
			<g>
				<text x="725" y="1250" fontSize={7} fontWeight={600}>Wrongful</text>
				<text x="725" y="1257" fontSize={7} fontWeight={600}>detention</text>
				<text x="730" y="1264" fontSize={7} fontWeight={600}>rates</text>
			</g>
			<g>
				<text x="765" y="1240" fontSize={7} fontWeight={600}>Lack of</text>
				<text x="765" y="1247" fontSize={7} fontWeight={600}>representation</text>
			</g>

			{/* Засаг-Bottom-1 */}
			<g>
				<text x="762" y="1283" fontSize={6} fontWeight={600}>Media</text>
				<text x="762" y="1289" fontSize={6} fontWeight={600}>censorship</text>
			</g>
			<g>
				<text x="777" y="1300" fontSize={6} fontWeight={600}>Civil rights</text>
				<text x="777" y="1306" fontSize={6} fontWeight={600}>violation</text>
			</g>

			{/* Нийгэм-Bottom-1 */}
			<g>
				<text x="792" y="1282" fontSize={6} fontWeight={600}>Voters</text>
				<text x="792" y="1288" fontSize={6} fontWeight={600}>suppression</text>
			</g>

			{/* Нийгэм-Bottom-2 */}
			<g>
				<text x="810" y="1250" fontSize={7} fontWeight={600}>Financial</text>
				<text x="810" y="1257" fontSize={7} fontWeight={600}>dependency</text>
			</g>

			{/* Нийгэм-Bottom-3 */}
			<g>
				<text x="810" y="1205" fontSize={6} fontWeight={600}>Insufficient Accessibility</text>
			</g>
			<g>
				<text x="845" y="1215" fontSize={6} fontWeight={600}>High cost and</text>
				<text x="845" y="1221" fontSize={6} fontWeight={600}>shortage of</text>
				<text x="845" y="1227" fontSize={6} fontWeight={600}>resource</text>
			</g>
			{/* Нийгэм-Bottom-4 */}
			<g>
				<text x="825" y="1153" fontSize={7} fontWeight={600}>Lack of support</text>
				<text x="825" y="1160" fontSize={7} fontWeight={600}>services</text>
			</g>
			<g>
				<text x="870" y="1173" fontSize={7} fontWeight={600}>Conflicting</text>
				<text x="870" y="1180" fontSize={7} fontWeight={600}>interest</text>
			</g>

			{/* Нийгэм-Bottom-5 */}
			<g>
				<text x="795" y="1088" fontSize={7} fontWeight={600}>Weak implementation</text>
				<text x="795" y="1095" fontSize={7} fontWeight={600}>and control</text>
			</g>
			<g>
				<text x="825" y="1105" fontSize={7} fontWeight={600}>Judicial system</text>
				<text x="825" y="1112" fontSize={7} fontWeight={600}>corruption</text>
			</g>
			<g>
				<text x="865" y="1115" fontSize={7} fontWeight={600}>Centralized</text>
				<text x="865" y="1122" fontSize={7} fontWeight={600}>Control</text>
			</g>
			<g>
				<text x="890" y="1130" fontSize={7} fontWeight={600}>Rural neglects,</text>
				<text x="890" y="1137" fontSize={7} fontWeight={600}>overcrowding</text>
			</g>
			<g>
				<text x="915" y="1150" fontSize={7} fontWeight={600}>Corruption</text>
				<text x="915" y="1157" fontSize={7} fontWeight={600}>perception</text>
			</g>

			{/* Нийгэм-Center-5 */}
			<g>
				<text x="860" y="990" fontSize={8} fontWeight={600}>Crisis management</text>
				<text x="860" y="998" fontSize={8} fontWeight={600}>Systems</text>
			</g>
			<g>
				<text x="937" y="962" fontSize={12} fontWeight={600}>V</text>
			</g>

			{/* Нийгэм-Center-4 */}
			<g>
				<text x="835" y="950" fontSize={8} fontWeight={600}>Public Trust in</text>
				<text x="835" y="958" fontSize={8} fontWeight={600}>Governance</text>
			</g>
			<g>
				<text x="900" y="925" fontSize={12} fontWeight={600}>IV</text>
			</g>

			{/* Нийгэм-Center-3 */}
			<g>
				<text x="793" y="918" fontSize={7} fontWeight={600}>Community</text>
				<text x="793" y="925" fontSize={7} fontWeight={600}>Infrastructure</text>
				<text x="793" y="932" fontSize={7} fontWeight={600}>Development</text>
			</g>
			<g>
				<text x="810" y="900" fontSize={7} fontWeight={600}>Public Participation in</text>
				<text x="810" y="907" fontSize={7} fontWeight={600}>Local Governance</text>
			</g>
			<g>
				<text x="865" y="890" fontSize={12} fontWeight={600}>III</text>
			</g>

			{/* Нийгэм-Center-2 */}
			<g>
				<text x="795" y="865" fontSize={7} fontWeight={600}>Local Safety</text>
				<text x="795" y="872" fontSize={7} fontWeight={600}>Measures</text>
			</g>
			<g>
				<text x="832" y="853" fontSize={12} fontWeight={600}>II</text>
			</g>

			{/* Нийгэм-Center-1 */}
			<g>
				<text x="792" y="825" fontSize={4} fontWeight={600}>Knowledge of</text>
				<text x="792" y="829" fontSize={4} fontWeight={600}>Rights and Legal</text>
				<text x="792" y="833" fontSize={4} fontWeight={600}>Protections</text>
			</g>

			{/* External-Center-1 */}
			<g>
				<text x="805" y="795" fontSize={4} fontWeight={600}>Personal mobility</text>
				<text x="805" y="799" fontSize={4} fontWeight={600}>access</text>
			</g>
			<g>
				<text x="815" y="805" fontSize={4} fontWeight={600} {...getProps('Inflation')}>Home</text>
				<text x="815" y="809" fontSize={4} fontWeight={600} {...getProps('Inflation')}>environment</text>
				<text x="815" y="813" fontSize={4} fontWeight={600} {...getProps('Inflation')}>quality</text>
			</g>

			{/* External-Center-2 */}
			<g>
				<text x="842" y="800" fontSize={6} fontWeight={600}>Living conditions</text>
				<text x="842" y="805" fontSize={6} fontWeight={600}>quality</text>
			</g>
			<g>
				<text x="835" y="820" fontSize={6} fontWeight={600}>Sustainable</text>
				<text x="835" y="825" fontSize={6} fontWeight={600}>household habits</text>
			</g>

			{/* External-Center-3 */}
			<g>
				<text x="895" y="800" fontSize={6} fontWeight={600}>Public safety</text>
			</g>
			<g>
				<text x="892" y="820" fontSize={6} fontWeight={600}>Local</text>
				<text x="892" y="826" fontSize={6} fontWeight={600}>infrastructure</text>
				<text x="892" y="832" fontSize={6} fontWeight={600}>access</text>
			</g>
			<g>
				<text x="868" y="858" fontSize={6} fontWeight={600}>Air and water</text>
				<text x="868" y="864" fontSize={6} fontWeight={600}>quality monitoring</text>
			</g>

			{/* External-Center-4 */}
			<g>
				<text x="945" y="800" fontSize={6} fontWeight={600}>Management of</text>
				<text x="945" y="806" fontSize={6} fontWeight={600}>pasturelands</text>
			</g>
			<g>
				<text x="940" y="825" fontSize={6} fontWeight={600} {...getProps('Inflation')}>Utility grids</text>
			</g>
			<g>
				<text x="935" y="845" fontSize={6} fontWeight={600}>Urban planning</text>
			</g>
			<g>
				<text x="932" y="865" fontSize={6} fontWeight={600}>Transport</text>
				<text x="932" y="871" fontSize={6} fontWeight={600}>networks</text>
			</g>
			<g>
				<text x="915" y="890" fontSize={6} fontWeight={600}>Road condition</text>
				<text x="915" y="896" fontSize={6} fontWeight={600}>monitoring</text>
			</g>

			{/* External-Center-5 */}
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

			{/* External-Right-5 */}
			<g>
				<text x="1077" y="835" fontSize={7} fontWeight={600}>Environmental</text>
				<text x="1085" y="842" fontSize={7} fontWeight={600}>hazards</text>
			</g>
			<g>
				<text x="1115" y="910" fontSize={7} fontWeight={600}>Accident</text>
				<text x="1115" y="917" fontSize={7} fontWeight={600}>Analysis</text>
			</g>

			{/* External-Right-3 */}
			<g>
				<text x="1188" y="840" fontSize={7} fontWeight={600}>Air quality</text>
				<text x="1188" y="847" fontSize={7} fontWeight={600}>deterioration</text>
			</g>

			{/* External-Right-2 */}
			<g>
				<text x="1230" y="805" fontSize={7} fontWeight={600}>Poor</text>
				<text x="1230" y="812" fontSize={7} fontWeight={600}>conditions</text>
			</g>
			<g>
				<text x="1240" y="828" fontSize={7} fontWeight={600}>Resource</text>
				<text x="1240" y="835" fontSize={7} fontWeight={600}>inefficiency</text>
			</g>

			{/* External-Right-1 */}
			<g>
				<text x="1275" y="801" fontSize={6} fontWeight={600}>Transportation</text>
				<text x="1275" y="807" fontSize={6} fontWeight={600}>problems</text>
			</g>

			{/* Internal-Right-1 */}
			<g>
				<text x="1295" y="782" fontSize={6} fontWeight={600}>Poor</text>
				<text x="1295" y="788" fontSize={6} fontWeight={600}>health</text>
				<text x="1295" y="795" fontSize={6} fontWeight={600}>habits</text>
			</g>
			<g>
				<text x="1278" y="772" fontSize={5} fontWeight={600}>Personal</text>
				<text x="1278" y="777" fontSize={5} fontWeight={600}>health</text>
				<text x="1278" y="782" fontSize={5} fontWeight={600}>issues</text>
			</g>

			{/* Internal-Right-2 */}
			<g>
				<text x="1230" y="780" fontSize={6} fontWeight={600}>Family health</text>
				<text x="1230" y="786" fontSize={6} fontWeight={600}>barriers</text>
			</g>
			<g>
				<text x="1238" y="750" fontSize={7} fontWeight={600}>Quality of</text>
				<text x="1238" y="756" fontSize={7} fontWeight={600}>available food</text>
				<text x="1238" y="762" fontSize={7} fontWeight={600}>options</text>
			</g>

			{/* Internal-Right-4 */}
			<g>
				<text textAnchor='middle' x="1152" y="730" fontSize={7} fontWeight={600}>Regional</text>
				<text textAnchor='middle' x="1152" y="737" fontSize={7} fontWeight={600}>development</text>
				<text textAnchor='middle' x="1152" y="744" fontSize={7} fontWeight={600}>gaps</text>
			</g>

			{/* Internal-Right-4 */}
			<g>
				<text x="1120" y="660" fontSize={7} fontWeight={600}>Urban-rural</text>
				<text x="1120" y="667" fontSize={7} fontWeight={600}>divide</text>
			</g>
			<g>
				<text x="1100" y="690" fontSize={7} fontWeight={600}>Treatment</text>
				<text x="1100" y="697" fontSize={7} fontWeight={600}>waiting times</text>
			</g>
			<g>
				<text x="1085" y="740" fontSize={7} fontWeight={600}>Financial</text>
				<text x="1085" y="747" fontSize={7} fontWeight={600}>barriers &</text>
				<text x="1085" y="754" fontSize={7} fontWeight={600}>resource</text>
				<text x="1085" y="761" fontSize={7} fontWeight={600}>shortages</text>
			</g>

			{/* Internal-Center-5 */}
			<g>
				<text x="950" y="645" fontSize={7} fontWeight={600}>Healthcare</text>
				<text x="950" y="652" fontSize={7} fontWeight={600}>infrastructure</text>
				<text x="950" y="659" fontSize={7} fontWeight={600}>quality</text>
			</g>
			<g>
				<text x="970" y="680" fontSize={7} fontWeight={600}>National</text>
				<text x="970" y="687" fontSize={7} fontWeight={600}>health</text>
				<text x="970" y="694" fontSize={7} fontWeight={600}>coverage</text>
			</g>
			<g>
				<text x="990" y="725" fontSize={7} fontWeight={600}>Medical</text>
				<text x="990" y="732" fontSize={7} fontWeight={600}>treatment</text>
				<text x="990" y="739" fontSize={7} fontWeight={600}>access</text>
			</g>
			<g>
				<text x="995" y="760" fontSize={7} fontWeight={600}>Эмнэлгийн</text>
				<text x="995" y="767" fontSize={7} fontWeight={600}>ачаалал</text>
			</g>

			{/* Internal-Center-4 */}
			<g>
				<text x="915" y="680" fontSize={7} fontWeight={600}>Healthcare</text>
				<text x="915" y="687" fontSize={7} fontWeight={600}>systems</text>
			</g>
			<g>
				<text x="932" y="720" fontSize={7} fontWeight={600}>Maternal and</text>
				<text x="932" y="727" fontSize={7} fontWeight={600}>child health</text>
				<text x="932" y="734" fontSize={7} fontWeight={600}>programs</text>
			</g>
			<g>
				<text x="945" y="755" fontSize={7} fontWeight={600}>Regional</text>
				<text x="945" y="762" fontSize={7} fontWeight={600}>resource</text>
				<text x="945" y="769" fontSize={7} fontWeight={600}>distribution</text>
			</g>

			{/* Internal-Center-3 */}
			<g>
				<text x="880" y="725" fontSize={7} fontWeight={600}>Urgent care</text>
				<text x="880" y="732" fontSize={7} fontWeight={600}>centres</text>
			</g>
			<g>
				<text x="895" y="760" fontSize={7} fontWeight={600}>Support for</text>
				<text x="895" y="767" fontSize={7} fontWeight={600}>marginalised</text>
				<text x="895" y="774" fontSize={7} fontWeight={600}>groups</text>
			</g>

			{/* Internal-Center-2 */}
			<g>
				<text x="845" y="745" fontSize={5} fontWeight={600}>Family food</text>
				<text x="845" y="750" fontSize={5} fontWeight={600}>security</text>
			</g>
			<g>
				<text x="845" y="761" fontSize={5} fontWeight={600}>Family health</text>
				<text x="845" y="766" fontSize={5} fontWeight={600}>practices</text>
			</g>
			<g>
				<text x="845" y="780" fontSize={5} fontWeight={600} {...getProps('Inflation')}>Household utilities</text>
				<text x="845" y="785" fontSize={5} fontWeight={600} {...getProps('Inflation')}>access</text>
			</g>

			{/* Internal-Center-1 */}
			<g>
				<text x="815" y="765" fontSize={4} fontWeight={600}>Access to</text>
				<text x="815" y="769" fontSize={4} fontWeight={600}>preventive</text>
				<text x="815" y="773" fontSize={4} fontWeight={600}>healthcare</text>
			</g>
			<g>
				<text x="818" y="782" fontSize={4} fontWeight={600}>Basic needs</text>
				<text x="818" y="786" fontSize={4} fontWeight={600}>accessibility</text>
			</g>
			<g>
				<text x="803" y="783" fontSize={4} fontWeight={600}>Food</text>
				<text x="803" y="787" fontSize={4} fontWeight={600}>quality</text>
			</g>

			<text transform="translate(620, 410) rotate(-45)" fontSize={25} fontWeight={900}>State</text>
			<text transform="translate(370, 660) rotate(-45)" fontSize={25} fontWeight={900}>Social</text>

			<text transform="translate(910, 360) rotate(45)" fontSize={25} fontWeight={900}>Private</text>
			<text transform="translate(1160, 610) rotate(45)" fontSize={25} fontWeight={900}>Internal</text>

			<text transform="translate(340, 910) rotate(45)" fontSize={25} fontWeight={900}>Education</text>
			<text transform="translate(600, 1170) rotate(45)" fontSize={25} fontWeight={900}>Засаг</text>

			<text transform="translate(910, 1240) rotate(-45)" fontSize={25} fontWeight={900}>Нийгэм</text>
			<text transform="translate(1170, 980) rotate(-45)" fontSize={25} fontWeight={900}>External</text>
		</svg>
	)
};

export default Chart;