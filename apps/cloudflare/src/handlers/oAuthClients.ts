import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdOauthClientsOauthClientIdRotateSecretRoute,
  deleteAccountsAccountIdOauthClientsOauthClientIdRoute,
  getAccountsAccountIdOauthClientsOauthClientIdRoute,
  getAccountsAccountIdOauthClientsRoute,
  getOauthScopesRoute,
  patchAccountsAccountIdOauthClientsOauthClientIdRoute,
  postAccountsAccountIdOauthClientsOauthClientIdRotateSecretRoute,
  postAccountsAccountIdOauthClientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oAuthClientsHandler = app
  .openapi(getAccountsAccountIdOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdOauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdOauthClientsOauthClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdOauthClientsOauthClientIdRotateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdOauthClientsOauthClientIdRotateSecretRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauthScopesRoute, (c) => {
    throw new Error('Not implemented')
  })
