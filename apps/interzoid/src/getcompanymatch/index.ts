import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetcompanymatchRoute } from './routes'
import { getGetcompanymatchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetcompanymatchRoute, getGetcompanymatchRouteHandler)

export default app
