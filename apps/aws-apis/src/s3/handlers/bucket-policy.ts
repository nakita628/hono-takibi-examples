import type { RouteHandler } from '@hono/zod-openapi'
import type { deleteBucketPolicyRoute, getBucketPolicyRoute, putBucketPolicyRoute } from '../routes'

export const deleteBucketPolicyRouteHandler: RouteHandler<typeof deleteBucketPolicyRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getBucketPolicyRouteHandler: RouteHandler<typeof getBucketPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketPolicyRouteHandler: RouteHandler<typeof putBucketPolicyRoute> = async (c) => {
  throw new Error('Not implemented')
}
