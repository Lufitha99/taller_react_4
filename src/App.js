import React, { useState } from "react";
import ButtonClick from "./components/ButtonClick";
import FormularioUsuario from "./components/FormularioUsuario";
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";

function App() {
  const [numero, setNumero] = useState("");

  const handleNumberChange = (nuevoNumero) => {
    setNumero(nuevoNumero);
  };
  return (
    <div className="container mt-5 justify-content-center border ">
      <div className="row">
        <div className="col p-5 border">
          <h1>Ejercicio 1</h1>
          <ButtonClick />
        </div>
        <div className="col mr-5 p-5 border ">
          <h1>Ejercicio 2</h1>
          <FormularioUsuario />
        </div>
        <div className="col mr-5 p-5 border">
          <h1>Ejercicio 3</h1>
          <p>Lifting State Up en React</p>
          <Formulario onNumberChange={handleNumberChange} />
          <Resultado numero={numero} />
        </div>
      </div>
    </div>
  );
}

export default App;
