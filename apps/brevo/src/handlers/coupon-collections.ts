import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getCouponCollectionsIdRoute,
  getCouponCollectionsRoute,
  patchCouponCollectionsIdRoute,
  postCouponCollectionsRoute,
} from '../routes'

export const getCouponCollectionsRouteHandler: RouteHandler<
  typeof getCouponCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postCouponCollectionsRouteHandler: RouteHandler<
  typeof postCouponCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getCouponCollectionsIdRouteHandler: RouteHandler<
  typeof getCouponCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchCouponCollectionsIdRouteHandler: RouteHandler<
  typeof patchCouponCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
