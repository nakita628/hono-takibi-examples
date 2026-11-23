import type { RouteHandler } from '@hono/zod-openapi'
import type { putDriverAtRestaurantRoute } from '../routes'

export const putDriverAtRestaurantRouteHandler: RouteHandler<
  typeof putDriverAtRestaurantRoute
> = async (c) => {
  throw new Error('Not implemented')
}
