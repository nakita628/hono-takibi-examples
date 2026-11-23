import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeRulesRoute, postActionDescribeRulesRoute } from '../routes'

export const getActionDescribeRulesRouteHandler: RouteHandler<
  typeof getActionDescribeRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeRulesRouteHandler: RouteHandler<
  typeof postActionDescribeRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
