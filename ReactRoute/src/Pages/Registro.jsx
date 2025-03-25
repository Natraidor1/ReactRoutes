import React, { useState } from "react";
import "../css/Registro.css"



const Registro = () =>{
    const [Registro, setRegistro] = useState([]);

    const [Nombre, setNombre] = useState("");

    const [Edad, setEdad] = useState("")

    const [Carnet, setCarnet] = useState("")


    ////// REVISAR ESTA PARTE FRAN
    const addRegistro = () =>{
        if(Nombre.trim() === "", Edad.trim()=== "", Carnet.trim()=== "") return;
        setRegistro([...Registro,{id:Date.now(), text: Nombre, completed: false}]);
        setNombre("");
        setEdad("");
        setCarnet("");
        
    };





    return(
        <div className="todo-container">
        <h1>Registro de estudiantes</h1>
        <div className="todo-input">
            <input
                type="text"
                value={Nombre}
                onChange={(text) => setNombre(text.target.value)}
                placeholder="Nombre"
            />
    
            <input
                type="Number"
                value={Edad}
                onChange={(text) => setEdad(text.target.value)}
                placeholder="Edad"
            />
    
            <input
                type="Number"
                value={Carnet}
                onChange={(text) => setCarnet(text.target.value)}
                placeholder="Carnet"
            />
    
            <button onClick={addRegistro}>Añadir</button>
        </div>
        <ul className="todo-list">
            {Registro.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                </li>
            ))}
        </ul>
    </div>);
};


export default Registro;