import { OpenAPIHono } from '@hono/zod-openapi'
import { postQueryRoute } from './routes'
import { postQueryRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postQueryRoute, postQueryRouteHandler)

export default app
