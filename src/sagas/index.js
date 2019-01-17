import { fork, all } from 'redux-saga/effects';
import sequencerSaga from './sequencer.saga';

export default function* root() {
  yield all([fork(sequencerSaga)]);
}
