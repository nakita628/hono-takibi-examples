import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketObjectLockRoute, putBucketObjectLockRoute } from '../routes'

export const getBucketObjectLockRouteHandler: RouteHandler<
  typeof getBucketObjectLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketObjectLockRouteHandler: RouteHandler<
  typeof putBucketObjectLockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
