import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1AttachmentNameRoute,
  deleteV1beta1BeaconNameRoute,
  getV1beta1BeaconNameAttachmentsRoute,
  getV1beta1BeaconNameDiagnosticsRoute,
  getV1beta1BeaconNameRoute,
  getV1beta1BeaconsRoute,
  getV1beta1EidparamsRoute,
  getV1beta1NamespacesRoute,
  postV1beta1BeaconinfoGetforobservedRoute,
  postV1beta1BeaconNameActivateRoute,
  postV1beta1BeaconNameAttachmentsBatchDeleteRoute,
  postV1beta1BeaconNameAttachmentsRoute,
  postV1beta1BeaconNameDeactivateRoute,
  postV1beta1BeaconNameDecommissionRoute,
  postV1beta1BeaconsRegisterRoute,
  putV1beta1BeaconNameRoute,
  putV1beta1NamespaceNameRoute,
} from './routes'
import {
  deleteV1beta1AttachmentNameRouteHandler,
  deleteV1beta1BeaconNameRouteHandler,
  getV1beta1BeaconNameAttachmentsRouteHandler,
  getV1beta1BeaconNameDiagnosticsRouteHandler,
  getV1beta1BeaconNameRouteHandler,
  getV1beta1BeaconsRouteHandler,
  getV1beta1EidparamsRouteHandler,
  getV1beta1NamespacesRouteHandler,
  postV1beta1BeaconinfoGetforobservedRouteHandler,
  postV1beta1BeaconNameActivateRouteHandler,
  postV1beta1BeaconNameAttachmentsBatchDeleteRouteHandler,
  postV1beta1BeaconNameAttachmentsRouteHandler,
  postV1beta1BeaconNameDeactivateRouteHandler,
  postV1beta1BeaconNameDecommissionRouteHandler,
  postV1beta1BeaconsRegisterRouteHandler,
  putV1beta1BeaconNameRouteHandler,
  putV1beta1NamespaceNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1beta1BeaconinfoGetforobservedRoute,
    postV1beta1BeaconinfoGetforobservedRouteHandler,
  )
  .openapi(getV1beta1BeaconsRoute, getV1beta1BeaconsRouteHandler)
  .openapi(postV1beta1BeaconsRegisterRoute, postV1beta1BeaconsRegisterRouteHandler)
  .openapi(getV1beta1EidparamsRoute, getV1beta1EidparamsRouteHandler)
  .openapi(getV1beta1NamespacesRoute, getV1beta1NamespacesRouteHandler)
  .openapi(deleteV1beta1AttachmentNameRoute, deleteV1beta1AttachmentNameRouteHandler)
  .openapi(deleteV1beta1BeaconNameRoute, deleteV1beta1BeaconNameRouteHandler)
  .openapi(getV1beta1BeaconNameRoute, getV1beta1BeaconNameRouteHandler)
  .openapi(putV1beta1BeaconNameRoute, putV1beta1BeaconNameRouteHandler)
  .openapi(getV1beta1BeaconNameAttachmentsRoute, getV1beta1BeaconNameAttachmentsRouteHandler)
  .openapi(postV1beta1BeaconNameAttachmentsRoute, postV1beta1BeaconNameAttachmentsRouteHandler)
  .openapi(
    postV1beta1BeaconNameAttachmentsBatchDeleteRoute,
    postV1beta1BeaconNameAttachmentsBatchDeleteRouteHandler,
  )
  .openapi(getV1beta1BeaconNameDiagnosticsRoute, getV1beta1BeaconNameDiagnosticsRouteHandler)
  .openapi(postV1beta1BeaconNameActivateRoute, postV1beta1BeaconNameActivateRouteHandler)
  .openapi(postV1beta1BeaconNameDeactivateRoute, postV1beta1BeaconNameDeactivateRouteHandler)
  .openapi(postV1beta1BeaconNameDecommissionRoute, postV1beta1BeaconNameDecommissionRouteHandler)
  .openapi(putV1beta1NamespaceNameRoute, putV1beta1NamespaceNameRouteHandler)

export default app
