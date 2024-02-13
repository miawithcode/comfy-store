const FormInput = ({ label, name, type, size }) => {
  return (
    <div className="form-control">
      <div className="label">
        <span className="label-text capitalize">{label}</span>
      </div>
      <input type={type} name={name} className={`input input-bordered ${size}`} />
    </div>
  );
};
export default FormInput;
