import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBClusterEndpointsRoute,
  postActionDescribeDBClusterEndpointsRoute,
} from '../routes'

export const getActionDescribeDBClusterEndpointsRouteHandler: RouteHandler<
  typeof getActionDescribeDBClusterEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBClusterEndpointsRouteHandler: RouteHandler<
  typeof postActionDescribeDBClusterEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
