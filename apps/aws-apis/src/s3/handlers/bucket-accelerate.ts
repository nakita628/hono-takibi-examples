import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketAccelerateRoute, putBucketAccelerateRoute } from '../routes'

export const getBucketAccelerateRouteHandler: RouteHandler<
  typeof getBucketAccelerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketAccelerateRouteHandler: RouteHandler<
  typeof putBucketAccelerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}
