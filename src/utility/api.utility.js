import config from '../config';

const callApi = (url, options) => {
  const preparedOptions = { ...options };
  if (preparedOptions.body) {
    preparedOptions.body = JSON.stringify(options.body);
  }
  preparedOptions.headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };
  return fetch(`${config.BASE_URL}/${url}`, preparedOptions)
    .then(r => r.json())
    .then(r => {
      if (r.statusCode >= 400) {
        throw r;
      }
      return r;
    });
};

const makeHttpMethod = method => (url, options) =>
  callApi(url, { ...options, method });

export default {
  get: makeHttpMethod('GET'),
  post: makeHttpMethod('POST'),
  put: makeHttpMethod('PUT'),
  path: makeHttpMethod('PATCH'),
  delete: makeHttpMethod('DELETE'),
};
