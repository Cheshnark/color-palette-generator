import './SavedPalettes.css'
import { useEffect } from 'react'

import trash from '../../svg/trash.svg'

const SavedPalettes = (props) => {
    const palettes = props.palettes
    const status = props.hasChanged

    const deletePalette = (e) => {
        localStorage.removeItem(e.target.id)
        props.changer(!status)
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