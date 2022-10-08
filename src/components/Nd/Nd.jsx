import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../reducers/ndSlice";
import TextArea from "../Textarea/Textarea";
import "./Nd.css";

export const Nd = () => {
  const count = useSelector((state) => state.counter.value);
  const points = useSelector((state) => state.counter.points);

  const [name, setName] = useState("");
  const dispatch = useDispatch();

  return (
    <div id="container">
      <div className="container-field">
        <div className="kek">
          <div className="container-field">
            <div className="ndComponent">
              <input
                placeholder="Nome do Monstro"
                className="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              {points}

              <input
                className="nd"
                type="number"
                value={count}
                onChange={(e) => dispatch(setValue(e.target.value))}
              ></input>
            </div>
          </div>
          <img
            id="img"
            src="https://media.magic.wizards.com/image_legacy_migration/images/magic/daily/mm/mm273_shipbreakerkraken.jpg"
            alt="Imagem do Monstro"
          />
          <div id="desc">
            <TextArea ph="Descrição ..." />
          </div>
          <div id="input-atributos">
            <select>
              <option>Animais</option>
              <option>Construtos</option>
              <option>Espiritos</option>
              <option>Humanoides</option>
              <option>Monstros</option>
              <option>Mortos-Vivos</option>
            </select>
            <select>
              <option>Lacaio</option>
              <option>Especial</option>
              <option>Solo</option>
            </select>
            <select>
              <option>Pequeno</option>
              <option>Medio</option>
              <option>Grande</option>
              <option>Gigante</option>
              <option>Enorme</option>
              <option>Colossal</option>
            </select>
            <select>
              <option>Masmorras</option>
              <option>Ermos</option>
              <option>Puristas</option>
              <option>Reino dos Mortos</option>
              <option>Duyshidakk</option>
              <option>Sszzaazitas</option>
              <option>Trolls</option>
              <option>Dragões</option>
              <option>Tormenta</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
