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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(deleteV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameGetGuestAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2NameStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentAcceleratorTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ParentRuntimeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2ParentGenerateServiceIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
