import './Selector.css'
import { useState, useEffect } from 'react'
import { CompactPicker } from 'react-color'

import empty from '../../svg/empty.png'

let colorArray = new Array(5).fill(null)

const Selector = (props) => {
    const [selectedId, setSelectedId] = useState(0)
    const [selectedColor, setSelectedColor] = useState(null)
    const [hasChanged, sethasChanged] = useState(false)
    const [name, setName] = useState("")
    const [scale, setScale] = useState(false)
    const [id, setId] = useState()
    const status = props.hasChanged

    if(props.editPalette){
        colorArray = props.editPalette.colors
    }

    useEffect(() => {
        colorArray[selectedId] = selectedColor
    }, [hasChanged])

    const addPalette = () => {
        if(name.length > 0){
            localStorage.setItem(new Date().valueOf(), JSON.stringify({
                id: new Date().valueOf(),
                name: name,
                colors: colorArray
            }))
            setName("")
            props.changer(!status)
            colorArray = new Array(5).fill(null)
        }
    }

    return (
        <section className='selector'>
            <figure className="selector-colors">
                {colorArray.map((color,i) => {
                    return(
                        <div 
                        id={i} 
                        key={i} 
                        className={`${scale && id == i && "scale"}`}
                        style={
                            color != null ? {background: `${color}`}
                                :scale && id == i ? {
                                    background: "#aea1ff"
                                } : {
                                backgroundImage: `url(${empty})`, 
                                backgroundSize:"contain",
                                }}
                        onClick={(e) => {
                            setSelectedId(e.target.id)
                            sethasChanged(!hasChanged)
                            setScale(true)
                            setId(e.target.id)
                        }} ></div>
                    )
                })}
             </figure>
            <CompactPicker onChange={(e) => {
                sethasChanged(!hasChanged)
                setSelectedColor(e.hex)
                sethasChanged(!hasChanged)
            }} />
            <div className="selector-save">
                <h3>Name</h3>
                <div className="selector-save-container">
                    <input 
                        type="text"
                        value={name}
                        placeholder='Website color scheme' 
                        onChange={(e) => setName(e.target.value)}
                        />
                    <button>
                        <i 
                            className="fa-solid fa-plus"
                            onClick={addPalette} ></i>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Selector