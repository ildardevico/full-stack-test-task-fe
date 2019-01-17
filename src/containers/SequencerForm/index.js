import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Select from 'components/Select';
import Button from 'components/Button';
import {
  SEQUENCERS_OPTIONS,
  SEQUENCER_FORM,
  FACTORIAL_SEQ,
} from 'constants/sequencer.constants';
import { createNextSequencerValue } from 'actions/sequencer.actions';
import { validate } from 'validation/sequencer.validation';
import Pipes from './Pipes';
import SequencerParams from './SequencerParams';
import Value from './Value';
import './styles.scss';

const SequencerForm = ({ sequencer, handleSubmit, step, value }) => (
  <div className="sequencer-form-container">
    <form
      className="sequencer-form-container__sequencer-form"
      onSubmit={handleSubmit}
    >
      <div className="sequencer-form-container__choose_sequencer">
        <p>Choose Sequencer</p>
        <Field
          component={Select}
          options={SEQUENCERS_OPTIONS.map(sequencer => ({
            name: sequencer,
            value: sequencer,
          }))}
          name="sequencer"
        />
      </div>
      <SequencerParams sequencer={sequencer} />
      <Pipes />
      <Button type="submit">{!step ? 'Start' : 'Next'}</Button>
      <Value value={value} />
    </form>
  </div>
);

const withForm = reduxForm({
  initialValues: {
    sequencer: FACTORIAL_SEQ,
    sequencerParams: [null, null],
  },
  form: SEQUENCER_FORM,
  validate,
})(SequencerForm);

const mapStateToProps = ({ form, sequencer }) => ({
  sequencer: get(form, `${SEQUENCER_FORM}.values.sequencer`),
  step: sequencer.step,
  value: sequencer.value,
});

const mapDispatchToProps = { onSubmit: createNextSequencerValue };

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withForm);
