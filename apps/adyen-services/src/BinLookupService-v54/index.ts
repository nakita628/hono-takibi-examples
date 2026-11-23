import { OpenAPIHono } from '@hono/zod-openapi'
import { postGet3dsAvailabilityRoute, postGetCostEstimateRoute } from './routes'
import { postGet3dsAvailabilityRouteHandler, postGetCostEstimateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGet3dsAvailabilityRoute, postGet3dsAvailabilityRouteHandler)
  .openapi(postGetCostEstimateRoute, postGetCostEstimateRouteHandler)

export default app
