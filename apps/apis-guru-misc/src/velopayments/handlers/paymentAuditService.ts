import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV4PaymentauditFundingsRoute,
  getV4PaymentauditPaymentsPaymentIdRoute,
  getV4PaymentauditPaymentsRoute,
  getV4PaymentauditPayoutsPayoutIdRoute,
  getV4PaymentauditPayoutsRoute,
  getV4PaymentauditPayoutStatisticsRoute,
  getV4PaymentauditTransactionsRoute,
  getV4PaymentsDeltasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentAuditServiceHandler = app
  .openapi(getV4PaymentauditFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPayoutStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentauditTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PaymentsDeltasRoute, (c) => {
    throw new Error('Not implemented')
  })
