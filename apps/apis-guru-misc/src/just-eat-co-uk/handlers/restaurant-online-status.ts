import type { RouteHandler } from '@hono/zod-openapi'
import type { putRestaurantOnlineStatusRoute } from '../routes'

export const putRestaurantOnlineStatusRouteHandler: RouteHandler<
  typeof putRestaurantOnlineStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
