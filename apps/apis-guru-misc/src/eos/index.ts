import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postNetConnectionsRoute,
  postNetConnectRoute,
  postNetDisconnectRoute,
  postNetStatusRoute,
} from './routes'
import {
  postNetConnectionsRouteHandler,
  postNetConnectRouteHandler,
  postNetDisconnectRouteHandler,
  postNetStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postNetConnectRoute, postNetConnectRouteHandler)
  .openapi(postNetConnectionsRoute, postNetConnectionsRouteHandler)
  .openapi(postNetDisconnectRoute, postNetDisconnectRouteHandler)
  .openapi(postNetStatusRoute, postNetStatusRouteHandler)

export default app
