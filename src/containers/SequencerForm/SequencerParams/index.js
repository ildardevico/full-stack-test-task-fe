import React from 'react';
import { FieldArray } from 'redux-form';
import { RANGE_SEQ, PARTIAL_SUM_SEQ } from 'constants/sequencer.constants';
import PartialSumParams from '../PartialSumParams';
import RangeParams from '../RangeParams';

const SequencerParams = ({ sequencer }) => {
  if ([RANGE_SEQ, PARTIAL_SUM_SEQ].indexOf(sequencer) === -1) {
    return null;
  }
  let paramsComponent = PartialSumParams;
  if (sequencer === RANGE_SEQ) {
    paramsComponent = RangeParams;
  }
  return (
    <div className="sequencer-params">
      <p>Sequencer params</p>
      <FieldArray name="sequencerParams" component={paramsComponent} />
    </div>
  );
};

export default SequencerParams;
