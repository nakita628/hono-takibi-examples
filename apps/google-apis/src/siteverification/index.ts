import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWebResourceIdRoute,
  getWebResourceIdRoute,
  getWebResourceRoute,
  patchWebResourceIdRoute,
  postTokenRoute,
  postWebResourceRoute,
  putWebResourceIdRoute,
} from './routes'
import {
  deleteWebResourceIdRouteHandler,
  getWebResourceIdRouteHandler,
  getWebResourceRouteHandler,
  patchWebResourceIdRouteHandler,
  postTokenRouteHandler,
  postWebResourceRouteHandler,
  putWebResourceIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postTokenRoute, postTokenRouteHandler)
  .openapi(getWebResourceRoute, getWebResourceRouteHandler)
  .openapi(postWebResourceRoute, postWebResourceRouteHandler)
  .openapi(deleteWebResourceIdRoute, deleteWebResourceIdRouteHandler)
  .openapi(getWebResourceIdRoute, getWebResourceIdRouteHandler)
  .openapi(patchWebResourceIdRoute, patchWebResourceIdRouteHandler)
  .openapi(putWebResourceIdRoute, putWebResourceIdRouteHandler)

export default app
