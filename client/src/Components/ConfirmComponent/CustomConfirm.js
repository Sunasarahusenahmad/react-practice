import React, { useState } from "react";
import "./CustomConfirm.css";

const CustomConfirm = ({ title, body, button }) => {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  return (
    <>
      <div className="box">
        <a href="#modal" className="link-1" onClick={openModalHandler}>
          Confirm Component
        </a>

        {openModal && (
          <div className="modal-container" id="modal">
            <div className="modal">
              <button className="modal__close-btn" onClick={closeModal}>
                &times;
              </button>
              <h1 className="modal__title">{title}</h1>
              <p className="modal__text">{body}</p>
              <button className="modal__btn" onClick={closeModal}>
                Cancel &rarr;
              </button>
              <button className="modal__btn">{button} &rarr;</button>
              <a href="#modal" className="link-2"></a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CustomConfirm;
