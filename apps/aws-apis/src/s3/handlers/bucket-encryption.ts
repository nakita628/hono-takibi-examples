import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketEncryptionRoute,
  getBucketEncryptionRoute,
  putBucketEncryptionRoute,
} from '../routes'

export const deleteBucketEncryptionRouteHandler: RouteHandler<
  typeof deleteBucketEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketEncryptionRouteHandler: RouteHandler<
  typeof getBucketEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketEncryptionRouteHandler: RouteHandler<
  typeof putBucketEncryptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}
