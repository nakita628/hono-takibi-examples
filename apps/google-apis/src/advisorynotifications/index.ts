import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NameRoute, getV1ParentNotificationsRoute } from './routes'
import { getV1NameRouteHandler, getV1ParentNotificationsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1ParentNotificationsRoute, getV1ParentNotificationsRouteHandler)

export default app
