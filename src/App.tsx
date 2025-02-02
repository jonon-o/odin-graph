import './App.css'
import Chart from './svg/Chart';
import { useState } from 'react';

function App() {
    const [ filter, setFilter ] = useState<string | null>('');

  return (
    <main style={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart filter={filter ?? null}/>
        <select
            className='select'
            onChange={event => {
                setFilter(event.target.value);
            }}
            value={filter ?? undefined}
        >
            <option value=''>--Please choose an option--</option>
            <option value="Inflation">Inflation</option>
            <option value="Natural disasters">Natural disasters</option>
            <option value="Crises">Crises</option>
            <option value="Geopolitical factors">Geopolitical factors</option>
        </select>
    </main>
  )
}

export default App
