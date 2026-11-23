import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketMetricsRoute } from '../routes'

export const getBucketMetricsRouteHandler: RouteHandler<typeof getBucketMetricsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
