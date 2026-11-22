import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersAccountSettingsRoute,
  putAccountsAccountIdWorkersAccountSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersAccountSettingsHandler = app
  .openapi(getAccountsAccountIdWorkersAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersAccountSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
