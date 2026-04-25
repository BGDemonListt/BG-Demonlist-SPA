import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
} from 'react-router';
import App from './App';
import Home from './pages/home/Home';
import NotFound from './pages/not-found/NotFound';
import { RoutePage } from './types';

export const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path={RoutePage.HOME} element={<App />}>
      <Route index element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);
