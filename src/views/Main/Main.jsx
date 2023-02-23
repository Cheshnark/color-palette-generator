import './Main.css'
import { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'
import Selector from '../../components/Selector/Selector'
import SavedPalettes from '../../components/SavedPalettes/SavedPalettes'

const Main = () => {
    const [hasChanged, setHasChanged] = useState(false)
    const [editPaletteNumber, setEditPaletteNumber] = useState(0)
    const [editPalette, setEditPalette] = useState()

    let palettes = []
    let local = localStorage

    useEffect(() => {
        local = localStorage
    }, [hasChanged])

    useEffect(() => {
        setEditPalette(JSON.parse(localStorage.getItem(editPaletteNumber)))
    },[editPaletteNumber])
    
    for(let key in local){
        const item = JSON.parse(localStorage.getItem(key))
        if(item !== null){
            palettes.push(item)
        }
    }

    return (
        <>
            <Header />
            <main>
                <Selector 
                    hasChanged={hasChanged} 
                    changer={setHasChanged}
                    editPalette={editPalette}
                    />
                <SavedPalettes 
                    palettes={palettes} 
                    hasChanged={hasChanged} 
                    changer={setHasChanged}
                    paletteEdit={setEditPaletteNumber}
                    />
            </main>
        </>
    )
}

export default Main