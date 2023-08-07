import React from "react";
import CustomConfirm from "./CustomConfirm";

const Confirm = () => {
  return (
    <>
      <CustomConfirm
        title="Delete Member"
        body="Delete the Member of Clan"
        button="Delete"
      />
    </>
  );
};

export default Confirm;
