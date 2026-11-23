import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta2NameRoute,
  getV1beta2NameDownloadRoute,
  getV1beta2NameRoute,
  getV1beta2ParentModelsRoute,
  patchV1beta2NameRoute,
  postV1beta2ParentModelsRoute,
} from './routes'
import {
  deleteV1beta2NameRouteHandler,
  getV1beta2NameDownloadRouteHandler,
  getV1beta2NameRouteHandler,
  getV1beta2ParentModelsRouteHandler,
  patchV1beta2NameRouteHandler,
  postV1beta2ParentModelsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta2NameRoute, deleteV1beta2NameRouteHandler)
  .openapi(getV1beta2NameRoute, getV1beta2NameRouteHandler)
  .openapi(patchV1beta2NameRoute, patchV1beta2NameRouteHandler)
  .openapi(getV1beta2NameDownloadRoute, getV1beta2NameDownloadRouteHandler)
  .openapi(getV1beta2ParentModelsRoute, getV1beta2ParentModelsRouteHandler)
  .openapi(postV1beta2ParentModelsRoute, postV1beta2ParentModelsRouteHandler)

export default app
