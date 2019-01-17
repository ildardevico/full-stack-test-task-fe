import React from 'react';
import classNames from 'classnames';
import './styles.scss';

const Button = ({ children, className, ...props }) => (
  <button type="button" {...props} className={classNames('btn', className)}>
    {React.Children.toArray(children)}
  </button>
);

export default Button;
