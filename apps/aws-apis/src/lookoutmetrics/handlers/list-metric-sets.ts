import type { RouteHandler } from '@hono/zod-openapi'
import type { postListMetricSetsRoute } from '../routes'

export const postListMetricSetsRouteHandler: RouteHandler<typeof postListMetricSetsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
