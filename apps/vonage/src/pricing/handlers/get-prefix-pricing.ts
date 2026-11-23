import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetPrefixPricingOutboundTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const getPrefixPricingHandler = app.openapi(getGetPrefixPricingOutboundTypeRoute, (c) => {
  throw new Error('Not implemented')
})
