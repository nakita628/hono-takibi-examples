import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserContentByDateJsonRoute,
  getUserContentRecentJsonRoute,
  getUserContentUrlJsonRoute,
  getUserContentUserJsonRoute,
} from './routes'
import {
  getUserContentByDateJsonRouteHandler,
  getUserContentRecentJsonRouteHandler,
  getUserContentUrlJsonRouteHandler,
  getUserContentUserJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getUserContentByDateJsonRoute, getUserContentByDateJsonRouteHandler)
  .openapi(getUserContentRecentJsonRoute, getUserContentRecentJsonRouteHandler)
  .openapi(getUserContentUrlJsonRoute, getUserContentUrlJsonRouteHandler)
  .openapi(getUserContentUserJsonRoute, getUserContentUserJsonRouteHandler)

export default app
