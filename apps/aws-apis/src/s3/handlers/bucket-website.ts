import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteBucketWebsiteRoute,
  getBucketWebsiteRoute,
  putBucketWebsiteRoute,
} from '../routes'

export const deleteBucketWebsiteRouteHandler: RouteHandler<
  typeof deleteBucketWebsiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getBucketWebsiteRouteHandler: RouteHandler<typeof getBucketWebsiteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putBucketWebsiteRouteHandler: RouteHandler<typeof putBucketWebsiteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
