import { OpenAPIHono } from '@hono/zod-openapi'
import { getForecastSubmissions202609EventsRoute } from './routes'
import { getForecastSubmissions202609EventsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(
  getForecastSubmissions202609EventsRoute,
  getForecastSubmissions202609EventsRouteHandler,
)

export default app
