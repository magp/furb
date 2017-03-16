import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../routes/Routes';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default AppRoutes;
