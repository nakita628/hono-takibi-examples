import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeAnomalyDetectorRoute } from '../routes'

export const postDescribeAnomalyDetectorRouteHandler: RouteHandler<
  typeof postDescribeAnomalyDetectorRoute
> = async (c) => {
  throw new Error('Not implemented')
}
