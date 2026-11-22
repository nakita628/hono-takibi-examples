import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBillingProfileRoute,
  getAccountsAccountIdBillingProfileRoute,
  patchAccountsAccountIdBillingProfileRoute,
  postAccountsAccountIdBillingProfileRoute,
  putAccountsAccountIdBillingProfileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountBillingProfileHandler = app
  .openapi(deleteAccountsAccountIdBillingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBillingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBillingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdBillingProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
