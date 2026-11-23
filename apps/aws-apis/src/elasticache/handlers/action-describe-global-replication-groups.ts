import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeGlobalReplicationGroupsRoute,
  postActionDescribeGlobalReplicationGroupsRoute,
} from '../routes'

export const getActionDescribeGlobalReplicationGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeGlobalReplicationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeGlobalReplicationGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeGlobalReplicationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
