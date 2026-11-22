import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsPoliciesPolicyIdRoute,
  getAccountsAccountIdCwsPoliciesPolicyIdRoute,
  getAccountsAccountIdCwsPoliciesRoute,
  postAccountsAccountIdCwsPoliciesRoute,
  putAccountsAccountIdCwsPoliciesPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsPoliciesHandler = app
  .openapi(getAccountsAccountIdCwsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
