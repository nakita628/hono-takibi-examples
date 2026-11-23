import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1AppConnectorResolveInstanceConfigRoute,
  getV1NameLocationsRoute,
  getV1NameOperationsRoute,
  getV1NameRoute,
  getV1ParentAppConnectionsResolveRoute,
  getV1ParentAppConnectionsRoute,
  getV1ParentAppConnectorsRoute,
  getV1ParentAppGatewaysRoute,
  getV1ResourceGetIamPolicyRoute,
  patchV1NameRoute,
  postV1AppConnectorReportStatusRoute,
  postV1NameCancelRoute,
  postV1ParentAppConnectionsRoute,
  postV1ParentAppConnectorsRoute,
  postV1ParentAppGatewaysRoute,
  postV1ResourceSetIamPolicyRoute,
  postV1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AppConnectorReportStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppConnectorResolveInstanceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAppConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppConnectionsResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAppConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentAppGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentAppGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
