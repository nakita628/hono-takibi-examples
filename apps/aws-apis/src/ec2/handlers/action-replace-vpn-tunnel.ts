import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionReplaceVpnTunnelRoute, postActionReplaceVpnTunnelRoute } from '../routes'

export const getActionReplaceVpnTunnelRouteHandler: RouteHandler<
  typeof getActionReplaceVpnTunnelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionReplaceVpnTunnelRouteHandler: RouteHandler<
  typeof postActionReplaceVpnTunnelRoute
> = async (c) => {
  throw new Error('Not implemented')
}
