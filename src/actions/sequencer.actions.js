import { SubmissionError } from 'redux-form';
import {
  CREATE_NEXT_SEQUENCER_VALUE_REQUEST,
  CREATE_NEXT_SEQUENCER_VALUE_SUCCESS,
  CLEAR_SEQUENCER_STEP,
  CREATE_NEXT_SEQUENCER_VALUE_FAIL,
} from 'constants/sequencer.constants';
import { validate } from 'validation/sequencer.validation';

export const createNextSequencerValue = values => {
  const errors = validate(values);
  if (Object.keys(errors).length) {
    throw new SubmissionError(errors);
  }
  return {
    type: CREATE_NEXT_SEQUENCER_VALUE_REQUEST,
  };
};

export const createNextSequencerValueSuccess = value => ({
  type: CREATE_NEXT_SEQUENCER_VALUE_SUCCESS,
  value,
});

export const createNextSequencerValueFail = error => ({
  type: CREATE_NEXT_SEQUENCER_VALUE_FAIL,
  error,
});

export const clearSequencerStep = () => ({
  type: CLEAR_SEQUENCER_STEP,
});
