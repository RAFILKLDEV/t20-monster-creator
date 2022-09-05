import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tabela } from "../../constantes";
import Modificador from "../Modificador/Modificador";
import Resistencias from "../Resistencias/Resistencias";
import "./Estatisticas.css"

const Estatisticas = () => {

    // Indice 0 B.ATA 1 Dano.M 2 Defesa 3 R.FORTE 4 R.MEDIA 5 R.FRACA 6 PV 7 CD

    const count = useSelector(state => state.counter.value)

    const [defesa, setDefesa] = useState(0)

    useEffect(() => {
        setDefesa(tabela[count][2])
    },[count])

    return(
        <div className="EstatisticaComponent">
            <span>
                <span id="label">Iniciativa </span><span> valor, <span id="label">Percepcao </span><span>valor</span></span>
            </span>
            <span>
                <Modificador label={"Defesa"} table={2} nd={count} setDefesa={setDefesa} defesa={defesa}/>
                <Resistencias count={count} label={"Fort"}></Resistencias>
                <Resistencias count={count} label={"Ref"}></Resistencias>
                <Resistencias count={count} label={"Von"}></Resistencias>
            </span>
        </div>
    )
}

export default Estatisticas