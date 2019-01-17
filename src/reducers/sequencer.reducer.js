import { combineReducers } from 'redux';
import { createReducer } from 'utility/create-reducer.utility';
import {
  CREATE_NEXT_SEQUENCER_VALUE_SUCCESS,
  FORM_CHANGE,
  CREATE_NEXT_SEQUENCER_VALUE_FAIL,
} from 'constants/sequencer.constants';

const step = createReducer(
  {
    [CREATE_NEXT_SEQUENCER_VALUE_SUCCESS]: state => state + 1,
    [FORM_CHANGE]: () => 0,
    [CREATE_NEXT_SEQUENCER_VALUE_FAIL]: () => 0,
  },
  0,
);

const value = createReducer(
  {
    [CREATE_NEXT_SEQUENCER_VALUE_SUCCESS]: (_, { value }) => value,
    [FORM_CHANGE]: () => null,
  },
  null,
);

export default combineReducers({
  step,
  value,
});
