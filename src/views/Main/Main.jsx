import './Main.css'

import Header from '../../components/Header/Header'
import Selector from '../../components/Selector/Selector'
import SavedPalettes from '../../components/SavedPalettes/SavedPalettes'

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Selector />
                <SavedPalettes />
            </main>
        </>
    )
}

export default Main