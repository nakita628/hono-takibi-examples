import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdScheduledPaymentsRoute, getScheduledPaymentsRoute } from '../routes'

const app = new OpenAPIHono()

export const scheduledPaymentsHandler = app
  .openapi(getAccountsAccountIdScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScheduledPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
