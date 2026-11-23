import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSecurityGroupRulesRoute,
  postActionDescribeSecurityGroupRulesRoute,
} from '../routes'

export const getActionDescribeSecurityGroupRulesRouteHandler: RouteHandler<
  typeof getActionDescribeSecurityGroupRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSecurityGroupRulesRouteHandler: RouteHandler<
  typeof postActionDescribeSecurityGroupRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
