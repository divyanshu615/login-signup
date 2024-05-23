// components/InputField.js
import React from "react";

function InputField({ label, type, value, onChange, error }) {
  return (
    <div className="mb-3 text-start">
      <label className="form-label">{label}</label>
      <input
        type={type}
        className={`form-control ${error ? "is-invalid" : ""}`}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

export default InputField;
