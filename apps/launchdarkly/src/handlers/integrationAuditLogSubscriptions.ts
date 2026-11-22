import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationsIntegrationKeyIdRoute,
  getApiV2IntegrationsIntegrationKeyIdRoute,
  getApiV2IntegrationsIntegrationKeyRoute,
  patchApiV2IntegrationsIntegrationKeyIdRoute,
  postApiV2IntegrationsIntegrationKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationAuditLogSubscriptionsHandler = app
  .openapi(getApiV2IntegrationsIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationsIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationsIntegrationKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationsIntegrationKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationsIntegrationKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
