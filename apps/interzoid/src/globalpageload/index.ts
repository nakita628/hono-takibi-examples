import { OpenAPIHono } from '@hono/zod-openapi'
import { getGlobalpageloadRoute } from './routes'
import { getGlobalpageloadRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGlobalpageloadRoute, getGlobalpageloadRouteHandler)

export default app
