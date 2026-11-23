import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketRequestPaymentRoute, putBucketRequestPaymentRoute } from '../routes'

export const getBucketRequestPaymentRouteHandler: RouteHandler<
  typeof getBucketRequestPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketRequestPaymentRouteHandler: RouteHandler<
  typeof putBucketRequestPaymentRoute
> = async (c) => {
  throw new Error('Not implemented')
}
