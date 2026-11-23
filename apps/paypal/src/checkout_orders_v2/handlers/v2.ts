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
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(postV2CheckoutOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2CheckoutOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CheckoutOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CheckoutOrdersIdConfirmPaymentSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CheckoutOrdersIdAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CheckoutOrdersIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CheckoutOrdersIdTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2CheckoutOrdersIdTrackersTrackerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2CheckoutOrdersOrderUpdateCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
