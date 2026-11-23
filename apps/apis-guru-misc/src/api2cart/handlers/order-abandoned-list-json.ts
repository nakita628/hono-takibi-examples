import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderAbandonedListJsonRoute } from '../routes'

export const getOrderAbandonedListJsonRouteHandler: RouteHandler<
  typeof getOrderAbandonedListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
