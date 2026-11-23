import { OpenAPIHono } from '@hono/zod-openapi'
import { getSearchRoute } from './routes'
import { getSearchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getSearchRoute, getSearchRouteHandler)

export default app
