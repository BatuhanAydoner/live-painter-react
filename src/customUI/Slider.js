import React from "react";
import Slider from "@mui/material/Slider";

const CustomSlider = (props) => {
  const [value, setValue] = React.useState(props.value ?? 0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.onChange(newValue);
  };
  return (
    <Slider
      value={props.value ?? value}
      size={props.size ?? "medium"}
      min={props.minValue ?? 1}
      max={props.maxValue ?? 50}
      onChange={handleChange}
    />
  );
};

export default CustomSlider;
