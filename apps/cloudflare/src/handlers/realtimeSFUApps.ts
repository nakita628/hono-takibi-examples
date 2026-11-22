import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCallsAppsAppIdRoute,
  getAccountsAccountIdCallsAppsAppIdRoute,
  getAccountsAccountIdCallsAppsRoute,
  postAccountsAccountIdCallsAppsRoute,
  putAccountsAccountIdCallsAppsAppIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realtimeSFUAppsHandler = app
  .openapi(getAccountsAccountIdCallsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCallsAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCallsAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCallsAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCallsAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
