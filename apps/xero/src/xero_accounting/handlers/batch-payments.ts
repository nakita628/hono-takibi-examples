import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBatchPaymentsBatchPaymentIDHistoryRoute,
  getBatchPaymentsBatchPaymentIDRoute,
  getBatchPaymentsRoute,
  postBatchPaymentsBatchPaymentIDRoute,
  postBatchPaymentsRoute,
  putBatchPaymentsBatchPaymentIDHistoryRoute,
  putBatchPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const batchPaymentsHandler = app
  .openapi(getBatchPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBatchPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchPaymentsBatchPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchPaymentsBatchPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchPaymentsBatchPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBatchPaymentsBatchPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
