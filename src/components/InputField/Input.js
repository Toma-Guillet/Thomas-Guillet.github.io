import React from 'react';
import './index.scss';

const Input = props => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(value) => props.getFieldData(value, props.fieldName)}
      required={props.required}
      className={props.style}
    />
  );
};

export default Input;