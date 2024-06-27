import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../components/layouts/MainLayout.tsx";
import IntroSection from "../components/sections/IntroSection/IntroSection.tsx";
import ShopSection from "../components/sections/ShopSection/ShopSection.tsx";
import CartSection from "../components/sections/CartSection/CartSection.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: '/',
        element: <IntroSection/>,
      },
      {
        path: '/shop',
        element: <ShopSection/>,
      },
      {
        path: '/cart',
        element: <CartSection/>,
      },
    ]
  },
]);

export default router