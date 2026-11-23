import { OpenAPIHono } from '@hono/zod-openapi'
import { getAnythingRoute } from './routes'
import { getAnythingRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getAnythingRoute, getAnythingRouteHandler)

export default app
