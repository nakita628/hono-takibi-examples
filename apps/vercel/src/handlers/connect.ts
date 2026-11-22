import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentRoute,
  deleteV1ConnectConnectorsConnectorProjectsProjectIdRoute,
  deleteV1ConnectConnectorsConnectorRoute,
  getV1ConnectConnectorsConnectorProjectsProjectIdRoute,
  getV1ConnectConnectorsConnectorRoute,
  getV2ConnectConnectorsConnectorProjectsRoute,
  getV2ConnectConnectorsRoute,
  getV2ConnectProjectsProjectIdConnectorsRoute,
  patchV1ConnectConnectorsConnectorTriggerDestinationsRoute,
  patchV2ConnectConnectorsConnectorRoute,
  postV1ConnectAuthorizeConnectorRoute,
  postV1ConnectConnectorsConnectorManagedEjectRoute,
  postV1ConnectConnectorsConnectorProjectsProjectIdRoute,
  postV1ConnectConnectorsRoute,
  postV1ConnectTokenConnectorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const connectHandler = app
  .openapi(getV2ConnectConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectConnectorsConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectConnectorsConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2ConnectConnectorsConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ConnectConnectorsConnectorTriggerDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectConnectorsConnectorManagedEjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectConnectorsConnectorProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConnectConnectorsConnectorProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectConnectorsConnectorProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectConnectorsConnectorProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConnectConnectorsConnectorProjectsProjectIdEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ConnectProjectsProjectIdConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectTokenConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConnectAuthorizeConnectorRoute, (c) => {
    throw new Error('Not implemented')
  })
