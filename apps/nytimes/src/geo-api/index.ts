import { OpenAPIHono } from '@hono/zod-openapi'
import { getQueryJsonRoute } from './routes'
import { getQueryJsonRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getQueryJsonRoute, getQueryJsonRouteHandler)

export default app
