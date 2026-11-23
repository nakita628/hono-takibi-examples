import { OpenAPIHono } from '@hono/zod-openapi'
import { postAnythingRoute } from './routes'
import { postAnythingRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postAnythingRoute, postAnythingRouteHandler)

export default app
