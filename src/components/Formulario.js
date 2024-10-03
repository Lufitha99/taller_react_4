import React, { useState } from "react";

const Formulario = ({ onNumberChange }) => {
  const [numero, setNumero] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    //se comprueba que se pasen numeros o cadena vacia
    if (/^\d*$/.test(value)) {
      setNumero(value);
      onNumberChange(value);
    }
  };

  return (
    <div className="mt-2">
      <h2>Formulario</h2>
      <input
      className="form-control"
        type="number"
        value={numero}
        onChange={handleChange}
        placeholder="Ingresa un numero"
      />
    </div>
  );
};
 export default Formulario;