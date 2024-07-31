import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  endpoints: (builder) => ({
    getPizzaByName: builder.query<any, string>({
      query: (name) => `pizza/${name}`,
    }),
    getPizzaWithCategory: builder.query<any, {name: string, category:string}>({
      query: ({name, category}) => `pizza/${name}/${category}`,
    })
  }),
})

export const { useGetPizzaByNameQuery, useGetPizzaWithCategoryQuery } = pizzaApi