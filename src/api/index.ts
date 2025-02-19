import axios from 'axios';

const BASE_URL = 'http://18.140.234.198:8087';

export const getData = async () => {
	const b = await axios.get(`${BASE_URL}/api/data`);
	console.log('b>>>', b);
}

