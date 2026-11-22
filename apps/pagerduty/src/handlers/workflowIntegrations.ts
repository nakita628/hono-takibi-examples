import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkflowsIntegrationsIntegrationIdConnectionsIdRoute,
  getWorkflowsIntegrationsConnectionsRoute,
  getWorkflowsIntegrationsIdRoute,
  getWorkflowsIntegrationsIntegrationIdConnectionsIdRoute,
  getWorkflowsIntegrationsIntegrationIdConnectionsRoute,
  getWorkflowsIntegrationsRoute,
  patchWorkflowsIntegrationsIntegrationIdConnectionsIdRoute,
  postWorkflowsIntegrationsIntegrationIdConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workflowIntegrationsHandler = app
  .openapi(getWorkflowsIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIntegrationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIntegrationsConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIntegrationsIntegrationIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkflowsIntegrationsIntegrationIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkflowsIntegrationsIntegrationIdConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWorkflowsIntegrationsIntegrationIdConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkflowsIntegrationsIntegrationIdConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
