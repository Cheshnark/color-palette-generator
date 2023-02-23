import './Selector.css'
import { useState, useEffect } from 'react'
import { CompactPicker } from 'react-color'

let colorArray = new Array(5).fill(null)

const Selector = (props) => {
    const [selectedId, setSelectedId] = useState(0)
    const [selectedColor, setSelectedColor] = useState(null)
    const [haschanged, setHasChanged] = useState(false)
    const [name, setName] = useState("")
    const status = props.hasChanged

    useEffect(() => {
        colorArray[selectedId] = selectedColor
    }, [haschanged])

    const addPalette = () => {
        localStorage.setItem(new Date().valueOf(), JSON.stringify({
            id: new Date().valueOf(),
            name: name,
            colors: colorArray
        }))
        setName("")
        props.changer(!status)
    }

    return (
        <section className='selector'>
            <figure className="selector-colors">
                {colorArray.map((color,i) => {
                    return(
                        <div 
                        id={i} 
                        key={i} 
                        style={{backgroundColor: `${color}`}}
                        onClick={(e) => {
                            setSelectedId(e.target.id)
                            setHasChanged(!haschanged)
                        }} ></div>
                    )
                })}
            </figure>
            <CompactPicker onChange={(e) => {
                setSelectedColor(e.hex)
                setHasChanged(!haschanged)
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