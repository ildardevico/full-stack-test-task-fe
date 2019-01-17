import React from 'react';
import { Field } from 'redux-form';
import Input from 'components/Input';
import './styles.scss';

const PartialSumParams = ({ fields }) => (
  <div className="partial-sum">
    {fields.map((param, index) => (
      <div className="partial-sum__param" key={index}>
        <Field name={param} type="number" component={Input} />
        <button type="button" onClick={() => fields.remove(index)}>
          Remove Param
        </button>
      </div>
    ))}
    <button type="button" onClick={() => fields.push()}>
      Add Param
    </button>
  </div>
);

export default PartialSumParams;
