import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterSubnetGroupsRoute,
  postActionDescribeClusterSubnetGroupsRoute,
} from '../routes'

export const getActionDescribeClusterSubnetGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeClusterSubnetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterSubnetGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeClusterSubnetGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
