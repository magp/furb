import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import AppRoutes from './components/AppRoutes';

render(
  <AppContainer>
    <AppRoutes />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./components/AppRoutes', () => {
    const NextApp = require('./components/AppRoutes').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });

  /**
  * Warning from React Router, caused by react-hot-loader.
  * The warning can be safely ignored, so filter it from the console.
  * Otherwise you'll see it every time something changes.
  * See https://github.com/gaearon/react-hot-loader/issues/298
  */

  const orgError = console.error; // eslint-disable-line no-console
  console.error = (...args) => { // eslint-disable-line no-console
    if (args && args.length === 1 && args[0].indexOf('You cannot change <Router routes>;') > -1) {
      // React route changed
    } else {
      // Log the error as normally
      orgError.apply(console, args);
    }
  };
}
