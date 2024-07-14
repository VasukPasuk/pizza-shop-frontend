import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './slices/User.slice.tsx'
import productsReducer from './slices/Products.slice.tsx'

const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer
  },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types


export default store