import { OpenAPIHono } from '@hono/zod-openapi'
import { getAiNewsRoute } from './routes'
import { getAiNewsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getAiNewsRoute, getAiNewsRouteHandler)

export default app
