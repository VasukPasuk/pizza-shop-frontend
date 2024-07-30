import {Flour, Role, Size, Theme} from './types.tsx';
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


export interface IUser {
  id: number
  login: string,
  role: Role
}

export interface IUserExtra {
  isActivated: boolean
}

export interface IUserProfile {
  name: string
  firstSurname: string
  secondSurname: string
  district: string
  phone: string
  email: string
  street: string
  city: string
}

export interface IRegisterResponseSuccess {
  access_token: string
  user: IUser
  profile: IUserProfile
  extra: IUserExtra
}