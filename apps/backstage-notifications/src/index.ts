import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIdRoute,
  getNotificationsIdRoute,
  getNotificationsRoute,
  getRoute,
  getSettingsRoute,
  getStatusRoute,
  getTopicsRoute,
  postNotificationsRoute,
  postNotificationsUpdateRoute,
  postRoute,
  postSettingsRoute,
  postUpdateRoute,
} from './routes'
import {
  getIdRouteHandler,
  getNotificationsIdRouteHandler,
  getNotificationsRouteHandler,
  getRouteHandler,
  getSettingsRouteHandler,
  getStatusRouteHandler,
  getTopicsRouteHandler,
  postNotificationsRouteHandler,
  postNotificationsUpdateRouteHandler,
  postRouteHandler,
  postSettingsRouteHandler,
  postUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(postRoute, postRouteHandler)
  .openapi(getNotificationsRoute, getNotificationsRouteHandler)
  .openapi(postNotificationsRoute, postNotificationsRouteHandler)
  .openapi(postUpdateRoute, postUpdateRouteHandler)
  .openapi(postNotificationsUpdateRoute, postNotificationsUpdateRouteHandler)
  .openapi(getStatusRoute, getStatusRouteHandler)
  .openapi(getSettingsRoute, getSettingsRouteHandler)
  .openapi(postSettingsRoute, postSettingsRouteHandler)
  .openapi(getTopicsRoute, getTopicsRouteHandler)
  .openapi(getIdRoute, getIdRouteHandler)
  .openapi(getNotificationsIdRoute, getNotificationsIdRouteHandler)

export default app
