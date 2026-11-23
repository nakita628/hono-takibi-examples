import { OpenAPIHono } from '@hono/zod-openapi'
import { postSessionsRoute } from './routes'
import { postSessionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postSessionsRoute, postSessionsRouteHandler)

export default app
