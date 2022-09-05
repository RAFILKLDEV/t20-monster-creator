import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { tabela } from "../../constantes";
import Modificador from "../Modificador/Modificador";

const Resistencias = ( props ) => {

    const [result, setResult] = useState("Médio")
    const [defesa, setDefesa] = useState("")

    const func = (result) => {
        switch (result) {
            case "Forte": return 3
            case "Médio": return 4
            case "Fraco": return 5    
            default: return
        }
    }

    useEffect(() => {
        setDefesa(tabela[props.count][func(result)])
    },[props.count, result])

    return(
        <div>
            <Modificador label={props.label} table={func(result)} nd={props.count} setDefesa={setDefesa} defesa={defesa}/>
            <select id="noBg" value={result} onChange={e => setResult(e.target.value)}>
                <option >Forte</option>
                <option>Médio</option>
                <option>Fraco</option>
            </select>
        </div>
    )
}

export default Resistencias