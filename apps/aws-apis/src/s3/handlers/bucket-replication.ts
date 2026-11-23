import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketReplicationRoute,
  getBucketReplicationRoute,
  putBucketReplicationRoute,
} from '../routes'

export const deleteBucketReplicationRouteHandler: RouteHandler<
  typeof deleteBucketReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketReplicationRouteHandler: RouteHandler<
  typeof getBucketReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketReplicationRouteHandler: RouteHandler<
  typeof putBucketReplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
