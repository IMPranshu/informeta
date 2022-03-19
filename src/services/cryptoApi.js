import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
  'x-rapidapi-key': '08dfb976bfmshc88b6b73a50174dp1d413fjsnd0ea99abfac9'

}
const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi ({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({baseUrl}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetails : builder.query({
      query : (uuid) => createRequest(`/coin/${uuid}`),
    })
  })
});

export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery
} = cryptoApi;



// import axios from "axios";




// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     tiers: '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': '08dfb976bfmshc88b6b73a50174dp1d413fjsnd0ea99abfac9'
//   }
// };