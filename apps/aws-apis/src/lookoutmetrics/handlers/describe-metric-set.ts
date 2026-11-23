import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeMetricSetRoute } from '../routes'

export const postDescribeMetricSetRouteHandler: RouteHandler<
  typeof postDescribeMetricSetRoute
> = async (c) => {
  throw new Error('Not implemented')
}
