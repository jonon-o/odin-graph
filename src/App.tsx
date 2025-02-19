// @ts-nocheck
import './App.css'
import Chart from './svg/Chart';
import { Fragment, type ReactNode, useState, useEffect } from 'react';
import Select from 'react-dropdown-select';
import { tableData, type LevelLayer } from './svg/table-data';
import { Level } from './types';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { data, Section } from './svg/data';

import { getData } from './api';

const sectionDictionary: Record<Section, string> = {
    [Section.STATE]: 'State',
    [Section.SOCIAL]: 'Social',
    [Section.EDU]: 'Education',
    [Section.GOV]: 'Government',
    [Section.SOC_1]: 'Social',
    [Section.EXT]: 'External',
    [Section.INT]: 'Internal',
    [Section.PRIVATE]: 'Private'
};

function App() {
    const [ filter, setFilter ] = useState<string | null>('');
    const [ selectedLevel, setSelectedLevel ] = useState<Level | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            // const xx = await getData();
            // console.log('x>>>', xx);
        }
        void fetchData();
    }, []);

    const [open, setOpen] = useState(false);
    const [ selectedTexts, setSelectedTexts ] = useState<string[]>([]);
    const [ label, setLabel ] = useState<string>('');

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => {
        setOpen(false);
        setSelectedTexts([]);
        setLabel('');
    };

    const handleChipClick = (text: string) => {
        if (selectedTexts.includes(text)) {
            const updated = selectedTexts.filter(textElement => textElement !== text);
            setSelectedTexts(updated);
        } else {
            setSelectedTexts([...selectedTexts, text]);
        }
    }

    const renderModalSelections = () => {
        const elements: ReactNode[] = [];
        for (const [ sectionKey, section ] of data) {
            elements.push(
                <h3>
                    {sectionDictionary[sectionKey]}
                </h3>
            )
            for (const [ placementKey, placement ] of section) {
                elements.push(
                    <h4>
                        {placementKey === 'center' ? 'Sun' : 'Moon'}
                    </h4>
                )
                for (const [ levelKey, level ] of placement) {
                    elements.push(
                        <h5>
                            Layer: {levelKey}
                        </h5>
                    )
                    const chipElements: ReactNode[] = [];
                    for (let textGroupIndex = 0; textGroupIndex < level.length; textGroupIndex++) {
                        const groupText = level[textGroupIndex];
                        const fullText = groupText.map(item => item.text).join(' ');
                        const isSelected = selectedTexts.includes(fullText);
                        chipElements.push(
                            <span
                                className={`chip ${isSelected ? 'selected-chip' : ''}`}
                                onClick={() => handleChipClick(fullText)}
                            >
                                {fullText}
                            </span>
                        );
                    }
                    elements.push(
                        <div className='chip-row'>
                            {chipElements}
                        </div>
                    )
                }
            }
        }
        return elements;
    }

    const submit = () => {
        const body = {
            label,
            items: selectedTexts
        }
        console.log('body>>>', body);
    }

    return (
        <main style={{ height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Chart
                filter={filter ?? null}
                selectedLevel={selectedLevel}
                onLevelChange={setSelectedLevel}
            />
            <div className='filter'>
                <Select
                    values={filter ? [filter] : []}
                    clearable
                    placeholder='Filter'
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
                <button onClick={onOpenModal} className='create'>
                    +
                </button>
            </div>
            <Modal open={open} onClose={onCloseModal} center>
                <div className='input-row'>
                    <span>
                        Нэр:
                    </span>
                    <input
                        className='input'
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                    <button className='submit' onClick={submit}>
                        Хадгалах
                    </button>
                </div>
                {renderModalSelections()}
            </Modal>
        </main>
    )
}

export default App
