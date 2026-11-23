import { OpenAPIHono } from '@hono/zod-openapi'
import { postFindRoute } from './routes'
import { postFindRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postFindRoute, postFindRouteHandler)

export default app
