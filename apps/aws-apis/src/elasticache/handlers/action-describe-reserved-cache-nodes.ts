import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedCacheNodesRoute,
  postActionDescribeReservedCacheNodesRoute,
} from '../routes'

export const getActionDescribeReservedCacheNodesRouteHandler: RouteHandler<
  typeof getActionDescribeReservedCacheNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedCacheNodesRouteHandler: RouteHandler<
  typeof postActionDescribeReservedCacheNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
