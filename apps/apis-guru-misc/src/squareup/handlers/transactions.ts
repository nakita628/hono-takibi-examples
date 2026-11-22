import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2LocationsLocationIdRefundsRoute,
  getV2LocationsLocationIdTransactionsRoute,
  getV2LocationsLocationIdTransactionsTransactionIdRoute,
  postV2LocationsLocationIdTransactionsRoute,
  postV2LocationsLocationIdTransactionsTransactionIdCaptureRoute,
  postV2LocationsLocationIdTransactionsTransactionIdRefundRoute,
  postV2LocationsLocationIdTransactionsTransactionIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getV2LocationsLocationIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2LocationsLocationIdTransactionsTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsTransactionIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsTransactionIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2LocationsLocationIdTransactionsTransactionIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
