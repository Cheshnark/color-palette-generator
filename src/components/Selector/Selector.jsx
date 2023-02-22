import './Selector.css'
import { useState, useEffect } from 'react'
import { CompactPicker } from 'react-color'

let colorArray = new Array(5).fill(null)

const Selector = () => {
    
    const [selectedId, setSelectedId] = useState(0)
    const [selectedColor, setSelectedColor] = useState(null)

    useEffect(() => {
        colorArray[selectedId] = selectedColor
        console.log(colorArray);

    }, [selectedColor])

    return (
        <section className='selector'>
            <figure className="selector-colors">
                {colorArray.map((color,i) => {
                    return(
                        <div 
                        id={i} 
                        key={i} 
                        style={{backgroundColor: `${color}`}}
                        onClick={(e) => setSelectedId(e.target.id)} ></div>
                    )
                })}
            </figure>
            <CompactPicker onChange={(e) => setSelectedColor(e.hex)} />
            <div className="selector-save">
                <h3>Name</h3>
                <div className="selector-save-container">
                    <input 
                        type="text"
                        placeholder='Website color scheme' />
                    <button>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>

        </section>
    )
}

export default Selector