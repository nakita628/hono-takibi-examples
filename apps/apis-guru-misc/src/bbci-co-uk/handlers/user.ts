import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getUserPurchasesRoute,
  getUserRecommendationsRoute,
  getUserWatchingRoute,
} from '../routes'

export const getUserPurchasesRouteHandler: RouteHandler<typeof getUserPurchasesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getUserRecommendationsRouteHandler: RouteHandler<
  typeof getUserRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getUserWatchingRouteHandler: RouteHandler<typeof getUserWatchingRoute> = async (c) => {
  throw new Error('Not implemented')
}
