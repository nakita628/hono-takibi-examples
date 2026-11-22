import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiOmsPvtOrdersOrderIdPaymentTransactionRoute,
  postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentHandler = app
  .openapi(getApiOmsPvtOrdersOrderIdPaymentTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOmsPvtOrdersOrderIdPaymentsPaymentIdPaymentNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
