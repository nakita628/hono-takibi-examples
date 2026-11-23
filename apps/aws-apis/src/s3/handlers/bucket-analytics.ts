import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketAnalyticsRoute } from '../routes'

export const getBucketAnalyticsRouteHandler: RouteHandler<typeof getBucketAnalyticsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
