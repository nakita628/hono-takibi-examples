import { OpenAPIHono } from '@hono/zod-openapi'
import { postCallbackRoute } from './routes'
import { postCallbackRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postCallbackRoute, postCallbackRouteHandler)

export default app
