import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderListJsonRoute } from '../routes'

export const getOrderListJsonRouteHandler: RouteHandler<typeof getOrderListJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
