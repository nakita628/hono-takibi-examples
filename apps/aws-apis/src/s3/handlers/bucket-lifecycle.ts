import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketLifecycleRoute,
  getBucketLifecycleRoute,
  putBucketLifecycleRoute,
} from '../routes'

export const deleteBucketLifecycleRouteHandler: RouteHandler<
  typeof deleteBucketLifecycleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketLifecycleRouteHandler: RouteHandler<typeof getBucketLifecycleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBucketLifecycleRouteHandler: RouteHandler<typeof putBucketLifecycleRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
