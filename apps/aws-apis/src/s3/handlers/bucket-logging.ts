import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketLoggingRoute, putBucketLoggingRoute } from '../routes'

export const getBucketLoggingRouteHandler: RouteHandler<typeof getBucketLoggingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBucketLoggingRouteHandler: RouteHandler<typeof putBucketLoggingRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
