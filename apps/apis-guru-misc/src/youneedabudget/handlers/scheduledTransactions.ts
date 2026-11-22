import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBudgetsBudgetIdScheduledTransactionsRoute,
  getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scheduledTransactionsHandler = app
  .openapi(getBudgetsBudgetIdScheduledTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBudgetsBudgetIdScheduledTransactionsScheduledTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
