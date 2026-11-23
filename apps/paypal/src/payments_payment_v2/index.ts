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
} from './routes'
import {
  getV2PaymentsAuthorizationsAuthorizationIdRouteHandler,
  getV2PaymentsCapturesCaptureIdRouteHandler,
  getV2PaymentsRefundsRefundIdRouteHandler,
  postV2PaymentsAuthorizationsAuthorizationIdCaptureRouteHandler,
  postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRouteHandler,
  postV2PaymentsAuthorizationsAuthorizationIdVoidRouteHandler,
  postV2PaymentsCapturesCaptureIdRefundRouteHandler,
  postV2PaymentsFindEligibleMethodsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getV2PaymentsAuthorizationsAuthorizationIdRoute,
    getV2PaymentsAuthorizationsAuthorizationIdRouteHandler,
  )
  .openapi(
    postV2PaymentsAuthorizationsAuthorizationIdCaptureRoute,
    postV2PaymentsAuthorizationsAuthorizationIdCaptureRouteHandler,
  )
  .openapi(
    postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRoute,
    postV2PaymentsAuthorizationsAuthorizationIdReauthorizeRouteHandler,
  )
  .openapi(
    postV2PaymentsAuthorizationsAuthorizationIdVoidRoute,
    postV2PaymentsAuthorizationsAuthorizationIdVoidRouteHandler,
  )
  .openapi(getV2PaymentsCapturesCaptureIdRoute, getV2PaymentsCapturesCaptureIdRouteHandler)
  .openapi(
    postV2PaymentsCapturesCaptureIdRefundRoute,
    postV2PaymentsCapturesCaptureIdRefundRouteHandler,
  )
  .openapi(postV2PaymentsFindEligibleMethodsRoute, postV2PaymentsFindEligibleMethodsRouteHandler)
  .openapi(getV2PaymentsRefundsRefundIdRoute, getV2PaymentsRefundsRefundIdRouteHandler)

export default app
