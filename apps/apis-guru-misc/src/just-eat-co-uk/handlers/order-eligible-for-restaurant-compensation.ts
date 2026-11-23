import type { RouteHandler } from '@hono/zod-openapi'
import type { postOrderEligibleForRestaurantCompensationRoute } from '../routes'

export const postOrderEligibleForRestaurantCompensationRouteHandler: RouteHandler<
  typeof postOrderEligibleForRestaurantCompensationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
