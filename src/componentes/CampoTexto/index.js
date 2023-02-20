import { useState } from 'react';
import './CampoTexto.css'

const CampoTexto = (props) => {
    
    //let valor = 'Eduardo Raiol';

    const [valor, setValor] = useState('Eduardo Raiol') 

    const aoDigitado = (evento) => {
        setValor(evento.target.value);
        console.log(valor);
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto