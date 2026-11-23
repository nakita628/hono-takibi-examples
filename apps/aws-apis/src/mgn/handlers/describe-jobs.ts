import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeJobsRoute } from '../routes'

export const postDescribeJobsRouteHandler: RouteHandler<typeof postDescribeJobsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
