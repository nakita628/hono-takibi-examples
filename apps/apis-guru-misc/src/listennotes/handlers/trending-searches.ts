import type { RouteHandler } from '@hono/zod-openapi'
import type { getTrendingSearchesRoute } from '../routes'

export const getTrendingSearchesRouteHandler: RouteHandler<
  typeof getTrendingSearchesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
