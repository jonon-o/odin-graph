// @ts-nocheck
import './App.css'
import Chart from './svg/Chart';
import { useState } from 'react';
import Select from 'react-dropdown-select';

function App() {
    const [ filter, setFilter ] = useState<string | null>('');

    return (
    <main style={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart filter={filter ?? null}/>
        <Select
            values={filter ? [filter] : []}
            clearable
            placeholder='Filter'
            className='select'
            options={[
                { value: 'Inflation', label: 'Inflation' },
                { value: 'Natural disasters', label: 'Natural disasters' },
                { value: 'Crises', label: 'Crises' },
                { value: 'Geopolitical factors', label: 'Geopolitical factors' },
            ]}
            onChange={(value) => {
                if (value?.[0]?.value) {
                    setFilter(value[0].value);
                } else {
                    setFilter(null);
                }
            }}
        />
    </main>
  )
}

export default App
