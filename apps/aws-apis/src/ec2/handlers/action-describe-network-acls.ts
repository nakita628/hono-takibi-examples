import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeNetworkAclsRoute,
  postActionDescribeNetworkAclsRoute,
} from '../routes'

export const getActionDescribeNetworkAclsRouteHandler: RouteHandler<
  typeof getActionDescribeNetworkAclsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeNetworkAclsRouteHandler: RouteHandler<
  typeof postActionDescribeNetworkAclsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
