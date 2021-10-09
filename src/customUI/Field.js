import "./Field.css";

const Field = (props) => {
  return (
    <div className="field">
      <span className="field--label">{props.label}</span>
      <input
        type="number"
        value={props.value}
        min={props.min}
        max={props.max}
        className="field--counter"
        onChange={props.onChange}
      />
    </div>
  );
};

export default Field;
