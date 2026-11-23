import { OpenAPIHono } from '@hono/zod-openapi'
import { getContentJsonRoute } from './routes'
import { getContentJsonRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getContentJsonRoute, getContentJsonRouteHandler)

export default app
