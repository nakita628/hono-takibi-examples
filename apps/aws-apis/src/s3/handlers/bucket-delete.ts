import type { RouteHandler } from '@hono/zod-openapi'
import type { postBucketDeleteRoute } from '../routes'

export const postBucketDeleteRouteHandler: RouteHandler<typeof postBucketDeleteRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
