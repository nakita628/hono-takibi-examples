import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAccessKeysRoute,
  postAccountsAccountIdAccessKeysRotateRoute,
  putAccountsAccountIdAccessKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessKeyConfigurationHandler = app
  .openapi(getAccountsAccountIdAccessKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessKeysRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
