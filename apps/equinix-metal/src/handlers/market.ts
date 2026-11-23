import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMarketSpotPricesHistoryRoute,
  getMarketSpotPricesMetrosRoute,
  getMarketSpotPricesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketHandler = app
  .openapi(getMarketSpotPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketSpotPricesHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketSpotPricesMetrosRoute, (c) => {
    throw new Error('Not implemented')
  })
