import { OpenAPIHono } from '@hono/zod-openapi'
import { postRoute } from './routes'
import { postRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postRoute, postRouteHandler)

export default app
