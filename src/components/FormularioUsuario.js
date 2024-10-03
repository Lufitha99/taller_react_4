import React, {useState} from "react";

function FormularioUsuario(){
    const [name, setName] = useState('')
    const [nombreEnviado, setNombreEnviado] = useState('');
    
    const enviarDatos =(e)=>{
        e.preventDefault();
        setNombreEnviado(name);
    }
    return(
        <div >
            <form onSubmit={enviarDatos}>
                <input
                className="form-control"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresa tu nombre"
                />
                <button className="btn btn-secondary mt-3" type="submit">Enviar nombre</button>
            </form>
          <h4 className="mt-5">El nombre enviado es: {nombreEnviado}</h4>
        </div>
    )
}

export default FormularioUsuario;