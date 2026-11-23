import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderRefundAddJsonRoute } from '../routes'

export const postOrderRefundAddJsonRouteHandler: RouteHandler<
  typeof postOrderRefundAddJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
