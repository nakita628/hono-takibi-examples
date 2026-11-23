import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const postV2CheckoutOrdersRouteHandler: RouteHandler<
  typeof postV2CheckoutOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2CheckoutOrdersIdRouteHandler: RouteHandler<
  typeof getV2CheckoutOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CheckoutOrdersIdRouteHandler: RouteHandler<
  typeof patchV2CheckoutOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CheckoutOrdersIdConfirmPaymentSourceRouteHandler: RouteHandler<
  typeof postV2CheckoutOrdersIdConfirmPaymentSourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CheckoutOrdersIdAuthorizeRouteHandler: RouteHandler<
  typeof postV2CheckoutOrdersIdAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CheckoutOrdersIdCaptureRouteHandler: RouteHandler<
  typeof postV2CheckoutOrdersIdCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CheckoutOrdersIdTrackRouteHandler: RouteHandler<
  typeof postV2CheckoutOrdersIdTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2CheckoutOrdersIdTrackersTrackerIdRouteHandler: RouteHandler<
  typeof patchV2CheckoutOrdersIdTrackersTrackerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2CheckoutOrdersOrderUpdateCallbackRouteHandler: RouteHandler<
  typeof postV2CheckoutOrdersOrderUpdateCallbackRoute
> = async (c) => {
  throw new Error('Not implemented')
}
