import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleIdRoute,
  deleteApiV2IntegrationMsTeamsConfigurationUserBindingTenantIdRoute,
  deleteApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleIdRoute,
  getApiV2IntegrationMsTeamsConfigurationChannelTenantNameTeamNameChannelNameRoute,
  getApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleIdRoute,
  getApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesRoute,
  getApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleIdRoute,
  getApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesRoute,
  patchApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleIdRoute,
  patchApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleIdRoute,
  postApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesRoute,
  postApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const microsoftTeamsIntegrationHandler = app
  .openapi(
    getApiV2IntegrationMsTeamsConfigurationChannelTenantNameTeamNameChannelNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationMsTeamsConfigurationTenantBasedHandlesHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationMsTeamsConfigurationUserBindingTenantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationMsTeamsConfigurationWorkflowsWebhookHandlesHandleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
