import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCouponsCouponIdRoute,
  getCouponsRoute,
  postCouponsCopyRoute,
  postCouponsCouponIdDeleteRoute,
  postCouponsCouponIdUnarchiveRoute,
  postCouponsCouponIdUpdateForItemsRoute,
  postCouponsCreateForItemsRoute,
} from '../routes'

export const getCouponsRouteHandler: RouteHandler<typeof getCouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsCouponIdUpdateForItemsRouteHandler: RouteHandler<
  typeof postCouponsCouponIdUpdateForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsCouponIdUnarchiveRouteHandler: RouteHandler<
  typeof postCouponsCouponIdUnarchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsCouponIdDeleteRouteHandler: RouteHandler<
  typeof postCouponsCouponIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponsCopyRouteHandler: RouteHandler<typeof postCouponsCopyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponsCouponIdRouteHandler: RouteHandler<typeof getCouponsCouponIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postCouponsCreateForItemsRouteHandler: RouteHandler<
  typeof postCouponsCreateForItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
