import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketAclRoute, putBucketAclRoute } from '../routes'

export const getBucketAclRouteHandler: RouteHandler<typeof getBucketAclRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putBucketAclRouteHandler: RouteHandler<typeof putBucketAclRoute> = async (c) => {
  throw new Error('Not implemented')
}
