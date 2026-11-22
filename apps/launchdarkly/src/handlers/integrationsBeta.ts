import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute,
  getApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute,
  getApiV2IntegrationConfigurationsKeysIntegrationKeyRoute,
  patchApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute,
  postApiV2IntegrationConfigurationsKeysIntegrationKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsBetaHandler = app
  .openapi(getApiV2IntegrationConfigurationsKeysIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationConfigurationsKeysIntegrationKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationConfigurationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
