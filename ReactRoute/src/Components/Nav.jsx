import React from "react";

const Nav = () =>{

    return(
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Home</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/components">Components</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/CardInformativa">Informacion</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Calculadora">Calculadora</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/TodoList" >TodoList</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Registro" >Registro</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </>
        
    );
}

export default Nav;