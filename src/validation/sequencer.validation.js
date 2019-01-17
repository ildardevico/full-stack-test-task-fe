export const validate = values => {
  const errors = {};
  const sequencerParamsErrors = [];
  values.sequencerParams.forEach((param, i) => {
    if (!param) {
      sequencerParamsErrors[i] = 'Value can not be empty!';
    }
  });
  if (sequencerParamsErrors.length) {
    errors.sequencerParams = sequencerParamsErrors;
  }
  return errors;
};
