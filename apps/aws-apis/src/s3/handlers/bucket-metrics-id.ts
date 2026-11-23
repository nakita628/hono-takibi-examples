import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketMetricsIdRoute,
  getBucketMetricsIdRoute,
  putBucketMetricsIdRoute,
} from '../routes'

export const deleteBucketMetricsIdRouteHandler: RouteHandler<
  typeof deleteBucketMetricsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketMetricsIdRouteHandler: RouteHandler<typeof getBucketMetricsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBucketMetricsIdRouteHandler: RouteHandler<typeof putBucketMetricsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
