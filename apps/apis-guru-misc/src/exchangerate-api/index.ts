import { OpenAPIHono } from '@hono/zod-openapi'
import { getLatestBaseCurrencyRoute } from './routes'
import { getLatestBaseCurrencyRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getLatestBaseCurrencyRoute, getLatestBaseCurrencyRouteHandler)

export default app
