import { OpenAPIHono } from '@hono/zod-openapi'
import { postAuthRoute } from './routes'
import { postAuthRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postAuthRoute, postAuthRouteHandler)

export default app
