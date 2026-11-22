import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneV2CredentialMonitorDomainsIdRoute,
  getAccountsAccountIdCloudforceOneV2CredentialMonitorDomainsRoute,
  getAccountsAccountIdCloudforceOneV2CredentialMonitorMatchesRoute,
  postAccountsAccountIdCloudforceOneV2CredentialMonitorDomainsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const public__CredentialMonitorHandler = app
  .openapi(getAccountsAccountIdCloudforceOneV2CredentialMonitorDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneV2CredentialMonitorDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneV2CredentialMonitorDomainsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneV2CredentialMonitorMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
