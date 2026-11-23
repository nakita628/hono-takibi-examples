import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClusterVersionsRoute,
  postActionDescribeClusterVersionsRoute,
} from '../routes'

export const getActionDescribeClusterVersionsRouteHandler: RouteHandler<
  typeof getActionDescribeClusterVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClusterVersionsRouteHandler: RouteHandler<
  typeof postActionDescribeClusterVersionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
