import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteCartCouponDeleteJsonRoute } from '../routes'

export const deleteCartCouponDeleteJsonRouteHandler: RouteHandler<
  typeof deleteCartCouponDeleteJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
