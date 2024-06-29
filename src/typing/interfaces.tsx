import {Theme} from "./types.tsx";
import React from "react";

export interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface IMenuContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}