import type { RouteHandler } from '@hono/zod-openapi'
import type { getActionAttachVpnGatewayRoute, postActionAttachVpnGatewayRoute } from '../routes'

export const getActionAttachVpnGatewayRouteHandler: RouteHandler<
  typeof getActionAttachVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionAttachVpnGatewayRouteHandler: RouteHandler<
  typeof postActionAttachVpnGatewayRoute
> = async (c) => {
  throw new Error('Not implemented')
}
