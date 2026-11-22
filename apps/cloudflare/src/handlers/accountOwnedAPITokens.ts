import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdTokensTokenIdRoute,
  getAccountsAccountIdTokensPermissionGroupsRoute,
  getAccountsAccountIdTokensRoute,
  getAccountsAccountIdTokensTokenIdRoute,
  getAccountsAccountIdTokensVerifyRoute,
  postAccountsAccountIdTokensRoute,
  putAccountsAccountIdTokensTokenIdRoute,
  putAccountsAccountIdTokensTokenIdValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountOwnedAPITokensHandler = app
  .openapi(getAccountsAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTokensPermissionGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTokensVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdTokensTokenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdTokensTokenIdValueRoute, (c) => {
    throw new Error('Not implemented')
  })
