import React from "react";
import Button from "@mui/material/Button";
import "./Button.css";

const CustomButton = (props) => {
  return (
    <Button
      className="btn"
      disabled={props.disabled}
      variant={props.variant ?? "contained"}
      size={props.size ?? "medium"}
      style={{ ...props.style }}
      color={props.color ?? "primary"}
      onClick={props.onClick}
    >
      {props.title}
    </Button>
  );
};

export default CustomButton;
