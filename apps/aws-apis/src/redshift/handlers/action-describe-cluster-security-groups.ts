import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterSecurityGroupsRoute,
  postActionDescribeClusterSecurityGroupsRoute,
} from '../routes'

export const getActionDescribeClusterSecurityGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeClusterSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterSecurityGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeClusterSecurityGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
