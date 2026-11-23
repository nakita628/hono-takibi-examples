import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute } from './routes'
import { getV1NameRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1NameRoute, getV1NameRouteHandler)

export default app
