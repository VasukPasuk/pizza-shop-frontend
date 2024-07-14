import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout.tsx';
import MainPage from '../components/pages/Main/Main.page.tsx';
import AdminLayout from '../components/layouts/AdminLayout.tsx';
import Profile from '../components/pages/[Admin]/Profile/Profile.tsx';
import Settings from '../components/pages/[Admin]/Settings/Settings.tsx';
import Dashboard from '../components/pages/[Admin]/Dashboard/Dashboard.tsx';
import Errors from '../components/pages/Errors/NotFoundErrorPage.tsx';
import ShopPage from '../components/pages/Shop/Shop.page.tsx';
import CartPage from '../components/pages/Cart/Cart.page.tsx';
import ProductsManagement from "../components/pages/[Admin]/Products/ProductsManagement.tsx";
import UsersManagement from "../components/pages/[Admin]/Users/UsersManagement.tsx";
import {NotFoundErrorPage} from "../components/pages/Errors";

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFoundErrorPage/>,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        path: 'cart',
        element: <CartPage />,
      },
    ],
  },
  {
    path: 'admin',
    element: <AdminLayout />,
    loader: async ({}) => {

    },
    errorElement: <NotFoundErrorPage/>,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: 'products',
        element: <ProductsManagement/>
      },
      {
        path: 'users',
        element: <UsersManagement/>
      },
      {
        path: 'profile',
        element: <Profile />,
      },
      // {
      //   path: "charts",
      //   element: <div>Charts</div>,
      // },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;
