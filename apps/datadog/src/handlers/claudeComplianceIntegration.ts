import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2IntegrationInterfacesClaudeComplianceAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesClaudeComplianceAccountsAccountIdRoute,
  getApiV2IntegrationInterfacesClaudeComplianceAccountsRoute,
  patchApiV2IntegrationInterfacesClaudeComplianceAccountsAccountIdRoute,
  postApiV2IntegrationInterfacesClaudeComplianceAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const claudeComplianceIntegrationHandler = app
  .openapi(getApiV2IntegrationInterfacesClaudeComplianceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2IntegrationInterfacesClaudeComplianceAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2IntegrationInterfacesClaudeComplianceAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2IntegrationInterfacesClaudeComplianceAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2IntegrationInterfacesClaudeComplianceAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
