import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPricingOutboundTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const getPricingHandler = app.openapi(getGetPricingOutboundTypeRoute, (c) => {
  throw new Error('Not implemented')
})
