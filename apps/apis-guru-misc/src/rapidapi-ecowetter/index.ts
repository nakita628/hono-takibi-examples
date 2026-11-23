import { OpenAPIHono } from '@hono/zod-openapi'
import { getPublicHistoryRoute } from './routes'
import { getPublicHistoryRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getPublicHistoryRoute, getPublicHistoryRouteHandler)

export default app
