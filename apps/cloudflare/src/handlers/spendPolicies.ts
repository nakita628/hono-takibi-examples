import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBillingSpendPoliciesPolicyIdRoute,
  getAccountsAccountIdBillingSpendPoliciesActivityRoute,
  getAccountsAccountIdBillingSpendPoliciesPolicyIdAuditRoute,
  getAccountsAccountIdBillingSpendPoliciesPolicyIdRoute,
  getAccountsAccountIdBillingSpendPoliciesRoute,
  postAccountsAccountIdBillingSpendPoliciesRoute,
  putAccountsAccountIdBillingSpendPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spendPoliciesHandler = app
  .openapi(getAccountsAccountIdBillingSpendPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBillingSpendPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingSpendPoliciesActivityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdBillingSpendPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingSpendPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdBillingSpendPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingSpendPoliciesPolicyIdAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
