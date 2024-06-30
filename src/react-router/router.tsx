import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout.tsx";
import IntroSection from "../components/sections/IntroSection/IntroSection.tsx";
import ShopSection from "../components/sections/ShopSection/ShopSection.tsx";
import CartSection from "../components/sections/CartSection/CartSection.tsx";
import AdminLayout from "../components/layouts/AdminLayout.tsx";
import ProductsAnalytics from "../components/pages/[Admin]/(Products)/ProductsAnalytics/ProductsAnalytics.tsx";
import ProductsCreate from "../components/pages/[Admin]/(Products)/ProductsCreate/ProductsCreate.tsx";
import ProductsEdit from "../components/pages/[Admin]/(Products)/ProductsEdit/ProductsEdit.tsx";
import ProductsView from "../components/pages/[Admin]/(Products)/ProductsView/ProductsView.tsx";
import UsersAnalytics from "../components/pages/[Admin]/(Users)/UsersAnalytics/UsersAnalytics.tsx";
import UsersCreate from "../components/pages/[Admin]/(Users)/UsersCreate/UsersCreate.tsx";
import UsersEdit from "../components/pages/[Admin]/(Users)/UsersEdit/UsersEdit.tsx";
import UsersView from "../components/pages/[Admin]/(Users)/UsersView/UsersView.tsx";
import Profile from "../components/pages/[Admin]/Profile/Profile.tsx";
import Settings from "../components/pages/[Admin]/Settings/Settings.tsx";
import ProductsDelete from "../components/pages/[Admin]/(Products)/ProductsDelete/ProductsDelete.tsx";
import Dashboard from "../components/pages/[Admin]/Dashboard/Dashboard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <IntroSection />,
      },
      {
        path: "shop",
        element: <ShopSection />,
      },
      {
        path: "cart",
        element: <CartSection />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout/>,
    children: [
      {
        index: true,
        element: <Dashboard/>,
      },
      {
        path: "products",
        children: [
          {
            path: 'analytics',
            element: <ProductsAnalytics/>,
          },
          {
            path: 'create',
            element: <ProductsCreate/>,
          },
          {
            path: 'edit',
            element: <ProductsEdit/>,
          },
          {
            path: 'view',
            element: <ProductsView/>,
          },
          {
            path: 'delete',
            element: <ProductsDelete/>,
          },
        ]
      },
      {
        path: "users",
        children: [
          {
            path: 'analytics',
            element: <UsersAnalytics/>,
          },
          {
            path: 'create',
            element: <UsersCreate/>,
          },
          {
            path: 'edit',
            element: <UsersEdit/>,
          },
          {
            path: 'view',
            element: <UsersView/>,
          },

        ]
      },
      {
        path: "profile",
        element: <Profile/>,
      },
      // {
      //   path: "charts",
      //   element: <div>Charts</div>,
      // },
      {
        path: "settings",
        element: <Settings/>,
      },
    ],
  },
]);

export default router;
