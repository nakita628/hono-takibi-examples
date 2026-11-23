import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNumbersRoute,
  getNumbersSearchCountrySearch1SearchType2Route,
  postNumbersBuyDedicatedNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const numbersHandler = app
  .openapi(getNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postNumbersBuyDedicatedNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNumbersSearchCountrySearch1SearchType2Route, (c) => {
    throw new Error('Not implemented')
  })
