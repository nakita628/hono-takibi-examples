import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServersRoute,
  getServerSummariesRoute,
  postDisableUserRoute,
  postEnableUserRoute,
  postLoginRoute,
  postRegisterRoute,
  postUsernameAvailableRoute,
} from './routes'
import {
  getServersRouteHandler,
  getServerSummariesRouteHandler,
  postDisableUserRouteHandler,
  postEnableUserRouteHandler,
  postLoginRouteHandler,
  postRegisterRouteHandler,
  postUsernameAvailableRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postDisableUserRoute, postDisableUserRouteHandler)
  .openapi(postEnableUserRoute, postEnableUserRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(postRegisterRoute, postRegisterRouteHandler)
  .openapi(getServerSummariesRoute, getServerSummariesRouteHandler)
  .openapi(getServersRoute, getServersRouteHandler)
  .openapi(postUsernameAvailableRoute, postUsernameAvailableRouteHandler)

export default app
