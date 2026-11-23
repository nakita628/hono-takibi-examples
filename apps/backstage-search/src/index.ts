import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryRoute } from './routes'
import { getQueryRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getQueryRoute, getQueryRouteHandler)

export default app
