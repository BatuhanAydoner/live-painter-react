import React, { useContext, useState } from "react";
import LivePainterContext from "../contex/LivePainterContext";
import SelectionCard from "./SelectionCard";
import "./SelectionList.css";
import Button from "../customUI/Button";
import Slider from "../customUI/Slider";
import Field from "../customUI/Field";
import { fieldCalculator } from "../functions/fieldCalculator";

const SelectionList = () => {
  const context = useContext(LivePainterContext);

  const [field, setField] = useState({
    width: context.state.field.width,
    height: context.state.field.height,
  });

  const changeColor = (e) => {
    context.dispatch({
      type: "SET_COLOR",
      payload: {
        color: e.target.value,
      },
    });
  };

  const changeBackground = (e) => {
    context.dispatch({
      type: "SET_BG_COLOR",
      payload: {
        background: e.target.value,
      },
    });
  };

  const changeIsErase = () => {
    context.dispatch({ type: "SET_IS_ERASE", payload: { isErase: true } });
  };

  const clearAll = () => {};

  const changeSize = (newValue) => {
    context.dispatch({ type: "SET_SIZE", payload: { size: newValue } });
  };

  const updateField = () => {
    setField({
      ...field,
      width: fieldCalculator(field.width),
      height: fieldCalculator(field.height),
    });
    context.dispatch({
      type: "SET_FIELD",
      payload: {
        width: fieldCalculator(field.width),
        height: fieldCalculator(field.height),
      },
    });
  };

  const download = () => {};

  return (
    <div className="list">
      <SelectionCard title="Colour">
        <input type="color" value={context.state.color} onInput={changeColor} />
      </SelectionCard>
      <SelectionCard title="Background">
        <input
          type="color"
          value={context.state.background}
          onChange={changeBackground}
        />
      </SelectionCard>
      <SelectionCard title="Tools">
        <Button
          title="Erase"
          onClick={() => {
            changeIsErase();
          }}
        />
        <Button
          title="Clear"
          onClick={() => {
            clearAll();
          }}
        />
      </SelectionCard>
      <SelectionCard title={`Size (${context.state.size})`}>
        <Slider
          onChange={(newValue) => {
            changeSize(newValue);
          }}
        />
      </SelectionCard>
      <SelectionCard title="Field">
        <Field
          label="X"
          value={field.width.toString()}
          min={100}
          max={1000}
          onChange={(e) => {
            setField({
              ...field,
              width: parseInt(e.target.value),
            });
          }}
        />
        <Field
          label="Y"
          value={field.height.toString()}
          min={100}
          max={1000}
          onChange={(e) => {
            setField({
              ...field,
              height: parseInt(e.target.value),
            });
          }}
        />
        <Button
          title="Update"
          color="success"
          onClick={() => {
            updateField();
          }}
        />
      </SelectionCard>

      <SelectionCard title="More">
        <Button
          title="Download"
          color="success"
          onClick={() => {
            download();
          }}
        />
      </SelectionCard>
    </div>
  );
};

export default SelectionList;
