import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdEntitlementsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountEntitlementsHandler = app.openapi(
  getAccountsAccountIdEntitlementsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
