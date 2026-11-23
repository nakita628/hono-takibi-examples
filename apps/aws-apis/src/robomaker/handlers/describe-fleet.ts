import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeFleetRoute } from '../routes'

export const postDescribeFleetRouteHandler: RouteHandler<typeof postDescribeFleetRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
