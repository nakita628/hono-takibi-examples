import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderCancelledRoute } from '../routes'

export const postOrderCancelledRouteHandler: RouteHandler<typeof postOrderCancelledRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
