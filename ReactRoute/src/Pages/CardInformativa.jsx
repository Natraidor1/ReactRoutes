import React from "react";
import "../css/CardInformativa.css"

const CardInformativa = (img,nombre, descripcion) =>{

    return(

        <>
        <div id="cardInformativa" className="card" style={{width: "18rem"}}>
          <img src={"https://th.bing.com/th/id/R.e565c76499209dff5b7670261332406f?rik=796ktbXQlVX0gQ&pid=ImgRaw&r=0"} class="card-img-top" alt="kevin hart"/>
          <div className="card-body">
            <h3 className = "card-text">Francisco Nataren</h3> <br />
            <p className="card-text" style={{textAlign: "justify"}}>soy un gran programador estrella que se la vive mandando al ganado hacia el otro lado, sacando leche de vacas, y casandome con sr adriel</p>
          </div>
        </div>
        </>
    );
}

export default CardInformativa;