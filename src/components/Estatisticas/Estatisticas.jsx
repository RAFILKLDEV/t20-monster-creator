import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tabela } from "../../constantes";
import Modificador from "../Modificador/Modificador";
import Resistencias from "../Resistencias/Resistencias";

const Estatisticas = () => {
  // Indice 0 B.ATA 1 Dano.M 2 Defesa 3 R.FORTE 4 R.MEDIA 5 R.FRACA 6 PV 7 CD

  const count = useSelector((state) => state.counter.value);

  const [defesa, setDefesa] = useState(0);
  const [iniciativa, setIniciativa] = useState(0);
  const [percepcao, setPercepcao] = useState(0);

  useEffect(() => {
    setDefesa(tabela[count][2]);
  }, [count]);

  return (
    <div id="container">
      <div id="input-atributos" className="container-field">
        <div className="EstatisticaComponent">
          <span>
            <Modificador
              label={"Defesa"}
              table={2}
              nd={count}
              setDefesa={setDefesa}
              defesa={defesa}
            />
            <span id="label">Iniciativa </span>
            <input
              id="input-number"
              type="number"
              value={iniciativa}
              onChange={(e) => setIniciativa(e.target.value)}
            ></input>
            <span>
              <span id="label">Percepcao </span>
              <input
                id="input-number"
                type="number"
                value={percepcao}
                onChange={(e) => setPercepcao(e.target.value)}
              ></input>
            </span>
          </span>
          <div id="input-atributos" className="container-field">
            <Resistencias count={count} label={"Fort"}></Resistencias>
            <Resistencias count={count} label={"Ref"}></Resistencias>
            <Resistencias count={count} label={"Von"}></Resistencias>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estatisticas;
