import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeSourceServersRoute } from '../routes'

export const postDescribeSourceServersRouteHandler: RouteHandler<
  typeof postDescribeSourceServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}
