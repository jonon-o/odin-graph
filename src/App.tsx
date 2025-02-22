// @ts-nocheck

// App.tsx
import './App.css'
import Chart from './svg/Chart'
import { ReactNode, useState, useEffect } from 'react'
import Select from 'react-dropdown-select'
import { tableData } from './svg/table-data'
import { Level } from './types'
import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { data, Section } from './svg/data'
import { getData } from './api'

const sectionDictionary: Record<Section, string> = {
  [Section.STATE]: 'State',
  [Section.SOCIAL]: 'Social',
  [Section.EDU]: 'Education',
  [Section.GOV]: 'Government',
  [Section.SOC_1]: 'Social',
  [Section.EXT]: 'External',
  [Section.INT]: 'Internal',
  [Section.PRIVATE]: 'Private'
}

function App() {
  // State for Chart filter and selected layer
  const [filter, setFilter] = useState<string | null>(null)
  const [selectedLevel, setSelectedLevel] = useState<Level | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      // const xx = await getData();
      // console.log('Fetched data:', xx);
    }
    void fetchData()
  }, [])

  // State for modal visibility, chip selections, and input label
  const [open, setOpen] = useState(false)
  const [selectedTexts, setSelectedTexts] = useState<string[]>([])
  const [label, setLabel] = useState<string>('')

  // Initial filter options for the Select dropdown
  const initialFilters = [
    { value: 'Inflation', label: 'Inflation' },
    { value: 'Natural disasters', label: 'Natural disasters' },
    { value: 'Crises', label: 'Crises' },
    { value: 'Geopolitical factors', label: 'Geopolitical factors' }
  ]
  const [filters, setFilters] = useState(initialFilters)

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => {
    setOpen(false)
    setSelectedTexts([])
    setLabel('')
  }

  // Toggle chip selection (each chip represents a group in data.ts)
  const handleChipClick = (text: string) => {
    if (selectedTexts.includes(text)) {
      const updated = selectedTexts.filter((t) => t !== text)
      setSelectedTexts(updated)
    } else {
      setSelectedTexts([...selectedTexts, text])
    }
  }

  // This function traverses your in-memory data (data.ts)
  // For every group whose concatenated text matches one of the selected chips,
  // update each item in that group so its filterable array includes the new filter (label).
  const updateDataForSelectedChips = () => {
    for (const [sectionKey, sectionMap] of data) {
      for (const [placementKey, placementMap] of sectionMap) {
        for (const [levelKey, groups] of placementMap) {
          groups.forEach((group) => {
            const fullText = group.map(item => item.text).join(' ')
            if (selectedTexts.includes(fullText)) {
              group.forEach(item => {
                if (!item.filterable.includes(label)) {
                  item.filterable.push(label)
                }
              })
            }
          })
        }
      }
    }
  }

  // Render the modal chips from your data structure.
  const renderModalSelections = (): ReactNode[] => {
    const elements: ReactNode[] = []
    for (const [sectionKey, section] of data) {
      elements.push(<h3 key={`header-${sectionKey}`}>{sectionDictionary[sectionKey]}</h3>)
      for (const [placementKey, placement] of section) {
        elements.push(
          <h4 key={`placement-${sectionKey}-${placementKey}`}>
            {placementKey === 'center' ? 'Sun' : 'Moon'}
          </h4>
        )
        for (const [levelKey, level] of placement) {
          elements.push(<h5 key={`level-${sectionKey}-${placementKey}-${levelKey}`}>Layer: {levelKey}</h5>)
          const chipElements: ReactNode[] = []
          for (let i = 0; i < level.length; i++) {
            const groupText = level[i]
            const fullText = groupText.map(item => item.text).join(' ')
            const isSelected = selectedTexts.includes(fullText)
            chipElements.push(
              <span
                key={`chip-${sectionKey}-${placementKey}-${levelKey}-${i}`}
                className={`chip ${isSelected ? 'selected-chip' : ''}`}
                onClick={() => handleChipClick(fullText)}
              >
                {fullText}
              </span>
            )
          }
          elements.push(
            <div key={`chip-row-${sectionKey}-${placementKey}-${levelKey}`} className='chip-row'>
              {chipElements}
            </div>
          )
        }
      }
    }
    return elements
  }

  // When the modal is submitted, update the filters for the dropdown
  // and update the filterable property of the appropriate groups.
  const submit = () => {
    if (label && !filters.some((f) => f.value === label)) {
      setFilters([...filters, { value: label, label }])
    }
    // Update in-memory data for each selected chip group:
    updateDataForSelectedChips()
    console.log('Updated in-memory data:', data)
    onCloseModal()
  }

  return (
    <main
      style={{
        height: '100dvh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Chart filter={filter ?? null} selectedLevel={selectedLevel} onLevelChange={setSelectedLevel} />
      <div className='filter'>
        <Select
          values={filter ? [filter] : []}
          clearable
          placeholder='Filter'
          options={filters}
          onChange={(value) => {
            if (value?.[0]?.value) {
              setFilter(value[0].value)
            } else {
              setFilter(null)
            }
          }}
        />
        <button onClick={onOpenModal} className='create'>
          +
        </button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='input-row'>
          <span>Нэр:</span>
          <input className='input' value={label} onChange={(e) => setLabel(e.target.value)} />
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
