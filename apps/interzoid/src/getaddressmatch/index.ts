import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetaddressmatchRoute } from './routes'
import { getGetaddressmatchRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getGetaddressmatchRoute, getGetaddressmatchRouteHandler)

export default app
