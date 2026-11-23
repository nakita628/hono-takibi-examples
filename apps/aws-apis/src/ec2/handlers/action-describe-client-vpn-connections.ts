import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionDescribeClientVpnConnectionsRoute,
  postActionDescribeClientVpnConnectionsRoute,
} from '../routes'

export const getActionDescribeClientVpnConnectionsRouteHandler: RouteHandler<
  typeof getActionDescribeClientVpnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionDescribeClientVpnConnectionsRouteHandler: RouteHandler<
  typeof postActionDescribeClientVpnConnectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
