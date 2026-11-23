import { OpenAPIHono } from '@hono/zod-openapi'
import { getSalePriceHistogramRoute } from '../routes'

const app = new OpenAPIHono()

export const salePriceHistogramHandler = app.openapi(getSalePriceHistogramRoute, (c) => {
  throw new Error('Not implemented')
})
