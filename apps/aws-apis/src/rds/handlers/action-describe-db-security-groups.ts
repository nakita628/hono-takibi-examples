import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBSecurityGroupsRoute,
  postActionDescribeDBSecurityGroupsRoute,
} from '../routes'

export const getActionDescribeDBSecurityGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeDBSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBSecurityGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeDBSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
