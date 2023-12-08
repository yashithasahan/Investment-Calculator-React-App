const Input = (props) => {
  return (
    <p>
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input type={props.type} id={props.id} />
    </p>
  );
};

export default Input;
