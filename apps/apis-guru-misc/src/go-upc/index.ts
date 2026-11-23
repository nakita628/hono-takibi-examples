import { OpenAPIHono } from '@hono/zod-openapi'
import { getCodeCodeRoute } from './routes'
import { getCodeCodeRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getCodeCodeRoute, getCodeCodeRouteHandler)

export default app
