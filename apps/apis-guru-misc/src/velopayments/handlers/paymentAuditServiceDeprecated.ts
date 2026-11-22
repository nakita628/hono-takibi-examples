import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DeltasPaymentsRoute,
  getV1PaymentauditFundingsRoute,
  getV1PaymentauditPayoutStatisticsRoute,
  getV3PaymentauditPaymentsPaymentIdRoute,
  getV3PaymentauditPaymentsRoute,
  getV3PaymentauditPayoutsPayoutIdRoute,
  getV3PaymentauditPayoutsRoute,
  getV3PaymentauditTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentAuditServiceDeprecatedHandler = app
  .openapi(getV1DeltasPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentauditFundingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PaymentauditPayoutStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPaymentsPaymentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPayoutsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditPayoutsPayoutIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PaymentauditTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
