import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2CheckoutOrdersIdRoute,
  patchV2CheckoutOrdersIdRoute,
  patchV2CheckoutOrdersIdTrackersTrackerIdRoute,
  postV2CheckoutOrdersIdAuthorizeRoute,
  postV2CheckoutOrdersIdCaptureRoute,
  postV2CheckoutOrdersIdConfirmPaymentSourceRoute,
  postV2CheckoutOrdersIdTrackRoute,
  postV2CheckoutOrdersOrderUpdateCallbackRoute,
  postV2CheckoutOrdersRoute,
} from './routes'
import {
  getV2CheckoutOrdersIdRouteHandler,
  patchV2CheckoutOrdersIdRouteHandler,
  patchV2CheckoutOrdersIdTrackersTrackerIdRouteHandler,
  postV2CheckoutOrdersIdAuthorizeRouteHandler,
  postV2CheckoutOrdersIdCaptureRouteHandler,
  postV2CheckoutOrdersIdConfirmPaymentSourceRouteHandler,
  postV2CheckoutOrdersIdTrackRouteHandler,
  postV2CheckoutOrdersOrderUpdateCallbackRouteHandler,
  postV2CheckoutOrdersRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV2CheckoutOrdersRoute, postV2CheckoutOrdersRouteHandler)
  .openapi(getV2CheckoutOrdersIdRoute, getV2CheckoutOrdersIdRouteHandler)
  .openapi(patchV2CheckoutOrdersIdRoute, patchV2CheckoutOrdersIdRouteHandler)
  .openapi(
    postV2CheckoutOrdersIdConfirmPaymentSourceRoute,
    postV2CheckoutOrdersIdConfirmPaymentSourceRouteHandler,
  )
  .openapi(postV2CheckoutOrdersIdAuthorizeRoute, postV2CheckoutOrdersIdAuthorizeRouteHandler)
  .openapi(postV2CheckoutOrdersIdCaptureRoute, postV2CheckoutOrdersIdCaptureRouteHandler)
  .openapi(postV2CheckoutOrdersIdTrackRoute, postV2CheckoutOrdersIdTrackRouteHandler)
  .openapi(
    patchV2CheckoutOrdersIdTrackersTrackerIdRoute,
    patchV2CheckoutOrdersIdTrackersTrackerIdRouteHandler,
  )
  .openapi(
    postV2CheckoutOrdersOrderUpdateCallbackRoute,
    postV2CheckoutOrdersOrderUpdateCallbackRouteHandler,
  )

export default app
