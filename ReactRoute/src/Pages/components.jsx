import React from "react";

const Components = () =>{


    return(
        <>
        <div className="card">
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>

      <br />

      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

       <br />

       <div className="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" className="btn btn-danger">Left</button>
            <button type="button" className="btn btn-warning">Middle</button>
            <button type="button" className="btn btn-success">Right</button>
       </div>

       <br />

       <button type="button" className="btn btn-primary">
        Notifications <span className="badge text-bg-secondary">4</span>
    </button>

    <br />

    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          <img src="..." class="rounded me-2" alt="..."/>
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
          <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div className="toast-body">
          Hello, world! This is a toast message.
        </div>
      </div>

        </>
      

    );
};

export default Components;