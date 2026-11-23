import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getGetFullPricingOutboundTypeRoute,
  getGetPrefixPricingOutboundTypeRoute,
  getGetPricingOutboundTypeRoute,
} from './routes'
import {
  getGetFullPricingOutboundTypeRouteHandler,
  getGetPrefixPricingOutboundTypeRouteHandler,
  getGetPricingOutboundTypeRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getGetFullPricingOutboundTypeRoute, getGetFullPricingOutboundTypeRouteHandler)
  .openapi(getGetPrefixPricingOutboundTypeRoute, getGetPrefixPricingOutboundTypeRouteHandler)
  .openapi(getGetPricingOutboundTypeRoute, getGetPricingOutboundTypeRouteHandler)

export default app
