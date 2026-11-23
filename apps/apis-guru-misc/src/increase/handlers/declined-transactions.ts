import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeclinedTransactionsDeclinedTransactionIdRoute,
  getDeclinedTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const declinedTransactionsHandler = app
  .openapi(getDeclinedTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDeclinedTransactionsDeclinedTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
