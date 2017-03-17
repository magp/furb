import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../routes/Routes';

function ClientRoutesDev() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default ClientRoutesDev;
