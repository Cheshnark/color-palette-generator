import './Header.css'

import palette from '../../svg/palette.svg'

const Header = () => {
    return (
        <header className="header">  
            <img src={palette} alt="" />
            <h1>Color palette generator</h1>
        </header>
    )
}

export default Header