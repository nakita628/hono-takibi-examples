import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBucketLifecycleDeprecatedRoute,
  putBucketLifecycleDeprecatedRoute,
} from '../routes'

export const getBucketLifecycleDeprecatedRouteHandler: RouteHandler<
  typeof getBucketLifecycleDeprecatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketLifecycleDeprecatedRouteHandler: RouteHandler<
  typeof putBucketLifecycleDeprecatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
