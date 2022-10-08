import React from "react";
import { createRef } from "react";

const TextArea = (props) => {
  const input = createRef();

  return (
    <textarea
      ref={input}
      id="input-desc"
      value={props.info}
      placeholder={props.ph}
      onChange={(e) => {
        input.current.style.height = "auto";
        let altura = e.target.scrollHeight;
        input.current.style.height = `${altura}px`;
      }}
      onBlur={(e) => {
        const values = props.info
        values.info[props.indice] = e.target.value
        props.setInfo(values)
      }}
      className="desc"
    ></textarea>
  );
};

export default TextArea;
