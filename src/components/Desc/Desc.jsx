import React from "react";
import { useState } from "react";
import TextArea from "../Textarea/Textarea";

const Desc = (props) => {
  const [info, setInfo] = useState({
    fields: 0,
    info: [],
  });

  const stateful2 = (stateSet, param) => {
    stateSet(param());
  };

  return (
    <div id="container">
      <div className="container-field">
        <div id="label">{props.label}</div>

        <button
          id="button"
          onClick={() => {
            stateful2(setInfo, () => {
              const values = { ...info };
              values.info.push();
              values.fields++;
              return values;
            });
          }}
        >
          +
        </button>

        <button
          id="button"
          onClick={() => {
            if (info.fields == 0) {
              return;
            } else {
              stateful2(setInfo, () => {
                const values = { ...info };
                values.info.pop();
                values.fields--;
                return values;
              });
            }
          }}
        >
          --
        </button>
      </div>

      {Array(info.fields)
        .fill("")
        .map((_, i) => (
          <div key={i}>
            <TextArea
              ph={props.placeholder}
              indice={i}
              state={info}
              info={info.info[i]}
              setInfo={setInfo}
            />
          </div>
        ))}
    </div>
  );
};

export default Desc;
