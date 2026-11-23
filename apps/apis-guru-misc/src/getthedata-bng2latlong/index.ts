import { OpenAPIHono } from '@hono/zod-openapi'
import { getBng2latlongEastingNorthingRoute } from './routes'
import { getBng2latlongEastingNorthingRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getBng2latlongEastingNorthingRoute,
  getBng2latlongEastingNorthingRouteHandler,
)

export default app
