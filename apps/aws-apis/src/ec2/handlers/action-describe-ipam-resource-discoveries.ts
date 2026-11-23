import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeIpamResourceDiscoveriesRoute,
  postActionDescribeIpamResourceDiscoveriesRoute,
} from '../routes'

export const getActionDescribeIpamResourceDiscoveriesRouteHandler: RouteHandler<
  typeof getActionDescribeIpamResourceDiscoveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIpamResourceDiscoveriesRouteHandler: RouteHandler<
  typeof postActionDescribeIpamResourceDiscoveriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
