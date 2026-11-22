import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRoute,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsRoute,
  getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRoute,
  getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRoute,
  getV2PaymentSessionsPaymentSessionIdCapturesRoute,
  getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRoute,
  getV2PaymentSessionsPaymentSessionIdRefundsRoute,
  getV2PaymentSessionsPaymentSessionIdRoute,
  getV2PaymentSessionsPaymentSessionIdVoidsRoute,
  getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRoute,
  getV2PaymentSessionsRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRoute,
  postV2PaymentSessionsPaymentSessionIdAuthorizationsX402Route,
  postV2PaymentSessionsPaymentSessionIdCancelRoute,
  postV2PaymentSessionsPaymentSessionIdCapturesRoute,
  postV2PaymentSessionsPaymentSessionIdRefundsRoute,
  postV2PaymentSessionsPaymentSessionIdVoidsRoute,
  postV2PaymentSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentSessionsHandler = app
  .openapi(postV2PaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdAuthorizationsWalletOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsX402Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsCoinbaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdAuthorizationsMandateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdAuthorizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdAuthorizationsAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdCapturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdVoidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdVoidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdVoidsVoidIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentSessionsPaymentSessionIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdRefundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentSessionsPaymentSessionIdRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
