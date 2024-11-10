import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Admin from '../views/Admin';
import Landing from '../views/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        index: true,
        element: <Landing />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
    ],
  },
]);

export default router;
