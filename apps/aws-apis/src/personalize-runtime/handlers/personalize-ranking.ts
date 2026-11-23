import type { RouteHandler } from '@hono/zod-openapi'
import type { postPersonalizeRankingRoute } from '../routes'

export const postPersonalizeRankingRouteHandler: RouteHandler<
  typeof postPersonalizeRankingRoute
> = async (c) => {
  throw new Error('Not implemented')
}
