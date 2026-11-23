import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetweatherRoute } from './routes'
import { getGetweatherRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetweatherRoute, getGetweatherRouteHandler)

export default app
