import local from './local';
import prod from './production';

export default {
  ...local,
  ...(process.env.NODE_ENV === 'production' ? prod : {}),
};
