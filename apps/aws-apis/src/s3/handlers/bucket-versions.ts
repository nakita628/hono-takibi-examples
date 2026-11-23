import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketVersionsRoute } from '../routes'

export const getBucketVersionsRouteHandler: RouteHandler<typeof getBucketVersionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
