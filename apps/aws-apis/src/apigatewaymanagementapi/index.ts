import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectionsConnectionIdRoute,
  getConnectionsConnectionIdRoute,
  postConnectionsConnectionIdRoute,
} from './routes'
import {
  deleteConnectionsConnectionIdRouteHandler,
  getConnectionsConnectionIdRouteHandler,
  postConnectionsConnectionIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteConnectionsConnectionIdRoute, deleteConnectionsConnectionIdRouteHandler)
  .openapi(getConnectionsConnectionIdRoute, getConnectionsConnectionIdRouteHandler)
  .openapi(postConnectionsConnectionIdRoute, postConnectionsConnectionIdRouteHandler)

export default app
