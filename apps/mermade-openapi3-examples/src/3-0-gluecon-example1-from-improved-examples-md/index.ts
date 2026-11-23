import { OpenAPIHono } from '@hono/zod-openapi'
import { getNamesRoute } from './routes'
import { getNamesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getNamesRoute, getNamesRouteHandler)

export default app
