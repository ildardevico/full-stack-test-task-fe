export const validate = values => {
  const errors = {};
  const sequencerParamsErrors = [];
  values.sequencerParams.filter(param => param).forEach((param, i) => {
    if (!param) {
      sequencerParamsErrors[i] = 'Value can not be empty!';
    }
  });
  if (sequencerParamsErrors.length) {
    errors.sequencerParams = sequencerParamsErrors;
  }
  return errors;
};
