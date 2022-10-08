import React from "react";
import { useState } from "react";

const Pericias = () => {
  const [ataques, setAtaques] = useState({
    nXombo: 0,
    pericias: [],
    result: [],
  });

  const stateful2 = (stateSet, param) => {
    stateSet(param());
  };

  const InputPericias = (props) => {
    return (
      <div className="container-field">
        <div className="container-field">
          <select
            id="input-select"
            value={ataques.pericias[props.indice]}
            onChange={(e) => {
              stateful2(setAtaques, () => {
                const values = { ...ataques };
                values.pericias.splice(props.indice, 1, e.target.value);
                return values;
              });
            }}
          >
            <option>Acrobacia</option>
            <option>Adestramento</option>
            <option>Atletismo</option>
            <option>Atuação</option>
            <option>Cavalgar</option>
            <option>Conhecimento</option>
            <option>Cura</option>
            <option>Diplomacia</option>
            <option>Enganação</option>
            <option>Fortitude</option>
            <option>Furtividade</option>
            <option>Guerra</option>
            <option>Iniciativa</option>
            <option>Intimidação</option>
            <option>Intuição</option>
            <option>Investigação</option>
            <option>Jogatina</option>
            <option>Ladinagem</option>
            <option>Luta</option>
            <option>Misticismo</option>
            <option>Nobreza</option>
            <option>Oficio</option>
            <option>Percepção</option>
            <option>Pilotagem</option>
            <option>Pontaria</option>
            <option>Reflexos</option>
            <option>Religião</option>
            <option>Sobrevivência</option>
            <option>Vontade</option>
          </select>
          <input
            id="input-number"
            defaultValue={ataques.result[props.indice]}
            type="number"
            onBlur={(e) => {
              const value = parseInt(e.target.value);
              stateful2(setAtaques, () => {
                const values = { ...ataques };
                values.result.splice(props.indice, 1, value);
                return values;
              });
            }}
          ></input>
          <input placeholder="+5 no Subterrâneo" id="input-field"></input>
        </div>
      </div>
    );
  };

  return (
    <div id="container">
      <div className="container-field">
        <div id="label">Pericias</div>
        <button
          id="button"
          onClick={() =>
            stateful2(setAtaques, () => {
              const values = { ...ataques };
              values.nXombo++;
              ataques.pericias.push("Acrobacia");
              ataques.result.push(0);
              return values;
            })
          }
        >
          +
        </button>
        <button
          id="button"
          onClick={() => {
            if (ataques.nXombo == 0) {
              return;
            } else {
              stateful2(setAtaques, () => {
                const values = { ...ataques };
                values.pericias.pop();
                values.result.pop();
                values.nXombo--;
                return values;
              });
            }
          }}
        >
          --
        </button>
      </div>

      <div>
        {/* <AtaqueField /> */}
        {Array(ataques.nXombo)
          .fill("")
          .map((v, i) => (
            <InputPericias
              key={`ataque-${i}`}
              indice={i}
              ataque={ataques.pericias[i]}
              setAtaque={setAtaques}
            ></InputPericias>
          ))}
      </div>
    </div>
  );
};

export default Pericias;
