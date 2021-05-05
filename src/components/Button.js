const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="btn"
        style={{ backgroundColor: props.color }}
      >
        {props.text}
      </button>
    </div>
  );
};

export default Button;
