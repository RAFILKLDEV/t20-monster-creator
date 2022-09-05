import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { set } from "../../reducers/ndSlice";
import "./Nd.css"

export const Nd = () => {

    const count = useSelector((state) => state.counter.value)
    const [name, setName] = useState("")
    const dispatch = useDispatch()

    return(
        <div className="kek">
        <div className="ndComponent">
            <input className="name" type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input className="nd" type="number" value={count} onChange={e => dispatch(set(e.target.value))}></input>         
        </div>
        <div>
            <input className="desc" type="text"></input>
        </div>
        <div>
            <select>
                <option>Animais</option>
                <option>Construtos</option>
                <option>Espiritos</option>
                <option>Humanoides</option>
                <option>Monstros</option>
                <option>Mortos-Vivos</option>
            </select>
            <input id="number" type="number"></input>
            <select>
                <option>Pequeno</option>
                <option>Medio</option>
                <option>Grande</option>
                <option>Gigante</option>
                <option>Enorme</option>
            </select>
        </div>
        </div>
    )
}
