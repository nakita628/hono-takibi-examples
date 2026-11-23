import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2KeysLookupKeyRoute,
  getV2NameKeyStringRoute,
  getV2NameRoute,
  getV2ParentKeysRoute,
  patchV2NameRoute,
  postV2NameUndeleteRoute,
  postV2ParentKeysRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2KeysLookupKeyRouteHandler,
  getV2NameKeyStringRouteHandler,
  getV2NameRouteHandler,
  getV2ParentKeysRouteHandler,
  patchV2NameRouteHandler,
  postV2NameUndeleteRouteHandler,
  postV2ParentKeysRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV2KeysLookupKeyRoute, getV2KeysLookupKeyRouteHandler)
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameKeyStringRoute, getV2NameKeyStringRouteHandler)
  .openapi(postV2NameUndeleteRoute, postV2NameUndeleteRouteHandler)
  .openapi(getV2ParentKeysRoute, getV2ParentKeysRouteHandler)
  .openapi(postV2ParentKeysRoute, postV2ParentKeysRouteHandler)

export default app
