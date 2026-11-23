import { OpenAPIHono } from '@hono/zod-openapi'
import { getHelloRoute } from './routes'
import { getHelloRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getHelloRoute, getHelloRouteHandler)

export default app
