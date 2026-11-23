import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha2NameRoute,
  getV1alpha2NameRoute,
  getV1alpha2ParentWorkerPoolsRoute,
  patchV1alpha2NameRoute,
  postV1alpha2NameCancelRoute,
  postV1alpha2ParentWorkerPoolsRoute,
} from './routes'
import {
  deleteV1alpha2NameRouteHandler,
  getV1alpha2NameRouteHandler,
  getV1alpha2ParentWorkerPoolsRouteHandler,
  patchV1alpha2NameRouteHandler,
  postV1alpha2NameCancelRouteHandler,
  postV1alpha2ParentWorkerPoolsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1alpha2NameRoute, deleteV1alpha2NameRouteHandler)
  .openapi(getV1alpha2NameRoute, getV1alpha2NameRouteHandler)
  .openapi(patchV1alpha2NameRoute, patchV1alpha2NameRouteHandler)
  .openapi(postV1alpha2NameCancelRoute, postV1alpha2NameCancelRouteHandler)
  .openapi(getV1alpha2ParentWorkerPoolsRoute, getV1alpha2ParentWorkerPoolsRouteHandler)
  .openapi(postV1alpha2ParentWorkerPoolsRoute, postV1alpha2ParentWorkerPoolsRouteHandler)

export default app
