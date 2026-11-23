import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1FlightsComputeFlightEmissionsRoute } from './routes'
import { postV1FlightsComputeFlightEmissionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  postV1FlightsComputeFlightEmissionsRoute,
  postV1FlightsComputeFlightEmissionsRouteHandler,
)

export default app
