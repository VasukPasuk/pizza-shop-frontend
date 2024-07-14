import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type Role = "admin" | "customer"

interface User {
  name: string
  login: string
  role: Role
}

interface IUserReduxState {
  user: User
  isAuth: boolean
  token: string
  isActivated: boolean
  error: boolean
}

const initialState:IUserReduxState = {
  user: {
    name: 'Baritone',
    login: '@baritone',
    role: 'customer'
  },
  isAuth: false,
  token: '',
  isActivated: false,
  error: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeName: (state, action: PayloadAction<number>) => state + action.payload,
  },
})

export default userSlice.reducer
export const {changeName} = userSlice.actions