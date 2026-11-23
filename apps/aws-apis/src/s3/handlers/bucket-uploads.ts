import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketUploadsRoute } from '../routes'

export const getBucketUploadsRouteHandler: RouteHandler<typeof getBucketUploadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
