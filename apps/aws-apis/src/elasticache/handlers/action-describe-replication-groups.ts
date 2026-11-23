import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReplicationGroupsRoute,
  postActionDescribeReplicationGroupsRoute,
} from '../routes'

export const getActionDescribeReplicationGroupsRouteHandler: RouteHandler<
  typeof getActionDescribeReplicationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReplicationGroupsRouteHandler: RouteHandler<
  typeof postActionDescribeReplicationGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
