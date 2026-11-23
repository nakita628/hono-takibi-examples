import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketOwnershipControlsRoute,
  getBucketOwnershipControlsRoute,
  putBucketOwnershipControlsRoute,
} from '../routes'

export const deleteBucketOwnershipControlsRouteHandler: RouteHandler<
  typeof deleteBucketOwnershipControlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketOwnershipControlsRouteHandler: RouteHandler<
  typeof getBucketOwnershipControlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketOwnershipControlsRouteHandler: RouteHandler<
  typeof putBucketOwnershipControlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
