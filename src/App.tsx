import React from 'react';

import './App.scss';
import { useRoutes } from './routes/routes';

function App() {
  const routes = useRoutes();
  return <div className="App _container">{routes}</div>;
}

export default App;
