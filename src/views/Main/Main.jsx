import './Main.css'
import { useState, useEffect } from 'react'

import Header from '../../components/Header/Header'
import Selector from '../../components/Selector/Selector'
import SavedPalettes from '../../components/SavedPalettes/SavedPalettes'

const Main = () => {
    const [hasChanged, setHasChanged] = useState(false)

    let palettes = []
    let local = localStorage

    useEffect(() => {
        local = localStorage
    }, [hasChanged])
    
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
                <Selector hasChanged={hasChanged} changer={setHasChanged}/>
                <SavedPalettes palettes={palettes} hasChanged={hasChanged} changer={setHasChanged}/>
            </main>
        </>
    )
}

export default Main