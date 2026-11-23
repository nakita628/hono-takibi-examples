import type { RouteHandler } from '@hono/zod-openapi'
import type { putRestaurantOfflineStatusRoute } from '../routes'

export const putRestaurantOfflineStatusRouteHandler: RouteHandler<
  typeof putRestaurantOfflineStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
