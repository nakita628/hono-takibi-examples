import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdBillingHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const accountBillingHistoryHandler = app.openapi(
  getAccountsAccountIdBillingHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
