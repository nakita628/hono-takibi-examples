import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDeleteRoute,
  deleteWWorkspaceNativeTriggersIntegrationsServiceNameDeleteRoute,
  getWWorkspaceNativeTriggersIntegrationsListRoute,
  getWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsRoute,
  getWWorkspaceNativeTriggersIntegrationsServiceNameExistsRoute,
  getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailableRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameCallbackRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameCreateRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrlRoute,
  postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnectionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workspaceIntegrationHandler = app
  .openapi(getWWorkspaceNativeTriggersIntegrationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsServiceNameExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceNativeTriggersIntegrationsServiceNameDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceNativeTriggersIntegrationsServiceNameCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
