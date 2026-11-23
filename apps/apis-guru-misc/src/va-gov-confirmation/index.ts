import { OpenAPIHono } from '@hono/zod-openapi'
import { postStatusRoute } from './routes'
import { postStatusRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postStatusRoute, postStatusRouteHandler)

export default app
