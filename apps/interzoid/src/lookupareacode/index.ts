import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetareacodeRoute } from './routes'
import { getGetareacodeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetareacodeRoute, getGetareacodeRouteHandler)

export default app
