import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketNotificationRoute, putBucketNotificationRoute } from '../routes'

export const getBucketNotificationRouteHandler: RouteHandler<
  typeof getBucketNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketNotificationRouteHandler: RouteHandler<
  typeof putBucketNotificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
