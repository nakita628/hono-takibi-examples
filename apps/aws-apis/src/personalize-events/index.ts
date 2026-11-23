import { OpenAPIHono } from '@hono/zod-openapi'
import { postEventsRoute, postItemsRoute, postUsersRoute } from './routes'
import { postEventsRouteHandler, postItemsRouteHandler, postUsersRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postEventsRoute, postEventsRouteHandler)
  .openapi(postItemsRoute, postItemsRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)

export default app
