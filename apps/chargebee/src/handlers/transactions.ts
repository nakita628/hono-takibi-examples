import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionsRoute,
  getTransactionsTransactionIdRoute,
  postTransactionsCreateAuthorizationRoute,
  postTransactionsTransactionIdDeleteOfflineTransactionRoute,
  postTransactionsTransactionIdReconcileRoute,
  postTransactionsTransactionIdRecordRefundRoute,
  postTransactionsTransactionIdRefundRoute,
  postTransactionsTransactionIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdRecordRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsCreateAuthorizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdDeleteOfflineTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
