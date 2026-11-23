import { OpenAPIHono } from '@hono/zod-openapi'
import { postRequestRoute } from './routes'
import { postRequestRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postRequestRoute, postRequestRouteHandler)

export default app
