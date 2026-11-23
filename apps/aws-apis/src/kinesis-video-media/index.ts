import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetMediaRoute } from './routes'
import { postGetMediaRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postGetMediaRoute, postGetMediaRouteHandler)

export default app
