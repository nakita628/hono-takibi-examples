import { OpenAPIHono } from '@hono/zod-openapi'
import { postPostRoute } from './routes'
import { postPostRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postPostRoute, postPostRouteHandler)

export default app
