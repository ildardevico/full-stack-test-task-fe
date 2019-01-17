import React from 'react';
import { Field } from 'redux-form';
import Input from 'components/Input';

const RangeParams = ({ fields }) => (
  <div>
    {fields.map((param, index) => (
      <Field key={index} name={param} type="number" component={Input} />
    ))}
  </div>
);

export default RangeParams;
