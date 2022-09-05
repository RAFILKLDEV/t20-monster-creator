import React, { useEffect, useState } from "react";
import { tabela } from '../../constantes'

const Modificador = ( props ) => {

    const [result, setResult] = useState(0)

    const modificadorNd = (atual, valor) => { 
        let lvMax = atual + 5
        let lvMin = atual - 5
        let lvAtual = atual

        if (lvMax > 21) lvMax = 21

        if (lvMin < 0) lvMin = 0

        // atual 2 valor 16 | 11, 14, 16, 19, 21

        let resultado = 0

        // console.log(`lvAtual ${lvAtual} | lvMin ${lvMin} | lvMax ${lvMax} | defesa ${valor}`)

        if (valor > tabela[atual][props.table]) {

            for (let index = lvAtual; index < lvMax; index++) {
                if (valor > tabela[index][props.table]) resultado++
            }
        
        } else if (valor < tabela[atual][props.table]) {

            for (let index = lvAtual-1; index >= lvMin; index--) {
                if (valor <= tabela[index][props.table]) resultado--
            }

        } 

        if (resultado === 0) resultado = ""
        
        setResult(resultado)

        return result
        
    }

    const colorResult = ( result ) => {
        if (result < 0) return <div id="green">{result}</div>
        else if (result > 0) return <div id="red">{result}</div>

        return result
    }

    useEffect(() => {
        modificadorNd(Number(props.nd), Number(props.defesa))
    })

    return(
        <span>
            <span id="label">{props.label} {colorResult(result)} </span>
            <input id="inputMod" type="number" value={props.defesa} onChange={e => props.setDefesa(e.target.value)}></input>
        </span>
    )
}

export default Modificador