import { useRoutes } from 'react-router-dom';
import React from 'react';
import routes from './routes';

export default function Router() {
  return useRoutes(routes);
}
