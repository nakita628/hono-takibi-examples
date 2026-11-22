import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEodRoute,
  getMarketMoversMarketRoute,
  getPriceRoute,
  getQuoteRoute,
  getTimeSeriesCrossRoute,
  getTimeSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketDataHandler = app
  .openapi(getEodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketMoversMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuoteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeSeriesCrossRoute, (c) => {
    throw new Error('Not implemented')
  })
