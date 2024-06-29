import React from 'react';
import Header from "../ui/Header/Header.tsx";

import {Outlet} from "react-router-dom";
import Menu from "../ui/Menu/Menu.tsx";
import UpperBar from "../ui/UpperBar/UpperBar.tsx";
import {MenuProvider} from "../../context/MenuContext.tsx";

function MainLayout(props) {
  return (
    <>
      <Header role="admin"/>
      <MenuProvider>
        <Menu/>
        <main>
          <UpperBar/>
          <Outlet/>
        </main>
      </MenuProvider>

    </>
  );
}

export default MainLayout;