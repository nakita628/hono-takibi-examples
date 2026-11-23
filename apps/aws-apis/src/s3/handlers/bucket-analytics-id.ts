import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketAnalyticsIdRoute,
  getBucketAnalyticsIdRoute,
  putBucketAnalyticsIdRoute,
} from '../routes'

export const deleteBucketAnalyticsIdRouteHandler: RouteHandler<
  typeof deleteBucketAnalyticsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketAnalyticsIdRouteHandler: RouteHandler<
  typeof getBucketAnalyticsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketAnalyticsIdRouteHandler: RouteHandler<
  typeof putBucketAnalyticsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
