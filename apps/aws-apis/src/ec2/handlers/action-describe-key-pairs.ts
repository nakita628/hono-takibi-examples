import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeKeyPairsRoute, postActionDescribeKeyPairsRoute } from '../routes'

export const getActionDescribeKeyPairsRouteHandler: RouteHandler<
  typeof getActionDescribeKeyPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeKeyPairsRouteHandler: RouteHandler<
  typeof postActionDescribeKeyPairsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
