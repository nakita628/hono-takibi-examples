import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2ChargebacksRoute,
  getV2PaymentsPaymentIdChargebacksChargebackIdRoute,
  getV2PaymentsPaymentIdChargebacksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chargebacksAPIHandler = app
  .openapi(getV2PaymentsPaymentIdChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsPaymentIdChargebacksChargebackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2ChargebacksRoute, (c) => {
    throw new Error('Not implemented')
  })
