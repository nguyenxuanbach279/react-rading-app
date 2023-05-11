import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const tradesApi = createApi({
  reducerPath: "tradesApi",
  keepUnusedDataFor: 3600,
  baseQuery: fetchBaseQuery({ baseUrl: "https://ag-grid.com/example-assets/" }),
  endpoints: (builder) => ({
    getTrades: builder.query<any[], void>({
      query: () => "row-data.json",
    }),
  }),
});

export const { useGetTradesQuery } = tradesApi;
