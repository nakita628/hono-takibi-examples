import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1IecIecRoute } from './routes'
import { getV1IecIecRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1IecIecRoute, getV1IecIecRouteHandler)

export default app
