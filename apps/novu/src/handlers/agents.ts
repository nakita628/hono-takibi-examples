import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
  deleteV1AgentsIdentifierRoute,
  getV1AgentsIdentifierIntegrationsRoute,
  getV1AgentsIdentifierRoute,
  getV1AgentsRoute,
  patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute,
  patchV1AgentsIdentifierRoute,
  postV1AgentsAgentIdReplyRoute,
  postV1AgentsIdentifierIntegrationsRoute,
  postV1AgentsRoute,
  putV1AgentsIdentifierBridgeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const agentsHandler = app
  .openapi(postV1AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AgentsIdentifierBridgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AgentsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AgentsIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentsIdentifierIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AgentsIdentifierIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AgentsIdentifierIntegrationsAgentIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AgentsAgentIdReplyRoute, (c) => {
    throw new Error('Not implemented')
  })
