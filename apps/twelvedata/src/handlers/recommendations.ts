import type { RouteHandler } from '@hono/zod-openapi'
import type { getRecommendationsRoute } from '../routes'

export const getRecommendationsRouteHandler: RouteHandler<typeof getRecommendationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
