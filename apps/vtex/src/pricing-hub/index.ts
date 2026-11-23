import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiPricingHubPricesRoute, putConfigRoute } from './routes'
import { postApiPricingHubPricesRouteHandler, putConfigRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postApiPricingHubPricesRoute, postApiPricingHubPricesRouteHandler)
  .openapi(putConfigRoute, putConfigRouteHandler)

export default app
