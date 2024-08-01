import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export enum HotStage {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export interface IPizza {
  id: number;
  name: string;
  description: string;
  available: string;
  category_name: string;
  country: string;
  discount: number;
  hot_stage: HotStage;
  popular: boolean;
  rating: number;
  image: string;
  updated_at?: string;
  created_at?: string;
  average_cooking_speed: number;
}

export interface ICategory {
  id: number;
  name: string;
  description: string;
}

export interface IReview {
  id: number
  user_id: string
  pizza_name: string
  text: string
  created_at: string
  updated_at: string
  liked: number
}

interface IPizzaResponse extends IPizza {
  category?: ICategory;
  reviews?: IReview[]
}

type TQueriesConfig = {
  category?: boolean,
  Review?: boolean
}

export const pizzaApi = createApi({
  reducerPath: 'pizzaApi',
  baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_SERVER_URL}/api/`}),
  endpoints: (builder) => ({
    getPizzaByName: builder.query<IPizzaResponse, string>({
      query: (name) => `pizza/${name}`,
    }),
    getPizzaWithCategory: builder.query<IPizzaResponse, string>({
      query: (name) => `pizza/${name}/?category=true`,
    }),
    getPizzaWith: builder.query<IPizzaResponse, { name: string } & TQueriesConfig>({
      query: ({name, category = false, Review = false}) => {
        return `pizza/${name}/?category=${category}&Review=${Review}`;
      },
    }),
  }),
})

export const {useGetPizzaByNameQuery, useGetPizzaWithQuery} = pizzaApi