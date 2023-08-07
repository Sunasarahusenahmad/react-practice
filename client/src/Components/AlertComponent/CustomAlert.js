import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomAlert = ({ type, message }) => {
  toast[type](message, {
    position: toast.POSITION.TOP_RIGHT,
  });

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default CustomAlert;
