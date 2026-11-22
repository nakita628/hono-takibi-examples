import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTransactionsTransactionIdRoute,
  getTransactionsRoute,
  getTransactionsTransactionIdRoute,
  postTransactionsTransactionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsFindPaymentsAndRefundsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
