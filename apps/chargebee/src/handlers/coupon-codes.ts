import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCouponCodesCouponCodeCodeRoute,
  getCouponCodesRoute,
  postCouponCodesCouponCodeCodeArchiveRoute,
} from '../routes'

export const getCouponCodesRouteHandler: RouteHandler<typeof getCouponCodesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponCodesCouponCodeCodeRouteHandler: RouteHandler<
  typeof getCouponCodesCouponCodeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponCodesCouponCodeCodeArchiveRouteHandler: RouteHandler<
  typeof postCouponCodesCouponCodeCodeArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}
