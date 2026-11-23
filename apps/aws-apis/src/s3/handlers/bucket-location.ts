import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketLocationRoute } from '../routes'

export const getBucketLocationRouteHandler: RouteHandler<typeof getBucketLocationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
