import { OpenAPIHono } from '@hono/zod-openapi'
import { getPricingRoute } from '../routes'

const app = new OpenAPIHono()

export const pricingHandler = app.openapi(getPricingRoute, (c) => {
  throw new Error('Not implemented')
})
