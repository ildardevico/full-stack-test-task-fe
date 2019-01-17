import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const InputError = ({ meta, className = '' }) =>
  meta && meta.error && meta.touched ? (
    <span className={classNames('field-error', className)}>{meta.error}</span>
  ) : null;

export default InputError;
