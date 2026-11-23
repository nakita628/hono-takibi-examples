import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdAppsRoute, postAccountsAccountIdAppsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsAccountIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
