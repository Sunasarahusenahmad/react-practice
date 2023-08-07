import React from "react";
import ReactDOM from "react-dom";
import CustomAlert from "./CustomAlert";

const Alert = () => {
  const handleSubmit = (e) => {
    const op = 3;

    if (op === 3) {
      ReactDOM.render(
        <CustomAlert type="success" message="Input Field is Correct" />,
        document.getElementById("alertContainer")
      );
    } else {
      ReactDOM.render(
        <CustomAlert type="error" message="Input Field does not Correct" />,
        document.getElementById("alertContainer")
      );
    }
  };

  return (
    <>
      <div id="alertContainer"></div>

      <h1>Custom Alert Example</h1>
      <button type="submit" onClick={handleSubmit}>
        submit
      </button>
    </>
  );
};

export default Alert;
