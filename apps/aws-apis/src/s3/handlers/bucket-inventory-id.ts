import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketInventoryIdRoute,
  getBucketInventoryIdRoute,
  putBucketInventoryIdRoute,
} from '../routes'

export const deleteBucketInventoryIdRouteHandler: RouteHandler<
  typeof deleteBucketInventoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketInventoryIdRouteHandler: RouteHandler<
  typeof getBucketInventoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketInventoryIdRouteHandler: RouteHandler<
  typeof putBucketInventoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
