import React from 'react';
import InputError from 'components/InputError';
import './styles.scss';

const Input = ({ input, meta, ...props }) => (
  <div className="base-input">
    <input {...props} {...input} />
    <InputError meta={meta} />
  </div>
);

export default Input;
