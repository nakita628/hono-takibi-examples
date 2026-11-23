import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddressRoute } from './routes'
import { getAddressRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getAddressRoute, getAddressRouteHandler)

export default app
