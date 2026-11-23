import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCouponsRedemptionsIdRoute,
  getCouponsRedemptionsRoute,
  postCouponsRedemptionsIdCancelRoute,
  postCouponsRedemptionsRoute,
} from '../routes'

export const getCouponsRedemptionsRouteHandler: RouteHandler<
  typeof getCouponsRedemptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsRedemptionsRouteHandler: RouteHandler<
  typeof postCouponsRedemptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsRedemptionsIdRouteHandler: RouteHandler<
  typeof getCouponsRedemptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsRedemptionsIdCancelRouteHandler: RouteHandler<
  typeof postCouponsRedemptionsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
