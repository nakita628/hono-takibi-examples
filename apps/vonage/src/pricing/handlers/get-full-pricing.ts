import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetFullPricingOutboundTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const getFullPricingHandler = app.openapi(getGetFullPricingOutboundTypeRoute, (c) => {
  throw new Error('Not implemented')
})
