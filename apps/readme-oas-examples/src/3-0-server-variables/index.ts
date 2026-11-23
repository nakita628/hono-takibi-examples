import { OpenAPIHono } from '@hono/zod-openapi'
import { postGlobalRoute, postOperationRoute, putComboRoute, putPathRoute } from './routes'
import {
  postGlobalRouteHandler,
  postOperationRouteHandler,
  putComboRouteHandler,
  putPathRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postGlobalRoute, postGlobalRouteHandler)
  .openapi(postOperationRoute, postOperationRouteHandler)
  .openapi(putPathRoute, putPathRouteHandler)
  .openapi(putComboRoute, putComboRouteHandler)

export default app
