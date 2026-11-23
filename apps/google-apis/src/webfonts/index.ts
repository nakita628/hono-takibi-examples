import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WebfontsRoute } from './routes'
import { getV1WebfontsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1WebfontsRoute, getV1WebfontsRouteHandler)

export default app
