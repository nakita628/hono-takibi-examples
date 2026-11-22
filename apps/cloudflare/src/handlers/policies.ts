import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDataSecurityPosturePoliciesPolicyIdRoute,
  getAccountsAccountIdDataSecurityPosturePoliciesPolicyIdRoute,
  getAccountsAccountIdDataSecurityPosturePoliciesRoute,
  getAccountsAccountIdDataSecurityPosturePolicyLogsRoute,
  postAccountsAccountIdDataSecurityPosturePoliciesRoute,
  putAccountsAccountIdDataSecurityPosturePoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const policiesHandler = app
  .openapi(getAccountsAccountIdDataSecurityPosturePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDataSecurityPosturePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDataSecurityPosturePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPosturePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDataSecurityPosturePoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDataSecurityPosturePolicyLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
