import React from "react";
import { useState } from "react";

const Atributos = () => {
  const [atributos, setAtributos] = useState({
    atributos: ["For", "Des", "Con", "Int", "Sab", "Von"],
    valores: [0, 2, 2, 0, 0, 0],
  });

  return (
    <div id="container">
      <div className="container-field">
        <div id="input-atributos">
          {atributos.atributos.map((e, i) => (
            <div key={`atributo${i}`}>
              <span id="label">{atributos.atributos[i]}</span>
              <input
                id="input-number"
                type="number"
                defaultValue={atributos.valores[i]}
              ></input>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Atributos;
