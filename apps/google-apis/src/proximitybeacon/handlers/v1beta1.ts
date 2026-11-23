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
} from '../routes'

const app = new OpenAPIHono()

export const v1beta1Handler = app
  .openapi(postV1beta1BeaconinfoGetforobservedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1BeaconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1BeaconsRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1EidparamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1AttachmentNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1BeaconNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1BeaconNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1BeaconNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1BeaconNameAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1BeaconNameAttachmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1BeaconNameAttachmentsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1BeaconNameDiagnosticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1BeaconNameActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1BeaconNameDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1BeaconNameDecommissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1beta1NamespaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
