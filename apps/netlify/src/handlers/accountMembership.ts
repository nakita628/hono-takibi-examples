import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  postAccountsRoute,
  putAccountsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountMembershipHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
