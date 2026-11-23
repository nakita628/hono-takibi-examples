import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketPublicAccessBlockRoute,
  getBucketPublicAccessBlockRoute,
  putBucketPublicAccessBlockRoute,
} from '../routes'

export const deleteBucketPublicAccessBlockRouteHandler: RouteHandler<
  typeof deleteBucketPublicAccessBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketPublicAccessBlockRouteHandler: RouteHandler<
  typeof getBucketPublicAccessBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketPublicAccessBlockRouteHandler: RouteHandler<
  typeof putBucketPublicAccessBlockRoute
> = async (c) => {
  throw new Error('Not implemented')
}
