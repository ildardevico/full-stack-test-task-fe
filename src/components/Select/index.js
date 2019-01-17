import React from 'react';
import InputError from 'components/InputError';
import './styles.scss';

const Select = ({ input, meta, options, ...props }) => (
  <div className="select-container">
    <select {...props} {...input}>
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
    <InputError meta={meta} />
  </div>
);

export default Select;
