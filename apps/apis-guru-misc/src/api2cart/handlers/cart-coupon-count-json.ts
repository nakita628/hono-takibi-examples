import type { RouteHandler } from '@hono/zod-openapi'
import type { getCartCouponCountJsonRoute } from '../routes'

export const getCartCouponCountJsonRouteHandler: RouteHandler<
  typeof getCartCouponCountJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
