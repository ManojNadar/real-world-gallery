import React from "react";

const Modal = ({ image, hide, name }) => {
  const ModalStyle = {
    display: "block",
    backgroundColor: "rgba(0,0,0,0.8)",
  };

  const pStyle = {
    textAlign: "center",
    fontSize: "25px",
    fontWeight: "bold",
    color: "black",
  };

  const modalImg = {
    height: "550px",
  };

  const imgBackground = {
    backgroundColor: "grey",
    border: "none",
  };

  return (
    <>
      <div className="modal show fade" style={ModalStyle}>
        <div className="modal-dialog">
          <div className="modal-content" style={imgBackground}>
            <button type="button" className="btn-close" onClick={hide}></button>
            <p style={pStyle}>{name}</p>
            <img src={image} alt={image} style={modalImg} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
