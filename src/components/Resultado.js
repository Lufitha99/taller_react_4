import React from "react";

const Resultado = ({ numero }) => {
  return (
    <div className="mt-2">
      <h2>Resultado</h2>
      <p>El número ingresado es: {numero}</p>
    </div>
  );
};

export default Resultado;
