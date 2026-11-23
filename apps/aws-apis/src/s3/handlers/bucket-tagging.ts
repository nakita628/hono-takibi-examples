import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketTaggingRoute,
  getBucketTaggingRoute,
  putBucketTaggingRoute,
} from '../routes'

export const deleteBucketTaggingRouteHandler: RouteHandler<
  typeof deleteBucketTaggingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketTaggingRouteHandler: RouteHandler<typeof getBucketTaggingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBucketTaggingRouteHandler: RouteHandler<typeof putBucketTaggingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
