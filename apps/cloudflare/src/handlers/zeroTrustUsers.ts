import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessUsersUserIdMfaAuthenticatorsAuthenticatorIdRoute,
  deleteAccountsAccountIdAccessUsersUserIdPasskeysAuthenticatorIdRoute,
  deleteAccountsAccountIdAccessUsersUserIdRoute,
  getAccountsAccountIdAccessUsersRoute,
  getAccountsAccountIdAccessUsersUserIdActiveSessionsNonceRoute,
  getAccountsAccountIdAccessUsersUserIdActiveSessionsRoute,
  getAccountsAccountIdAccessUsersUserIdFailedLoginsRoute,
  getAccountsAccountIdAccessUsersUserIdLastSeenIdentityRoute,
  getAccountsAccountIdAccessUsersUserIdRoute,
  postAccountsAccountIdAccessUsersRoute,
  putAccountsAccountIdAccessUsersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zeroTrustUsersHandler = app
  .openapi(getAccountsAccountIdAccessUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUsersUserIdActiveSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUsersUserIdActiveSessionsNonceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUsersUserIdFailedLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessUsersUserIdLastSeenIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessUsersUserIdMfaAuthenticatorsAuthenticatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessUsersUserIdPasskeysAuthenticatorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
