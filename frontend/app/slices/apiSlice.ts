import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'


//keep baseUrl empty if you are using proxy in package.json
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL })

//Base query Slice
export const apiSlice = createApi({
    baseQuery: baseQuery,
    tagTypes: ['User','Order','Product'],
    endpoints: (builder) => ({}),
})