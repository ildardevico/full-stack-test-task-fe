import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Checkbox = ({ children, className, label, input, meta, ...props }) => (
  <label {...props} className={classNames('checkbox', className)}>
    <input className="checkbox__input" type="checkbox" {...input} {...props} />
    {label}
  </label>
);

export default Checkbox;
