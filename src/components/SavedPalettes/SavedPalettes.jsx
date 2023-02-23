import './SavedPalettes.css'

import trash from '../../svg/trash.svg'

const SavedPalettes = (props) => {
    const palettes = props.palettes
    const status = props.hasChanged

    const deletePalette = (e) => {
        localStorage.removeItem(e.target.id)
        props.changer(!status)
    }

    const edit = (e) => {
        props.paletteEdit(e.target.id)
    }

    return (
        <section className='saved-palettes'>
            <h2>Saved palettes</h2>
            <div className="saved-palettes-container">
                {palettes &&
                    palettes.map((palette, i) => {
                    return (
                        <div className="palette" key={i} id={palette.id} >
                            <div className="palette-name-container">
                                <h4>{palette.name}</h4>
                                <img 
                                    src={trash} 
                                    alt="trash-icon"
                                    id={palette.id}
                                    onClick={deletePalette} />
                            </div>
                            <figure className="palette-colors" id={palette.id} onClick={edit}>
                                {palette.colors.map((color, i) => {
                                    return(
                                        <div 
                                            className="color"
                                            style={{backgroundColor: `${color}`}}
                                            key={i}    
                                        ></div>
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