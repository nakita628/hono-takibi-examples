import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute } from './routes'
import { getRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getRoute, getRouteHandler)

export default app
