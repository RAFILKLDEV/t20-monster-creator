import React, { createRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { tabela } from "../../constantes";
import Modificador from "../Modificador/Modificador.jsx";

// Array.prototype.insert = function (index, ...items) {
//   this.splice(index, 1, ...items);
// };

const Ataques = () => {
  const count = useSelector((state) => state.counter.value);

  const input = createRef(0);
  const input2 = createRef(1);

  const [ataques, setAtaques] = useState({
    ataque: 0,
    nXombo: 0,
    total: 0,
    ataques: [],
  });

  const stateful2 = (stateSet, param) => {
    stateSet(param());
  };

  const Ataque1at33 = (props) => {
    return (
      <div className="container-field">
        <select id="input-select">
          <option>Corpo a Corpo</option>
          <option>Ataque a Distancia</option>
        </select>
        <input
          placeholder="Adaga"
          id="input-field2"
          ref={input}
          onChange={(e) => {
            input.current.style.width = "100px";
            let largura = e.target.scrollWidth;
            console.log(largura);
            input.current.style.width = `${largura}px`;
          }}
        ></input>
        <input
          id="input-number"
          defaultValue={props.ataque}
          type="number"
          onBlur={(e) => {
            if (e.target.value == "") {
              e.target.value = 0;
            }

            const value = parseInt(e.target.value);
            const total = ataques.ataques.reduce((acc, val) => acc + val);

            if (value > ataques.ataque) {
              e.target.value = 0;
              return console.log("Valor é maior que ataque");
            }

            if (
              value -
                ataques.ataques[props.indice] +
                (ataques.ataques.length && total) >
              ataques.ataque
            ) {
              e.target.value = 0;
              return console.log("Valor Atual + Valor ataque Ultrapassou");
            }

            stateful2(setAtaques, () => {
              const values = { ...ataques };
              values.ataques.splice(props.indice, 1, value);
              return values;
            });
          }}
        ></input>
        <input
          placeholder="1d4+4 Perfurante"
          id="input-field2"
          ref={input2}
          onChange={(e) => {
            input2.current.style.width = "30px";
            let largura = e.target.scrollWidth;
            console.log(largura);
            input2.current.style.width = `${largura}px`;
          }}
        ></input>
      </div>
    );
  };

  useEffect(() => {
    stateful2(setAtaques, () => {
      const values = { ...ataques };
      values.ataque = tabela[count][0];
      return values;
    });
  }, [count]);

  return (
    <div id="container">
      <div className="container-field">
        <Modificador
          label={"Ataques"}
          table={0}
          state={ataques}
          kek={"ataque"}
          nd={count}
          setDefesa={setAtaques}
          defesa={ataques.ataque}
        />
        <button
          id="button"
          onClick={() =>
            stateful2(setAtaques, () => {
              const values = { ...ataques };
              values.nXombo++;
              ataques.ataques.push(0);
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
                values.ataques.pop();
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
            <Ataque1at33
              key={`ataque-${i}`}
              indice={i}
              ataque={ataques.ataques[i]}
              setAtaque={setAtaques}
            ></Ataque1at33>
          ))}
      </div>
    </div>
  );
};

export default Ataques;
