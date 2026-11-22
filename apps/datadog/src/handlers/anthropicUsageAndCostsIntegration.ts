import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsRoute,
  patchApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const anthropicUsageAndCostsIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesAnthropicUsageAndCostsAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
