import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  cart: []
}

const productsSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<number>) => state + action.payload,
  },
})

export default productsSlice.reducer
export const {setCart} = productsSlice.actions