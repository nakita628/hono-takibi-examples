import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionGetVpnTunnelReplacementStatusRoute,
  postActionGetVpnTunnelReplacementStatusRoute,
} from '../routes'

export const getActionGetVpnTunnelReplacementStatusRouteHandler: RouteHandler<
  typeof getActionGetVpnTunnelReplacementStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionGetVpnTunnelReplacementStatusRouteHandler: RouteHandler<
  typeof postActionGetVpnTunnelReplacementStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}
