import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postOauth202609TokenIntrospectRoute,
  postOauth202609TokenRevokeRoute,
  postOauth202609TokenRoute,
} from './routes'
import {
  postOauth202609TokenIntrospectRouteHandler,
  postOauth202609TokenRevokeRouteHandler,
  postOauth202609TokenRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOauth202609TokenRoute, postOauth202609TokenRouteHandler)
  .openapi(postOauth202609TokenIntrospectRoute, postOauth202609TokenIntrospectRouteHandler)
  .openapi(postOauth202609TokenRevokeRoute, postOauth202609TokenRevokeRouteHandler)

export default app
