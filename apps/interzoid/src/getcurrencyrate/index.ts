import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcurrencyrateRoute } from './routes'
import { getGetcurrencyrateRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetcurrencyrateRoute, getGetcurrencyrateRouteHandler)

export default app
