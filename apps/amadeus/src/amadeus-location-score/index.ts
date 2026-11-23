import { OpenAPIHono } from '@hono/zod-openapi'
import { getLocationAnalyticsCategoryRatedAreasRoute } from './routes'
import { getLocationAnalyticsCategoryRatedAreasRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getLocationAnalyticsCategoryRatedAreasRoute,
  getLocationAnalyticsCategoryRatedAreasRouteHandler,
)

export default app
