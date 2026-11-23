import { OpenAPIHono } from '@hono/zod-openapi'
import { getWaybackV1AvailableRoute, postWaybackV1AvailableRoute } from './routes'
import { getWaybackV1AvailableRouteHandler, postWaybackV1AvailableRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getWaybackV1AvailableRoute, getWaybackV1AvailableRouteHandler)
  .openapi(postWaybackV1AvailableRoute, postWaybackV1AvailableRouteHandler)

export default app
