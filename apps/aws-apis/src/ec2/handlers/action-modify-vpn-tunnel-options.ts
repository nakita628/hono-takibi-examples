import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionModifyVpnTunnelOptionsRoute,
  postActionModifyVpnTunnelOptionsRoute,
} from '../routes'

export const getActionModifyVpnTunnelOptionsRouteHandler: RouteHandler<
  typeof getActionModifyVpnTunnelOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionModifyVpnTunnelOptionsRouteHandler: RouteHandler<
  typeof postActionModifyVpnTunnelOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
