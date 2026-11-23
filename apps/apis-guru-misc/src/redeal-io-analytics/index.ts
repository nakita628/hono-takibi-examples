import { OpenAPIHono } from '@hono/zod-openapi'
import { getEventsRoute } from './routes'
import { getEventsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getEventsRoute, getEventsRouteHandler)

export default app
