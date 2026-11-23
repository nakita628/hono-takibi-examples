import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterBacktracksRoute,
  postActionDescribeDBClusterBacktracksRoute,
} from '../routes'

export const getActionDescribeDBClusterBacktracksRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterBacktracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterBacktracksRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterBacktracksRoute
> = async (c) => {
  throw new Error('Not implemented')
}
