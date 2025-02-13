// @ts-nocheck
import './App.css'
import Chart from './svg/Chart';
import { Fragment, type ReactNode, useState } from 'react';
import Select from 'react-dropdown-select';
import { tableData, type LevelLayer } from './svg/table-data';
import { Level } from './types';

const renderRows = (data: LevelLayer['items']) => {
    const items: ReactNode[] = [];
    for (const [ color, texts ] of data) {
        for (const text of texts) {
            items.push(
                <tr key={text} className={`row-${color}`}>
                    <td>
                        {text}
                    </td>
                </tr>
            )
        }
    }
    return items;
}

function App() {
    const [ filter, setFilter ] = useState<string | null>('');
    const [ selectedLevel, setSelectedLevel ] = useState<Level | null>(null);

    return (
    <main style={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart
            filter={filter ?? null}
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
        />
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
        <div className='table-container'>
            <table className='table'>
                <tbody>
                {
                    tableData
                        .filter(levelData => {
                            if (!selectedLevel) {
                                return true;
                            }
                            return selectedLevel === levelData.level;
                        })
                        .map((row) => {
                        return (
                            <Fragment key={row.label}>
                                <tr>
                                    <td className='table-label'>{row.label}</td>
                                </tr>
                                {renderRows(row.items)}
                            </Fragment>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    </main>
  )
}

export default App
