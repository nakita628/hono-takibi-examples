import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteBucketCorsRoute, getBucketCorsRoute, putBucketCorsRoute } from '../routes'

export const deleteBucketCorsRouteHandler: RouteHandler<typeof deleteBucketCorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBucketCorsRouteHandler: RouteHandler<typeof getBucketCorsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketCorsRouteHandler: RouteHandler<typeof putBucketCorsRoute> = async (c) => {
  throw new Error('Not implemented')
}
