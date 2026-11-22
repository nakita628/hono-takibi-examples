import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamKeysIdentifierRoute,
  getAccountsAccountIdStreamKeysRoute,
  postAccountsAccountIdStreamKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamSigningKeysHandler = app
  .openapi(getAccountsAccountIdStreamKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamKeysIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
