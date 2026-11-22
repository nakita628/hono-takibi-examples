import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPvtTransactionsTransactionIdPaymentsPaymentIdRoute,
  getApiPvtTransactionsTransactionIdRoute,
  getApiPvtTransactionsTransactionIdSettlementsRoute,
  postApiPubTransactionsTransactionIdPaymentsRoute,
  postApiPvtTransactionsRoute,
  postApiPvtTransactionsTransactionIdAdditionalDataRoute,
  postApiPvtTransactionsTransactionIdAuthorizationRequestRoute,
  postApiPvtTransactionsTransactionIdPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionProcessHandler = app
  .openapi(postApiPubTransactionsTransactionIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdAdditionalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdAuthorizationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtTransactionsTransactionIdPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPvtTransactionsTransactionIdSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
