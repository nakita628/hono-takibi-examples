import type { RouteHandler } from '@hono/zod-openapi'
import type { getOrderStatusListJsonRoute } from '../routes'

export const getOrderStatusListJsonRouteHandler: RouteHandler<
  typeof getOrderStatusListJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
