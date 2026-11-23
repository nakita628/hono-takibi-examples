import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeSecurityGroupsRoute,
  postActionDescribeSecurityGroupsRoute,
} from '../routes'

export const getActionDescribeSecurityGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeSecurityGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
