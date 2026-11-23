import { OpenAPIHono } from '@hono/zod-openapi'
import { getProxyRoute } from './routes'
import { getProxyRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getProxyRoute, getProxyRouteHandler)

export default app
