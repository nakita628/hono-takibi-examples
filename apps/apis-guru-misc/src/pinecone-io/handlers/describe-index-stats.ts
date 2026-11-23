import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeIndexStatsRoute } from '../routes'

export const postDescribeIndexStatsRouteHandler: RouteHandler<
  typeof postDescribeIndexStatsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
