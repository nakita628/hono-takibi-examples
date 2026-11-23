import type { RouteHandler } from '@hono/zod-openapi'
import type { postRecommendationsRoute } from '../routes'

export const postRecommendationsRouteHandler: RouteHandler<
  typeof postRecommendationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
