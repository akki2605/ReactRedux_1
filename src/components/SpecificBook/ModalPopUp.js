import React from "react";
import "./ModalPop.css";


export default function ModalPopUp(props) {
  if (!props.toggleModal) {
    return null;
  }
  var isbn  = props.isbn
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-body">
          <h1>You have used restrited word..</h1>
          <h1>Still want to continue?</h1>
          <form id="modalform">
            <button onClick={(event)=>{props.handleSubmit(event,isbn)}} id="yes" >yes</button>
            <button onClick={props.onClose} id="no" >no</button>
          </form>
        </div>
      </div>
    </div>
  );
}