import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2PaymentsAuthorizationsAuthorizationIdRoute,
  getV2PaymentsCapturesCaptureIdRoute,
  getV2PaymentsRefundsRefundIdRoute,
  postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute,
  postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute,
  postV2PaymentsAuthorizationsAuthorizationIdVoidRoute,
  postV2PaymentsCapturesCaptureIdRefundRoute,
  postV2PaymentsFindEligibleMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2PaymentsAuthorizationsAuthorizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsAuthorizationsAuthorizationIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsCapturesCaptureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsCapturesCaptureIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PaymentsFindEligibleMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentsRefundsRefundIdRoute, (c) => {
    throw new Error('Not implemented')
  })
