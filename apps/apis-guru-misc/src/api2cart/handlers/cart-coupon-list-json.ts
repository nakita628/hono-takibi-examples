import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartCouponListJsonRoute } from '../routes'

export const getCartCouponListJsonRouteHandler: RouteHandler<
  typeof getCartCouponListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
