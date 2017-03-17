import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import ClientRoutesDev from './ClientRoutesDev';

render(
  <AppContainer>
    <ClientRoutesDev />
  </AppContainer>,
  document.getElementById('app'),
);

if (module.hot) {
  module.hot.accept('./ClientRoutesDev', () => {
    const NextApp = require('./ClientRoutesDev').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
