import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCallsTurnKeysKeyIdRoute,
  getAccountsAccountIdCallsTurnKeysKeyIdRoute,
  getAccountsAccountIdCallsTurnKeysRoute,
  postAccountsAccountIdCallsTurnKeysRoute,
  putAccountsAccountIdCallsTurnKeysKeyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realtimeTURNKeysHandler = app
  .openapi(getAccountsAccountIdCallsTurnKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCallsTurnKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCallsTurnKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCallsTurnKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCallsTurnKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
