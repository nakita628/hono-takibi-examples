import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1BillingPlansIdRoute,
  getV1BillingPlansRoute,
  getV1BillingSubscriptionsIdRoute,
  getV1BillingSubscriptionsIdTransactionsRoute,
  patchV1BillingPlansIdRoute,
  patchV1BillingSubscriptionsIdRoute,
  postV1BillingPlansIdActivateRoute,
  postV1BillingPlansIdDeactivateRoute,
  postV1BillingPlansIdUpdatePricingSchemesRoute,
  postV1BillingPlansRoute,
  postV1BillingSubscriptionsIdActivateRoute,
  postV1BillingSubscriptionsIdCancelRoute,
  postV1BillingSubscriptionsIdCaptureRoute,
  postV1BillingSubscriptionsIdReviseRoute,
  postV1BillingSubscriptionsIdSuspendRoute,
  postV1BillingSubscriptionsRoute,
} from './routes'
import {
  getV1BillingPlansIdRouteHandler,
  getV1BillingPlansRouteHandler,
  getV1BillingSubscriptionsIdRouteHandler,
  getV1BillingSubscriptionsIdTransactionsRouteHandler,
  patchV1BillingPlansIdRouteHandler,
  patchV1BillingSubscriptionsIdRouteHandler,
  postV1BillingPlansIdActivateRouteHandler,
  postV1BillingPlansIdDeactivateRouteHandler,
  postV1BillingPlansIdUpdatePricingSchemesRouteHandler,
  postV1BillingPlansRouteHandler,
  postV1BillingSubscriptionsIdActivateRouteHandler,
  postV1BillingSubscriptionsIdCancelRouteHandler,
  postV1BillingSubscriptionsIdCaptureRouteHandler,
  postV1BillingSubscriptionsIdReviseRouteHandler,
  postV1BillingSubscriptionsIdSuspendRouteHandler,
  postV1BillingSubscriptionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1BillingPlansRoute, postV1BillingPlansRouteHandler)
  .openapi(getV1BillingPlansRoute, getV1BillingPlansRouteHandler)
  .openapi(getV1BillingPlansIdRoute, getV1BillingPlansIdRouteHandler)
  .openapi(patchV1BillingPlansIdRoute, patchV1BillingPlansIdRouteHandler)
  .openapi(postV1BillingPlansIdActivateRoute, postV1BillingPlansIdActivateRouteHandler)
  .openapi(postV1BillingPlansIdDeactivateRoute, postV1BillingPlansIdDeactivateRouteHandler)
  .openapi(
    postV1BillingPlansIdUpdatePricingSchemesRoute,
    postV1BillingPlansIdUpdatePricingSchemesRouteHandler,
  )
  .openapi(postV1BillingSubscriptionsRoute, postV1BillingSubscriptionsRouteHandler)
  .openapi(getV1BillingSubscriptionsIdRoute, getV1BillingSubscriptionsIdRouteHandler)
  .openapi(patchV1BillingSubscriptionsIdRoute, patchV1BillingSubscriptionsIdRouteHandler)
  .openapi(postV1BillingSubscriptionsIdReviseRoute, postV1BillingSubscriptionsIdReviseRouteHandler)
  .openapi(
    postV1BillingSubscriptionsIdSuspendRoute,
    postV1BillingSubscriptionsIdSuspendRouteHandler,
  )
  .openapi(postV1BillingSubscriptionsIdCancelRoute, postV1BillingSubscriptionsIdCancelRouteHandler)
  .openapi(
    postV1BillingSubscriptionsIdActivateRoute,
    postV1BillingSubscriptionsIdActivateRouteHandler,
  )
  .openapi(
    postV1BillingSubscriptionsIdCaptureRoute,
    postV1BillingSubscriptionsIdCaptureRouteHandler,
  )
  .openapi(
    getV1BillingSubscriptionsIdTransactionsRoute,
    getV1BillingSubscriptionsIdTransactionsRouteHandler,
  )

export default app
