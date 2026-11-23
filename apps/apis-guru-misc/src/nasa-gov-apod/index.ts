import { OpenAPIHono } from '@hono/zod-openapi'
import { getApodRoute } from './routes'
import { getApodRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getApodRoute, getApodRouteHandler)

export default app
