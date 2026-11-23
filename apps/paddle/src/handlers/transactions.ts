import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransactionsRoute,
  getTransactionsTransactionIdInvoiceRoute,
  getTransactionsTransactionIdRoute,
  patchTransactionsTransactionIdRoute,
  postTransactionsPreviewRoute,
  postTransactionsRoute,
  postTransactionsTransactionIdReviseRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTransactionsTransactionIdReviseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransactionsTransactionIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
