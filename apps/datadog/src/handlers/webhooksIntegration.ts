import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodIdRoute,
  getApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodIdRoute,
  getApiV2IntegrationWebhooksConfigurationAuthMethodRoute,
  patchApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodIdRoute,
  postApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksIntegrationHandler = app
  .openapi(getApiV2IntegrationWebhooksConfigurationAuthMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchApiV2IntegrationWebhooksConfigurationAuthMethodOauth2ClientCredentialsAuthMethodIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
