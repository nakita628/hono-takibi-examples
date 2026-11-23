import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribePublicIpv4PoolsRoute,
  postActionDescribePublicIpv4PoolsRoute,
} from '../routes'

export const getActionDescribePublicIpv4PoolsRouteHandler: RouteHandler<
  typeof getActionDescribePublicIpv4PoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribePublicIpv4PoolsRouteHandler: RouteHandler<
  typeof postActionDescribePublicIpv4PoolsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
