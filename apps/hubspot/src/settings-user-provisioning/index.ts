import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsUsers202609UserIdRoute,
  getSettingsUsers202609RolesRoute,
  getSettingsUsers202609Route,
  getSettingsUsers202609SeatsRoute,
  getSettingsUsers202609TeamsRoute,
  getSettingsUsers202609UserIdRoute,
  postSettingsUsers202609Route,
  putSettingsUsers202609UserIdRoute,
} from './routes'
import {
  deleteSettingsUsers202609UserIdRouteHandler,
  getSettingsUsers202609RolesRouteHandler,
  getSettingsUsers202609RouteHandler,
  getSettingsUsers202609SeatsRouteHandler,
  getSettingsUsers202609TeamsRouteHandler,
  getSettingsUsers202609UserIdRouteHandler,
  postSettingsUsers202609RouteHandler,
  putSettingsUsers202609UserIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSettingsUsers202609Route, getSettingsUsers202609RouteHandler)
  .openapi(postSettingsUsers202609Route, postSettingsUsers202609RouteHandler)
  .openapi(getSettingsUsers202609RolesRoute, getSettingsUsers202609RolesRouteHandler)
  .openapi(getSettingsUsers202609SeatsRoute, getSettingsUsers202609SeatsRouteHandler)
  .openapi(getSettingsUsers202609TeamsRoute, getSettingsUsers202609TeamsRouteHandler)
  .openapi(getSettingsUsers202609UserIdRoute, getSettingsUsers202609UserIdRouteHandler)
  .openapi(putSettingsUsers202609UserIdRoute, putSettingsUsers202609UserIdRouteHandler)
  .openapi(deleteSettingsUsers202609UserIdRoute, deleteSettingsUsers202609UserIdRouteHandler)

export default app
