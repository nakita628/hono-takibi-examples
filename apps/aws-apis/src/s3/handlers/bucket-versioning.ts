import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketVersioningRoute, putBucketVersioningRoute } from '../routes'

export const getBucketVersioningRouteHandler: RouteHandler<
  typeof getBucketVersioningRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketVersioningRouteHandler: RouteHandler<
  typeof putBucketVersioningRoute
> = async (c) => {
  throw new Error('Not implemented')
}
