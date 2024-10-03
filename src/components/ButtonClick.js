import React from "react";

function ButtonClick(){

     const eventobutton = () =>{
        alert('¡Botón clickeado!');
     }

     return(
        <div className="col-5">
            <button className="btn btn-primary"  onClick={eventobutton}>Haz click!</button>
        </div>
     )
}

export default ButtonClick;