import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { tabela } from "../../constantes";
import Modificador from "../Modificador/Modificador";

const Ataques = () => {
  const count = useSelector((state) => state.counter.value);

  const [ataque, setAtaque] = useState(6);
  const [nCombo, setNCombo] = useState(0);

  const AtaqueField = () => {
    const [ataque1, setAtaque1] = useState(0);
    const [ataque2, setAtaque2] = useState(0);
    const [ataque3, setAtaque3] = useState(0);
    const [total, setTotal] = useState(0);

    const Ataque1at3 = (props) => {
      return (
        <div>
          <span>total {total}</span>
          <input
            value={props.ataque}
            type="number"
            onChange={(e) => {
              if (e.target.value <= ataque - total)  {
                props.setAtaque(e.target.value);
              }
            }}
          ></input>
          <input></input>
        </div>
      );
    };

    useEffect(() => {
      console.log(parseInt(ataque1) + parseInt(ataque2) + parseInt(ataque3), total - ataque)
      setTotal(parseInt(ataque1) + parseInt(ataque2) + parseInt(ataque3))
    }, [ataque1, ataque2, ataque3]);

    if (nCombo == 1) {
      return (
        <div>
          <Ataque1at3 ataque={ataque1} setAtaque={setAtaque1} />
        </div>
      );
    } else if (nCombo == 2) {
      return (
        <div>
          <Ataque1at3 ataque={ataque1} setAtaque={setAtaque1} />
          <Ataque1at3 ataque={ataque2} setAtaque={setAtaque2} />
        </div>
      );
    } else if (nCombo == 3) {
      return (
        <div>
          <Ataque1at3 ataque={ataque1} setAtaque={setAtaque1} />
          <Ataque1at3 ataque={ataque2} setAtaque={setAtaque2} />
          <Ataque1at3 ataque={ataque3} setAtaque={setAtaque3} />
        </div>
      );
    }
  };

  useEffect(() => {
    setAtaque(tabela[count][0]);
  }, [count]);

  return (
    <div>
      <Modificador
        label={"Ataques"}
        table={0}
        nd={count}
        setDefesa={setAtaque}
        defesa={ataque}
      />
      <select value={nCombo} onChange={(e) => setNCombo(e.target.value)}>
        <option>0</option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <AtaqueField />
    </div>
  );
};

export default Ataques;
