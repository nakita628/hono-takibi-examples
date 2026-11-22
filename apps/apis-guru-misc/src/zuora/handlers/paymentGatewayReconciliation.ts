import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1GatewaySettlementPaymentsPaymentIdChargebackRoute,
  postV1GatewaySettlementPaymentsPaymentIdRejectRoute,
  postV1GatewaySettlementPaymentsPaymentIdSettleRoute,
  postV1RefundsRefundIdReconcileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentGatewayReconciliationHandler = app
  .openapi(postV1GatewaySettlementPaymentsPaymentIdChargebackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GatewaySettlementPaymentsPaymentIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GatewaySettlementPaymentsPaymentIdSettleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RefundsRefundIdReconcileRoute, (c) => {
    throw new Error('Not implemented')
  })
