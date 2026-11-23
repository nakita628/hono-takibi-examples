import { OpenAPIHono } from '@hono/zod-openapi'
import { postRatesCalculateRoute } from './routes'
import { postRatesCalculateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postRatesCalculateRoute, postRatesCalculateRouteHandler)

export default app
