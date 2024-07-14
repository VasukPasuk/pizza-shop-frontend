import { Flour, Size, Theme } from './types.tsx';
import React from 'react';

export interface IThemeContext {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

export interface IMenuContext {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IShopCard {
  discount?: number;
  popular?: boolean;
  size: Size;
  name: string;
  category: string;
  price: string;
  inCart: boolean;
  flour: Flour;
  key: any;
}
