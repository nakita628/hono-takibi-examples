import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentsPaymentIDHistoryRoute,
  getPaymentsPaymentIDRoute,
  getPaymentsRoute,
  postPaymentsPaymentIDRoute,
  postPaymentsRoute,
  putPaymentsPaymentIDHistoryRoute,
  putPaymentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(getPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsPaymentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentsPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentsPaymentIDHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
