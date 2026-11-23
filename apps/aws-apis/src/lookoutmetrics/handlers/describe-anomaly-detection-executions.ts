import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeAnomalyDetectionExecutionsRoute } from '../routes'

export const postDescribeAnomalyDetectionExecutionsRouteHandler: RouteHandler<
  typeof postDescribeAnomalyDetectionExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
