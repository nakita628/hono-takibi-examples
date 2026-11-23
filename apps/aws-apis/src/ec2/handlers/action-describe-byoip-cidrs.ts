import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeByoipCidrsRoute, postActionDescribeByoipCidrsRoute } from '../routes'

export const getActionDescribeByoipCidrsRouteHandler: RouteHandler<
  typeof getActionDescribeByoipCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeByoipCidrsRouteHandler: RouteHandler<
  typeof postActionDescribeByoipCidrsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
