import { takeEvery, select, put, call } from 'redux-saga/effects';
import {
  CREATE_NEXT_SEQUENCER_VALUE_REQUEST,
  SEQUENCER_FORM,
} from 'constants/sequencer.constants';
import {
  createNextSequencerValueSuccess,
  createNextSequencerValueFail,
} from 'actions/sequencer.actions';
import api from 'utility/api.utility';

function* createNextSequencerValueSaga() {
  const values = yield select(({ form }) => form[SEQUENCER_FORM].values);
  const step = yield select(({ sequencer }) => sequencer.step);
  if (values) {
    const { sequencer, sequencerParams, accumulator, isEven } = values;
    let preparedParams = [];
    preparedParams = sequencerParams
      .filter(param => param)
      .map(param => +param);
    const body = {
      step,
      sequencer,
      sequencerParams: preparedParams,
      accumulator,
      isEven,
    };
    try {
      const { data } = yield call(api.post, 'sequencer', { body });
      yield put(createNextSequencerValueSuccess(data));
    } catch (err) {
      yield put(createNextSequencerValueFail(err));
    }
  }
}

export default function* sequencerSaga() {
  yield takeEvery(
    CREATE_NEXT_SEQUENCER_VALUE_REQUEST,
    createNextSequencerValueSaga,
  );
}
