import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeResourceRoute } from '../routes'

export const postDescribeResourceRouteHandler: RouteHandler<
  typeof postDescribeResourceRoute
> = async (c) => {
  throw new Error('Not implemented')
}
