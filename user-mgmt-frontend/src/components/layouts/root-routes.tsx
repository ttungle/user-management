import { createBrowserRouter } from 'react-router-dom';
import { BASE_ROUTEs } from '../../constants/base-routes';
import { MainLayout } from './main-layout';
import Home from '../../features/home/pages';
import { UserDetailsPage } from '../../features/home/pages/user-details';

export const rootRouter = createBrowserRouter([
  {
    path: BASE_ROUTEs.home,
    errorElement: <div>Something went wrong</div>,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: `${BASE_ROUTEs.userDetails}`,
        element: <UserDetailsPage />,
      },
    ],
  },
]);
