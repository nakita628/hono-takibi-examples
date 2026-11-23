import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeStaleSecurityGroupsRoute,
  postActionDescribeStaleSecurityGroupsRoute,
} from '../routes'

export const getActionDescribeStaleSecurityGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeStaleSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeStaleSecurityGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeStaleSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
