import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeDBProxyEndpointsRoute,
  postActionDescribeDBProxyEndpointsRoute,
} from '../routes'

export const getActionDescribeDBProxyEndpointsRouteHandler: RouteHandler<
  typeof getActionDescribeDBProxyEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeDBProxyEndpointsRouteHandler: RouteHandler<
  typeof postActionDescribeDBProxyEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
