import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetweatherzipcodeRoute } from './routes'
import { getGetweatherzipcodeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetweatherzipcodeRoute, getGetweatherzipcodeRouteHandler)

export default app
