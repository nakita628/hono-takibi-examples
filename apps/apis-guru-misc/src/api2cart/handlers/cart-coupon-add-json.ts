import type { RouteHandler } from '@hono/zod-openapi'
import type { postCartCouponAddJsonRoute } from '../routes'

export const postCartCouponAddJsonRouteHandler: RouteHandler<
  typeof postCartCouponAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
