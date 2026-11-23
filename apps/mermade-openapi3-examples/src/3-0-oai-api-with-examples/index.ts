import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute, getV2Route } from './routes'
import { getRouteHandler, getV2RouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getRoute, getRouteHandler).openapi(getV2Route, getV2RouteHandler)

export default app
