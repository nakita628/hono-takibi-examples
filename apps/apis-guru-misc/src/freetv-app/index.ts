import { OpenAPIHono } from '@hono/zod-openapi'
import { getServicesRoute } from './routes'
import { getServicesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getServicesRoute, getServicesRouteHandler)

export default app
