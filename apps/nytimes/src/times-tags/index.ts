import { OpenAPIHono } from '@hono/zod-openapi'
import { getTimestagsRoute } from './routes'
import { getTimestagsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getTimestagsRoute, getTimestagsRouteHandler)

export default app
