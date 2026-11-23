import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeRobotRoute } from '../routes'

export const postDescribeRobotRouteHandler: RouteHandler<typeof postDescribeRobotRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
