import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = (props) => {
  console.log("props = ", props);
  const { editMode, error, onChange, value, label } = props;
  return (
    <>
        <h3 >{label}</h3>
        <TextField
          variant="outlined"
          error={error}
          onChange={onChange}
          value={value}
          disabled={!editMode}
        />
    </>
  );
};

export default CustomTextField;
