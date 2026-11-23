import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeReservedNodesRoute,
  postActionDescribeReservedNodesRoute,
} from '../routes'

export const getActionDescribeReservedNodesRouteHandler: RouteHandler<
  typeof getActionDescribeReservedNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeReservedNodesRouteHandler: RouteHandler<
  typeof postActionDescribeReservedNodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
