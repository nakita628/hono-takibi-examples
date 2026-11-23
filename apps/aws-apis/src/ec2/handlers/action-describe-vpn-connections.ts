import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeVpnConnectionsRoute,
  postActionDescribeVpnConnectionsRoute,
} from '../routes'

export const getActionDescribeVpnConnectionsRouteHandler: RouteHandler<
  typeof getActionDescribeVpnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeVpnConnectionsRouteHandler: RouteHandler<
  typeof postActionDescribeVpnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
