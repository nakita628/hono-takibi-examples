import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCouponSetsCouponSetIdRoute,
  getCouponSetsRoute,
  postCouponSetsCouponSetIdAddCouponCodesRoute,
  postCouponSetsCouponSetIdDeleteRoute,
  postCouponSetsCouponSetIdDeleteUnusedCouponCodesRoute,
  postCouponSetsCouponSetIdUpdateRoute,
  postCouponSetsRoute,
} from '../routes'

export const getCouponSetsRouteHandler: RouteHandler<typeof getCouponSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponSetsRouteHandler: RouteHandler<typeof postCouponSetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponSetsCouponSetIdUpdateRouteHandler: RouteHandler<
  typeof postCouponSetsCouponSetIdUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponSetsCouponSetIdRouteHandler: RouteHandler<
  typeof getCouponSetsCouponSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponSetsCouponSetIdAddCouponCodesRouteHandler: RouteHandler<
  typeof postCouponSetsCouponSetIdAddCouponCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponSetsCouponSetIdDeleteUnusedCouponCodesRouteHandler: RouteHandler<
  typeof postCouponSetsCouponSetIdDeleteUnusedCouponCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponSetsCouponSetIdDeleteRouteHandler: RouteHandler<
  typeof postCouponSetsCouponSetIdDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}
