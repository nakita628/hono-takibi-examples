import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1IndexRoute } from './routes'
import { getV1IndexRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1IndexRoute, getV1IndexRouteHandler)

export default app
