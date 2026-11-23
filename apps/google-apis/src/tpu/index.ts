import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2NameRoute,
  getV2NameLocationsRoute,
  getV2NameOperationsRoute,
  getV2NameRoute,
  getV2ParentAcceleratorTypesRoute,
  getV2ParentNodesRoute,
  getV2ParentRuntimeVersionsRoute,
  patchV2NameRoute,
  postV2NameCancelRoute,
  postV2NameGetGuestAttributesRoute,
  postV2NameStartRoute,
  postV2NameStopRoute,
  postV2ParentGenerateServiceIdentityRoute,
  postV2ParentNodesRoute,
} from './routes'
import {
  deleteV2NameRouteHandler,
  getV2NameLocationsRouteHandler,
  getV2NameOperationsRouteHandler,
  getV2NameRouteHandler,
  getV2ParentAcceleratorTypesRouteHandler,
  getV2ParentNodesRouteHandler,
  getV2ParentRuntimeVersionsRouteHandler,
  patchV2NameRouteHandler,
  postV2NameCancelRouteHandler,
  postV2NameGetGuestAttributesRouteHandler,
  postV2NameStartRouteHandler,
  postV2NameStopRouteHandler,
  postV2ParentGenerateServiceIdentityRouteHandler,
  postV2ParentNodesRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2NameRoute, deleteV2NameRouteHandler)
  .openapi(getV2NameRoute, getV2NameRouteHandler)
  .openapi(patchV2NameRoute, patchV2NameRouteHandler)
  .openapi(getV2NameLocationsRoute, getV2NameLocationsRouteHandler)
  .openapi(getV2NameOperationsRoute, getV2NameOperationsRouteHandler)
  .openapi(postV2NameCancelRoute, postV2NameCancelRouteHandler)
  .openapi(postV2NameGetGuestAttributesRoute, postV2NameGetGuestAttributesRouteHandler)
  .openapi(postV2NameStartRoute, postV2NameStartRouteHandler)
  .openapi(postV2NameStopRoute, postV2NameStopRouteHandler)
  .openapi(getV2ParentAcceleratorTypesRoute, getV2ParentAcceleratorTypesRouteHandler)
  .openapi(getV2ParentNodesRoute, getV2ParentNodesRouteHandler)
  .openapi(postV2ParentNodesRoute, postV2ParentNodesRouteHandler)
  .openapi(getV2ParentRuntimeVersionsRoute, getV2ParentRuntimeVersionsRouteHandler)
  .openapi(
    postV2ParentGenerateServiceIdentityRoute,
    postV2ParentGenerateServiceIdentityRouteHandler,
  )

export default app
