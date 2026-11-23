import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameRoute,
  getV2ParentRoute,
  postV2ParentRoute,
  putV2NameRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameRouteHandler,
  getV2ParentRouteHandler,
  postV2ParentRouteHandler,
  putV2NameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(putV2NameRoute, putV2NameRouteHandler)
  .openapi(getV2ParentRoute, getV2ParentRouteHandler)
  .openapi(postV2ParentRoute, postV2ParentRouteHandler)

export default app
