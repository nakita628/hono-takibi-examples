import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetglobaltimeRoute } from './routes'
import { getGetglobaltimeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetglobaltimeRoute, getGetglobaltimeRouteHandler)

export default app
