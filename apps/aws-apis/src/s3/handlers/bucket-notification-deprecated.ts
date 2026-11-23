import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getBucketNotificationDeprecatedRoute,
  putBucketNotificationDeprecatedRoute,
} from '../routes'

export const getBucketNotificationDeprecatedRouteHandler: RouteHandler<
  typeof getBucketNotificationDeprecatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketNotificationDeprecatedRouteHandler: RouteHandler<
  typeof putBucketNotificationDeprecatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}
