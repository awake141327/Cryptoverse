import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://cryptocurrency-news2.p.rapidapi.com/v1/";

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set(
        "x-rapidapi-key",
        "b82bc84784msh818cc67a91cd82bp1e7bc7jsn324139615a0b"
      );
      headers.set("x-rapidapi-host", "cryptocurrency-news2.p.rapidapi.com");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => `/cryptodaily`,
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
