import type { RouteHandler } from '@hono/zod-openapi'
import type { postS3BucketsRoute } from '../routes'

export const postS3BucketsRouteHandler: RouteHandler<typeof postS3BucketsRoute> = async (c) => {
  throw new Error('Not implemented')
}
