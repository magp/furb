require('babel-core/register')({ // eslint-disable-line import/no-extraneous-dependencies
  presets: ['es2015', 'react'],
});

require('./serverDev.jsx');
