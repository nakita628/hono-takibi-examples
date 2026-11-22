import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdScheduledPaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduledPaymentsHandler = app.openapi(
  getAccountsAccountIdScheduledPaymentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
