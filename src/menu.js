
import { link } from 'react-router-dom';
import './menu.css'

function menu () {
    return(
        <div className="faixa-menu">
            <h1> menu </h1>

            <link to= "/dobro"> exercicio dobro </link>
        </div>
    )
}

export default menu;