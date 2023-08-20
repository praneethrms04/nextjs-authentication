import { Pokemon } from "@/types/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authSlice = createApi({
  reducerPath: "userapi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
  tagTypes: ["user"],
  endpoints: (builder) => {
    return {
      getUsers: builder.query<any, void>({
        query: () => ({
          url: "/api/users",
          method: "GET",
        }),
        providesTags: ["user"],
      }),
      addUser: builder.mutation({
        query: (userData) => ({
          url: "api/auth/signup",
          method: "POST",
          body: userData,
        }),
        invalidatesTags: ["user"],
      }),
    };
  },
});

export const { useGetUsersQuery, useAddUserMutation } = authSlice;
