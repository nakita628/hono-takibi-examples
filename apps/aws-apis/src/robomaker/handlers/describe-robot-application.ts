import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeRobotApplicationRoute } from '../routes'

export const postDescribeRobotApplicationRouteHandler: RouteHandler<
  typeof postDescribeRobotApplicationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
