import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesOpenaiCodexAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesOpenaiCodexAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesOpenaiCodexAccountsRoute,
  patchApiV2IntegrationInterfacesOpenaiCodexAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesOpenaiCodexAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const openAICodexIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesOpenaiCodexAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesOpenaiCodexAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesOpenaiCodexAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesOpenaiCodexAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesOpenaiCodexAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
