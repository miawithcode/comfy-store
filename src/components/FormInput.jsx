const FormInput = ({ label, name, type, size, defaultValue }) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input type={type} name={name} className={`input input-bordered ${size}`} defaultValue={defaultValue} />
    </div>
  );
};
export default FormInput;
