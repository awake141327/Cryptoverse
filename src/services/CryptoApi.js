import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "b82bc84784msh818cc67a91cd82bp1e7bc7jsn324139615a0b"
      );
      headers.set("x-rapidapi-host", "coinranking1.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coindId) => `/coin/${coindId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        `/coin/${coinId}/history?timeperiod=${timeperiod}`,
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;
