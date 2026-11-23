import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPendingTransactionsPendingTransactionIdRoute,
  getPendingTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pendingTransactionsHandler = app
  .openapi(getPendingTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPendingTransactionsPendingTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
