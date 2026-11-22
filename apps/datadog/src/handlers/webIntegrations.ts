import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2WebIntegrationsIntegrationNameAccountsAccountIdRoute,
  getApiV2WebIntegrationsIntegrationNameAccountsAccountIdRoute,
  getApiV2WebIntegrationsIntegrationNameAccountsRoute,
  patchApiV2WebIntegrationsIntegrationNameAccountsAccountIdRoute,
  postApiV2WebIntegrationsIntegrationNameAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webIntegrationsHandler = app
  .openapi(getApiV2WebIntegrationsIntegrationNameAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2WebIntegrationsIntegrationNameAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2WebIntegrationsIntegrationNameAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2WebIntegrationsIntegrationNameAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2WebIntegrationsIntegrationNameAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
