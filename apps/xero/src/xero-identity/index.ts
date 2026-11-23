import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteConnectionsIdRoute, getConnectionsRoute } from './routes'
import { deleteConnectionsIdRouteHandler, getConnectionsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getConnectionsRoute, getConnectionsRouteHandler)
  .openapi(deleteConnectionsIdRoute, deleteConnectionsIdRouteHandler)

export default app
