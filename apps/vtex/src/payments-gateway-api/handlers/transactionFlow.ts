import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiPvtTransactionsTransactionIdCancellationRequestRoute,
  postApiPvtTransactionsTransactionIdRefundingRequestRoute,
  postApiPvtTransactionsTransactionIdSettlementRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionFlowHandler = app
  .openapi(postApiPvtTransactionsTransactionIdCancellationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdRefundingRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPvtTransactionsTransactionIdSettlementRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
