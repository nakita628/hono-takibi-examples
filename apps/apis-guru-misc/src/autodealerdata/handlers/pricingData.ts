import { OpenAPIHono } from '@hono/zod-openapi'
import { getListPriceRoute, getSalePriceHistogramRoute, getSalePriceRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingDataHandler = app
  .openapi(getListPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalePriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSalePriceHistogramRoute, (c) => {
    throw new Error('Not implemented')
  })
