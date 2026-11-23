import { OpenAPIHono } from '@hono/zod-openapi'
import { getReferenceDataRecommendedLocationsRoute } from './routes'
import { getReferenceDataRecommendedLocationsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getReferenceDataRecommendedLocationsRoute,
  getReferenceDataRecommendedLocationsRouteHandler,
)

export default app
