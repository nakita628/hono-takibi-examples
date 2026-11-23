import type { RouteHandler } from '@hono/zod-openapi'
import type { postDescribeJobLogItemsRoute } from '../routes'

export const postDescribeJobLogItemsRouteHandler: RouteHandler<
  typeof postDescribeJobLogItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
