import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessPoliciesPolicyIdRoute,
  getAccountsAccountIdAccessPoliciesPolicyIdRoute,
  getAccountsAccountIdAccessPoliciesRoute,
  postAccountsAccountIdAccessPoliciesRoute,
  putAccountsAccountIdAccessPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessReusablePoliciesHandler = app
  .openapi(getAccountsAccountIdAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
