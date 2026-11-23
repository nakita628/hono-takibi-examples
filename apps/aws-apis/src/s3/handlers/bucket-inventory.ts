import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketInventoryRoute } from '../routes'

export const getBucketInventoryRouteHandler: RouteHandler<typeof getBucketInventoryRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
