import type { RouteHandler } from '@hono/zod-openapi'
import type { getTimelineBucketRoute, getTimelineBucketsRoute } from '../routes'

export const getTimelineBucketRouteHandler: RouteHandler<typeof getTimelineBucketRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getTimelineBucketsRouteHandler: RouteHandler<typeof getTimelineBucketsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
