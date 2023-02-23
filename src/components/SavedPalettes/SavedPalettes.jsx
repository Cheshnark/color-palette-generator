import './SavedPalettes.css'
import { useEffect, useState } from 'react'

import trash from '../../svg/trash.svg'

const SavedPalettes = () => {
    // const [palettes, setPalettes] = useState(null)
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

    const deletePalette = (e) => {
        localStorage.removeItem(e.target.id)
        setHasChanged(!hasChanged)
    }

    return (
        <section className='saved-palettes'>
            <h2>Saved palettes</h2>
            <div className="saved-palettes-container">
                {palettes &&
                    palettes.map((palette, i) => {
                    return (
                        <div className="palette" key={i}>
                            <div className="palette-name-container">
                                <h4>{palette.name}</h4>
                                <img 
                                    src={trash} 
                                    alt="trash-icon"
                                    id={palette.id}
                                    onClick={deletePalette} />
                            </div>
                            <figure className="palette-colors">
                                {palette.colors.map(color => {
                                    return(
                                        <div 
                                            className="color"
                                            style={{backgroundColor: `${color}`}} ></div>
                                    )
                                })}
                            </figure>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default SavedPalettes