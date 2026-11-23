import type { RouteHandler } from '@hono/zod-openapi'
import type { getBucketIntelligentTieringRoute } from '../routes'

export const getBucketIntelligentTieringRouteHandler: RouteHandler<
  typeof getBucketIntelligentTieringRoute
> = async (c) => {
  throw new Error('Not implemented')
}
