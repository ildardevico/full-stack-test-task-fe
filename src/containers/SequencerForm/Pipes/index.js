import React from 'react';
import { Field } from 'redux-form';
import Checkbox from 'components/Checkbox';

const Pipes = () => (
  <div className="pipes">
    <p>Pipes options</p>
    <Field component={Checkbox} name="accumulator" label="Accumulate" />
    <Field component={Checkbox} name="isEven" label="Check is even" />
  </div>
);

export default Pipes;
