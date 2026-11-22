import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PaymentRunsPaymentRunIdRoute,
  getV1PaymentRunsPaymentRunIdDataRoute,
  getV1PaymentRunsPaymentRunIdRoute,
  getV1PaymentRunsPaymentRunIdSummaryRoute,
  getV1PaymentRunsRoute,
  postV1PaymentRunsRoute,
  putV1PaymentRunsPaymentRunIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentRunsHandler = app
  .openapi(getV1PaymentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PaymentRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PaymentRunsPaymentRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsPaymentRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PaymentRunsPaymentRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsPaymentRunIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentRunsPaymentRunIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
