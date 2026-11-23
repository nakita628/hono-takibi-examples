import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionDescribeIpamScopesRoute, postActionDescribeIpamScopesRoute } from '../routes'

export const getActionDescribeIpamScopesRouteHandler: RouteHandler<
  typeof getActionDescribeIpamScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeIpamScopesRouteHandler: RouteHandler<
  typeof postActionDescribeIpamScopesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
