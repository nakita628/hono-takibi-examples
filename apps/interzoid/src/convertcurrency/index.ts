import { OpenAPIHono } from '@hono/zod-openapi'
import { getConvertcurrencyRoute } from './routes'
import { getConvertcurrencyRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getConvertcurrencyRoute, getConvertcurrencyRouteHandler)

export default app
