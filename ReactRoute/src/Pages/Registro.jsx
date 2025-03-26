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
        setRegistro([...Registro,{id:Date.now(), text: Nombre, text2: Edad, text3: Carnet, completed: false}]);
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
                onChange={(text2) => setEdad(text2.target.value)}
                placeholder="Edad"
            />
    
            <input
                type="Number"
                value={Carnet}
                onChange={(text3) => setCarnet(text3.target.value)}
                placeholder="Carnet"
            />
                
        </div>

        <button id="botonRegistro" onClick={addRegistro}>Añadir</button>
        <ul className="todo-list">
            {Registro.map((todo) => (
                <li key={todo.id} className={todo.completed ? "completed" : ""}>
                    <span onClick={() => toggleComplete(todo.id)}>  <b> Nombre : </b> {todo.text}</span>
                    <span onClick={() => toggleComplete(todo.id)}>  <b> Edad : </b> {todo.text2}</span>
                    <span onClick={() => toggleComplete(todo.id)}>  <b> Carnet : </b> {todo.text3}</span>
                </li>
            ))}
        </ul>
    </div>);
};


export default Registro;