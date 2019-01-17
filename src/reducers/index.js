import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import sequencer from './sequencer.reducer';

export default combineReducers({
  form: formReducer,
  sequencer,
});
