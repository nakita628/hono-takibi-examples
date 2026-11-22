import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCwsPolicySetsPolicySetIdRoute,
  getAccountsAccountIdCwsPolicySetsPolicySetIdRoute,
  getAccountsAccountIdCwsPolicySetsRoute,
  postAccountsAccountIdCwsPolicySetsRoute,
  putAccountsAccountIdCwsPolicySetsPolicySetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cwsPolicySetsHandler = app
  .openapi(getAccountsAccountIdCwsPolicySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCwsPolicySetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCwsPolicySetsPolicySetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCwsPolicySetsPolicySetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCwsPolicySetsPolicySetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
